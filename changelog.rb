require 'json'
require 'erb'
require 'date'

CHANGELOG_SOURCE = 'data/ruby_versions.json'.freeze
CVE_SOURCE = 'data/ruby_cve.json'.freeze

TEMPLATE_HTML = 'templates/index.html.erb'.freeze
TEMPLATE_MD = 'templates/README.md.erb'.freeze
TEMPLATE_DOCS_VERSIONS_LATEST_MD = 'templates/docs/versions/LATEST.md.erb'.freeze
TEMPLATE_DOCS_VERSIONS_ALL_MD = 'templates/docs/versions/all.md.erb'.freeze
TEMPLATE_DOCS_TIMELINE_JS = 'templates/docs/charts/timeline.js.erb'.freeze

OUTPUT_HTML = 'index.html'.freeze
OUTPUT_README_MD = 'README.MD'.freeze

DOCS_BASE = 'docs'.freeze
DOCS_VERSIONS_LATEST_MD = "#{DOCS_BASE}/docs/versions-latest.md".freeze
DOCS_VERSIONS_ALL_MD = "#{DOCS_BASE}/docs/versions-all.md".freeze
DOCS_CHARTS_TIMELINE_JS = "#{DOCS_BASE}/docs/javascripts/charts-timeline.js".freeze

# > Changelog.new.generate_html
# > Changelog.new.generate_markdown
class Changelog
  def generate_html
    save_file(OUTPUT_HTML, generate_file(TEMPLATE_HTML, ruby_versions: ruby_versions_data))
  end

  def generate_readme
    save_file(OUTPUT_README_MD, generate_file(TEMPLATE_MD, ruby_versions: ruby_versions_data))
  end

  def generate_full_docs
    save_file(DOCS_VERSIONS_LATEST_MD,
              generate_file(TEMPLATE_DOCS_VERSIONS_LATEST_MD, ruby_versions: ruby_versions_data))

    save_file(DOCS_VERSIONS_ALL_MD,
              generate_file(TEMPLATE_DOCS_VERSIONS_ALL_MD,
                            ruby_versions: ruby_versions_data, ruby_cve: ruby_cve_data))

    save_file(DOCS_CHARTS_TIMELINE_JS,
              generate_file(TEMPLATE_DOCS_TIMELINE_JS, ruby_versions: ruby_versions_data))
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
    ERB.new(read_file(template_path), nil, '-').result_with_hash(template_params)
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
