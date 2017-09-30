class Dragger {
  constructor (el) {
    this.el = el
    this.startPosition = { x: 0, y : 0 }
    this.startX = 0
    this.startY = 0
    this.started = false
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
    this.el.addEventListener('mousemove', this._move.bind(this))
    this.el.addEventListener('mouseup', this._end.bind(this))
    this.el.addEventListener('mouseleave', this._end.bind(this))
  }

  _unbindEvent () {}

  _start (e) {
    const { clientX, clientY } = e
    this.startPosition = this.getPosition()
    this.started = true
    this.startX = clientX
    this.startY = clientY
  }

  _move (e) {
    if (!this.started) {
      return
    }

    const { clientX, clientY } = e
    const offsetX = clientX - this.startX
    const offsetY = clientY - this.startY
    const oldPosition = this.startPosition

    this.setPosition(oldPosition.x + offsetX, oldPosition.y + offsetY)

    e.preventDefault()
  }

  _end () {
    this.started = false
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
