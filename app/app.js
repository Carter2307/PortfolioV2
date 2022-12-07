'use strict'

import Home from './pages/home'
import About from './pages/about'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Player from './components/widgets/music-player/player'
import FormHandler from './config/forms'
import Services from './components/Services'
import Canvas from './animation/canvas'
import { $All, $ } from './utils/selectors'
import Project from './pages/project'

class App {
  constructor() {
    this.init()
    this.createPreloader()
    this.initNavigation()
    this.getContent()
  }

  init() {
    this.canvas = new Canvas()
    this.player = new Player()
  }

  createPreloader() {
    this.preloader = new Preloader()
    this.preloader.once('completed', () => this.onPreloadEnd())
  }

  onPreloadEnd() {
    this.preloader.destroy()
    this.initPages()
    this.config()
    this.eventListener()
  }

  getContent() {
    this.content = document.querySelector('#content')
    this.template = this.content.getAttribute('data-template')
  }

  initPages() {
    this.pages = {
      home: new Home(),
      about: new About(),
      project: new Project(),
    }

    this.page = this.pages[this.template]

    this.page.load()
    this.page.create()
    this.page.show()
  }

  initNavigation() {
    this.navigation = new Navigation()
  }

  config() {
    this.formHandler = new FormHandler('connect', 'connect', 'POST')
    this.services = new Services()
  }

  async onChange({ url }) {
    await this.page.hide()

    const res = await window.fetch(url)

    if (res.status === 200) {
      const html = await res.text()

      window.history.pushState({}, '', url)

      const div = document.createElement('div')
      div.innerHTML = html

      const divContent = div.querySelector('.content')
      this.template = divContent.getAttribute('data-template')
      this.content.innerHTML = divContent.innerHTML
      this.page = this.pages[this.template]

      this.page.create()
      this.page.show()
    } else {
      console.error('error: ' + res)
    }
  }

  eventListener() {
    const links = $All('[data-links]')
    links.forEach((link) => {
      const { href } = link
      const linkData = href.split('#')
      const [url] = linkData

      if (link.getAttribute('data-links') === 'true') {
        link.onclick = (e) => {
          console.log('has been cllicked')
          e.preventDefault()
          if (url === window.location.href) return
          this.onChange({ url: href })
        }
      } else {
        link.onclick = (e) => {
          e.preventDefault()
          //if (url === window.location.href) return
          this.onChange({ url })
          setTimeout(() => {
            // scrollToElement(hash)
          }, 300)
        }
      }
    })
  }

  scrollToElement(className) {
    const element = $(`.${className}`)
    const top = element.getBoundingClientRect().top
    console.log(element, top)
    //$('.content').style.transform = `translateY(${-top}px)`
    //window.scrollTo({ top: top, behavior: 'smooth' })
  }
}

// eslint-disable-next-line no-new
new App()
