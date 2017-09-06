<div align="center" style="margin-bottom: 40px">

  <img src="https://cdn.rawgit.com/josephrexme/scrollobserve/bdf90eac/scrollobserve.svg" alt="Scrollobserve" width="300">

</div>

ScrollObserve is a plugin for animating and applying styles to elements on scroll. It is similar to the [intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) in implementation with great performance and small filesize less than 1kb when minified and gzipped.

## Installation
NPM,

```bash
npm install scrollobserve
```
CDN,

```html
<script src="https://unpkg.com/scrollobserve/dist/scrollobserve.min.js"></script>
```

## Basic Usage
With CDN,

```js
scrollobserve();
```

With NPM,
```js
import scrollobserve from 'scrollobserve';

scrollobserve();
```

When initialized in your JavaScript you can add `scrollobserve` class to trigger on elements.

```html
<div class="scrollobserve">Animate me in viewport</div>
```

To set behavior for your element when scrolled into and out you could use the default classes `so-in` and `so-out`

```css
.scrollobserve{
  transition: 1s background transform ease;
  background: rebeccapurple;
}
.so-in{
  background: crimson;
}
.so-out{
  transform: rotate(-45deg);
}
```

Custom classes can also be used:

```js
scrollobserve({ inViewClass: 'myInclass', offViewClass: 'myOutClass' }, '.scrolltrigger');
```

## Options

#### reverse
This determines the behavior when scrolling to bottom and when scrolling back to top of a page. If set to `true` animations are applied both ways (this is the default), if set to `false` animations only happen on initial scroll to bottom.

Example:
```js
scrollobserve({ reverse: false });
```

#### inViewClass
Custom class to handle animation in CSS when element intersects viewport
#### offViewClass
Custom class to handle animation in CSS when element is out of viewport. This is usually not needed when `reverse` is set to true as it goes back to initial state of the `scrolltrigger` class.
#### offset
Determines the offset of the observed element from viewport intersection before styles and animations are applied. Defaults to 0.
#### ignoreTransform
When set to false it uses `getBoundingClientRect()` to get precise location of the element to the top of the viewport. When true, it ignore existing transforms like a `translate` on the element to get the initial position of the element in the window. Defaults to true.

## Methods
#### destroy
Revokes the `scrollobserve()` function in program execution
```js
const scrollobserve = scrollobserve();

scrollobserve.destroy();
```
#### observables
Returns an array of all the elements on the page that are being observed by `scrollobserve`.
```js
scrollobserve.observables();
```
#### config
Returns the current config being used which is an addition of custom options and existing defaults when not overriden.
```js
scrollobserve.config();
```

## License
Licensed under MIT License, Copyright © Joseph Rex

See [LICENSE](https://github.com/josephrexme/scrollobserve/blob/master/LICENSE) for more information.
