window.onload = function () {
  // Chart Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Chart Themes end

  var chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.paddingRight = 30;
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

  var colorSet = new am4core.ColorSet();
  colorSet.saturation = 0.2;

  chart.data = [{"category":"Ruby 3.0.0.preview1","task":"3.0.0.preview1","start":"2020-09-25","end":"2020-11-17","color":"rgb(255, 4, 0)","info":"RC\n{\"name\"=>\"MRI 3.0.0.preview1\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/09/25/ruby-3-0-0-preview1-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"RBS language\"}\n{\"type\"=>\"new\", \"experimental\"=>true, \"summary\"=>\"Ractor\"}\n{\"type\"=>\"new\", \"experimental\"=>true, \"summary\"=>\"Scheduler\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#except</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments are separated from other arguments\"}\n{\"type\"=>\"update\", \"summary\"=>\"Rightward assignment statement\"}\n{\"type\"=>\"update\", \"summary\"=>\"Endless method definition <code>def square(x) = x * x</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Reversed (again) order of backtrace (error message first, callers later)\"}"},{"category":"Ruby 2.7","task":"2.7.1","start":"2020-03-31","end":"2020-11-17","color":"rgb(255, 48, 0)","info":"Supported\n{\"name\"=>\"MRI 2.7.1\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-7-1-released/\"}\n{\"type\"=>\"new\", \"experimental\"=>true, \"summary\"=>\"Pattern Matching\", \"detailsCode\"=>[\"case [0, [1, 2, 3]] in [a, [b, *c]]\", \"a # => 0\", \"b # => 1\", \"c # => [2, 3]\"], \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#pattern-matching-\"}}\n{\"type\"=>\"update\", \"summary\"=>\"REPL improvements\"}\n{\"type\"=>\"update\", \"summary\"=>\"Separation of positional and keyword arguments\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#the-spec-of-keyword-arguments-is-changed-towards-30-\"}, \"detailsCode\"=>[\"// To treat last hash argument as keywords, add a double splat operator\", \"// (to avoid the warning and ensure correct behavior in Ruby 3)\", \"def foo(key: 42); end; foo({key: 42})   # warned\", \"def foo(key: 42); end; foo(**{key: 42}) # OK\"]}\n{\"type\"=>\"update\", \"summary\"=>\"Argument forwarding\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#other-miscellaneous-changes-\", \"post\"=>\"https://www.mendelowski.com/docs/ruby/new-way-for-argument-forwarding-in-27/\", \"rblang\"=>\"https://bugs.ruby-lang.org/issues/16253\"}, \"detailsCode\"=>[\"// parentheses are mandatory\", \"def foo(...)\", \"  bar(...)\", \"end\"]}\n{\"type\"=>\"internals\", \"summary\"=>\"Compaction GC\"}"},{"category":"Ruby 2.7","task":"2.7.0","start":"2019-12-25","end":"2020-03-31","color":"rgb(255, 24, 0)","info":"Supported\n{\"name\"=>\"MRI 2.7.1\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-7-1-released/\"}\n{\"type\"=>\"new\", \"experimental\"=>true, \"summary\"=>\"Pattern Matching\", \"detailsCode\"=>[\"case [0, [1, 2, 3]] in [a, [b, *c]]\", \"a # => 0\", \"b # => 1\", \"c # => [2, 3]\"], \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#pattern-matching-\"}}\n{\"type\"=>\"update\", \"summary\"=>\"REPL improvements\"}\n{\"type\"=>\"update\", \"summary\"=>\"Separation of positional and keyword arguments\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#the-spec-of-keyword-arguments-is-changed-towards-30-\"}, \"detailsCode\"=>[\"// To treat last hash argument as keywords, add a double splat operator\", \"// (to avoid the warning and ensure correct behavior in Ruby 3)\", \"def foo(key: 42); end; foo({key: 42})   # warned\", \"def foo(key: 42); end; foo(**{key: 42}) # OK\"]}\n{\"type\"=>\"update\", \"summary\"=>\"Argument forwarding\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_7/NEWS#other-miscellaneous-changes-\", \"post\"=>\"https://www.mendelowski.com/docs/ruby/new-way-for-argument-forwarding-in-27/\", \"rblang\"=>\"https://bugs.ruby-lang.org/issues/16253\"}, \"detailsCode\"=>[\"// parentheses are mandatory\", \"def foo(...)\", \"  bar(...)\", \"end\"]}\n{\"type\"=>\"internals\", \"summary\"=>\"Compaction GC\"}"},{"category":"Ruby 2.6","task":"2.6.6","start":"2020-03-31","end":"2020-11-17","color":"rgb(255, 147, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.6","task":"2.6.5","start":"2019-10-01","end":"2020-03-31","color":"rgb(255, 126, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.6","task":"2.6.4","start":"2019-08-28","end":"2019-10-01","color":"rgb(255, 105, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.6","task":"2.6.3","start":"2019-04-17","end":"2019-08-28","color":"rgb(255, 84, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.6","task":"2.6.2","start":"2019-03-13","end":"2019-04-17","color":"rgb(255, 63, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.6","task":"2.6.1","start":"2019-01-30","end":"2019-03-13","color":"rgb(255, 42, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.6","task":"2.6.0","start":"2018-12-25","end":"2019-01-30","color":"rgb(255, 21, 0)","info":"Supported\n{\"name\"=>\"MRI 2.6.6\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-6-6-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"endless ranges <code>(1..)</code>\", \"links\"=>{\"news\"=>\"https://github.com/ruby/ruby/blob/ruby_2_6/NEWS#language-changes-\", \"grep-app\"=>\"https://grep.app/search?q=%281..%29&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#chain</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"function composition operators <code><<, >></code> to <code>Proc</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"<code>#then</code> alias for <code>#yield_self</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"JIT compiler <code>--jit</code>\"}\n{\"type\"=>\"internals\", \"summary\"=>\"Bundler is installed as a default gem\"}"},{"category":"Ruby 2.5","task":"2.5.8","start":"2020-03-31","end":"2020-11-17","color":"rgb(255, 162, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.7","start":"2019-10-01","end":"2020-03-31","color":"rgb(255, 144, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.6","start":"2019-08-28","end":"2019-10-01","color":"rgb(255, 126, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.5","start":"2019-03-15","end":"2019-08-28","color":"rgb(255, 108, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.4","start":"2019-03-13","end":"2019-03-15","color":"rgb(255, 90, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.3","start":"2018-10-18","end":"2019-03-13","color":"rgb(255, 72, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.2","start":"2018-10-17","end":"2018-10-18","color":"rgb(255, 54, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.1","start":"2018-03-28","end":"2018-10-17","color":"rgb(255, 36, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.5","task":"2.5.0","start":"2017-12-25","end":"2018-03-28","color":"rgb(255, 18, 0)","info":"Supported\n{\"name\"=>\"MRI 2.5.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-5-8-released/\"}\n{\"name\"=>\"JRuby 9.2.0.0\", \"url\"=>\"https://www.jruby.org/2018/05/24/jruby-9-2-0-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>yield_self</code>\", \"detailsCode\"=>[\"Unlike #tap, it returns the result of the block.\", \"yield_self is like #map for single object.\"], \"links\"=>{\"grep-app\"=>\"https://grep.app/search?q=%5C.yield_self&regexp=true&filter[lang][0]=Ruby\"}}\n{\"type\"=>\"new\", \"summary\"=>\"<code>rescue</code> in blocks\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#slice</code> and <code>Hash#transform_keys</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>ERB#result_with_hash</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Pattern argument on <code>Enumerable</code> methods\"}\n{\"type\"=>\"update\", \"summary\"=>\"Keyword arguments on <code>Struct.new</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Removed Top-level constant lookup\"}"},{"category":"Ruby 2.4","task":"2.4.10","start":"2020-03-31","end":"2020-11-17","color":"rgb(255, 165, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.9","start":"2019-10-02","end":"2020-03-31","color":"rgb(255, 150, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.8","start":"2019-10-01","end":"2019-10-02","color":"rgb(255, 135, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.7","start":"2019-08-28","end":"2019-10-01","color":"rgb(255, 120, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.6","start":"2019-04-01","end":"2020-03-31","color":"rgb(255, 105, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.5","start":"2018-10-17","end":"2019-04-01","color":"rgb(255, 90, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.4","start":"2018-03-28","end":"2018-10-17","color":"rgb(255, 75, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.3","start":"2017-12-14","end":"2018-03-28","color":"rgb(255, 60, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.2","start":"2017-09-14","end":"2017-12-14","color":"rgb(255, 45, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.1","start":"2017-03-22","end":"2017-09-14","color":"rgb(255, 30, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.4","task":"2.4.0","start":"2016-12-25","end":"2017-03-22","color":"rgb(255, 15, 0)","info":"All maintenance ended on March 31, 2020\n{\"name\"=>\"MRI 2.4.10\", \"url\"=>\"https://www.ruby-lang.org/en/news/2020/03/31/ruby-2-4-10-released/\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Enumerable#sum</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Integer#digits</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Regexp#match?</code>, <code>Regexp#named_captures</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"New constructor <code>Logger.new(STDOUT, level:, progname:)</code>\"}\n{\"type\"=>\"update\", \"summary\"=>\"Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision\"}\n{\"type\"=>\"removed\", \"summary\"=>\"Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)\"}"},{"category":"Ruby 2.3","task":"2.3.8","start":"2018-10-17","end":"2019-03-31","color":"rgb(255, 108, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.7","start":"2018-03-28","end":"2018-10-17","color":"rgb(255, 96, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.6","start":"2017-12-14","end":"2018-03-28","color":"rgb(255, 84, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.5","start":"2017-09-14","end":"2017-12-14","color":"rgb(255, 72, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.4","start":"2017-03-30","end":"2017-09-14","color":"rgb(255, 60, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.3","start":"2016-11-21","end":"2017-03-30","color":"rgb(255, 48, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.2","start":"2016-11-15","end":"2016-11-21","color":"rgb(255, 36, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.1","start":"2016-04-26","end":"2016-11-15","color":"rgb(255, 24, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"},{"category":"Ruby 2.3","task":"2.3.0","start":"2015-12-25","end":"2016-04-26","color":"rgb(255, 12, 0)","info":"All maintenance ended on March 31, 2019\n{\"name\"=>\"MRI 2.3.8\", \"url\"=>\"https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released\"}\n{\"name\"=>\"JRuby 9.1.17.0\", \"url\"=>\"https://www.jruby.org/2018/04/23/jruby-9-1-17-0\"}\n{\"type\"=>\"new\", \"summary\"=>\"Safe navigation operator <code>&.</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"Frozen string literals\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Array#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"<code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code>\"}\n{\"type\"=>\"new\", \"summary\"=>\"'Did you mean?'\"}"}]

  chart.dateFormatter.dateFormat = "yyyy-MM-dd";
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.inversed = true;

  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 70;
  dateAxis.baseInterval = { count: 1, timeUnit: "day" };
  // dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
  //dateAxis.strictMinMax = true;
  dateAxis.renderer.tooltipLocation = 0;

  var series1 = chart.series.push(new am4charts.ColumnSeries());
  series1.columns.template.height = am4core.percent(70);
  series1.columns.template.tooltipText = `
    [bold]Ruby {task}
    {openDateX}[/] - {dateX}[/]
  `;

  series1.dataFields.openDateX = "start";
  series1.dataFields.dateX = "end";
  series1.dataFields.categoryY = "category";
  series1.columns.template.propertyFields.fill = "color"; // get color from data
  series1.columns.template.propertyFields.stroke = "color";
  series1.columns.template.strokeOpacity = 1;
  var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
  bullet1.label.text = "{task}";

  chart.scrollbarX = new am4core.Scrollbar();
}