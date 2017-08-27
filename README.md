<div align="center">

![ScrollObserve](https://cdn.rawgit.com/josephrexme/scrollobserve/d425de96/scrollobserve.svg)

</div>

ScrollObserve is a plugin for animating and applying styles to elements on scroll.

## Installation

```bash
npm install scrollobserve
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
  transition: 1s background transform;
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
#### offViewClass
#### offset
#### ignoreTransform


## License
Licensed under MIT License, Copyright © Joseph Rex

See [LICENSE](https://github.com/josephrexme/scrollobserve/blob/master/LICENSE) for more information.
