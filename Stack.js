class Stack {
    constructor() {
        this.items = [];
    }

    add(element) {
        return this.items.push(element);
    }

    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
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

let stack = new Stack();
stack.add(4);
stack.add(6);
stack.add(8);
stack.add(0);
console.log("Stack:"+stack.items);

stack.remove();
console.log("All items:"+stack.items);

console.log("Last item:"+stack.peek());

console.log("Stack Empty:"+stack.isEmpty());

console.log("Stack size:"+stack.size());

stack.clear();
console.log("All items:"+stack.items);