require 'json'
require 'erb'

CHANGELOG_SOURCE = 'changelog.json'
TEMPLATE_HTML = 'templates/index.html.erb'
OUTPUT_HTML = 'index.html'

class Changelog
  def generate_html
    ruby_versions = JSON.parse(changelog_content)
    html_content = ERB.new(template_content, nil, '-')
      .result_with_hash(ruby_versions: ruby_versions['ruby_versions'])

    puts "Generating HTML #{OUTPUT_HTML} .."
    File.write(OUTPUT_HTML, html_content)
  end

  private

  def changelog_content
    File.read(CHANGELOG_SOURCE)
  end

  def template_content
    File.read(TEMPLATE_HTML)
  end
end
