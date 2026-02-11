/**
 * Splits text from innerHTML based on regex, wraps separated words with <span> except <br>
 * @param element - HTML element to split text from
 * @param split - Separator for text (regex)
 * @returns Array of span html elements
 */
export function splitText(element: HTMLElement, split: string = '<br>'): NodeListOf<HTMLSpanElement> {
  const words = splitTextContent(element.innerHTML.toString(), split);
  let str = '';

  words.forEach((line) => {
    if (line.indexOf('<br>') > -1) {
      const lines = line.split('<br>');
      lines.forEach((l, id) => {
        str += id > 0 ? '<br>' + parseLine(l) : parseLine(l);
      });
    } else {
      str += parseLine(line);
    }
  });

  element.innerHTML = str;
  return element.querySelectorAll('span');
}

/**
 * Splits text into array including <br>
 * @param txt - Text retrieved from html element
 * @param split - Separator for text (regex)
 * @returns Result of split using separator including <br>
 */
function splitTextContent(txt: string, split: string): string[] {
  const splits = txt.split('<br>');
  let arr: string[] = [];

  splits.forEach((item, id) => {
    if (id > 0) arr.push('<br>');
    arr = arr.concat(item.split(split));
  });

  return arr;
}

/**
 * Wraps passed argument with <span> if not empty, space, or <br>
 * @param line - Words separated by separator
 * @returns Either '', ' ', <br>, or <span>line</span>
 */
function parseLine(line: string): string {
  if (line === '' || line === ' ') {
    return line;
  }
  return line === '<br>'
    ? '<br>'
    : '<span>' + line + '</span>' + (line.length > 1 ? ' ' : '');
}

export default splitText;
