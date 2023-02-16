import Components from '../classes/Components'
import Alert from '../components/Alert'
import { validEmail } from '../utils/function'

export default class FormHandler extends Components {
  constructor(type, url, method) {
    super('form')
    this.formType = type
    this.method = method
    this.url = `${window.location.origin}/${url}`
    this.elements = this.elements[this.formType]
    this.val = 0
    this.init()
  }

  init() {
    this.eventListener()
  }

  // SendToDb () {}

  async fetch(url, method, data) {
    const options = {
      method,
      mode: 'no-cors',
      body: data,
    }
    const res = await fetch(url, options)
    if (res.status === 200) {
      // success
      res.json().then((data) => {
        this.alert = new Alert(data.text, data.type)
        this.alert.show()
        this.elements.form.reset()
      })
    } else {
      // error
      res.json().then((data) => {
        this.alert = new Alert(data.text, data.type)
        this.alert.show()
      })
    }
  }

  sendData(e) {
    e.preventDefault()
    const validNumber = this.verifyData(
      this.elements.mail,
      this.elements.name,
      this.elements.message
    )
    if (!validNumber) return
    this.elements.alert.forEach((el) => {
      el.innerText = ''
    })
    const formElements = new URLSearchParams(new FormData(this.elements.form))
    this.fetch(this.url, this.method, formElements)
  }

  verifyData(mail, name, message) {
    this.val = 0
    // email
    if (validEmail(mail.value)) {
      this.val++
    } else if (mail.value === '') {
      this.elements.emailAlert.innerText = 'Required*'
    } else {
      this.elements.emailAlert.innerText = 'This email is not valid'
    }

    // name
    if (name.value === '') {
      this.elements.nameAlert.innerText = 'Required*'
    } else {
      this.val++
    }

    // message
    if (message.value === '') {
      this.elements.messageAlert.innerText = 'Required*'
    } else {
      this.val++
    }

    return this.val === 3
  }

  eventListener() {
    this.elements.button.addEventListener('click', this.sendData.bind(this))
  }
}
