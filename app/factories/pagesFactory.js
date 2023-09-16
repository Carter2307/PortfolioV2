import * as Pages from '../pages/index'

let PAGES = {}

for (let [key, value] of Object.entries(Pages)) {
  PAGES[key] = value
}

export default class PageFactory {
   static createInstance(className, datas) {
    const elementName = PAGES[className]
    const element = elementName ? new elementName(datas ? datas : void 0) : null

    return element
  }
}

PageFactory.createInstance('Home')
