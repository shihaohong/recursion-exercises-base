const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const arr = flattenTreeToArray(root);

  // iterates through the nodes to find the appropriate id value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id && arr[i].id === id){
      return arr[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  const arr = flattenTreeToArray(root);
  
  let el = [];

  // iterates through array to find correct classname
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].className === className) {
      el.push(arr[i]);
    }
  }

  return el;
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
