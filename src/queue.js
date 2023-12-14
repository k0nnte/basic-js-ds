const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.root = null;
}

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    if(!this.root){
      this.root = new ListNode(value);
   }else{
      let i = this.root;
      while(i){
          if(i.value === value){
              return;
          }
          if(!i.next){
              i.next = new ListNode(value);
          }else{
              i = i.next;
          }
      }
   }
  }

  dequeue() {
    if(!this.root){
      return null;
  }
  const a = this.root;
  this.root = this.root.next;
  return a.value;
  }
}

module.exports = {
  Queue
};
