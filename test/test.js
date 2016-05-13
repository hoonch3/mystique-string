var assert = require('chai').assert
var MystiqueString = require('../mystique-string')

describe('#setter for single variable', function() {
  var str = new MystiqueString('I\'m %%name%%', {
    name: 'IronMan'
  })

  it('set new options', function() {
    assert.equal(str.set({name: 'BatMan'}).getOptions().name, 'BatMan')
  })

  it('set new string with existing options', function() {
    assert.equal('You are BatMan', str.set('You are %%name%%').get())
    assert.equal('You are %%name%%', str.set('You are %%name%%').getOrigin())
  })

  it('set new string with existing options, but wrong options name', function() {
    assert.equal('You are [not set variable]', str.set('You are %%gender%%').get())
  })

  it('set new string with new options', function() {
    assert.equal('You are Man', str.set('You are %%gender%%', { gender: 'Man'}).get())
    assert.equal('You are %%gender%%', str.set('You are %%gender%%', { gender: 'Man'}).getOrigin())
  })
})

describe('#setter for multiple variables', function() {
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
