# Some Handy Dandies
Some handy AngularJS and UnderscoreJS utility things I find myself using over and over again.

## Angular Directives
### scroll-in
HTML attributes:
- `scroll-in=".element"` — The scrolling DOM element.
- `to=".element-child"` — The element to scroll to within the scroll-in container.
- `scroll-delay="300"` — _Optional_. Length of time (in milliseconds) to delay scrolling. Defaults to `0`.

### scroll-to
HTML attributes:
- `scroll-to=".element"` — The element to scroll to within the given `$element` the attribute is on.
- `scroll-delay="300"` — _Optional_. Length of time (in milliseconds) to delay scrolling. Defaults to `0`.

## Angular Factories
### StorageService
An injectable service for working with local storage.
- `.get(key)`
- `.save(key, data)`
- `.remove(key)`
- `.clearAll()`
