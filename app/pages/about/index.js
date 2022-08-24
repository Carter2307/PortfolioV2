import Pages from '../../classes/Pages'
export default class About extends Pages {
  constructor () {
    super('about')
    console.log('About')
  }

  create () {
    super.create()
  }

  hide () {
    console.log('hide')
  }
}
