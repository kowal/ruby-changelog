# Ruby versions changelog

https://kowal.github.io/ruby-changelog/

Last updated on Nov 2018.

## Ruby 2.6
- :construction: *(2.6.0-preview2) May 2018*

* :new: Just-in-time Compiler
* :new: Endless ranges `(1..)`
* :arrows_counterclockwise: `then` alias for `Kernel#yeld_self`

## Ruby 2.5
- :white_check_mark: *(2.5.0) Dec 2017 - (2.5.3) Oct 2018*
- Implementations [MRI 2.5.3](https://www.ruby-lang.org/en/news/2018/10/18/ruby-2-5-3-released/), [JRuby 9.2.0.0](https://www.jruby.org/2018/05/24/jruby-9-2-0-0), ..

* :new: **`yield_self`** - unlike `#tap`, it returns the result of the block
* :new: `rescue` in blocks
* :new: `Hash#slice`, `Hash#transform_keys`
* :new: `ERB#result_with_hash`
* :arrows_counterclockwise: New `Array` aliases: `#prepend` (`#unshift`) & `#append` (`#push`)
* :arrows_counterclockwise: Pattern argument on `Enumerable` methods
* :arrows_counterclockwise: Keyword arguments on `Struct.new`
* :put_litter_in_its_place: Removed Top-level constant lookup

## Ruby 2.4
- :white_check_mark: *(2.4.0) Dec 2016 - (2.4.5) Oct 2018*

* :new: `Enumerable#sum`
* :new: `Integer#digits`
* :new: `Regexp#match?`, `Regexp#named_captures`
* :put_litter_in_its_place: Removed `Fixnum` and `Bignum` classes (unified to `Integer`)
* :arrows_counterclockwise: New constructor `Logger.new(STDOUT, level: :info, progname: 'LOG2')`
* :arrows_counterclockwise: Float: `#round`, `#ceil`, `#floor`, and `#truncate` now accept a precision argument

## Ruby 2.3
- :closed_lock_with_key: *Security maintenance planned until March 2019*
- *(2.3.0) Dec 2015 - (2.3.8) Oct 2018*
- Implementations [MRI 2.3.8](https://www.ruby-lang.org/en/news/2018/10/17/ruby-2-3-8-released/), [JRuby 9.1.17.0](https://www.jruby.org/2018/04/23/jruby-9-1-17-0), ..

* :new: **Safe navigation operator** `&.`
* :new: **Frozen string literals**
* :new: `Array#dig`
* :new: `Hash#fetch_values`, `Hash#to_proc`, `Hash#dig`
* :new: “Did you mean?”

## Ruby 2.2
- :lock: *All maintenance ended on March 31, 2018*

* :new: **Incremental GC** - fixes performance for "old" objects
* :new: The introduction of GC for symbols (mortal/immortal)
* :put_litter_in_its_place: `callcc` is obsolete - use Fiber instead
* :put_litter_in_its_place: `DL` has been removed from stdlib - use Fiddle instead
* :information_source: Rails 5.0 will target Ruby 2.2+ exclusively

## Ruby 2.1
- :lock: *All maintenance ended on March 31, 2017*

* :new: **Refinements** - lexical scope, are not global, must be explicitly activated (`using`)
* :new: `Exception#cause` - for libraries exceptions
* :new: `Rational` and `Complex` literals
* :new: Generational GC - young / old objects

## Ruby 2.0
- :lock: *All maintenance ended on February 24, 2016*

* :new: **Keyword arguments**
* :new: **`Module#prepend`**
* :new: `Enumerator#lazy`
* :new: `%i` a literal for symbol array

### Other resources

* [Ruby Versions Used in Commercial Projects in 2017](https://semaphoreci.com/blog/2017/11/08/ruby-versions-used-in-commercial-projects-in-2017.html) (semaphoreci blog)
