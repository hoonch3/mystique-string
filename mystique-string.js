function MystiqueString(str, options) {
  this.str = str
  this.options = options
}

MystiqueString.prototype.set = function(options) {
  var self = this
  var flag = true

  Object.keys(options).forEach(function(v) {
    if (self.options[v]) {
      self.options[v] = options[v]
    } else {
      flag = false
    }
  })

  return flag ? self.options : new Error('There is no variable you try to change!')
}

MystiqueString.prototype.get = function() {
  var self = this
  var convertedStr = this.str

  Object.keys(this.options).forEach(function(v) {
    convertedStr = convertedStr.replace('%%' + v + '%%', self.options[v])
  })

  return convertedStr
}

MystiqueString.prototype.getOrigin = function() {
  return this.str
}

module.exports = MystiqueString
