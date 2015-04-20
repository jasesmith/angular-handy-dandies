# JAMFU
Some handy AngularJS and UnderscoreJS utilities and other useful things I find myself using over and over again.

#### Dependencies (included via Bower)
- [jQuery](https://jquery.com/)
- [AngularJS](https://angularjs.org/)
- [MomentJS](http://momentjs.com/)
- [Font Awesome](http://fontawesome.io/)
- [UnderscoreJS](http://underscorejs.org/)

---

#### To Install:

```
$ bower install jamfu
```

#### After the Bower install, add this to your html file:
```
// in the head
<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css" media="screen" charset="utf-8" />

//
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/underscore/underscore-min.js"></script>
<script src="bower_components/jquery.scrollTo/jquery.scrollTo.min.js"></script>
<script src="bower_components/moment/min/moment.min.js"></script>
<script src="bower_components/jamfu/jamfu.js"></script>
```

## Angular Directives
### scroll-in
`<div scroll-in="" to="" scroll-delay=""></div>`
- `scroll-in=".element"` — The scrolling DOM element.
- `to=".element-child"` — The element to scroll to within the scroll-in container.
- `scroll-delay="300"` — _Optional_. Length of time (in milliseconds) to delay scrolling. Defaults to `0`.

### scroll-to
`<div scroll-to="" scroll-delay=""></div>`
- `scroll-to=".element"` — The element to scroll to within the given `$element` the attribute is on.
- `scroll-delay="300"` — _Optional_. Length of time (in milliseconds) to delay scrolling. Defaults to `0`.

### fa
`<fa name=""></fa>` — from https://github.com/picardy/angular-fontawesome

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
