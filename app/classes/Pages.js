import Components from './Components'
import Smoothscroll from '../utils/Smoothscroll'
import { $ } from '../utils/selectors'

export default class Pages extends Components {
  constructor (elements) {
    super(elements)
    this.wrapper = $('.wrapper')
    // this.smootscroll = new Smoothscroll(this.wrapper, { direction: 'v', smooth: 0.1 })
  }

  create () {}

  show () {}

  hide () {
    return new Promise((resolve) => {
      console.log('page was hide' + resolve)
    })
  }
}
