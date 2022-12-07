import Pages from '../../classes/Pages'

export default class Project extends Pages {
  constructor() {
    super('project')
  }

  create() {
    super.create()
  }

  hide() {
    console.log('hide project page')
  }
}
