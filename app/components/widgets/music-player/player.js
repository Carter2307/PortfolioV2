import Components from '../../../classes/Components'
import MediaManager from './MediaManager'
import Timer from './Timer'
import Volume from './volume'

export default class Player extends Components {
  constructor() {
    super('player')
    this.init()
  }

  init() {
    this.isExpand = false
    this.src = this.elements.media.getAttribute('src')
    this.media = this.elements.media
    this.length = 0
    this.randomId = 0
    this.sound = null
    this.icon = this.elements.button.play.querySelector('i')

    this.mediaManager = new MediaManager()
    this.length = this.mediaManager.data.length
    this.randomId = Math.floor(Math.random() * this.length)

    this.componentsHandler(this.randomId)
    this.eventsListerner()
  }

  expand() {
    if (this.root.player.coverContainer.classList.contains('isExpand')) {
      this.root.player.button.expand.querySelector('span').textContent =
        'Expand'
      this.root.player.coverContainer.classList.remove('isExpand')
      this.root.player.coverContainer.style.height = '0px'
    } else {
      this.root.player.coverContainer.classList.add('isExpand')
      this.root.player.button.expand.querySelector('span').textContent =
        'Reduce'
      this.root.player.coverContainer.style.height = '180px'
    }
  }

  close() {
    this.elements.self.classList.add('isHidden')
    this.elements.button.toggler.style.display = 'flex'
  }

  show() {
    this.elements.self.classList.remove('isHidden')
    this.elements.button.toggler.style.display = 'none'
  }

  componentsHandler(id) {
    this.sound = this.mediaManager.data[id]
    this.media.src = this.sound.link
    this.setComponents(this.sound)
    this.timerHandler(this.media)
  }

  setComponents(sound) {
    this.coverHandler(sound)
    this.volumeHandler(this.media)
    this.setSoundDetails(sound)
  }

  coverHandler(sound) {
    this.elements.cover.src = sound.album.cover
  }

  setSoundDetails(sound) {
    this.elements.artist.innerText = sound.artist.name
    this.elements.title.innerText = sound.title
  }

  play() {
    if (this.elements.button.play.dataset.icon === 'rob-play') {
      this.elements.button.play.setAttribute('data-icon', 'rob-pause')
      this.icon.setAttribute('class', 'rob-pause')
      this.media.play()
    } else {
      this.elements.button.play.setAttribute('data-icon', 'rob-play')
      this.icon.setAttribute('class', 'rob-play')
      this.media.pause()
    }
  }

  pause() {
    if (this.elements.button.play.dataset.icon === 'rob-play') {
      this.elements.button.play.setAttribute('data-icon', 'rob-pause')
      this.icon.setAttribute('class', 'rob-pause')
      this.media.pause()
    } else {
      this.elements.button.play.setAttribute('data-icon', 'rob-play')
      this.icon.setAttribute('class', 'rob-play')
    }
  }

  stop() {
    this.media.pause()
    this.media.currentTime = 0
    this.elements.button.play.setAttribute('data-icon', 'rob-play')
    this.icon.setAttribute('class', 'rob-play')
  }

  next() {
    this.randomId++
    if (this.randomId > this.length - 1) this.randomId = 0
    this.stop()
    this.componentsHandler(this.randomId)
    this.play()
  }

  prev() {
    this.randomId--
    if (this.randomId < 0) this.randomId = this.length - 1
    this.stop()
    this.componentsHandler(this.randomId)
    this.play()
  }

  timerHandler(media) {
    this.time = new Timer(
      this.elements.timer.startTime,
      this.elements.timer.endTime,
      this.elements.timer.range,
      this.elements.timer.progress,
      this.elements.timer.preload,
      media
    )
  }

  volumeHandler(sound) {
    this.volume = new Volume(
      this.elements.volume.container,
      this.elements.volume.grapper,
      this.elements.volume.slider,
      sound
    )
  }

  eventsListerner() {
    this.elements.button.expand.addEventListener(
      'click',
      this.expand.bind(this)
    )
    this.elements.button.close.addEventListener('click', this.close.bind(this))
    // Control
    this.elements.button.play.addEventListener('click', this.play.bind(this))
    this.elements.button.next.addEventListener('click', this.next.bind(this))
    this.elements.button.prev.addEventListener('click', this.prev.bind(this))
    this.elements.button.toggler.addEventListener('click', this.show.bind(this))
  }
}
