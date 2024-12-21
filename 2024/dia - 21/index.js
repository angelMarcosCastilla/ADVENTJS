/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  if (!tree) return 0;

  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1 ;
}

