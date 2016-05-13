Mystique-String
===============

![Latest Version](https://img.shields.io/npm/v/mystique-string.svg)
![Total Downloads](https://img.shields.io/npm/dt/mystique-string.svg)

Mystique-String is a npm module to manuipulate javascript `String` easily. You can use 'template strings' on es6, but still cannot change variables after set the string. Mysique-String can be changed to anything anytime you want.

## How to

```javascript
var str = new MystiqueString('I\'m %%name%%', {
  name: 'IronMan'
})

console.log(str.get()) // I'm IronMan

console.log(str.getOrigin()) // I'm %%name%%

console.log(str.set({name: 'BatMan'}).get()) // I'm BatMan

console.log(str.set('You are %%name%%').get()) // You are BatMan

console.log(str.set('You are %%gender%%', {gender: 'man'}).get()) // You are man

console.log(str.set('You are %%ironman%%').get()) // You are [not set variable]

console.log(str.set('You are %%batman%%', {batman: 'Batman'}).get()) // You are Batman
```

## LICENSE

MIT
