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
      navigation: {
        header: $('.header'),
        navList: [...$All('.menu__links__item')],
        previewImg: $('.menu__links__media__image'),
        content: $('.menu__content'),
        openMenu: $('.button-open'),
        closeMenu: $('.button-close')
      },
      player: {
        button: {
          expand: $('.player__button.expand'),
          close: $('.player__button.close'),
          play: $('[data-icon="rob-play"]'),
          next: $('[data-icon="rob-forward"]'),
          prev: $('[data-icon="rob-backward"]')
        },
        cover: $('.player__cover img'),
        self: $('.player'),
        media: $('.player__media'),
        artist: $('.player__detail__name'),
        title: $('.player__detail__title')
      },

      images: [...$All('img')]
    }
    this.elements = this.selectors[componentName]
  }
}
