import Pages from '../../classes/Pages'
import Slider from '../../components/slider/Slider'
import Services from '../../components/Services'

export default class Home extends Pages {
  constructor() {
    super('home')
  }

  create() {
    super.create()
    this.slider = new Slider()
    this.services = new Services()
  }

}
