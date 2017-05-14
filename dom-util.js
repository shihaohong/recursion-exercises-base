
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node

  // first, you run the callback function on the node
  callback(node);

  // checks to see if it is the childest node
  if(node.childNodes.length > 0) {
    // if node has children, it calls the function on all child nodes
    const child = node.childNodes;
    child.forEach((childNode) => visitAllNodes(childNode, callback));
  } else {
    // if no children, it returns and recurses back to the originals 
    return; 
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // use visitAllNodes to push each node into the array

  // first, initialize an array
  nodeArray = [];

  // you would visit every node
  // once you do, your callback function 
  // would be to push each node into your array!

  visitAllNodes(node, node => {
    nodeArray.push(node);
  });

  return nodeArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};