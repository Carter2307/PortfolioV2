export default function Spliter(selector) {
  const element = selector

  if (element === null) {
    console.error(`${element} n'existe pas dans la page`)
    return
  }

  const childrens = [...element.childNodes]
  let elements = []

  childrens.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      //Gérer les texte
      const words = child.textContent.split(' ')
      const spans = words.map(wrappWithSpan)
      elements = elements.concat(spans)
    } else {
      //Gérer les noeuds HTML
      elements.push(child)
    }

    //Injecter les elements dans le parent
    element.innertHtml = ''
    elements.forEach(el => {
      element.appendChild(el)
    })

  })

  console.log(elements)

}

  function wrappWithSpan(word) {
    const span1 = document.createElement('SPAN')
    const span2 = document.createElement('SPAN')
    span2.textContent = word
    span1.appendChild(span2)

    return span1
  }

