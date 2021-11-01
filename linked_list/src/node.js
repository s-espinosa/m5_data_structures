class Node {
  constructor(data) {
    this.data = data
    this.nextNode = null
  }

  push(node) {
    if (this.nextNode === null) {
      this.nextNode = node
    } else {
      this.nextNode.push(node)
    }
  }
}

module.exports = Node
