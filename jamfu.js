'use strict';

// extend Number to have a nim/max range clipping
// Number will return no smaller than min, or no larger than max
function numberClamp(min, max) {
    return Math.min(Math.max(this, min), max);
}

// from http://ejohn.org/blog/title-capitalization-in-javascript/
function titlecase(string){
	var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
	var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";
	var parts = [], split = /[:.;?!] |(?: |^)["Ò]/g, index = 0;

    var lower = function(word){
		return word.toLowerCase();
	};

	var upper = function(word){
	  return word.substr(0,1).toUpperCase() + word.substr(1);
	}

	while (true) {
		var m = split.exec(string);

		parts.push( string.substring(index, m ? m.index : string.length)
			.replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function(all){
				return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
			})
			.replace(RegExp("\\b" + small + "\\b", "ig"), lower)
			.replace(RegExp("^" + punct + small + "\\b", "ig"), function(all, punct, word){
				return punct + upper(word);
			})
			.replace(RegExp("\\b" + small + punct + "$", "ig"), upper));

		index = split.lastIndex;

		if ( m ) parts.push( m[0] );
		else break;
	}

	return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
		.replace(/(['Õ])S\b/ig, "$1s")
		.replace(/\b(AT&T|Q&A)\b/ig, function(all){
			return all.toUpperCase();
		});
}

function capitalize(string) {
    return (string !== null && string.length > 1) ? String(string).charAt(0).toUpperCase() + String(string).substring(1).toLowerCase() : string;
}

function uppercase(string){
    return (string !== null && string.length) ? String(string).toUpperCase() : string;
}

function lowercase(string){
    return (string !== null && string.length) ? String(string).toLowerCase() : string;
}

function camelcase(string){
    if(string !== null && string.length) {
        var mutatedString = string.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }).replace(/[\W_]+/g, '');
        return mutatedString.charAt(0).toLowerCase() + mutatedString.substr(1);
    }
    return string;
}

function lowernospace(string){
    return (string !== null && string.length) ? String(string).toLowerCase().replace(/[\W_]/g, '') : string;
}

function lowerdashed(string){
    return (string !== null && string.length) ? String(string).toLowerCase().trim().replace(/[\W_]+/g, '-').replace(/^-|-$/g, '') : string;
}

function stripTags(string) {
    return String(string).replace(/<[^>]+>/gm, '');
}

function filesize(size, kb1000){
    // turn a string of a number into an interger
    // but don't turn non-numeric strings into intergers
    size = isNaN(size) || _.isEmpty(size) ? size : size*1;

    // bail out if things are still bad.
    if (isNaN(size) || !_.isNumber(size) || size < 0) {
        return '';
    }

    var base = kb1000 ? 1000 : 1024;

    if (size === 0) {
        return '0 bytes'; // instead of 0.00 bytes
    } else if (size < base) {
        return size.toFixed(2) + ' bytes';
    } else if (size < Math.pow(base, 2)) {
        return (Math.round(((size * 100) / base)) / 100) + ' KB';
    } else if (size < Math.pow(base, 3)) {
        return (Math.round(((size * 100) / Math.pow(base, 2))) / 100) + ' MB';
    } else if (size < Math.pow(base, 4)) {
        return (Math.round(((size * 100) / Math.pow(base, 3))) / 100) + ' GB';
    } else if (size < Math.pow(base, 5)) {
        return (Math.round(((size * 100) / Math.pow(base, 4))) / 100) + ' TB';
    } else {
        return (Math.round(((size * 100) / Math.pow(base, 5))) / 100) + ' PB';
    }
}

// natural sort algorithm for Javascript - Version 0.7
// https://github.com/overset/javascript-natural-sort
function naturalSort (a, b) {
    var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
        sre = /(^[ ]*|[ ]*$)/g,
        dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        hre = /^0x[0-9a-f]+$/i,
        ore = /^0/,
        i = function(s) { return naturalSort.insensitive && (''+s).toLowerCase() || ''+s; },
        // convert all to strings strip whitespace
        x = i(a).replace(sre, '') || '',
        y = i(b).replace(sre, '') || '',
        // chunk/tokenize
        xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
        yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
        // numeric, hex or date detection
        xD = parseInt(x.match(hre)) || (xN.length !== 1 && x.match(dre) && Date.parse(x)),
        yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
        oFxNcL, oFyNcL;
    // first try and sort Hex codes or Dates
    if (yD) {
        if ( xD < yD ) {
            return -1;
        }
    } else if ( xD > yD ) {
        return 1;
    }
    // natural sorting through split numeric strings and default strings
    for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
        // find floats not starting with '0', string or 0 if not defined (Clint Priest)
        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
        // handle numeric vs string comparison - number < string - (Kyle Adams)
        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
        // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
        else if (typeof oFxNcL !== typeof oFyNcL) {
            oFxNcL += '';
            oFyNcL += '';
        }
        if (oFxNcL < oFyNcL) {
            return -1;
        }
        if (oFxNcL > oFyNcL) {
            return 1;
        }
    }
    return 0;
}


//
// UNDERSCORE THINGS
//
_.mixin({
    clamp: function(min, max) {
        return numberClamp(min, max);
    }
});

_.mixin({
    titlecase: function(string) {
        return titlecase(string);
    }
});

_.mixin({
    capitalize: function(string) {
        return capitalize(string);
    }
});

_.mixin({
    uppercase: function(string) {
        return uppercase(string);
    }
});

_.mixin({
    lowercase: function(string) {
        return lowercase(string);
    }
});

_.mixin({
    lowernospace: function(string) {
        return lowernospace(string);
    }
});

_.mixin({
    lowerdashed: function(string) {
        return lowerdashed(string);
    }
});

_.mixin({
    camelcase: function(string) {
        return camelcase(string);
    }
});

_.mixin({
    stripTags: function(string) {
        return stripTags(string);
    }
});

_.mixin({
    sortByNat: function(obj, value, context) {
        var iterator = _.isFunction(value) ? value : function(obj){ return obj[value]; };
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            return naturalSort(a, b);
        }), 'value');
    }
});


//
// ANGULAR THINGS
//
angular.module('jamfu', [])

// DIRECTIVES
.directive('scrollIn', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            delay: '@scrollDelay'
        },
        link: function(scope, $element, $attrs) {
            var delay = scope.delay ? scope.delay : 0;

            if($($attrs.scrollIn).length && $($attrs.to).length) {
                $element.on('click', function() { // $event
                    $timeout(function(){
                        $($attrs.scrollIn).scrollTo($($attrs.to), 300);
                    }, delay);
                });
            }
        }
    };
}])

.directive('scrollTo', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            delay: '@scrollDelay'
        },
        link: function(scope, $element, $attrs) {
            var delay = scope.delay ? scope.delay : 0;

            if($($attrs.scrollTo).length) {
                $element.on('click', function() { // $event
                    $timeout(function(){
                        $element.scrollTo($($attrs.scrollTo), 300);
                    }, delay);
                });
            }
        }
    };
}])

// Font Awesome - from https://github.com/picardy/angular-fontawesome
.directive('fa', function () {
	return {
		restrict: 'E',
		template: '<i class="fa"></i>',
		replace: true,
		link: function (scope, element, attrs) {

			/*** STRING ATTRS ***/
			// keep a state of the current attrs so that when they change,
			// we can remove the old attrs before adding the new ones.
			var currentClasses = {};

			// generic function to bind string attrs
			function _observeStringAttr (attr, baseClass) {
				attrs.$observe(attr, function () {
					baseClass = baseClass || 'fa-' + attr;
					element.removeClass(currentClasses[attr]);
					if (attrs[attr]) {
						var className = [baseClass, attrs[attr]].join('-');
						element.addClass(className);
						currentClasses[attr] = className;
					}
				});
			}

			_observeStringAttr('name', 'fa');
			_observeStringAttr('rotate');
			_observeStringAttr('flip');

			/**
			 * size can be passed "large" or an integer
			 */
			attrs.$observe('size', function () {
				var className;
				element.removeClass(currentClasses.size);

				if (attrs.size === 'large') {
					className = 'fa-lg';
				} else if (!isNaN(parseInt(attrs.size, 10))) {
					className = 'fa-' + attrs.size + 'x';
				}

				element.addClass(className);
				currentClasses.size = className;
			});

			/*** BOOLEAN ATTRS ***/
			// generic function to bind boolean attrs
			function _observeBooleanAttr (attr, className) {
				attrs.$observe(attr, function () {
					className = className || 'fa-' + attr;
					var value = attr in attrs && attrs[attr] !== 'false' && attrs[attr] !== false;
					element.toggleClass(className, value);
				});
			}

			_observeBooleanAttr('border');
			_observeBooleanAttr('fw');
			_observeBooleanAttr('inverse');
			_observeBooleanAttr('spin');

			/*** CONDITIONAL ATTRS ***/
			// automatically populate fa-li if DOM structure indicates
			element.toggleClass('fa-li', (
				element.parent() &&
				element.parent().parent() &&
				element.parent().parent().hasClass('fa-ul') &&
				element.parent().children()[0] === element[0]) &&
				attrs.list !== 'false' &&
				attrs.list !== false
			);
		}
	};
})

// FACTORIES
.factory('StorageService', function () {
    return {
        /**
         * get item out of local storage and if it's a string, turn it into a json object
         * @param key
         * @returns {*}
         */
        get: function (key) {
            var item = localStorage.getItem(key);
            if (item && _.isString(item) && _.isEmpty(item) === false) {
                return angular.fromJson(item);
            } else {
                return item;
            }
        },

        /**
         * save object as a json string
         * @param key
         * @param data
         */
        save: function (key, data) {
            // localStorage.setItem(key, JSON.stringify(data));
            localStorage.setItem(key, angular.toJson(data));
        },

        /**
         * remove a specific item
         * @param key
         */
        remove: function (key) {
            localStorage.removeItem(key);
        },

        /**
         * blow them all away
         */
        clearAll : function () {
            localStorage.clear();
        }
    };
})

// FILTERS
.filter('titlecase', function() {
    return function(string) {
        return titlecase(string);
    };
})

.filter('capitalize', function() {
    return function(string) {
        return capitalize(string);
    };
})

.filter('uppercase', function(){
    return function(string) {
        return uppercase(string);
    };
})

.filter('lowercase', function(){
    return function(string) {
        return lowercase(string);
    };
})

.filter('lowernospace', function(){
    return function(string) {
        return lowernospace(string);
    };
})

.filter('lowerdashed', function(){
    return function(string) {
        return lowerdashed(string);
    };
})

.filter('camelcase', function(){
    return function(string) {
        return camelcase(string);
    };
})

.filter('stripTags', function() {
    return function(string) {
        return stripTags(string);
    };
})

.filter('filesize', function(){
    return function(size, kb1000){
        return filesize(size, kb1000);
    };
})


// accepts a long number or a valid string.
// undefined, 0, '0', or negative number is treated as invalid and therefore returns '0'.
.filter('momentformat', function() {
    return function(dateString, format) {
        var str = '';
        if (!_.isUndefined(dateString) && dateString > 0 && dateString !== '0' && moment(dateString).isValid()) {
            str = moment(dateString).format(format);
        }
        return str;
    };
})

 // accepts a valid string and returns Moment.fromNow().
.filter('momentfromnow', function() {
    return function(dateString) {
        var str = '';
        if (!_.isUndefined(dateString) && dateString > 0 && dateString !== '0' && moment(dateString).isValid()) {
            str = moment(dateString).fromNow();
        }
        return str;
    };
});
