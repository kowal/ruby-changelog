# Ruby latest versions




## Ruby [3.0.0.preview1](https://www.ruby-lang.org/en/news/2020/09/25/ruby-3-0-0-preview1-released/)  <div class='icon-label calendar' title='Released on 2020-09-25'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  RBS language  
  - <span class='badge badge-pill badge-success'>Added</span>
  Ractor (experimental)  
  - <span class='badge badge-pill badge-success'>Added</span>
  Scheduler (experimental)  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Hash#except</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Keyword arguments are separated from other arguments  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Rightward assignment statement  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Endless method definition <code>def square(x) = x * x</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Reversed (again) order of backtrace (error message first, callers later)  
  
----



## Ruby [2.7.1](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-7-1-released/)  <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  Pattern Matching (experimental)  <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#pattern-matching-"><img class="icon link-service-icon" src="/assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a>
  <a data-toggle="collapse" href="#codeExample270" aria-expanded="false" aria-controls="collapseExample">
    Details
  </a>
  <div class="collapse" id="codeExample270">
    <div class="alert alert-light" role="alert">
      <code>case [0, [1, 2, 3]] in [a, [b, *c]]</code><br><code>a # => 0</code><br><code>b # => 1</code><br><code>c # => [2, 3]</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  REPL improvements  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Separation of positional and keyword arguments  <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#the-spec-of-keyword-arguments-is-changed-towards-30-"><img class="icon link-service-icon" src="/assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Argument forwarding  <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#other-miscellaneous-changes-"><img class="icon link-service-icon" src="/assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a> <a target='_blank' href="https://www.mendelowski.com/docs/ruby/new-way-for-argument-forwarding-in-27/"><img class="icon link-service-icon" src="/assets/link-icon-post.ico" title="Check a blog post about this change"></a> <a target='_blank' href="https://bugs.ruby-lang.org/issues/16253"><img class="icon link-service-icon" src="/assets/link-icon-rblang.ico" title=""></a>
  - <span class='badge badge-pill badge-dark'>Internals</span>
  Compaction GC  
  
----



## Ruby [2.6.6](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/)  <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  endless ranges <code>(1..)</code>  <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-"><img class="icon link-service-icon" src="/assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a> <a target='_blank' href="https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby"><img class="icon link-service-icon" src="/assets/link-icon-grep-app.ico" title="Check code examples on grep.app"></a>
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Enumerable#chain</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  function composition operators <code><<, >></code> to <code>Proc</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  <code>#then</code> alias for <code>#yield_self</code>  
  - <span class='badge badge-pill badge-dark'>Internals</span>
  JIT compiler <code>--jit</code>  
  - <span class='badge badge-pill badge-dark'>Internals</span>
  Bundler is installed as a default gem  
  
----



## Ruby [2.5.8](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/)  <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>yield_self</code>  <a target='_blank' href="https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby"><img class="icon link-service-icon" src="/assets/link-icon-grep-app.ico" title="Check code examples on grep.app"></a>
  <a data-toggle="collapse" href="#codeExample250" aria-expanded="false" aria-controls="collapseExample">
    Details
  </a>
  <div class="collapse" id="codeExample250">
    <div class="alert alert-light" role="alert">
      Unlike <code>#tap</code>, it returns the result of the block.<br><code>yield_self</code> is like <code>map</code> for single object.
    </div>
  </div>
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>rescue</code> in blocks  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Hash#slice</code> and <code>Hash#transform_keys</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>ERB#result_with_hash</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Pattern argument on <code>Enumerable</code> methods  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Keyword arguments on <code>Struct.new</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Removed Top-level constant lookup  
  
----



## Ruby [2.4.10](https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/) <div class='icon-label eol' title='All maintenance ended on 2020-03-31'><div data-icon='ei-lock' data-size='s'></div></div> <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Enumerable#sum</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Integer#digits</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Regexp#match?</code>, <code>Regexp#named_captures</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  New constructor <code>Logger.new(STDOUT, level:, progname:)</code>  
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision  
  - <span class='badge badge-pill badge-danger'>Removed</span>
  Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)  
  
----



## Ruby [2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released) <div class='icon-label eol' title='All maintenance ended on 2019-03-31'><div data-icon='ei-lock' data-size='s'></div></div> <div class='icon-label calendar' title='Released on 2018-10-17'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  Safe navigation operator <code>&.</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  Frozen string literals  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Array#dig</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  'Did you mean?'  
  
----



## Ruby 2.2
  
  - <span class='badge badge-pill badge-danger'>Removed</span>
  <code>callcc</code> is obsolete - use Fiber instead  
  - <span class='badge badge-pill badge-danger'>Removed</span>
  <code>DL</code> has been removed from stdlib - use Fiddle instead  
  - <span class='badge badge-pill badge-dark'>Internals</span>
  Incremental GC - fixes performance for 'old' objects  
  - <span class='badge badge-pill badge-dark'>Internals</span>
  The introduction of GC for symbols (mortal/immortal)  
  
----



## Ruby 2.1
  
  - <span class='badge badge-pill badge-success'>Added</span>
  Refinements  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Exception#cause</code> - for libraries exceptions  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Rational</code> and <code>Complex</code> literals  
  - <span class='badge badge-pill badge-success'>Added</span>
  Generational GC - young / old objects  
  
----



## Ruby 2.0
  
  - <span class='badge badge-pill badge-success'>Added</span>
  Keyword arguments  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Module#prepend</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Enumerator#lazy</code>  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>%i</code> a literal for symbol array  
  
----

(This page was updated on 2020-10-04 18:08:16 +0200)
