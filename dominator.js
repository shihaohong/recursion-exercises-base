const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const arr = flattenTreeToArray(root);

  // iterates through the nodes to find the appropriate id value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id){
      return arr[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  const arr = flattenTreeToArray(root);
  
  let el = [];

  // iterates through array to find correct classname
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].className) {
      if (arr[i].className.search(className) >= 0) {
        el.push(arr[i]);
      }
    }
  }

  return el;
};

const getElementsByTagName = function(root, tagName) {

  // iterates through elements and searches by tagName
  const arr = flattenTreeToArray(root);
  let el = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].tagName === tagName) {
      el.push(arr[i]);
    }
  }

  return el;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
