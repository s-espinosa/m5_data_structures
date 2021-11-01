var Node = require('./node.js')

class LinkedList {
  constructor() {
    this.head = null
  }

  push(data) {
    var newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      this.head.push(newNode)
    }
  }
}

module.exports = LinkedList
