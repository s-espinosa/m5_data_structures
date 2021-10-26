require "./lib/node"

class LinkedList
  def initialize
    @head = nil
  end

  def push(data)
    new_node = Node.new(data)
    if @head == nil
      @head = new_node
    else
      @head.push(new_node)
    end
  end
end
