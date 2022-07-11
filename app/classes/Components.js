import EventEmitter from 'events'

export default class Components extends EventEmitter {
  constructor(componentName) {
    super()

    this.selectors = {
      preloader: {
        element: document.querySelector('.preloader'),
        text: document.querySelector('.preloader__text__item'),
        container: document.querySelector('.preloader__text'),
        loader: document.querySelector('.preloader__loader__bar'),
        wrapper: document.querySelector('.preloader__text__wrapper'),
      },

      images: [...document.querySelectorAll('img')],
    }

    this.elements = this.selectors[componentName]
  }
}
