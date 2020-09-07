# Ruby latest versions




## Ruby [2.7.1](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-7-1-released/) <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  

  - <div data-icon='ei-plus' data-size='s'></div> Pattern Matching 
  - <div data-icon='ei-pencil' data-size='s'></div> REPL improvements 
  - <div data-icon='ei-pencil' data-size='s'></div> Separation of positional and keyword arguments 
  - <div data-icon='ei-gear' data-size='s'></div> Compaction GC 
  
----



## Ruby [2.6.6](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/) <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  

  - <div data-icon='ei-plus' data-size='s'></div> endless ranges <code>(1..)</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Enumerable#chain</code> 
  - <div data-icon='ei-plus' data-size='s'></div> function composition operators <code><<, >></code> to <code>Proc</code> 
  - <div data-icon='ei-pencil' data-size='s'></div> <code>#then</code> alias for <code>#yield_self</code> 
  - <div data-icon='ei-gear' data-size='s'></div> JIT compiler <code>--jit</code> 
  - <div data-icon='ei-gear' data-size='s'></div> Bundler is installed as a default gem 
  
----



## Ruby [2.5.8](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/) <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  

  - <div data-icon='ei-plus' data-size='s'></div> <code>yield_self</code> - unlike <code>#tap</code>, it returns the result of the block <a target='_blank' href="https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby"><img class="icon link-service-icon" src="/assets/link-icon-grep-app.ico" title="Show code examples" alt="Go to examples"></a>
  - <div data-icon='ei-plus' data-size='s'></div> <code>rescue</code> in blocks 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Hash#slice</code> and <code>Hash#transform_keys</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>ERB#result_with_hash</code> 
  - <div data-icon='ei-pencil' data-size='s'></div> New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code> 
  - <div data-icon='ei-pencil' data-size='s'></div> Pattern argument on <code>Enumerable</code> methods 
  - <div data-icon='ei-pencil' data-size='s'></div> Keyword arguments on <code>Struct.new</code> 
  - <div data-icon='ei-pencil' data-size='s'></div> Removed Top-level constant lookup 
  
----



## Ruby [2.4.10](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/) <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  

All maintenance ended on 2020-03-31.
  
  - <div data-icon='ei-plus' data-size='s'></div> <code>Enumerable#sum</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Integer#digits</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Regexp#match?</code>, <code>Regexp#named_captures</code> 
  - <div data-icon='ei-pencil' data-size='s'></div> New constructor <code>Logger.new(STDOUT, level:, progname:)</code> 
  - <div data-icon='ei-pencil' data-size='s'></div> Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision 
  - <div data-icon='ei-minus' data-size='s'></div> Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>) 
  
----



## Ruby [2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released) <div class='icon-label calendar' title='Released on 2018-10-17'><div data-icon='ei-calendar' data-size='s'></div></div>
  

All maintenance ended on 2019-03-31.
  
  - <div data-icon='ei-plus' data-size='s'></div> Safe navigation operator <code>&.</code> 
  - <div data-icon='ei-plus' data-size='s'></div> Frozen string literals 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Array#dig</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code> 
  - <div data-icon='ei-plus' data-size='s'></div> 'Did you mean?' 
  
----



## Ruby 2.2
  

All maintenance ended on 2018-03-31.
  
  - <div data-icon='ei-minus' data-size='s'></div> <code>callcc</code> is obsolete - use Fiber instead 
  - <div data-icon='ei-minus' data-size='s'></div> <code>DL</code> has been removed from stdlib - use Fiddle instead 
  - <div data-icon='ei-gear' data-size='s'></div> Incremental GC - fixes performance for 'old' objects 
  - <div data-icon='ei-gear' data-size='s'></div> The introduction of GC for symbols (mortal/immortal) 
  
----



## Ruby 2.1
  

All maintenance ended on 2017-03-31.
  
  - <div data-icon='ei-plus' data-size='s'></div> Refinements 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Exception#cause</code> - for libraries exceptions 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Rational</code> and <code>Complex</code> literals 
  - <div data-icon='ei-plus' data-size='s'></div> Generational GC - young / old objects 
  
----



## Ruby 2.0
  

All maintenance ended on 2016-02-24.
  
  - <div data-icon='ei-plus' data-size='s'></div> Keyword arguments 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Module#prepend</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>Enumerator#lazy</code> 
  - <div data-icon='ei-plus' data-size='s'></div> <code>%i</code> a literal for symbol array 
  
----

(This page was updated on 2020-09-07 23:36:52 +0200)
