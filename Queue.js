class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }
    
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(6);
queue.enqueue(28);
queue.enqueue(2);
queue.enqueue(0);
console.log("All items:"+queue.items);

queue.dequeue();
console.log("All items after dequeue:"+queue.items);

console.log("Last item:"+queue.peek());

console.log("Queue Empty:"+queue.isEmpty());

console.log("Queue size:"+queue.size());

queue.clear();
console.log("All items:"+queue.items);