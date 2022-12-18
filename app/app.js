'use strict'

import Home from './pages/home'
import About from './pages/about'
import Preloader from './components/Preloader'
import Player from './components/widgets/music-player/player'
import Navigation from './components/Navigation'
import FormHandler from './config/forms'
import Canvas from './animation/canvas'
import Smoothscroll from './utils/Smoothscroll'
import { $All, $ } from './utils/selectors'
import Project from './pages/project'

class App {
  constructor() {
    this.createPreloader()
    this.initNavigation()
    this.init()
    this.getContent()
  }

  init() {
    this.player = new Player()
    this.canvas = new Canvas()
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

    this.page.create()
    this.page.show()
  }

  initNavigation() {
    this.navigation = new Navigation()
  }

  config() {
    this.formHandler = new FormHandler('connect', 'connect', 'POST')
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
      new Smoothscroll($('.wrapper'), {
        direction: 'v',
        smooth: 0.2,
      })
    } else {
      console.error('error: ' + res)
    }
  }

  eventListener() {
    const links = $All('[data-links]')
    //const menulist = $('.menu__links').childNodes
    //const linkList = $All('.menu__links__item__link')

    links.forEach((link) => {
      const { href } = link
      const linkData = href.split('#')
      const [url] = linkData

      link.onclick = (e) => {
        e.preventDefault()
        if (url === window.location.href) return
        // menulist.forEach((li) => {
        //   if (li.classList.contains('menu__links__item-active')) {
        //     li.classList.remove('menu__links__item-active')
        //   }
        // })

        // link.parentNode.classList.add('menu__links__item-active')
        this.onChange({ url: href })
      }
    })
  }
}

// eslint-disable-next-line no-new
new App()
