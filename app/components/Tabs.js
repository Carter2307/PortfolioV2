import { $All } from '../utils/selectors'

export default class Tabs {
  __defaults = {
    defaultIndex: 0,
  }

  __selectors = {
    list: {
      container: '.tabs__list',
      childrens: '.tabs__items',
      buttons: '.tabs__item',
    },
    panels: {
      container: '.tabs__panels',
      childrens: '.tabs__panel',
    },
  }

  __state = {
    active: 'active',
    selected: 'selected',
  }

  __attribubes = {
    button: 'data-tabs-index',
    panel: 'data-tabs-panel',
    buttonState: 'data-tabs-index-active',
    pannelState: 'data-tabs-panel-active',
  }

  constructor({ defaultIndex }) {
    this.props = Object.assign(
      {
        defaultIndex,
      },
      this.__defaults
    )

    this.buttons = $All(`${this.__selectors.list.buttons}`)
    this.panels = $All(`${this.__selectors.panels.childrens}`)

    this.init()
    this.setIndex()
    this.eventsListeners()
  }

  init() {
    this.buttons[this.props.defaultIndex].setAttribute(
      this.__attribubes.buttonState,
      true
    )
    this.buttons[this.props.defaultIndex].classList.add(
      'tabs__item-style-active'
    )

    this.panels[this.props.defaultIndex].setAttribute(
      this.__attribubes.pannelState,
      true
    )
    this.panels[this.props.defaultIndex].classList.add('tabs__panel-active')
  }

  setIndex() {
    this.buttons.forEach((button, index) => {
      button.setAttribute(this.__attribubes.button, index)
      button.setAttribute(this.__attribubes.buttonState, false)
    })

    this.panels.forEach((panel, index) => {
      panel.setAttribute(this.__attribubes.panel, index)
      panel.setAttribute(this.__attribubes.pannelState, false)
    })
  }

  onClick(e) {
    e.preventDefault()
    const target = e.currentTarget
    const index = target.getAttribute(this.__attribubes.button)

    //unset previous active element
    this.panels[this.props.defaultIndex].setAttribute(
      this.__attribubes.pannelState,
      false
    )

    this.buttons[this.props.defaultIndex].classList.remove(
      'tabs__item-style-active'
    )

    this.buttons[this.props.defaultIndex].setAttribute(
      this.__attribubes.buttonState,
      false
    )

    this.panels[this.props.defaultIndex].classList.remove('tabs__panel-active')

    this.props.defaultIndex = index

    //active current  button and tabs
    this.panels[this.props.defaultIndex].setAttribute(
      this.__attribubes.pannelState,
      true
    )
    this.panels[this.props.defaultIndex].classList.add('tabs__panel-active')

    this.buttons[this.props.defaultIndex].setAttribute(
      this.__attribubes.buttonState,
      true
    )
    this.buttons[this.props.defaultIndex].classList.add(
      'tabs__item-style-active'
    )
  }

  eventsListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.onClick.bind(this))
    })
  }
}
