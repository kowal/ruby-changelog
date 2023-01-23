# Ruby versions changelog

## Intro

* See full version of this project on https://rubychangelog.com/
* This page was last updated on 2023-01-23 via `rake md` task

## Ruby changelog


  ### Ruby 3.2

  * Implementations: [MRI 3.2.0](https://www.ruby-lang.org/en/news/2022/12/25/ruby-3-2-0-released/)  
  * :gear: WASI based WebAssembly support 
  * :gear: Production-ready YJIT 
  * :gear: Regexp improvements against ReDoS 
  * :gear: IRB improvements (SyntaxSuggest, ErrorHighlight) 
  * :gear: Bundler 2.4 now uses PubGrub resolver instead of Molinillo 
  
  ### Ruby 3.1

  * Implementations: [MRI 3.1.3](https://www.ruby-lang.org/en/news/2022/11/24/ruby-3-1-3-released/)  
  * :gear: YJIT: New experimental in-process JIT compiler :test_tube:
  * :new: debug gem: A new debugger 
  * :new: error_highlight: Fine-grained error location in backtrace 
  * :new: IRB Autocomplete and Documentation Display 
  * :arrows_counterclockwise: Values in Hash literals and keyword arguments can be omitted. 
  * :arrows_counterclockwise: Updates in RBS / TypeProf 
  
  ### Ruby 3.0

  * Implementations: [MRI 3.0.5](https://www.ruby-lang.org/en/news/2022/11/24/ruby-3-0-5-released/)  
  * :gear: MJIT improvements 
  * :new: Ractor - Actor-model like concurrent abstraction :test_tube:
  * :new: Fiber Scheduler for light-weight concurrency :test_tube:
  * :new: RBS - a language to describe the structure of Ruby classes 
  * :new: TypeProf - type analysis tool, generates RBS type signatures :test_tube:
  * :new: <code>Hash#except</code> 
  * :arrows_counterclockwise: Keyword arguments are separated from other arguments 
  * :arrows_counterclockwise: Rightward assignment statement 
  * :arrows_counterclockwise: Reversed (again) order of backtrace  :test_tube:
  * :arrows_counterclockwise: Endless method definition <code>def square(x) = x * x</code> 
  
  ### Ruby 2.7

  * Implementations: [MRI 2.7.7](https://www.ruby-lang.org/en/news/2022/11/24/ruby-2-7-7-released/)  
  * :new: Pattern Matching :test_tube:
  * :arrows_counterclockwise: REPL improvements 
  * :arrows_counterclockwise: Separation of positional and keyword arguments 
  * :arrows_counterclockwise: Argument forwarding 
  * :gear: Compaction GC 
  
  ### Ruby 2.6
  * :lock: **EOL** 2022-03-31
  * Implementations: [MRI 2.6.10](https://www.ruby-lang.org/en/news/2022/04/12/ruby-2-6-10-released/)  
  * :new: endless ranges <code>(1..)</code> 
  * :new: <code>Enumerable#chain</code> 
  * :new: function composition operators <code><<, >></code> to <code>Proc</code> 
  * :arrows_counterclockwise: <code>#then</code> alias for <code>#yield_self</code> 
  * :gear: JIT compiler <code>--jit</code> 
  * :gear: Bundler is installed as a default gem 
  
  ### Ruby 2.5
  * :lock: **EOL** 2021-03-31
  * Implementations: [MRI 2.5.9](https://www.ruby-lang.org/en/news/2021/04/05/ruby-2-5-9-released/), [JRuby 9.2.0.0](https://www.jruby.org/2018/05/24/jruby-9-2-0-0)  
  * :new: <code>yield_self</code> 
  * :new: <code>rescue</code> in blocks 
  * :new: <code>Hash#slice</code> and <code>Hash#transform_keys</code> 
  * :new: <code>ERB#result_with_hash</code> 
  * :arrows_counterclockwise: New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code> 
  * :arrows_counterclockwise: Pattern argument on <code>Enumerable</code> methods 
  * :arrows_counterclockwise: Keyword arguments on <code>Struct.new</code> 
  * :arrows_counterclockwise: Removed Top-level constant lookup 
  * :arrows_counterclockwise: Reverse order of backtrace (oldest call first) :test_tube:
  
  ### Ruby 2.4
  * :lock: **EOL** 2020-03-31
  * Implementations: [MRI 2.4.10](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/)  
  * :new: <code>Enumerable#sum</code> 
  * :new: <code>Integer#digits</code> 
  * :new: <code>Regexp#match?</code>, <code>Regexp#named_captures</code> 
  * :arrows_counterclockwise: New constructor <code>Logger.new(STDOUT, level:, progname:)</code> 
  * :arrows_counterclockwise: Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision 
  * :wastebasket: Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>) 
  
  ### Ruby 2.3
  * :lock: **EOL** 2019-03-31
  * Implementations: [MRI 2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released), [JRuby 9.1.17.0](https://www.jruby.org/2018/04/23/jruby-9-1-17-0)  
  * :new: Safe navigation operator <code>&.</code> 
  * :new: Frozen string literals 
  * :new: <code>Array#dig</code> 
  * :new: <code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code> 
  * :new: 'Did you mean?' 
  
  ### Ruby 2.2
  * :lock: **EOL** 2018-03-31
  * :wastebasket: <code>callcc</code> is obsolete - use Fiber instead 
  * :wastebasket: <code>DL</code> has been removed from stdlib - use Fiddle instead 
  * :gear: Incremental GC - fixes performance for 'old' objects 
  * :gear: The introduction of GC for symbols (mortal/immortal) 
  
  ### Ruby 2.1
  * :lock: **EOL** 2017-03-31
  * :new: Refinements 
  * :new: <code>Exception#cause</code> - for libraries exceptions 
  * :new: <code>Rational</code> and <code>Complex</code> literals 
  * :new: Generational GC - young / old objects 
  
  ### Ruby 2.0
  * :lock: **EOL** 2016-02-24
  * :new: Keyword arguments 
  * :new: <code>Module#prepend</code> 
  * :new: <code>Enumerator#lazy</code> 
  * :new: <code>%i</code> a literal for symbol array 
  
## Development

#### Documentation app

Documentation app is built using [mkdocs](https://www.mkdocs.org) with [mkdocs-material](https://squidfunk.github.io/mkdocs-material) theme.

To rebuild documentation pages from `templates/docs/**`:

    $ rake doc
    # Writing to mkdocs-material/docs/versions-latest.md .. Done
    # ...

To start documentation app locally:

    $ cd docs
    $ mkdocs serve

Open http://localhost:8000/

##### Deployment

Deployment to github Pages is set up via [github actions](https://squidfunk.github.io/mkdocs-material/publishing-your-site/#with-github-actions) using [mkdocs gh-deploy](https://github.com/kowal/ruby-changelog/blob/master/.github/workflows/ci.yml) command.

#### Readme

To rebuild `README.md` from `templates/README.md.erb`:

    $ rake md
    # Writing to README.MD .. Done

    $ yield
    # =* Yield is serving your markdown at http://localhost:4000/

Open http://localhost:4000/

#### New Ruby version?

1. Compare [Ruby releases](https://www.ruby-lang.org/en/downloads/releases/) page with [ruby_versions.json](https://github.com/kowal/ruby-changelog/blob/master/data/ruby_versions.json) if there are new Ruby versions.
    - update ruby_versions.json with new versions details
2. Update latest info about CVE - run `rake fetch:cve`
3. Regenerate all artifacts - `rake doc html md`
4. Verify - `bundle exec yield` and on mkdocs
5. Commit & publish
