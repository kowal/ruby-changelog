require 'json'
require 'erb'

CHANGELOG_SOURCE = 'changelog.json'
TEMPLATE_HTML = 'templates/index.html.erb'
OUTPUT_HTML = 'index.html'

class Changelog
  def generate_html
    changelog_as_json
      .yield_self { |versions_json| json_to_hash(versions_json) }
      .yield_self { |versions_hash| html_from_hash(versions_hash['ruby_versions']) }
      .yield_self { |versions_html| write_html(versions_html) }
  end

  private

  def json_to_hash(json)
    JSON.parse(json)
  end

  def html_from_hash(ruby_versions)
    ERB.new(template_content, nil, '-').result_with_hash(
      ruby_versions: ruby_versions
    )
  end

  def write_html(content)
    puts "Generating HTML #{OUTPUT_HTML} .."

    File.write(OUTPUT_HTML, content)
  end

  def changelog_as_json
    File.read(CHANGELOG_SOURCE)
  end

  def template_content
    File.read(TEMPLATE_HTML)
  end
end
