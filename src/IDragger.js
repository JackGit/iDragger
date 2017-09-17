// consider how to use FP

// event: start, drag, stop
//

function bindEvent () {}

function unbindEvent () {}

client.addEventListener('mousemove', handler)
displayObject.on('pointerdown', handler)

function bindDragStart (handler) {
  return this.client.on('mouvesss', handler)
}

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

export default class IDragger {
  constructor (client, options) {}

  _init () {}

  _start () {}

  _drag () {}

  _stop () {}

  destroy () {}
}

// proxy(client, options)
IDragger.proxy = function (client, options = {
  on: (eventName, handler) => client.addEventListener(eventName, handler),
  off: (eventName, handler) => client.removeEventListener(eventName, handler)
}) {
  return {
    client,
    on: options.on,
    off: options.off
  }
}

// proxy(options)(client)
function proxy (options = {}) {
  const throwError = () => fn => { throw new Error(`proxy.${fn}() is not implemented`) }
  return function (client) {
    return {
      client,
      // bind event
      on: options.on || throwError('on'),
      // unbind event
      off: options.off || throwError('off'),
      // move cliemove
      move: options.move || throwError('move'),
      // get position
      position: options.position || throwError('position')
    }
  }
}
