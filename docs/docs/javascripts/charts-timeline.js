window.onload = function () {
  var container = document.getElementById('timeline');

  if (container) {
    removeSidebars();

    google.charts.load('current', {'packages':['timeline']});
    google.charts.setOnLoadCallback(drawChart);
  }

  function getChartRows() {
    return mapDateParams([["Ruby 3.3","3.3.3","Introduced Prism parser as a default gem, replacing Ripper<br>Lrama replaces Bison as parser generator<br>Major YJIT performance improvements and introduction of RJIT, a pure-Ruby JIT compiler<br>Introduction of M:N thread scheduler for efficient thread management<br>Several performance improvements in the Garbage Collector<br>Enhancements in IRB including advanced irb:rdbg integration and pager support","2024-06-12","2027-03-31"],["Ruby 3.3","3.3.2","Introduced Prism parser as a default gem, replacing Ripper<br>Lrama replaces Bison as parser generator<br>Major YJIT performance improvements and introduction of RJIT, a pure-Ruby JIT compiler<br>Introduction of M:N thread scheduler for efficient thread management<br>Several performance improvements in the Garbage Collector<br>Enhancements in IRB including advanced irb:rdbg integration and pager support","2024-05-30","2024-06-12"],["Ruby 3.3","3.3.1","CVE-2024-27282: Arbitrary memory address read vulnerability with Regex search<brCVE-2024-27281: RCE vulnerability with .rdoc_options in RDoc<brCVE-2024-27280: Buffer overread vulnerability in StringIO","2024-04-23","2024-05-30"],["Ruby 3.3","3.3.0","Introduced Prism parser as a default gem, replacing Ripper<br>Lrama replaces Bison as parser generator<br>Major YJIT performance improvements and introduction of RJIT, a pure-Ruby JIT compiler<br>Introduction of M:N thread scheduler for efficient thread management<br>Several performance improvements in the Garbage Collector<br>Enhancements in IRB including advanced irb:rdbg integration and pager support","2023-12-25","2024-04-23"],["Ruby 3.2","3.2.4","CVE-2024-27282: Arbitrary memory address read vulnerability with Regex search<brCVE-2024-27281: RCE vulnerability with .rdoc_options in RDoc<brCVE-2024-27280: Buffer overread vulnerability in StringIO","2024-04-23","2026-03-31"],["Ruby 3.2","3.2.3","CVE-2023-36617: ReDoS vulnerability in URI","2024-01-18","2024-04-23"],["Ruby 3.2","3.2.2","CVE-2023-28755: ReDoS vulnerability in URI<brCVE-2023-28756: ReDoS vulnerability in Time","2023-03-30","2024-01-18"],["Ruby 3.2","3.2.1","WASI based WebAssembly support<br>Production-ready YJIT<br>Regexp improvements against ReDoS<br>IRB improvements (SyntaxSuggest, ErrorHighlight)<br>Bundler 2.4 now uses PubGrub resolver instead of Molinillo","2023-02-08","2023-03-30"],["Ruby 3.2","3.2.0","WASI based WebAssembly support<br>Production-ready YJIT<br>Regexp improvements against ReDoS<br>IRB improvements (SyntaxSuggest, ErrorHighlight)<br>Bundler 2.4 now uses PubGrub resolver instead of Molinillo","2022-12-25","2023-02-08"],["Ruby 3.1","3.1.6","YJIT: New experimental in-process JIT compiler<br>debug gem: A new debugger<br>error_highlight: Fine-grained error location in backtrace<br>IRB Autocomplete and Documentation Display<br>Values in Hash literals and keyword arguments can be omitted.<br>Updates in RBS / TypeProf","2024-05-29","2025-03-31"],["Ruby 3.1","3.1.5","CVE-2024-27282: Arbitrary memory address read vulnerability with Regex search<brCVE-2024-27281: RCE vulnerability with .rdoc_options in RDoc<brCVE-2024-27280: Buffer overread vulnerability in StringIO","2024-04-23","2024-05-29"],["Ruby 3.1","3.1.4","CVE-2023-28755: ReDoS vulnerability in URI<brCVE-2023-28756: ReDoS vulnerability in Time","2023-03-30","2024-04-23"],["Ruby 3.1","3.1.3","CVE-2021-33621: HTTP response splitting in CGI","2022-11-24","2023-03-30"],["Ruby 3.1","3.1.2","CVE-2022-28738: Double free in Regexp compilation<brCVE-2022-28739: Buffer overrun in String-to-Float conversion","2022-04-12","2022-11-24"],["Ruby 3.1","3.1.1","YJIT: New experimental in-process JIT compiler<br>debug gem: A new debugger<br>error_highlight: Fine-grained error location in backtrace<br>IRB Autocomplete and Documentation Display<br>Values in Hash literals and keyword arguments can be omitted.<br>Updates in RBS / TypeProf","2022-02-18","2022-04-12"],["Ruby 3.1","3.1.0","YJIT: New experimental in-process JIT compiler<br>debug gem: A new debugger<br>error_highlight: Fine-grained error location in backtrace<br>IRB Autocomplete and Documentation Display<br>Values in Hash literals and keyword arguments can be omitted.<br>Updates in RBS / TypeProf","2021-12-25","2022-02-18"],["Ruby 3.0","3.0.6","CVE-2023-28755: ReDoS vulnerability in URI<brCVE-2023-28756: ReDoS vulnerability in Time","2023-03-30","2024-03-31"],["Ruby 3.0","3.0.5","CVE-2021-33621: HTTP response splitting in CGI","2022-11-24","2023-03-30"],["Ruby 3.0","3.0.4","CVE-2022-28738: Double free in Regexp compilation<brCVE-2022-28739: Buffer overrun in String-to-Float conversion","2022-04-12","2022-11-24"],["Ruby 3.0","3.0.3","CVE-2021-41817: Regular Expression Denial of Service Vulnerability of Date Parsing Methods<brCVE-2021-41816: Buffer Overrun in CGI.escape_html<brCVE-2021-41819: Cookie Prefix Spoofing in CGI::Cookie.parse","2021-11-24","2022-04-12"],["Ruby 3.0","3.0.2","CVE-2021-31810: Trusting FTP PASV responses vulnerability in Net::FTP<brCVE-2021-32066: A StartTLS stripping vulnerability in Net::IMAP<brCVE-2021-31799: A command injection vulnerability in RDoc","2021-07-07","2021-11-24"],["Ruby 3.0","3.0.1","CVE-2021-28965: XML round-trip vulnerability in REXML<brCVE-2021-28966: Path traversal in Tempfile on Windows","2021-04-05","2021-07-07"],["Ruby 3.0","3.0.0","MJIT improvements<br>Ractor - Actor-model like concurrent abstraction<br>Fiber Scheduler for light-weight concurrency<br>RBS - a language to describe the structure of Ruby classes<br>TypeProf - type analysis tool, generates RBS type signatures<br><code>Hash#except</code><br>Keyword arguments are separated from other arguments<br>Rightward assignment statement<br>Reversed (again) order of backtrace <br>Endless method definition <code>def square(x) = x * x</code>","2020-12-25","2021-04-05"],["Ruby 2.7","2.7.8","CVE-2023-28755: ReDoS vulnerability in URI<brCVE-2023-28756: ReDoS vulnerability in Time","2023-03-30","2023-03-31"],["Ruby 2.7","2.7.7","CVE-2021-33621: HTTP response splitting in CGI","2022-11-24","2023-03-30"],["Ruby 2.7","2.7.6","CVE-2022-28739: Buffer overrun in String-to-Float conversion","2022-04-12","2022-11-24"],["Ruby 2.7","2.7.5","CVE-2021-41817: Regular Expression Denial of Service Vulnerability of Date Parsing Methods<brCVE-2021-41816: Buffer Overrun in CGI.escape_html<brCVE-2021-41819: Cookie Prefix Spoofing in CGI::Cookie.parse","2021-11-24","2022-04-12"],["Ruby 2.7","2.7.4","CVE-2021-31810: Trusting FTP PASV responses vulnerability in Net::FTP<brCVE-2021-32066: A StartTLS stripping vulnerability in Net::IMAP<brCVE-2021-31799: A command injection vulnerability in RDoc","2021-07-07","2021-11-24"],["Ruby 2.7","2.7.3","CVE-2021-28965: XML round-trip vulnerability in REXML<brCVE-2021-28966: Path traversal in Tempfile on Windows","2021-04-05","2021-07-07"],["Ruby 2.7","2.7.2","CVE-2020-25613: Potential HTTP Request Smuggling Vulnerability in WEBrick","2020-10-02","2021-04-05"],["Ruby 2.7","2.7.1","CVE-2020-10663: Unsafe Object Creation Vulnerability in JSON (Additional fix)<brCVE-2020-10933: Heap exposure vulnerability in the socket library","2020-03-31","2020-10-02"],["Ruby 2.7","2.7.0","Pattern Matching<br>REPL improvements<br>Separation of positional and keyword arguments<br>Argument forwarding<br>Compaction GC","2019-12-25","2020-03-31"],["Ruby 2.6","2.6.10","CVE-2022-28739: Buffer overrun in String-to-Float conversion","2022-04-12","2022-04-13"],["Ruby 2.6","2.6.9","CVE-2021-41817: Regular Expression Denial of Service Vulnerability of Date Parsing Methods<brCVE-2021-41819: Cookie Prefix Spoofing in CGI::Cookie.parse","2021-11-24","2022-04-12"],["Ruby 2.6","2.6.8","CVE-2021-31810: Trusting FTP PASV responses vulnerability in Net::FTP<brCVE-2021-32066: A StartTLS stripping vulnerability in Net::IMAP<brCVE-2021-31799: A command injection vulnerability in RDoc","2021-07-07","2021-11-24"],["Ruby 2.6","2.6.7","CVE-2020-25613: Potential HTTP Request Smuggling Vulnerability in WEBrick<brCVE-2021-28965: XML round-trip vulnerability in REXML","2020-04-05","2021-07-07"],["Ruby 2.6","2.6.6","CVE-2020-10663: Unsafe Object Creation Vulnerability in JSON (Additional fix)<brCVE-2020-10933: Heap exposure vulnerability in the socket library","2020-03-31","2020-04-05"],["Ruby 2.6","2.6.5","CVE-2019-16255: A code injection vulnerability of Shell#[] and Shell#test<brCVE-2019-16254: HTTP response splitting in WEBrick (Additional fix)<brCVE-2019-15845: A NUL injection vulnerability of File.fnmatch and File.fnmatch?<brCVE-2019-16201: Regular Expression Denial of Service vulnerability of WEBrick’s Digest access authentication","2019-10-01","2020-03-31"],["Ruby 2.6","2.6.4","endless ranges <code>(1..)</code><br><code>Enumerable#chain</code><br>function composition operators <code><<, >></code> to <code>Proc</code><br><code>#then</code> alias for <code>#yield_self</code><br>JIT compiler <code>--jit</code><br>Bundler is installed as a default gem","2019-08-28","2019-10-01"],["Ruby 2.6","2.6.3","endless ranges <code>(1..)</code><br><code>Enumerable#chain</code><br>function composition operators <code><<, >></code> to <code>Proc</code><br><code>#then</code> alias for <code>#yield_self</code><br>JIT compiler <code>--jit</code><br>Bundler is installed as a default gem","2019-04-17","2019-08-28"],["Ruby 2.6","2.6.2","endless ranges <code>(1..)</code><br><code>Enumerable#chain</code><br>function composition operators <code><<, >></code> to <code>Proc</code><br><code>#then</code> alias for <code>#yield_self</code><br>JIT compiler <code>--jit</code><br>Bundler is installed as a default gem","2019-03-13","2019-04-17"],["Ruby 2.6","2.6.1","endless ranges <code>(1..)</code><br><code>Enumerable#chain</code><br>function composition operators <code><<, >></code> to <code>Proc</code><br><code>#then</code> alias for <code>#yield_self</code><br>JIT compiler <code>--jit</code><br>Bundler is installed as a default gem","2019-01-30","2019-03-13"],["Ruby 2.6","2.6.0","endless ranges <code>(1..)</code><br><code>Enumerable#chain</code><br>function composition operators <code><<, >></code> to <code>Proc</code><br><code>#then</code> alias for <code>#yield_self</code><br>JIT compiler <code>--jit</code><br>Bundler is installed as a default gem","2018-12-25","2019-01-30"],["Ruby 2.5","2.5.9","CVE-2020-25613: Potential HTTP Request Smuggling Vulnerability in WEBrick<brCVE-2021-28965: XML round-trip vulnerability in REXML","2021-04-05","2021-04-06"],["Ruby 2.5","2.5.8","CVE-2020-10663: Unsafe Object Creation Vulnerability in JSON (Additional fix)<brCVE-2020-10933: Heap exposure vulnerability in the socket library","2020-03-31","2021-04-05"],["Ruby 2.5","2.5.7","CVE-2019-16255: A code injection vulnerability of Shell#[] and Shell#test<brCVE-2019-16254: HTTP response splitting in WEBrick (Additional fix)<brCVE-2019-15845: A NUL injection vulnerability of File.fnmatch and File.fnmatch?<brCVE-2019-16201: Regular Expression Denial of Service vulnerability of WEBrick’s Digest access authentication","2019-10-01","2020-03-31"],["Ruby 2.5","2.5.6","<code>yield_self</code><br><code>rescue</code> in blocks<br><code>Hash#slice</code> and <code>Hash#transform_keys</code><br><code>ERB#result_with_hash</code><br>New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code><br>Pattern argument on <code>Enumerable</code> methods<br>Keyword arguments on <code>Struct.new</code><br>Removed Top-level constant lookup<br>Reverse order of backtrace (oldest call first)","2019-08-28","2019-10-01"],["Ruby 2.5","2.5.5","<code>yield_self</code><br><code>rescue</code> in blocks<br><code>Hash#slice</code> and <code>Hash#transform_keys</code><br><code>ERB#result_with_hash</code><br>New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code><br>Pattern argument on <code>Enumerable</code> methods<br>Keyword arguments on <code>Struct.new</code><br>Removed Top-level constant lookup<br>Reverse order of backtrace (oldest call first)","2019-03-15","2019-08-28"],["Ruby 2.5","2.5.4","<code>yield_self</code><br><code>rescue</code> in blocks<br><code>Hash#slice</code> and <code>Hash#transform_keys</code><br><code>ERB#result_with_hash</code><br>New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code><br>Pattern argument on <code>Enumerable</code> methods<br>Keyword arguments on <code>Struct.new</code><br>Removed Top-level constant lookup<br>Reverse order of backtrace (oldest call first)","2019-03-13","2019-03-15"],["Ruby 2.5","2.5.3","<code>yield_self</code><br><code>rescue</code> in blocks<br><code>Hash#slice</code> and <code>Hash#transform_keys</code><br><code>ERB#result_with_hash</code><br>New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code><br>Pattern argument on <code>Enumerable</code> methods<br>Keyword arguments on <code>Struct.new</code><br>Removed Top-level constant lookup<br>Reverse order of backtrace (oldest call first)","2018-10-18","2019-03-13"],["Ruby 2.5","2.5.2","CVE-2018-16396: Tainted flags are not propagated in Array#pack and String#unpack with some directives<brCVE-2018-16395: OpenSSL::X509::Name equality check does not work correctly","2018-10-17","2018-10-18"],["Ruby 2.5","2.5.1","CVE-2017-17742: HTTP response splitting in WEBrick<brCVE-2018-6914: Unintentional file and directory creation with directory traversal in tempfile and tmpdir<brCVE-2018-8777: DoS by large request in WEBrick<brCVE-2018-8778: Buffer under-read in String#unpack<brCVE-2018-8779: Unintentional socket creation by poisoned NUL byte in UNIXServer and UNIXSocket<brCVE-2018-8780: Unintentional directory traversal by poisoned NUL byte in Dir","2018-03-28","2018-10-17"],["Ruby 2.5","2.5.0","<code>yield_self</code><br><code>rescue</code> in blocks<br><code>Hash#slice</code> and <code>Hash#transform_keys</code><br><code>ERB#result_with_hash</code><br>New <code>Array</code> aliases - <code>#prepend (#unshift)</code> and <code>#append (#push)</code><br>Pattern argument on <code>Enumerable</code> methods<br>Keyword arguments on <code>Struct.new</code><br>Removed Top-level constant lookup<br>Reverse order of backtrace (oldest call first)","2017-12-25","2018-03-28"],["Ruby 2.4","2.4.10","CVE-2020-10663: Unsafe Object Creation Vulnerability in JSON (Additional fix)","2020-03-31","2020-04-01"],["Ruby 2.4","2.4.9","<code>Enumerable#sum</code><br><code>Integer#digits</code><br><code>Regexp#match?</code>, <code>Regexp#named_captures</code><br>New constructor <code>Logger.new(STDOUT, level:, progname:)</code><br>Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision<br>Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)","2019-10-02","2020-03-31"],["Ruby 2.4","2.4.8","CVE-2019-16255: A code injection vulnerability of Shell#[] and Shell#test<brCVE-2019-16254: HTTP response splitting in WEBrick (Additional fix)<brCVE-2019-15845: A NUL injection vulnerability of File.fnmatch and File.fnmatch?<brCVE-2019-16201: Regular Expression Denial of Service vulnerability of WEBrick’s Digest access authentication","2019-10-01","2019-10-02"],["Ruby 2.4","2.4.7","<code>Enumerable#sum</code><br><code>Integer#digits</code><br><code>Regexp#match?</code>, <code>Regexp#named_captures</code><br>New constructor <code>Logger.new(STDOUT, level:, progname:)</code><br>Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision<br>Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)","2019-08-28","2019-10-01"],["Ruby 2.4","2.4.6","<code>Enumerable#sum</code><br><code>Integer#digits</code><br><code>Regexp#match?</code>, <code>Regexp#named_captures</code><br>New constructor <code>Logger.new(STDOUT, level:, progname:)</code><br>Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision<br>Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)","2019-04-01","2019-08-28"],["Ruby 2.4","2.4.5","CVE-2018-16396: Tainted flags are not propagated in Array#pack and String#unpack with some directives<brCVE-2018-16395: OpenSSL::X509::Name equality check does not work correctly","2018-10-17","2019-04-01"],["Ruby 2.4","2.4.4","CVE-2017-17742: HTTP response splitting in WEBrick<brCVE-2018-6914: Unintentional file and directory creation with directory traversal in tempfile and tmpdir<brCVE-2018-8777: DoS by large request in WEBrick<brCVE-2018-8778: Buffer under-read in String#unpack<brCVE-2018-8779: Unintentional socket creation by poisoned NUL byte in UNIXServer and UNIXSocket<brCVE-2018-8780: Unintentional directory traversal by poisoned NUL byte in Dir","2018-03-28","2018-10-17"],["Ruby 2.4","2.4.3","CVE-2017-17405: Command injection vulnerability in Net::FTP","2017-12-14","2018-03-28"],["Ruby 2.4","2.4.2","CVE-2017-0898: Buffer underrun vulnerability in Kernel.sprintf<brCVE-2017-10784: Escape sequence injection vulnerability in the Basic authentication of WEBrick<brCVE-2017-14033: Buffer underrun vulnerability in OpenSSL ASN1 decode<brCVE-2017-14064: Heap exposure in generating JSON","2017-09-14","2017-12-14"],["Ruby 2.4","2.4.1","<code>Enumerable#sum</code><br><code>Integer#digits</code><br><code>Regexp#match?</code>, <code>Regexp#named_captures</code><br>New constructor <code>Logger.new(STDOUT, level:, progname:)</code><br>Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision<br>Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)","2017-03-22","2017-09-14"],["Ruby 2.4","2.4.0","<code>Enumerable#sum</code><br><code>Integer#digits</code><br><code>Regexp#match?</code>, <code>Regexp#named_captures</code><br>New constructor <code>Logger.new(STDOUT, level:, progname:)</code><br>Float: <code>#round</code>, <code>#ceil</code>, <code>#floor</code>, and <code>#truncate</code> now accept a precision<br>Removed <code>Fixnum</code> and <code>Bignum</code> classes (unified to <code>Integer</code>)","2016-12-25","2017-03-22"],["Ruby 2.3","2.3.8","CVE-2018-16396: Tainted flags are not propagated in Array#pack and String#unpack with some directives<brCVE-2018-16395: OpenSSL::X509::Name equality check does not work correctly","2018-10-17","2019-03-31"],["Ruby 2.3","2.3.7","CVE-2017-17742: HTTP response splitting in WEBrick<brCVE-2018-8777: DoS by large request in WEBrick<brCVE-2018-6914: Unintentional file and directory creation with directory traversal in tempfile and tmpdir<brCVE-2018-8778: Buffer under-read in String#unpack<brCVE-2018-8779: Unintentional socket creation by poisoned NUL byte in UNIXServer and UNIXSocket<brCVE-2018-8780: Unintentional directory traversal by poisoned NUL byte in Dir","2018-03-28","2018-10-17"],["Ruby 2.3","2.3.6","CVE-2017-17405: Command injection vulnerability in Net::FTP","2017-12-14","2018-03-28"],["Ruby 2.3","2.3.5","CVE-2017-0898: Buffer underrun vulnerability in Kernel.sprintf<brCVE-2017-10784: Escape sequence injection vulnerability in the Basic authentication of WEBrick<brCVE-2017-14033: Buffer underrun vulnerability in OpenSSL ASN1 decode<brCVE-2017-14064: Heap exposure vulnerability in generating JSON","2017-09-14","2017-12-14"],["Ruby 2.3","2.3.4","Safe navigation operator <code>&.</code><br>Frozen string literals<br><code>Array#dig</code><br><code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code><br>'Did you mean?'","2017-03-30","2017-09-14"],["Ruby 2.3","2.3.3","Safe navigation operator <code>&.</code><br>Frozen string literals<br><code>Array#dig</code><br><code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code><br>'Did you mean?'","2016-11-21","2017-03-30"],["Ruby 2.3","2.3.2","Safe navigation operator <code>&.</code><br>Frozen string literals<br><code>Array#dig</code><br><code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code><br>'Did you mean?'","2016-11-15","2016-11-21"],["Ruby 2.3","2.3.1","Safe navigation operator <code>&.</code><br>Frozen string literals<br><code>Array#dig</code><br><code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code><br>'Did you mean?'","2016-04-26","2016-11-15"],["Ruby 2.3","2.3.0","Safe navigation operator <code>&.</code><br>Frozen string literals<br><code>Array#dig</code><br><code>Hash#fetch_values</code>, <code>Hash#to_proc</code>, <code>Hash#dig</code><br>'Did you mean?'","2015-12-25","2016-04-26"]])
  };

  function mapDateParams(list) {
    return list.map(function(el) {
      return [
        el[0],
        el[1],
        el[2],
        new Date(el[3]),
        new Date(el[4])
      ];
    });
  };

  function drawChart() {
    var container = document.getElementById('timeline');
    if (container) {
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        console.log('getChartRows()');
        console.dir(getChartRows());

        dataTable.addColumn({ type: 'string', id: 'Ruby major version' });
        dataTable.addColumn({ type: 'string', id: 'Ruby version' });
        dataTable.addColumn({ type: 'string', role: 'tooltip', 'p': {'html': true}});
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows(getChartRows());

        var options = {
          tooltip: { isHtml: true },
          timeline: {
            // groupByRowLabel: false
            colorByRowLabel: true,
            rowLabelStyle: { fontSize: 10 }, barLabelStyle: { fontSize: 10 }
          },
          height: 1000,
          enableInteractivity: true,
          backgroundColor: '#ffd',
          avoidOverlappingGridLines: true
        };

        chart.draw(dataTable, options);
    } 
  };

  function removeSidebars() {
    const sidebarsPrimary = document.querySelectorAll('.md-sidebar.md-sidebar--primary');
    const sidebarsSecondary = document.querySelectorAll('.md-sidebar.md-sidebar--secondary');
    
    sidebarsPrimary.forEach(box => {
      box.remove();
    });

    sidebarsSecondary.forEach(box => {
      box.remove();
    });
  };
}
