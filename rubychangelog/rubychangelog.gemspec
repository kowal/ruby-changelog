# frozen_string_literal: true

require_relative 'lib/rubychangelog/version'

Gem::Specification.new do |spec|
  spec.name          = 'rubychangelog'
  spec.version       = Rubychangelog::VERSION
  spec.authors       = ['Marek Kowalcze']
  spec.email         = ['marek.kowalcze@gmail.com']

  spec.summary       = 'Ruby changelog'
  spec.description   = 'Ruby changelog'
  spec.homepage      = 'https://rubychangelog.com'
  spec.license       = 'MIT'
  spec.required_ruby_version = Gem::Requirement.new('>= 2.3.0')

  spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] = 'https://github.com/kowal/ruby-changelog'

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']
end
