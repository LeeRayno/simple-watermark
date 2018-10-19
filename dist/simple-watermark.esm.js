
/*!
 * simple-watermark.js v 1.0.0
 * (c) 2018 - 2018 LeeRayno
 * Released under the MIT License 
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var DEFAULT_OPTIONS = {
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
};

var Watermark =
/*#__PURE__*/
function () {
  function Watermark() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    classCallCheck(this, Watermark);

    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    var el = this.options.el;
    this.$el = typeof el === 'string' ? document.querySelector(el) : el || document.body;
    this.$wm = document.createElement('div');
    this.init();
  }

  createClass(Watermark, [{
    key: "init",
    value: function init() {
      var _this$options = this.options,
          position = _this$options.position,
          zIndex = _this$options.zIndex,
          width = _this$options.width,
          height = _this$options.height,
          textAlign = _this$options.textAlign,
          textBaseline = _this$options.textBaseline,
          font = _this$options.font,
          fillStyle = _this$options.fillStyle,
          fillText = _this$options.fillText,
          rotate = _this$options.rotate;
      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      var ctx = canvas.getContext('2d');
      ctx.font = font;
      ctx.fillStyle = fillStyle;
      ctx.textAlign = textAlign;
      ctx.textBaseline = textBaseline;
      ctx.translate(parseFloat(width) / 2, parseFloat(height) / 2);
      ctx.rotate(Math.PI / 180 * rotate);
      ctx.fillText(fillText, 0, 0);
      var base64URL = canvas.toDataURL();
      var wmStyle = "\n      position: ".concat(position, ";\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: ").concat(zIndex, ";\n      pointer-events: none;\n      background-repeat: repeat;\n      background-image: url(").concat(base64URL, ");\n    ");
      this.$wm.setAttribute('style', wmStyle);
      this.$el.insertBefore(this.$wm, this.$el.firstChild);
    }
  }, {
    key: "destory",
    value: function destory() {
      this.$el.removeChild(this.$wm);
    }
  }]);

  return Watermark;
}();

export default Watermark;
