exports.limitArray = (arr, limit) => {
  if (!Array.isArray(arr)) {
      return [];
  }
  return arr.slice(0, limit);
}

exports.stripTags = (Input) => {
  //Pour l'éditeur de texte; fonction permettant de remplacer tous ces symboles par des ''.
  if (Input) return Input.replace(/<(?:.|\n)*?>/gm, ' ');
}

// Incrémentation 
exports.inc = (value, option) => {
  return parseInt(value) + 1
}

exports.truncStr = (str, limit) => {
  console.log('truncStr', str.length, limit)
  if (str.length > limit) {
    return str.slice(0, limit)
  } else {
    return str
  }
}

// Upper
exports.upper = (str) => {
  return str.toUpperCase()
}

// Pour les commentaires
exports.ifCond = (v1, v2, options) => {
  if (v1 === v2) {
      return options.fn(this);
  }
  return options.inverse(this);
}

// Dates
exports.formatDate = (date, format) => {
  return moment(date).utc().format(format)
}
