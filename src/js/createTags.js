function addEventToTag(tag, event, func) {
  tag.addEventListener(event, func);
}

function createTag(tag, text, className) {
  const newTag = document.createElement(tag);
  newTag.classList.add(className);

  const newText = document.createTextNode(text);
  newTag.appendChild(newText);

  return newTag;
}

export { createTag, addEventToTag };

