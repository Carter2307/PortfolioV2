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
    'application/msword'
  ]

  const images = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/bmp'
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
async function UrlExist(url) {
  const options = {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const response = await fetch(url, options)
  return response.status !== '404'
}
