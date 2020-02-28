class Stack {
    constructor() {
      this.stack = []
    }
    
    push(element) {
      this.stack.push(element)
    }

    pop() {
      if (this.isEmpty()) return 'Stack is empty!'
      return this.stack.pop()
    }

    peek() {
      if (this.isEmpty()) return 'Stack is empty'
      return this.stack[this.stack.length - 1]
    }
    
    isEmpty() {
      return !this.stack.length
    }
  }

  module.exports = Stack