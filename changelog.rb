require 'json'
require 'erb'
require 'date'

CHANGELOG_SOURCE = 'changelog.json'.freeze
TEMPLATE_HTML = 'templates/index.html.erb'.freeze
TEMPLATE_MD = 'templates/README.md.erb'.freeze

OUTPUT_HTML = 'index.html'.freeze
OUTPUT_MD = 'README.MD'.freeze

# > Changelog.new.generate_html
# > Changelog.new.generate_markdown
class Changelog
  def generate_html
    changelog_as_json
      .yield_self { |json| json_to_hash(json) }
      .yield_self { |hash| html_from_hash(hash['ruby_versions']) }
      .yield_self { |html| write_html(html) }
  end

  def generate_markdown
    changelog_as_json
      .yield_self { |json| json_to_hash(json) }
      .yield_self { |hash| markdown_from_hash(hash['ruby_versions']) }
      .yield_self { |html| write_markdown(html) }
  end

  private

  def json_to_hash(json)
    JSON.parse(json)
  end

  def html_from_hash(ruby_versions)
    ERB.new(template_content(TEMPLATE_HTML), nil, '-')
       .result_with_hash(ruby_versions: ruby_versions)
  end

  def markdown_from_hash(ruby_versions)
    ERB.new(template_content(TEMPLATE_MD), nil, '-')
       .result_with_hash(ruby_versions: ruby_versions)
  end

  def write_html(content)
    printf "Writing to #{OUTPUT_HTML} .."

    File.write(OUTPUT_HTML, content)

    printf " Done\n"
  end

  def write_markdown(content)
    printf "Writing to #{OUTPUT_MD} .."

    File.write(OUTPUT_MD, content)

    printf " Done\n"
  end

  def changelog_as_json
    File.read(CHANGELOG_SOURCE)
  end

  def template_content(template_file)
    File.read(template_file)
  end
end
