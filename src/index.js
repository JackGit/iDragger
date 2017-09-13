// event: start, drag, stop
//

var Utils = {
  on: function () {},
  off: function () {}
}

// var dragger = iDragger(options)
// dragger(t1)
// dragger(t2)
function IDragger (client, options) {
  var defaultOptions = {
    startEvent: ['mousedown', 'touchstart'],
    dragEvent: ['mousemove', 'touchmove'],
    stopEvent: ['mouseup', 'touchend'],
    addEvent: function () {},
    removeEvent: function () {},
    position: function () {},
    getPosition: function () {}
  }

  this.options.onDragStart
  this.options.onDrag
  this.options.onDragEnd
}

IDragger.prototype = {
  constructor: IDragger,
  _init: function () {},
  _start: function () {},
  _drag: function () {},
  _stop: function () {},
  destroy: function () {}
}

// proxy(options)(client)
function proxy (client, options) {
  return {
    client: client,
    bindEvent: function (eventName, handler) {
      client.addEventListener(eventName, handler)
    },
    unbindEvent: function (eventName, handler) {
      client.removeEventListener(eventName, handler)
    }
  }
}
