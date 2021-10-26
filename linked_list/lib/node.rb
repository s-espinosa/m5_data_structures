class Node
  def initialize(data)
    @data = data
    @next_node = nil
  end

  def push(node)
    if @next_node == nil
      @next_node = node
    else
      @next_node.push(node)
    end
  end
end
