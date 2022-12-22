import Pages from '../../classes/Pages'
import Tabs from '../../components/Tabs'

export default class Project extends Pages {
  constructor() {
    super('project')
  }

  create() {
    this.tabs = new Tabs({ defaultIndex: 1 })
    super.create()
  }
}
