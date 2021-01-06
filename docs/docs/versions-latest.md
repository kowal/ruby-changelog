# Ruby latest versions




## Ruby <a target='_blank' href="https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/">3.0.0</a>  <div class='icon-label calendar' title='Released on 2020-12-25'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-dark'>Internals</span>
  MJIT improvements
  - <span class='badge badge-pill badge-success'>Added</span>
  Ractor - Actor-model like concurrent abstraction (experimental)
  - <span class='badge badge-pill badge-success'>Added</span>
  Fiber Scheduler for light-weight concurrency (experimental)
  - <span class='badge badge-pill badge-success'>Added</span>
  RBS - a language to describe the structure of Ruby classes
    <a target='_blank' href="https://github.com/ruby/rbs"><img class="icon link-service-icon" src="../assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a>
  <a data-toggle="collapse" href="#codeExample3003" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample3003">
    <div class="alert alert-light" role="alert">
      <code class="code">class User
  attr_reader login: String
  attr_reader email: String
  def initialize: (login: String, email: String) -> void
end</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-success'>Added</span>
  TypeProf - type analysis tool, generates RBS type signatures (experimental)
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>Hash#except</code>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Keyword arguments are separated from other arguments
  <a data-toggle="collapse" href="#codeExample3006" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample3006">
    <div class="alert alert-light" role="alert">
      <code class="code">def foo(key: 42); end; foo({key: 42})   # won't work!
def foo(key: 42); end; foo(**{key: 42}) # OK</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Rightward assignment statement
  <a data-toggle="collapse" href="#codeExample3007" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample3007">
    <div class="alert alert-light" role="alert">
      <code class="code">fib(10) => a
a #=> 55</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Reversed (again) order of backtrace  (experimental)
  <a data-toggle="collapse" href="#codeExample3008" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample3008">
    <div class="alert alert-light" role="alert">
      <code class="code">Error message first, caller later.
This reverts change from Ruby 2.5.0.</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Endless method definition <code>def square(x) = x * x</code>
  
----



## Ruby <a target='_blank' href="https://www.ruby-lang.org/en/news/2020/10/02/ruby-2-7-2-released/">2.7.2</a>  <div class='icon-label calendar' title='Released on 2020-10-02'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  Pattern Matching (experimental)
    <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#pattern-matching-"><img class="icon link-service-icon" src="../assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a>
  <a data-toggle="collapse" href="#codeExample270" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample270">
    <div class="alert alert-light" role="alert">
      <code class="code">case [0, [1, 2, 3]] in [a, [b, *c]]
a # => 0
b # => 1
c # => [2, 3]</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  REPL improvements
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Separation of positional and keyword arguments
    <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#the-spec-of-keyword-arguments-is-changed-towards-30-"><img class="icon link-service-icon" src="../assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a>
  <a data-toggle="collapse" href="#codeExample272" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample272">
    <div class="alert alert-light" role="alert">
      <code class="code">// To treat last hash argument as keywords, add a double splat operator
// (to avoid the warning and ensure correct behavior in Ruby 3)
def foo(key: 42); end; foo({key: 42})   # warned
def foo(key: 42); end; foo(**{key: 42}) # OK</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Argument forwarding
    <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#other-miscellaneous-changes-"><img class="icon link-service-icon" src="../assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a> <a target='_blank' href="https://www.mendelowski.com/docs/ruby/new-way-for-argument-forwarding-in-27/"><img class="icon link-service-icon" src="../assets/link-icon-post.ico" title="Check a blog post about this change"></a> <a target='_blank' href="https://bugs.ruby-lang.org/issues/16253"><img class="icon link-service-icon" src="../assets/link-icon-rblang.ico" title=""></a>
  <a data-toggle="collapse" href="#codeExample273" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample273">
    <div class="alert alert-light" role="alert">
      <code class="code">// parentheses are mandatory
def foo(...)
  bar(...)
end</code>
    </div>
  </div>
  - <span class='badge badge-pill badge-dark'>Internals</span>
  Compaction GC
  
----



## Ruby <a target='_blank' href="https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/">2.6.6</a>  <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  endless ranges <code>(1..)</code>
    <a target='_blank' href="https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-"><img class="icon link-service-icon" src="../assets/link-icon-news.ico" title="Check details on NEWS page (github)"></a> <a target='_blank' href="https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby"><img class="icon link-service-icon" src="../assets/link-icon-grep-app.ico" title="Check code examples on grep.app"></a>
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



## Ruby <a target='_blank' href="https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/">2.5.8</a>  <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
  - <span class='badge badge-pill badge-success'>Added</span>
  <code>yield_self</code>
    <a target='_blank' href="https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby"><img class="icon link-service-icon" src="../assets/link-icon-grep-app.ico" title="Check code examples on grep.app"></a>
  <a data-toggle="collapse" href="#codeExample250" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample250">
    <div class="alert alert-light" role="alert">
      <code class="code">// Unlike #tap, it returns the result of the block.
// yield_self is like #map for single object.
'Hello'.yield_self { |word| word.upcase }
=> 'HELLO'
['Hello'].map { |word| word.upcase }.first
=> 'HELLO'</code>
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
  - <span class='badge badge-pill badge-primary'>Updated</span>
  Reverse order of backtrace (oldest call first) (experimental)
  <a data-toggle="collapse" href="#codeExample258" aria-expanded="false" aria-controls="collapseExample">
    <img class="icon link-service-icon" src="../assets/link-icon-code.ico" title="Expand code example">
  </a>
  <div class="collapse" id="codeExample258">
    <div class="alert alert-light" role="alert">
      <code class="code">Only when printed to terminal directly.
This will be reversed again in Ruby 3.0.0</code>
    </div>
  </div>
  
----



## Ruby <a target='_blank' href="https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/">2.4.10</a> <div class='icon-label eol' title='All maintenance ended on 2020-03-31'><div data-icon='ei-lock' data-size='s'></div></div> <div class='icon-label calendar' title='Released on 2020-03-31'><div data-icon='ei-calendar' data-size='s'></div></div>
  
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



## Ruby <a target='_blank' href="https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released">2.3.8</a> <div class='icon-label eol' title='All maintenance ended on 2019-03-31'><div data-icon='ei-lock' data-size='s'></div></div> <div class='icon-label calendar' title='Released on 2018-10-17'><div data-icon='ei-calendar' data-size='s'></div></div>
  
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

(Last updated on 2021-01-06 13:44:40 +0100)
