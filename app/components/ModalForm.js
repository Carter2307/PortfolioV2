import Components from '../classes/Components'

export default class ModalForm extends Components {
  constructor() {
    super('modal')
    this.init()
  }

  init() {
    console.log(this.elements.button)
    this.eventListener()
  }
  eventListener() {}
}
