import Components from '../classes/Components'
import { $All } from '../utils/selectors'

export default class Navigation extends Components {
  constructor() {
    super('navigation')
    this.init()
    this.eventsListener()
  }

  init() {
    const defaultSource = 'images/previews/img-1'
    this.root.navigation.previewImg.src = `${defaultSource}.png`
    this.setActiveLinkStyles()
  }

  setActiveLinkStyles() {
    const links = $All('[data-links]')
    const url = window.location.href
    let parent

    links.forEach((link) => {
      if (link.href === url) {
        parent = link.parentNode
        parent.classList.add('menu__links__item-active')
      }
    })
  }

  onMouseHoverLinks(e) {
    const src = e.currentTarget.getAttribute('data-snap-image')
    this.root.navigation.previewImg.src = `${src}.png`
  }

  openMenu(e) {
    e.preventDefault()
    this.root.navigation.content.classList.add('menu__content-visible')
  }

  closeMenu(e) {
    e.preventDefault()
    this.root.navigation.content.classList.remove('menu__content-visible')
  }

  eventsListener() {
    /*this.root.navigation.navList.forEach((link) => {
      link.addEventListener('mouseover', this.onMouseHoverLinks.bind(this))
    })*/

    this.root.navigation.openMenu.addEventListener(
      'click',
      this.openMenu.bind(this)
    )
    this.root.navigation.closeMenu.addEventListener(
      'click',
      this.closeMenu.bind(this)
    )
  }
}
