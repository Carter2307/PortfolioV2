export default class Navigation {
  constructor (play, next, prev, media) {
    this.elements = { play, next, prev }
    this.media = media

    this.icon = this.elements.play.querySelector('i')

    this.eventListener()
  }

  play () {
    console.log(this.elements.play)
    if (this.elements.play.dataset.icon === 'rob-play') {
      this.elements.play.setAttribute('data-icon', 'rob-pause')
      this.icon.setAttribute('class', 'rob-pause')
      this.media.play()
    } else {
      this.elements.play.setAttribute('data-icon', 'rob-play')
      this.icon.setAttribute('class', 'rob-play')
      this.pause()
    }
  }

  pause () {
    this.media.pause()
  }

  stop () {
    this.pause()
    this.media.currentTime = 0
    this.elements.play.setAttribute('data-icon', 'rob-play')
    this.icon.setAttribute('class', 'rob-Play')
  }

  eventListener () {
    this.elements.play.addEventListener('click', this.play.bind(this))
  }
}
