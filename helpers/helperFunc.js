function cutLongString(str) {
    if (str.length < 20) {
        return str
    }
    const cutedStr = `${str.slice(0, 20)} ...`
    return cutedStr
}

function extractDates(content) {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return content.match(dateRegex) || [];
  }

export {cutLongString, extractDates}