# Ruby versions changelog

* Last updated on 2020-02-21


  ## Ruby 2.7

  * Implementations: [MRI 2.7.0](https://www.ruby-lang.org/en/news/2019/12/25/ruby-2-7-0-released/)  
  * :new: Pattern Matching
  * :arrows_counterclockwise: REPL improvements
  * :arrows_counterclockwise: Separation of positional and keyword arguments
  * :gem: Compaction GC
  
  ## Ruby 2.6

  * Implementations: [MRI 2.6.4](https://www.ruby-lang.org/en/news/2019/08/28/ruby-2-6-4-released/)  
  * :gem: JIT compiler <code>--jit</code>
  * :gem: Bundler is installed as a default gem
  * :new: endless ranges <code>(1..)</code>
  * :new: <code>Enumerable#chain</code>
  * :new: function composition operators <code><<, >></code> to <code>Proc</code>
  * :arrows_counterclockwise: <code>#then</code> alias for <code>#yield_self</code>
  
  ## Ruby 2.5

  * Implementations: [MRI 2.5.3](https://www.ruby-lang.org/en/news/2018/10/18/ruby-2-5-3-released), [JRuby 9.2.0.0](https://www.jruby.org/2018/05/24/jruby-9-2-0-0)  
  * :new: <code>yield_self</code> - unlike <code>#tap</code>, it returns the result of the block
  * :new: <code>rescue</code> in blocks
  * :new: <code>Hash#slice</code> and <code>Hash#transform_keys</code>
  * :new: <code>ERB#result_with_hash</code>
  * :arrows_counterclockwise: New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>
  * :arrows_counterclockwise: Pattern argument on <code>Enumerable</code> methods
  * :arrows_counterclockwise: Keyword arguments on <code>Struct.new</code>
  * :arrows_counterclockwise: Removed Top-level constant lookup
  
  ## Ruby 2.4

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
  * :new: ''Did you mean?
  
  ## Ruby 2.2

  * :gem: Incremental GC - fixes performance for 'old' objects
  * :gem: The introduction of GC for symbols (mortal/immortal)
  * :put_litter_in_its_place: <code>callcc</code> is obsolete - use Fiber instead
  * :put_litter_in_its_place: <code>DL</code> has been removed from stdlib - use Fiddle instead
  
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
