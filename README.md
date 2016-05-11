Mystique-String
===============
Mystique-String is a npm module to manuipulate javascript `String` easily. You can use 'template strings' on es6, but still cannot change variables after set the string. Mysique-String can be changed to anything anytime you want.

How to
------
```javascript
var str = new MystiqueString('I\'m %%name%%', {
  name: 'IronMan'
})

console.log(str.get()) // I'm IronMan

str.set({name: 'BatMan'})
console.log(set.get()) // I'm BatMan

```

LICENSE
-------
MIT
