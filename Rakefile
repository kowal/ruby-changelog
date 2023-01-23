require './lib/changelog'
require './ruby_changelog/cve_data'

task default: :html

desc 'Generate single html page with changelog'
task :html do
  Changelog.new.generate_html
end

desc 'Generate README file with changelog'
task :md do
  Changelog.new.generate_readme
end

desc 'Generate full documentation'
task :doc do
  Changelog.new.generate_full_docs
end

namespace :fetch do
  desc 'Fetch CVE data'
  task :cve do
    Changelog.new.fetch_cve_history
  end
end
