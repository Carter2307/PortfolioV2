'use strict'
import Home from './pages/home'
import Preloader from './components/Preloader'

class App {
  constructor () {
    this.createPreloader()
    this.getContent()
    this.initPages()
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', (_) => this.onPreloadEnd())
  }

  onPreloadEnd () {
    this.preloader.destroy()
  }

  getContent () {
    this.content = document.querySelector('#content')
    this.template = this.content.getAttribute('[data-template]')
  }

  initPages () {
    this.pages = {
      home: new Home()
    }

    this.page = this.pages[this.template]

    if (this.page && this.page.create()) {
      this.page.create()
    }
  }
}

// eslint-disable-next-line no-new
new App()
