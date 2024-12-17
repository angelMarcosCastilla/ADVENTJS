function transformTree(tree) {
  // formla - 2*i+1

  function buildTree(init){
    if(init>=tree.length || tree[init] === null){
      return null
    }

    const currentNode = {
      value: tree[init],
      left: buildTree(2 * init + 1), 
      right: buildTree(2 * init + 2) 
    };

    return currentNode;
  }

  const result = buildTree(0);
  return result;
}
