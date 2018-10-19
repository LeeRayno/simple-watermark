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
export default class Watermark {
  constructor(options = {}) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
    const el = this.options.el
    this.$el = (typeof el) === 'string' ? 
      document.querySelector(el) :
      el || document.body
    
    this.$wm = document.createElement('div')
    this.init()
  }

  init() {
    const {
      position,
      zIndex,
      width,
      height,
      textAlign,
      textBaseline,
      font,
      fillStyle,
      fillText,
      rotate
    } = this.options

    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)

    const ctx = canvas.getContext('2d')
    ctx.font = font
    ctx.fillStyle = fillStyle
    ctx.textAlign = textAlign
    ctx.textBaseline = textBaseline
    ctx.translate(parseFloat(width) / 2, parseFloat(height) / 2)
    ctx.rotate(Math.PI / 180 * rotate)
    ctx.fillText(fillText, 0, 0)

    const base64URL = canvas.toDataURL()

    const wmStyle = `
      position: ${position};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: ${zIndex};
      pointer-events: none;
      background-repeat: repeat;
      background-image: url(${base64URL});
    `
    this.$wm.setAttribute('style', wmStyle)
    this.$el.insertBefore(this.$wm, this.$el.firstChild)
  }

  destory() {
    this.$el.removeChild(this.$wm)
  }
}