'use strict'
import Home from './pages/home'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Canvas from './animation/canvas'
import Player from './components/widgets/music-player/player'

class App {
  constructor () {
    this.init()
    this.createPreloader()
    this.initNavigation()
    this.getContent()
    this.initPages()
  }

  init () {
    this.canvas = new Canvas()
    this.player = new Player()
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

  initNavigation () {
    this.navigation = new Navigation()
  }
}

// eslint-disable-next-line no-new
new App()
