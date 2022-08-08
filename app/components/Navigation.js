import Components from '../classes/Components'

export default class Navigation extends Components {
  constructor () {
    super('navigation')
    this.init()
    this.eventsListener()
  }

  init () {
    const defaultSource = 'images/previews/img-1'
    this.selectors.navigation.previewImg.src = `${defaultSource}.png`
  }

  onMouseHoverLinks(e) {
    const src = e.currentTarget.getAttribute('data-snap-image')
    this.selectors.navigation.previewImg.src = `${src}.png`
  }

  openMenu(e) {
    e.preventDefault()
    this.selectors.navigation.content.classList.add('menu__content-visible')
  }

  closeMenu(e) {
    e.preventDefault()
    this.selectors.navigation.content.classList.remove('menu__content-visible')
  }

  eventsListener () {
    this.selectors.navigation.navList.forEach(link => {
      link.addEventListener('mouseover', this.onMouseHoverLinks.bind(this))
    })

    this.selectors.navigation.openMenu.addEventListener('click', this.openMenu.bind(this))
    this.selectors.navigation.closeMenu.addEventListener('click', this.closeMenu.bind(this))
  }
}
