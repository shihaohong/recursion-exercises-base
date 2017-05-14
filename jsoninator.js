const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...


const stringify = function(obj) {
  var arrOfValues = [];
  var arrOfKeys = [];
  var arrOfObjVal = [];

  // primitive types
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number' || obj === null) {
    return '' + obj;
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  // arrays 
  else if (Array.isArray(obj)) {
    if(obj[0] === undefined) {
      return '[]';
    } else { 
      obj.forEach(function(val) { // searches through every element
        arrOfValues.push(stringify(val)); // stringifies elements, nested or not
      });
      return '[' + arrOfValues + ']'; // returns complete array
    }
  }

  // objects
  else if (obj instanceof Object) {
    arrOfKeys = Object.keys(obj) // acquires object keys
    arrOfKeys.forEach(function(key) {
      var keyString = '"' + key + '":';
      var objVal = obj[key];

      // primitive types
      if (typeof(objVal) === 'boolean' || typeof(objVal) === 'number' || obj === null) {
        arrOfObjVal.push('' + objVal);
      } else if (typeof(objVal) === 'string') {
        arrOfObjVal.push(keyString + '"' + objVal + '"');
      } 

      // nested objects
      else if (objVal instanceof Object) {
        arrOfObjVal.push(keyString + stringify(objVal));
      }
    });

    return '{' + arrOfObjVal + '}';
  }
};

module.exports = {
  stringify: stringify
};