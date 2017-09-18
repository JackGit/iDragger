// consider how to use FP

// event: start, drag, stop
// startEvent: ['mousedown', 'touchstart'],
// dragEvent: ['mousemove', 'touchmove'],
// stopEvent: ['mouseup', 'touchend'],

// var dragger = iDragger(options)
// dragger(t1)
// dragger(t2)

export default iDragger = function (options) {
  return function (target) {
    
  }
}

export default class IDragger {
  constructor (client, options) {}

  _init () {}

  _start () {}

  _drag () {}

  _stop () {}

  destroy () {}
}


const notImplemented = fn => { throw new Error(`${fn}() is not implemented`) }
const domOn = function (eventName, handler) { this.addEventListener(eventName, handler) }
const domOff = function (eventName, handler) { this.removeEventListener(eventName, handler) }

/**
 * const client = proxy({
 *   on (eventName, handler) { this.addEventListener(eventName, handler) },
 *   off (eventName, handler) { this.removeEventListener(eventName, handler )},
 *   move (x, y) { this.style.top = y + 'px' this.style.left = x + 'px' },
 *   position () { return { x: this.getBoundingClientRect().left, y: this.getBoundingClientRect().top } }
 * })(client)
 *
 * client.on('mousemove', handler)
 */
function proxy (options = {}) {
  return function (client) {
    return {
      client,
      // bind event
      on: options.on.bind(client) || notImplemented('on'),
      // unbind event
      off: options.off.bind(client) || notImplemented('off'),
      // move client
      move: options.move.bind(client) || notImplemented('move'),
      // get position of client
      position: options.position.bind(client) || notImplemented('position')
    }
  }
}


export const positionProxy = proxy({
  on: domOn,
  off: domOff,
  move (x, y) {},
  position () {}
})
export const transformProxy = proxy({
  on: domOn,
  off: domOff,
  move (x, y) {},
  position () {}
})
