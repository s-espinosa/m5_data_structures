var Node = require('./node.js')

class LinkedList {
  constructor() {
    this.head = null
  }

  push(data) {
    if (this.head === null) {
      var node = new Node(data)
      this.head = node
    } else {
      this.head.push(data)
    }
  }
}

module.exports = LinkedList
