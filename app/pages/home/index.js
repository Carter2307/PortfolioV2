import Pages from '../../classes/Pages'
import Slider from '../../components/slider/Slider'

export default class Home extends Pages {
  constructor () {
    super('home')
  }

  create () {
    super.create()
    this.slider = new Slider()
  }

  hide () {
    console.log('hide home')
  }
}
