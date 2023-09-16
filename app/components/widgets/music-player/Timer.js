export default class Timer {
  constructor(starttime, endtime, range, progress, preloader, media) {
    this.elements = { starttime, endtime, range, preloader, progress }
    this.media = media
    this.#init()
  }

  #init() {
    this.#addEventListener()
  }

  #isPlay() {
    console.log(this.media.currentTime)
    console.log('is start play')
  }

  #onPause() {
    console.log('Pause')
  }

  isEnded(e) {
    console.log(e)
  }

  #setTime() {
    this.hours = Math.floor(this.media.currentTime / 3600)
    this.minutes = Math.floor(this.media.currentTime / 60)
    this.seconds = Math.floor(this.media.currentTime - this.minutes * 60)

    this.hoursValue = this.minutesValue = this.secondsValue = 0

    if (this.hours <= 0) {
      this.hoursValue = `0${this.hours}`
    } else {
      this.hoursValue = this.hours
    }

    if (this.minutes < 10) {
      this.minutesValue = `0${this.minutes}`
    } else {
      this.minutesValue = this.minutes
    }

    if (this.seconds < 10) {
      this.secondsValue = `0${this.seconds}`
    } else {
      this.secondsValue = this.seconds
    }

    this.elements.starttime.textContent = `${this.minutesValue} : ${this.secondsValue}`
    this.#updateProgress()
  }

  #updateProgress() {
    this.elements.range.value = this.media.currentTime
    this.ratio = this.elements.range.value / this.elements.range.max
    this.elements.progress.style.width = `${this.ratio * 100}%`
  }

  #setFullTime() {
    const hours = Math.floor(this.media.duration / 3600)
    const minutes = Math.floor(this.media.duration / 60)
    const seconds = Math.floor(this.media.duration - minutes * 60)

    if (hours <= 0) {
      this.elements.endtime.textContent = `${
        minutes <= 9 ? '0' + minutes : minutes
      } : ${seconds <= 9 ? '0' + seconds : seconds}`
    } else {
      this.elements.endtime.textContent = `${hours}:${minutes}:${seconds}`
    }
  }

  #onTimeChange() {
    this.media.currentTime = this.elements.range.value
    this.#setTime()
  }

  #progress() {
    const duration = this.media.duration
    if (duration > 0) {
      for (let i = 0; i < this.media.buffered.length; i++) {
        if (
          this.media.buffered.start(this.media.buffered.length - 1 - i) <
          this.media.currentTime
        ) {
          console.log(
            this.media.buffered.end(
              this.media.buffered.length - 1 - i / duration
            ) * 100
          )
          this.elements.preloader.style.width =
            (this.media.buffered.end(this.media.buffered.length - 1 - i) /
              duration) *
              100 +
            '%'
          break
        }
      }
    }
  }

  #metaDataLoaded() {
    this.#setFullTime()
    this.elements.range.max = Math.floor(this.media.duration)

    this.elements.range.addEventListener('input', this.#onTimeChange.bind(this))
    this.media.addEventListener('play', this.#isPlay.bind(this))
    this.media.addEventListener('pause', this.#onPause.bind(this))
    this.media.addEventListener('ended', this.isEnded.bind(this))
    this.media.addEventListener('timeupdate', this.#setTime.bind(this))
  }

  #addEventListener() {
    this.media.addEventListener('progress', this.#progress.bind(this))
    this.media.addEventListener(
      'loadedmetadata',
      this.#metaDataLoaded.bind(this)
    )
  }
}
