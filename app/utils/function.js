export const lerp = (start, end, amount) => {
  return (1 - amount) * start + amount * end
}

export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max)
}

/**
 * Vérifie si un fichier est de type PDF,  DOC et DOX c'est à dire
 * un document texte
 * @param {FILE} file - le fichier qui doit être vérifier
 * @param {string} type - le type de fichier document | image
 * @returns {Boolean} Boolean
 */
export const validFileType = (file, type) => {
  const documents = [
    'application/pdf',
    'application/doc',
    'application/docx',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
  ]

  const images = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/bmp',
  ]

  if (type === 'documents') {
    for (let i = 0; i < documents.length; i++) {
      if (file.type === documents[i]) {
        return true
      }
    }

    return false
  } else if (type === 'images') {
    for (let i = 0; i < images.length; i++) {
      if (file.type === images[i]) {
        return true
      }
    }

    return false
  }
}

/**
 * Vérifie si une Url pointe vers une page valide
 *
 * @async
 * @param {string} url - le lien de la page
 * @returns {boolean} Boolean
 */
export async function UrlExist(url) {
  const options = {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
  const response = await fetch(url, options)
  return response.status !== '404'
}

/**
 * Verifie si un email est valide
 * @param email
 * @returns {boolean}
 */

export function validEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (regex.test(email)) {
    return true
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
/**
 * Observe et execuse un callback lorsque les noeuds enfants(DOM) de la cible ont été modifier
 * @param {HTMLElement} node - Le noeud DOM à observé
 * @param {Function} callback - la fonction à éxécuter lorsque le DOM de la cible à changé
 * @param {selector} selector
 */
export function ObserveNodeDomChange(node, cb, selector) {
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector(`.${node}`)

  // Options for the observer (which mutations to observe)
  const config = { childList: true, subtree: true }

  //Callback function to execute when mutations are observed
  const callback = (mutationsList) => {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        cb(selector)
      } else if (mutation.type === 'attributes') {
        cb(selector)
      }
    }
  }

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback)

  // Start observing the target node for configured mutations
  targetNode ? observer.observe(targetNode, config) : void 0
  //observer.observe(targetNode, config);

  // Later, you can stop observing
  //observer.disconnect();
}
