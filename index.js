'use strict';

var on = window.addEventListener;
var off = window.removeEventListener;

var scrollobserve = function scrollobserve() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.scrollobserve';

  var defaults = {
    reverse: true,
    inViewClass: 'so-in',
    offViewClass: 'so-out',
    offset: 0,
    ignoreTransform: true
  };
  var config = Object.assign({}, defaults, options);
  var scrollTop = 0;
  var lastScroll = undefined;
  var observables = [];
  var frame = void 0;

  var index = function index() {
    var els = document.querySelectorAll(selector);
    return observables = Array.from(els).map(function (el) {
      var thisEl = el;
      var rect = {};
      if (config.ignoreTransform) {
        var offsetTop = 0;

        var offsetHeight = el.offsetHeight;
        while (el) {
          offsetTop += el.offsetTop;
          el = el.offsetParent;
        }
        rect.top = offsetTop;
        rect.bottom = offsetTop + offsetHeight;
      } else {
        rect = el.getBoundingClientRect();
      }
      rect.el = thisEl;
      return rect;
    });
  };

  var update = function update() {
    frame = false;
    var height = window.innerHeight;
    observables.forEach(function (rect) {
      var reveal = rect.bottom > scrollTop && rect.top < scrollTop + height - height * config.offset;
      if (rect.reveal !== reveal) {
        rect.el.classList.toggle(config.inViewClass, reveal);
        rect.el.classList.toggle(config.offViewClass, !reveal);
      }
      rect.reveal = reveal;
    });

    if (!config.reverse) {
      observables = observables.filter(function (rect) {
        return !rect.reveal;
      });
    }
  };

  var check = function check() {
    if (observables.length && lastScroll !== scrollTop) {
      frame = frame || requestAnimationFrame(update);
    }
  };

  var onScroll = function onScroll() {
    scrollTop = window.pageYOffset;
    check();
  };

  index();
  check();
  on('scroll', onScroll);
  on('resize', index);
  on('resize', onScroll);

  return {
    observables: observables,
    config: config,
    destroy: function destroy() {
      off('scroll', onScroll);
      off('resize', index);
      off('resize', onScroll);
    }
  };
};

module.exports = scrollobserve;
