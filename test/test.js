var assert = require('chai').assert
var MystiqueString = require('../mystique-string')

describe('#single variable', function() {
  var str = new MystiqueString('I\'m %%name%%', {
    name: 'IronMan'
  })

  it('get converted string', function() {
    assert.equal('I\'m IronMan', str.get())
  })

  it('get origin string', function() {
    assert.equal('I\'m %%name%%', str.getOrigin())
  })
})

describe('#multiple variables', function() {
  var str = new MystiqueString('I\'m %%language1%%, %%language2%%, and %%language3%% programmer.', {
    language1: 'javascript',
    language2: 'python',
    language3: 'go'
  })

  it('get converted string', function() {
    assert.equal('I\'m javascript, python, and go programmer.', str.get())
  })

  it('get origin string', function() {
    assert.equal('I\'m %%language1%%, %%language2%%, and %%language3%% programmer.', str.getOrigin())
  })
})

describe('#change variables', function() {
  var str = new MystiqueString('I\'m %%name%%.', {
    name: 'IronMan'
  })

  it('get converted string before change', function() {
    assert.equal('I\'m IronMan.', str.get())
  })

  it('get converted string after change', function() {
    str.set({
      name: 'BatMan'
    })

    assert.equal('I\'m BatMan.', str.get())
  })
})
