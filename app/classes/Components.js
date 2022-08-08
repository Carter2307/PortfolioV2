import EventEmitter from 'events'
import { $, $All } from '../utils/selectors'

export default class Components extends EventEmitter {
  constructor (componentName) {
    super()
    this.selectors = {
      preloader: {
        element: $('.preloader'),
        text: $('.preloader__text__item'),
        container: $('.preloader__text'),
        loader: $('.preloader__loader__bar'),
        wrapper: $('.preloader__text__wrapper')
      },
      navigation : {
        header : $('.header'),
        navList : [...$All('.menu__links__item')],
        previewImg : $('.menu__links__media__image'),
        content : $('.menu__content'),
        openMenu : $('.button-open'),
        closeMenu : $('.button-close')
      },

      images: [...$All('img')]
    }
    this.elements = this.selectors[componentName]
  }
}
