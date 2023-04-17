import Pages from '../classes/Pages'
export default class Photographies extends Pages {
  constructor() {
    super('photographies')
  }

  create() {
    console.log('photographies page')
    super.create()
  }
}
