# Ruby versions changelog

* Last updated on 2020-12-30


  ## Ruby 3.0.0

  * Implementations: [MRI 3.0.0](https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/)  
  * :gem: MJIT improvements
  * :new: Ractor - Actor-model like concurrent abstraction
  * :new: Fiber Scheduler for light-weight concurrency
  * :new: RBS - a language to describe the structure of Ruby classes
  * :new: TypeProf - type analysis tool, generates RBS type signatures
  * :new: <code>Hash#except</code>
  * :arrows_counterclockwise: Keyword arguments are separated from other arguments
  * :arrows_counterclockwise: Rightward assignment statement
  * :arrows_counterclockwise: Reversed (again) order of backtrace 
  * :arrows_counterclockwise: Endless method definition <code>def square(x) = x * x</code>
  
  ## Ruby 2.7

  * Implementations: [MRI 2.7.2](https://www.ruby-lang.org/en/news/2020/10/02/ruby-2-7-2-released/)  
  * :new: Pattern Matching
  * :arrows_counterclockwise: REPL improvements
  * :arrows_counterclockwise: Separation of positional and keyword arguments
  * :arrows_counterclockwise: Argument forwarding
  * :gem: Compaction GC
  
  ## Ruby 2.6

  * Implementations: [MRI 2.6.6](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/)  
  * :new: endless ranges <code>(1..)</code>
  * :new: <code>Enumerable#chain</code>
  * :new: function composition operators <code><<, >></code> to <code>Proc</code>
  * :arrows_counterclockwise: <code>#then</code> alias for <code>#yield_self</code>
  * :gem: JIT compiler <code>--jit</code>
  * :gem: Bundler is installed as a default gem
  
  ## Ruby 2.5

  * Implementations: [MRI 2.5.8](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/), [JRuby 9.2.0.0](https://www.jruby.org/2018/05/24/jruby-9-2-0-0)  
  * :new: <code>yield_self</code>
  * :new: <code>rescue</code> in blocks
  * :new: <code>Hash#slice</code> and <code>Hash#transform_keys</code>
  * :new: <code>ERB#result_with_hash</code>
  * :arrows_counterclockwise: New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>
  * :arrows_counterclockwise: Pattern argument on <code>Enumerable</code> methods
  * :arrows_counterclockwise: Keyword arguments on <code>Struct.new</code>
  * :arrows_counterclockwise: Removed Top-level constant lookup
  * :arrows_counterclockwise: Reverse order of backtrace (oldest call first)
  
  ## Ruby 2.4

  * Implementations: [MRI 2.4.10](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/)  
  * :new: <code>Enumerable#sum</code>
  * :new: <code>Integer#digits</code>
  * :new: <code>Regexp#match?</code>, <code>Regexp#named_captures</code>
  * :arrows_counterclockwise: New constructor <code>Logger.new(STDOUT, level:, progname:)</code>
  * :arrows_counterclockwise: Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision
  * :put_litter_in_its_place: Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)
  
  ## Ruby 2.3

  * Implementations: [MRI 2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released), [JRuby 9.1.17.0](https://www.jruby.org/2018/04/23/jruby-9-1-17-0)  
  * :new: Safe navigation operator <code>&.</code>
  * :new: Frozen string literals
  * :new: <code>Array#dig</code>
  * :new: <code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>
  * :new: 'Did you mean?'
  
  ## Ruby 2.2

  * :put_litter_in_its_place: <code>callcc</code> is obsolete - use Fiber instead
  * :put_litter_in_its_place: <code>DL</code> has been removed from stdlib - use Fiddle instead
  * :gem: Incremental GC - fixes performance for 'old' objects
  * :gem: The introduction of GC for symbols (mortal/immortal)
  
  ## Ruby 2.1

  * :new: Refinements
  * :new: <code>Exception#cause</code> - for libraries exceptions
  * :new: <code>Rational</code> and <code>Complex</code> literals
  * :new: Generational GC - young / old objects
  
  ## Ruby 2.0

  * :new: Keyword arguments
  * :new: <code>Module#prepend</code>
  * :new: <code>Enumerator#lazy</code>
  * :new: <code>%i</code> a literal for symbol array
  
* See HTML version of this page on https://kowal.github.io/ruby-changelog
* This page is generated via `rake md` task

## Development

#### Docs

Documentation app is built on top of https://squidfunk.github.io/mkdocs-material/ which is a theme for https://www.mkdocs.org/.


To rebuild documentation pages from templates:

    $ rake doc
    # Writing to mkdocs-material/docs/versions-latest.md .. Done
    # ...

To start documentation app:

    $ cd docs
    $ mkdocs serve

Open http://localhost:8000/

#### README

To rebuild `README.md` from `templates/README.md.erb` template:

    $ rake md
    # Writing to README.MD .. Done

    $ yield
    # =* Yield is serving your markdown at http://localhost:4000/

Open http://localhost:4000/
