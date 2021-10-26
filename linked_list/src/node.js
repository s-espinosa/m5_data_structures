class Node {
  constructor(data) {
    this.data = data
    this.nextnode = null
  }

  push(data) {
    if (this.nextnode === null) {
      var node = new Node(data)
      this.nextnode = node
    } else {
      this.nextnode.push(data)
    }
  }
}

module.exports = Node
