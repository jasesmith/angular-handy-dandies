# Some Handy Dandies
Some handy AngularJS and UnderscoreJS utility things I find myself using over and over again.

#### Dependencies (for your bower)
- [AngularJS](https://angularjs.org/)
- [UnderscoreJS](http://underscorejs.org/)
- [MomentJS](http://momentjs.com/)

---

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

---

## Angular Factories
### StorageService
An injectable service for working with local storage.
- `.get(key)`
- `.save(key, data)`
- `.remove(key)`
- `.clearAll()`

---

## Angular Filters
### Text Filters
- `{{var | titlecase}}` — from http://ejohn.org/blog/title-capitalization-in-javascript/
- `{{var | capitalize}}`
- `{{var | uppercase}}`
- `{{var | lowercase}}`
- `{{var | lowernospace}}`
- `{{var | lowerdashed}}`
- `{{var | camelcase}}`

### Misc Filters
- `{{var | stripTags}}`
- `{{var | filesize}}`

### Date Filters
- `{{var | momentformat:''}}`
- `{{var | momentfromnow}}`

---

## Underscore Mixins
### Number Mixins
- `_.clamp(min, max)`

### Text Mixins
- `_.titlecase(string)`
- `_.capitalize(string)`
- `_.uppercase(string)`
- `_.lowercase(string)`
- `_.lowernospace(string)`
- `_.lowerdashed(string)`
- `_.camelcase(string)`

### Misc Mixins
- `_.stripTags(string)`
- `_.sortByNat(object|array, iterator)` — from https://github.com/overset/javascript-natural-sort
```
_.sortByNat(items, function(item) {
    return item[val.sort];
});
```
