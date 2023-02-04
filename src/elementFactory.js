//Element factory for creating elements

export function createDivElement(id, innerHTML) {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  element.innerHTML = innerHTML;
  return element;
}

export function createDivElementWithClass(id, innerHTML, className) {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  element.setAttribute('class', className);
  element.innerHTML = innerHTML;
  return element;
}