import Components from '../../../classes/Components'

export default class Player extends Components {
  constructor () {
    super('player')
    this.init()
  }

  init () {
    this.isExpand = false
    this.eventsListerner()
  }

  expand () {
    if (this.selectors.player.cover.classList.contains('isExpand')) {
      this.selectors.player.cover.classList.remove('isExpand')
      this.selectors.player.cover.style.height = '0px'
    } else {
      this.selectors.player.cover.classList.add('isExpand')
      this.selectors.player.cover.style.height = '180px'
    }
  }

  close () {
    this.elements.self.classList.add('isHidden')
  }

  play () {}
  pause () {}
  nextTrack () {}
  previousTrack () {}

  eventsListerner () {
    this.elements.button.expand.addEventListener('click', this.expand.bind(this))

    this.elements.button.close.addEventListener('click', this.close.bind(this))
  }
}
