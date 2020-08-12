# Ruby latest versions




## Ruby [2.7.1](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-7-1-released/)
  

  * &#43; Pattern Matching
  * &#177; REPL improvements
  * &#177; Separation of positional and keyword arguments
  * &#9883; Compaction GC
  
----



## Ruby [2.6.6](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/)
  

  * &#43; endless ranges <code>(1..)</code>
  * &#43; <code>Enumerable#chain</code>
  * &#43; function composition operators <code><<, >></code> to <code>Proc</code>
  * &#177; <code>#then</code> alias for <code>#yield_self</code>
  * &#9883; JIT compiler <code>--jit</code>
  * &#9883; Bundler is installed as a default gem
  
----



## Ruby [2.5.8](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/)
  

  * &#43; <code>yield_self</code> - unlike <code>#tap</code>, it returns the result of the block
  * &#43; <code>rescue</code> in blocks
  * &#43; <code>Hash#slice</code> and <code>Hash#transform_keys</code>
  * &#43; <code>ERB#result_with_hash</code>
  * &#177; New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>
  * &#177; Pattern argument on <code>Enumerable</code> methods
  * &#177; Keyword arguments on <code>Struct.new</code>
  * &#177; Removed Top-level constant lookup
  
----



## Ruby [2.4.10](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/)
  

All maintenance ended on 2020-03-31.
  
  * &#43; <code>Enumerable#sum</code>
  * &#43; <code>Integer#digits</code>
  * &#43; <code>Regexp#match?</code>, <code>Regexp#named_captures</code>
  * &#177; New constructor <code>Logger.new(STDOUT, level:, progname:)</code>
  * &#177; Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision
  * (removed) Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)
  
----



## Ruby [2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released)
  

All maintenance ended on 2019-03-31.
  
  * &#43; Safe navigation operator <code>&.</code>
  * &#43; Frozen string literals
  * &#43; <code>Array#dig</code>
  * &#43; <code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>
  * &#43; 'Did you mean?'
  
----



## Ruby 2.2
  

All maintenance ended on 2018-03-31.
  
  * (removed) <code>callcc</code> is obsolete - use Fiber instead
  * (removed) <code>DL</code> has been removed from stdlib - use Fiddle instead
  * &#9883; Incremental GC - fixes performance for 'old' objects
  * &#9883; The introduction of GC for symbols (mortal/immortal)
  
----



## Ruby 2.1
  

All maintenance ended on 2017-03-31.
  
  * &#43; Refinements
  * &#43; <code>Exception#cause</code> - for libraries exceptions
  * &#43; <code>Rational</code> and <code>Complex</code> literals
  * &#43; Generational GC - young / old objects
  
----



## Ruby 2.0
  

All maintenance ended on 2016-02-24.
  
  * &#43; Keyword arguments
  * &#43; <code>Module#prepend</code>
  * &#43; <code>Enumerator#lazy</code>
  * &#43; <code>%i</code> a literal for symbol array
  
----

(This page was updated on 2020-08-12 12:01:29 +0200)
