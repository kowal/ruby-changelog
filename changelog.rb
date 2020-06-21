require 'json'
require 'erb'
require 'date'

CHANGELOG_SOURCE = 'changelog.json'.freeze

TEMPLATE_HTML = 'templates/index.html.erb'.freeze
TEMPLATE_MD = 'templates/README.md.erb'.freeze
TEMPLATE_DOCS_VERSIONS_MAIN_MD = 'templates/docs/versions/main.md.erb'.freeze
TEMPLATE_DOCS_VERSIONS_ALL_MD = 'templates/docs/versions/all.md.erb'.freeze
TEMPLATE_DOCS_TIMELINE_JS = 'templates/docs/charts/timeline.js.erb'.freeze

OUTPUT_HTML = 'index.html'.freeze
OUTPUT_RAEDME_MD = 'README.MD'.freeze

DOCS_VERSIONS_MAIN_MD = 'mkdocs-material/docs/versions-main.md'.freeze
DOCS_VERSIONS_ALL_MD = 'mkdocs-material/docs/versions-all.md'.freeze
DOCS_CHARTS_TIMELINE_JS = 'mkdocs-material/docs/javascripts/charts-timeline.js'.freeze

# > Changelog.new.generate_html
# > Changelog.new.generate_markdown
class Changelog
  def generate_html
    ruby_versions
      .yield_self { |ruby_versions| file_from_template(ruby_versions, TEMPLATE_HTML) }
      .yield_self { |output| write_out(OUTPUT_HTML, output) }
  end

  def generate_readme
    ruby_versions
      .yield_self { |ruby_versions| file_from_template(ruby_versions, TEMPLATE_MD) }
      .yield_self { |output| write_out(OUTPUT_RAEDME_MD, output) }
  end

  def generate_full_docs
    return 'work in progress!'

    rv = ruby_versions

    rv.yield_self { |ruby_versions| file_from_template(ruby_versions, TEMPLATE_DOCS_VERSIONS_MAIN_MD) }
      .yield_self { |output| write_out(DOCS_VERSIONS_MAIN_MD, output) }

    rv.yield_self { |ruby_versions| file_from_template(ruby_versions, TEMPLATE_DOCS_TIMELINE_JS) }
      .yield_self { |output| write_out(DOCS_CHARTS_TIMELINE_JS, output) }
  end

  private

  def ruby_versions
    changelog_as_json
      .yield_self { |json| json_to_hash(json) }
      .yield_self { |hash| hash['ruby_versions'] }
  end

  def file_from_template(ruby_versions, template)
    read_file(template)
      .yield_self { |content| ERB.new(content, nil, '-') }
      .yield_self { |erb| erb.result_with_hash(ruby_versions: ruby_versions) }
  end

  def write_out(target_file, content)
    printf "Writing to #{target_file} .."
    File.write(target_file, content)
    printf " Done\n"
  end

  def json_to_hash(json)
    JSON.parse(json)
  end

  def changelog_as_json
    File.read(CHANGELOG_SOURCE)
  end

  def read_file(template_file)
    File.read(template_file)
  end
end
