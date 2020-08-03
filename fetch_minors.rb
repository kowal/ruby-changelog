require 'nokogiri'
require 'open-uri'
require 'json'

RUBY_BASE_URL = 'https://www.ruby-lang.org'.freeze
RUBY_RELEASES_PATH = '/en/downloads/releases/'.freeze

CVE_RESULT_FILE = 'ruby_cve.json'.freeze

def ruby_link(path)
  "#{RUBY_BASE_URL}#{path}"
end

def open_doc(url)
  pp "Fetching #{url} ..."
  Nokogiri::HTML(open(url))
end

def ruby_version_from_ruby_path(path)
  version = path.scan(%r{.*\/(ruby-)?(.*).*-released}).last
  version[1].gsub('-is', '').gsub('-has-been', '').gsub('-', '.') if version
end

def write_json_file_from_hash(filepath, hash)
  File.open(filepath, 'w') do |f|
    f.write(JSON.pretty_generate(hash))
  end
end

# Fetch and parse HTML document
list_doc = open_doc(ruby_link(RUBY_RELEASES_PATH))

version_paths = list_doc.xpath('//a[contains(text(), "more")]').map { |link| link['href'] }

pp version_paths

cve_results = {}
version_paths.each do |path|
  # Find CVE information for gien release
  version_doc = open_doc(ruby_link(path))
  links = version_doc.xpath('//a[contains(text(), "CVE")]')
  ruby_version = ruby_version_from_ruby_path(path)

  next unless ruby_version

  cve_results[ruby_version] = links.map do |l|
    {
      url: ruby_link(l['href']),
      title: l.content
    }
  end
end

pp '========= CVE Results ========='
pp cve_results

write_json_file_from_hash CVE_RESULT_FILE, cve_results
pp "Saved in #{CVE_RESULT_FILE}"
