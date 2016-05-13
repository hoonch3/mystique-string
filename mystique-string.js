function MystiqueString(str, options) {
  this.str = str
  this.options = options
}

MystiqueString.prototype.set = function() {
  if (arguments.length > 1) {
    if (typeof arguments[0] === 'string') {
      this.str = arguments[0]
    } else {
      throw new Error('the first argument should be new string or new options')
    }

    if (typeof arguments[1] === 'object') {
      this.options = setOptions(this.options, arguments[1])
    } else {
      throw new Error('the second argument should be new options')
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === 'object') {
      this.options = setOptions(this.options, arguments[0])
    } else if ((typeof arguments[0]) === 'string') {
      this.str = arguments[0]
    }
  } else {
    throw new Error('new string or new options should be passed')
  }

  function setOptions(originOps, newOps) {
    Object.keys(newOps).forEach(function(o) {
      originOps[o] = newOps[o]
    })

    return originOps
  }

  return this
}

MystiqueString.prototype.get = function() {
  var self = this
  var convertedStr = this.str

  Object.keys(this.options).forEach(function(v) {
    convertedStr = convertedStr.replace('%%' + v + '%%', self.options[v])
  })

  return convertedStr.replace(/%%[a-zA-Z0-9]+%%/g, '[not set variable]')
}

MystiqueString.prototype.getOrigin = function() {
  return this.str
}

MystiqueString.prototype.getOptions = function() {
  return this.options
}

module.exports = MystiqueString
