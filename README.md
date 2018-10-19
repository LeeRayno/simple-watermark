# simple-watermark

> A simple watermark for CMS Web page

## Installing

``` bash
# install via npm
npm i simple-watermark -S
```

## Usage

``` js
// ES6
import Watermark from 'simple-watermark'
// or commonjs
const Watermark = require('simple-watermark')
// or cdn
<script src="https://unpkg.com/simple-watermark@1.0.0/dist/simple-watermark.js"></script>

const watermark = new Watermark({
  // options
})

// if you want to destory the instance of watermark
watermark.destory()
```

## Options

``` js
// default options
const DEFAULT_OPTIONS = {
  el: document.body,
  position: 'fixed',
  zIndex: 2000,
  width: '200px',
  height: '150px',
  textAlign: 'center',
  textBaseline: 'middle',
  font: '20px microsoft yahei',
  fillStyle: 'rgba(184, 184, 184, .8)',
  fillText: 'watermark',
  rotate: 30
}
```

## Demo

[here](https://leerayno.github.io/simple-watermark/index.html)

![watermark](watermark.png)