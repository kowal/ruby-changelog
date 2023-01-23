# frozen_string_literal: true

require 'json'
require 'erb'
require 'date'
require "zeitwerk"

loader = Zeitwerk::Loader.for_gem
loader.setup

module RubyChangelog
  class << self
    def gem_root
      Pathname.new(File.expand_path('..', __dir__))
    end
  end
end
