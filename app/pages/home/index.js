import Pages from '../../classes/Pages'
import Slider from '../../components/slider/Slider'
import Services from '../../components/Services'
import FormHandler from '../../config/forms'

export default class Home extends Pages {
  constructor() {
    super('home')
  }

  create() {
    super.create()
    new Slider()
    new Services()
    new FormHandler('modal', 'projects/usersProjects', 'POST')
  }
}
