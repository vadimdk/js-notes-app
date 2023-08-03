function cutLongString(str) {
  if (str.length < 25) {
    return str;
  }
  const cutedStr = `${str.slice(0, 25)} ...`;
  return cutedStr;
}

function extractDates(content) {
  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  return content.match(dateRegex) || [];
}

function handleIconToShow(category) {
  switch (category) {
    case "Qute":
      return `<i class="fi fi-sr-comment-quote"></i>`;
    case "Random Thought":
      return `<i class="fi fi-ss-head-side-thinking"></i>`;
    case "Idea":
      return `<i class="fi fi-ss-lightbulb-dollar"></i>`;
    default:
      return `<i class="fi fi-ss-shopping-cart"></i>`;
  }
}

function checkInput(obj, fieldName) {
  let error = false
   if (obj[fieldName]) {
    return error
   }
  return error = true
}


export { cutLongString, extractDates, handleIconToShow, checkInput };
