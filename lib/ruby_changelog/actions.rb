# frozen_string_literal: true

module RubyChangelog

  CHANGELOG_SOURCE = 'data/ruby_versions.json'.freeze
  CVE_SOURCE       = 'data/ruby_cve.json'.freeze

  OUTPUT_README_MD = 'README.MD'.freeze

  TEMPLATE_BASE                    = 'lib/templates'.freeze
  TEMPLATE_MD                      = "#{TEMPLATE_BASE}/README.md.erb".freeze
  TEMPLATE_DOCS_VERSIONS_LATEST_MD = "#{TEMPLATE_BASE}/docs/versions/latest.md.erb".freeze
  TEMPLATE_DOCS_VERSIONS_ALL_MD    = "#{TEMPLATE_BASE}/docs/versions/all.md.erb".freeze
  TEMPLATE_DOCS_TIMELINE_JS        = "#{TEMPLATE_BASE}/docs/charts/timeline.js.erb".freeze
  TEMPLATE_DOCS_CHARTS_TIMELINE_MD = "#{TEMPLATE_BASE}/docs/charts/timeline.md.erb".freeze

  DOCS_BASE                        = 'docs'.freeze
  DOCS_VERSIONS_LATEST_MD          = "#{DOCS_BASE}/docs/versions-latest.md".freeze
  DOCS_VERSIONS_ALL_MD             = "#{DOCS_BASE}/docs/versions-all.md".freeze
  DOCS_CHARTS_TIMELINE_MD          = "#{DOCS_BASE}/docs/timeline.md".freeze
  DOCS_CHARTS_TIMELINE_JS          = "#{DOCS_BASE}/docs/javascripts/charts-timeline.js".freeze

  class Actions
    def generate_readme
      save_file(
        OUTPUT_README_MD,
        generate_file(TEMPLATE_MD, ruby_versions: ruby_versions_data)
      )
    end
  
    def generate_docs
      save_file(
        DOCS_VERSIONS_LATEST_MD,
        generate_file(TEMPLATE_DOCS_VERSIONS_LATEST_MD, ruby_versions: ruby_versions_data)
      )
  
      save_file(
        DOCS_VERSIONS_ALL_MD,
        generate_file(TEMPLATE_DOCS_VERSIONS_ALL_MD, ruby_versions: ruby_versions_data, ruby_cve: ruby_cve_data)
      )
  
      save_file(
        DOCS_CHARTS_TIMELINE_JS,
        generate_file(TEMPLATE_DOCS_TIMELINE_JS, ruby_versions: ruby_versions_data, ruby_cve: ruby_cve_data)
      )

      save_file(
        DOCS_CHARTS_TIMELINE_MD,
        generate_file(TEMPLATE_DOCS_CHARTS_TIMELINE_MD, ruby_versions: ruby_versions_data)
      )
    end

    def fetch_ruby_changes
      puts "\nNot implemented yet :)"
      puts "----------------------"
      puts "Manual steps:"
      puts "1. Compare https://www.ruby-lang.org/en/downloads/releases/ page with ./data/ruby_versions.json"
      puts "2. Update if needed.\n\n"
    end
  
    def fetch_cve_history
      cve_results = RubyChangelog::CveData.new.fetch
  
      save_json_file_from_hash CVE_SOURCE, cve_results
    end
  
    private
  
    def ruby_versions_data
      @ruby_versions_data ||= json_to_hash(changelog_as_json)['ruby_versions']
    end
  
    def ruby_cve_data
      @ruby_cve_data ||= json_to_hash(cve_as_json)
    end
  
    def generate_file(template_path, template_params)
      erb_file = read_file(template_path)
      erb_template_params = default_template_params.merge(template_params)
  
      ERB.new(erb_file, trim_mode: '-').result_with_hash(erb_template_params)
    end
  
    def default_template_params
      {
        icon_types: {
          new:       "<span class='badge badge-pill badge-success'>Added</span>",
          update:    "<span class='badge badge-pill badge-primary'>Updated</span>",
          internals: "<span class='badge badge-pill badge-dark'>Internals</span>",
          removed:   "<span class='badge badge-pill badge-danger'>Removed</span>",
          cve:       "<span class='badge badge-pill badge-warning'>CVE</span>"
        },
        link_titles: {
          'news':     'Check details on NEWS page (github)',
          'grep-app': 'Check code examples on grep.app',
          'rbnews':   'Check discussion on rubylang',
          'post':     'Check a blog post about this change'
        }
      }
    end
  
    def save_file(path, output)
      printf "Writing to #{path} .."
      File.write(path, output)
      printf " Done\n"
    end
  
    def save_json_file_from_hash(path, hash)
      printf "\nWriting to #{path} .."
      File.open(path, 'w') do |f|
        f.write(JSON.pretty_generate(hash))
      end
      printf " Done\n"
    end
  
    def json_to_hash(json)
      JSON.parse(json)
    end
  
    def changelog_as_json
      File.read(CHANGELOG_SOURCE)
    end
  
    def cve_as_json
      File.read(CVE_SOURCE)
    end
  
    def read_file(template_file)
      File.read(template_file)
    end
  end
end
