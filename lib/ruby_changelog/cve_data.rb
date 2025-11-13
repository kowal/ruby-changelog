# frozen_string_literal: true

require 'nokogiri'
require 'open-uri'
require 'json'

RUBY_BASE_URL = 'https://www.ruby-lang.org'.freeze
RUBY_RELEASES_PATH = '/en/downloads/releases/'.freeze

XPATH_VERSIONS = '//a[contains(text(), "more")]'.freeze
XPATH_CVE_LINKS = '//div[contains(@id, "content-wrapper")]//a[contains(text(), "CVE")]'.freeze

module RubyChangelog
  # Class representing interactions with Ruby CVE list
  class CveData
    # Fetch and parse HTML document
    def fetch
      list_doc = open_doc(ruby_link(RUBY_RELEASES_PATH))

      version_paths = list_doc.xpath(XPATH_VERSIONS).map { |link| link['href'] }

      puts "Fetching CVE data about #{version_paths.size} Ruby minor versions ...\n"

      version_paths.each_with_object({}) do |path, results|
        # Find CVE information for gien release
        version_doc = open_doc(ruby_link(path))
        links = version_doc.xpath(XPATH_CVE_LINKS)
        ruby_version = ruby_version_from_ruby_path(path)

        next results unless ruby_version

        results[ruby_version] = links.map do |l|
          {
            url: ruby_link(l['href']),
            title: l.content
          }
        end
      end
    end

    private

    def ruby_link(path)
      "#{RUBY_BASE_URL}#{path}"
    end

    def open_doc(url)
      print '.'
      Nokogiri::HTML(URI.open(url))
    end

    def ruby_version_from_ruby_path(path)
      version = path.scan(%r{.*\/(ruby-)?(.*).*-released}).last
      version[1].gsub('-is', '').gsub('-has-been', '').gsub('-', '.') if version
    end
  end
end
