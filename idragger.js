// TODO: support grid drag as plugin
// TODO: support drag by axis as plugin
// TODO: emit event: dragstart, dragmove, dragend

class Dragger {
  constructor (el) {
    this.el = el

    // when drag start, the startPosition is target position
    this.startPosition = { x: 0, y : 0 }

    // when drag start, startX, startY is the event start position
    this.startX = 0
    this.startY = 0

    this._move = this._move.bind(this)
    this._end = this._end.bind(this)
    this._init()
  }

  _init () {
    this.el.style.position = 'absolute'
    this.el.style.top = 0
    this.el.style.left = 0
    this._bindEvent()
  }

  _bindEvent () {
    this.el.addEventListener('mousedown', this._start.bind(this))
  }

  _unbindEvent () {}

  _start (e) {
    const { clientX, clientY } = e
    this.startPosition = this.getPosition()
    this.startX = clientX
    this.startY = clientY

    document.addEventListener('mousemove', this._move)
    document.addEventListener('mouseup', this._end)
  }

  _move (e) {
    const { clientX, clientY } = e
    const offsetX = clientX - this.startX
    const offsetY = clientY - this.startY
    const oldPosition = this.startPosition

    this.setPosition(oldPosition.x + offsetX, oldPosition.y + offsetY)

    e.preventDefault()
  }

  _end () {
    document.removeEventListener('mousemove', this._move)
    document.removeEventListener('mouseup', this._end)
  }

  getPosition () {
    const r = this.el.getBoundingClientRect()
    return {
      x: r.left,
      y: r.top
    }
  }

  setPosition (x, y) {
    this.el.style.top = y + 'px'
    this.el.style.left = x + 'px'
  }

  destroy () {}
}
