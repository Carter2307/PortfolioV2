import Components from '../classes/Components'

export default class Navigation extends Components {
  constructor () {
    super('navigation')
    this.init()
    this.eventsListener()
  }

  init () {
    const defaultSource = 'images/previews/img-1'
    this.root.navigation.previewImg.src = `${defaultSource}.png`
    this.setActiveLinkStyles()
  }

  setActiveLinkStyles() {
    this.root.navigation.navList.forEach((link, index) => {
      if (index === 0) {
          link.classList.add('menu__links__item-active')
        }
    } )
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

  eventsListener () {
    this.root.navigation.navList.forEach(link => {
      link.addEventListener('mouseover', this.onMouseHoverLinks.bind(this))
    })

    this.root.navigation.openMenu.addEventListener('click', this.openMenu.bind(this))
    this.root.navigation.closeMenu.addEventListener('click', this.closeMenu.bind(this))
  }
}
