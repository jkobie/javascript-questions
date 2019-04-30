
//Q1
function checkSubstring(haystack, needle) {
  var haystack = haystack.toLowerCase();
  var needle = needle.toLowerCase();

  for(var i = 0; i <= haystack.length - needle.length; i++) {
    for(var j = i; j < i + needle.length; j++) {
      var flag = 1;
      if(haystack.charAt(j) !== needle.charAt(j - i)) {
        flag = 0;
        break;
      }
    }
    if(flag === 1) {
      break;
    }
  }
  if(flag === 1) {
    return true;
  } else {
    return false;
  }
 
}

//Q2
function siftConsecutive(letters) {
  for(var i = 0; i < letters.length; i++) {
    if(letters.charAt(i + 1) !== letters.charAt(i) && letters.charAt(i - 1) !== letters.charAt(i)) {
      return letters.charAt(i);
    }
  }
}


//Q3
function basicCompression(letters) {
  var result = "";
  var m = 1;
  for(var i = 0; i < letters.length; i++) {
    if(letters.charAt(i + 1) === letters.charAt(i)) {
      m++;
    } else {
      result = result + m + letters.charAt(i);
      m = 1;
    }
  }
  return result;
}

//build BST prototype for testing
function Node(value) {
  this.value = value;
}

Node.prototype.setLeft = function(left) {
  this.left = left;
};

Node.prototype.setRight = function(right) {
  this.right = right;
};

function addNode(tree, node) {
  if(tree) {
    if(tree.value < node.value) {
      if(tree.right) {
        addNode(tree.right, node);
      } else {
        tree.setRight(node);
      }
    } else {
      if(tree.left) {
        addNode(tree.left, node);
      } else {
        tree.setLeft(node);
      }
    }
  } else {
    tree = node;
  }
  return tree;
}

function createBST() {
    nodeA = new Node(5);
    nodeB = new Node(12);
    nodeC = new Node(10);
    nodeD = new Node(15);
    nodeE = new Node(20);
    nodeF = new Node(25);
    nodeG = new Node(8);
    nodeH = new Node(3);

    var tree = addNode(tree, nodeA);
    tree = addNode(tree, nodeB);
    //intentionally make an incorrect BST
    // tree.setLeft(nodeB);
    tree = addNode(tree, nodeC);
    tree = addNode(tree, nodeD);
    tree = addNode(tree, nodeE);
    tree = addNode(tree, nodeF);
    tree = addNode(tree, nodeG);
    tree = addNode(tree, nodeH);
}

function printTree(root) {
  var currentNode = root;
  if(currentNode.left) {
    printTree(currentNode.left);
  }

  console.log(currentNode.value);

  if(currentNode.right) {
    printTree(currentNode.right);
  }
}

//Q4
function treeToArray(root, array) {
  var currentNode = root;
  if(currentNode.left) {
    treeToArray(currentNode.left, array);
  }

  array.push(currentNode.value);

  if(currentNode.right) {
    treeToArray(currentNode.right, array);
  }
}

function checkTree() {
  var nodeArray = [];
  createBST();
  treeToArray(nodeA, nodeArray);
  for(var i = 0; i < nodeArray.length - 1; i++) {
    if(nodeArray[i] >= nodeArray[i + 1]) {
      return false;
    }
  }
  return true;
}

// AJAX load
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
          this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  alert('Resolved');
  // expected output: 'resolved'
}

//jQuery
$(document).ready(function() {
  $("form#build").submit(function(event) {
    createBST();
    printTree(nodeA);
    event.preventDefault();
  });


  $("form#check").submit(function(event) {
    var result = checkTree();
    if(result) {
      $("div#result").text("true");
    } else {
      $("div#result").text("false");
    }

    event.preventDefault();
  });
});
