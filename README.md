# Ruby versions changelog

* Last updated on 2019-09-08
* See HTML version of this page on https://kowal.github.io/ruby-changelog


  ## Ruby 2.6

  * Implementations [MRI 2.6.4](https://www.ruby-lang.org/en/news/2019/08/28/ruby-2-6-4-released/)  
  * :internals: JIT compiler <code>--jit</code>
  * :internals: Bundler is installed as a default gem
  * :new: endless ranges <code>(1..)</code>
  * :new: <code>Enumerable#chain</code>
  * :new: function composition operators <code><<, >></code> to <code>Proc</code>
  * :update: <code>#then</code> alias for <code>#yield_self</code>
  
  ## Ruby 2.5

  * Implementations [MRI 2.5.3](https://www.ruby-lang.org/en/news/2018/10/18/ruby-2-5-3-released), [JRuby 9.2.0.0](https://www.jruby.org/2018/05/24/jruby-9-2-0-0)  
  * :new: <code>yield_self</code> - unlike <code>#tap</code>, it returns the result of the block
  * :new: <code>rescue</code> in blocks
  * :new: <code>Hash#slice</code> and <code>Hash#transform_keys</code>
  * :new: <code>ERB#result_with_hash</code>
  * :update: New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>
  * :update: Pattern argument on <code>Enumerable</code> methods
  * :update: Keyword arguments on <code>Struct.new</code>
  * :update: Removed Top-level constant lookup
  
  ## Ruby 2.4

  * :new: <code>Enumerable#sum</code>
  * :new: <code>Integer#digits</code>
  * :new: <code>Regexp#match?</code>, <code>Regexp#named_captures</code>
  * :update: New constructor <code>Logger.new(STDOUT, level:, progname:)</code>
  * :update: Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision
  * :: Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)
  
  ## Ruby 2.3

  * Implementations [MRI 2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released), [9.1.17.0](https://www.jruby.org/2018/04/23/jruby-9-1-17-0)  
  * :new: Safe navigation operator <code>&.</code>
  * :new: Frozen string literals
  * :new: <code>Array#dig</code>
  * :new: <code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>
  * :new: ''Did you mean?
  
  ## Ruby 2.2

  * :new: Incremental GC - fixes performance for 'old' objects
  * :new: The introduction of GC for symbols (mortal/immortal)
  * :: <code>callcc</code> is obsolete - use Fiber instead
  * :: <code>DL</code> has been removed from stdlib - use Fiddle instead
  
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
  