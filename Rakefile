require_relative 'lib/ruby_changelog'

task default: :html

desc 'Generate single html page with changelog'
task :html do
  RubyChangelog::Actions.new.generate_html
end

desc 'Generate README file with changelog'
task :md do
  RubyChangelog::Actions.new.generate_readme
end

desc 'Generate full documentation'
task :doc do
  RubyChangelog::Actions.new.generate_full_docs
end

namespace :fetch do
  desc 'Fetch Ruby changes'
  task :ruby do
    RubyChangelog::Actions.new.fetch_ruby_changes
  end

  desc 'Fetch CVE data'
  task :cve do
    RubyChangelog::Actions.new.fetch_cve_history
  end
end
