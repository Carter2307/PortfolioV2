/**
 * Select element in DOM HTML
 * @param {*} element - The css selector of the HTML element to target
 * @returns {HTMLElement}
 */
export const $ = (element) => {
	return document.querySelector(`${element}`);
};

/**
 * Select elements in DOM HTML
 * @param {*} elements - The css selector of the HTML elements to target
 * @returns {NodeList}
 */
export const $All = (elements) => {
	return document.querySelectorAll(`${elements}`);
};

/**
 * Get Attribute of Element
 * @param {HTMLElement} element - HTML element
 * @param {HTMLElement} name - Name of attribute (ex : data-animation)
 * @returns {string}
 */
export const $Attribute = (element, name) => {
	return element.getAttribute(name)
};
