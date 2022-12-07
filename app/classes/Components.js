import EventEmitter from 'events'
import { $, $All } from '../utils/selectors'


export default class Components extends EventEmitter {
  constructor(componentName) {
    super()
    this.selectors =
      {
        preloader: {
          element: $('.preloader'),
          text: $('.preloader__text__item'),
          container: $('.preloader__text'),
          loader: $('.preloader__loader__bar'),
          wrapper: $('.preloader__text__wrapper'),
        },
        navigation: {
          header: $('.header'),
          navList: [...$All('.menu__links__item')],
          previewImg: $('.menu__links__media__image'),
          content: $('.menu__content'),
          openMenu: $('.button-open'),
          closeMenu: $('.button-close'),
        },
        player: {
          button: {
            expand: $('.player__button.expand'),
            close: $('.player__button.close'),
            play: $('[data-icon="rob-play"]'),
            next: $('[data-icon="rob-forward"]'),
            prev: $('[data-icon="rob-backward"]'),
          },
          coverContainer: $('.player__cover'),
          cover: $('.player__cover img'),
          self: $('.player'),
          media: $('.player__media'),
          artist: $('.player__detail__name'),
          title: $('.player__detail__title'),
          timer: {
            startTime: $('.player__timer__times__starttime'),
            endTime: $('.player__timer__times__endtime'),
            range: $('.player__timer__progress__range'),
            progress: $('.player__timer__progress__bar'),
            preload: $('.player__timer__progress__elapse'),
          },
          volume: {
            grapper: $('.player__volume__grap'),
            slider: $('.player__volume__slider'),
            container: $('.player__volume__wrapper'),
          },
        },
        form: {
          connect: {
            form: $('.connect__form'),
            button: $('.connect__form .button'),
            name: $('.input__name'),
            mail: $('.input__email'),
            message: $('#message'),
            nameAlert: $('.input__alert-name'),
            emailAlert: $('.input__alert-email'),
            messageAlert: $('.input__alert-message'),
            alert: $All('.input__alert'),
          },
          modal: {
            form: $('.modal__form'),
            button: $('.modal__form .button'),
          },
          alert: $('.alert'),
        },
        slider: {
          button: {
            prev: $('#rb-slider-button-prev'),
            next: $('#rb-slider-button-next'),
          },
          wrapper: $('.rb-slider-wrapper'),
          items: $('.rb-slider-items'),
          container: $('.rb-slider'),
        },
        services: {
          buttons: $All('.services__cta'),
        },
        modal: {
          self: $('.modal'),
          button: $('.modal__button button'),
        },
        images: [...$All('img')],
        about: {
          titles: [...$All('[data-animation=\'title\']')],
          paragraphes: [...$All('[data-animation=\'paragraph\']')],
        },
        home: {
          titles: [...$All('[data-animation=\'title\']')],
          paragraphes: [...$All('[data-animation=\'paragraph\']')],
        },
      }
    this.elements = this.selectors[componentName]

  }
}
