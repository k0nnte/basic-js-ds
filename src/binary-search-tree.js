const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.data = null;
}
  root() {
    return this.data;
  }

  add(data) {
    if(!this.data){
      this.data = new Node(data);
      return;
  }

  if(this.data.data === data){
      return;

  }
  let iterator = this.data;
  while(iterator){
      if(iterator.data === data){
          return;
      }
      if(data < iterator.data){
          if(!iterator.left){
              iterator.left = new Node(data);
              return;
          }else{
              iterator = iterator.left;
          }
      }else{
         if(!iterator.right){
          iterator.right = new Node(data);
          return;
         }else{
          iterator = iterator.right;
         }
      }

  }
  }

  has(data) {
    if(!this.data){
      return false;
  }
  let iterator = this.data;
  while(iterator){
      if(iterator.data === data){
          return true;
      }
      if(data<iterator.data){
          iterator = iterator.left;
      }else{
          iterator = iterator.right;
      }
  }
  return false;
  }

  find(data) {
    if(!this.data){
      return null;
  }
  let iterator = this.data;
  while(iterator){
      if(iterator.data === data){
          return iterator;
      }
      if(data<iterator.data){
          iterator = iterator.left;
      }else{
          iterator = iterator.right;
      }
  }
  return null;
  }

  remove(data) {
    this.data = removenode(this.data,data);

    function removenode(root,value){
         if(!root){
             return null;
         }
        if(value<root.data){
         root.left = removenode(root.left,value);
         return root;
        }else if(value>root.data){
         root.right = removenode(root.right,value);
         return root;
        }else if(value === root.data){
         if(root.left === null&& root.right === null){
             return null;
         }
         if(root.left === null){
             return root.right;
         }
         if(root.right === null){
             return root.left;
         }

         let maxleft = root.left;
         while(maxleft.right){
             maxleft = maxleft.right;
         }
         root.data = maxleft.data;
         root.left = removenode(root.left,maxleft.data);
         return root;
        }
     }
  }

  min() {
    if(!this.data){
      return null;
  }
  let iterator = this.data;
  while(iterator){
      if(iterator.left === null){
          return iterator.data;
      }else{
          iterator = iterator.left;
      }
  }
  }

  max() {
    if(!this.data){
      return null;
  }
  let iterator = this.data;
  while(iterator){
      if(iterator.right === null){
          return iterator.data;
      }else{
          iterator = iterator.right;
      }
  }
  }
}

module.exports = {
  BinarySearchTree
};