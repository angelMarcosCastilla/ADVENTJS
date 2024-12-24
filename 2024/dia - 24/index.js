/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  function areMirrors(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2 || tree1.value !== tree2.value) return false;
    return (
      areMirrors(tree1.left, tree2.right) && areMirrors(tree1.right, tree2.left)
    );
  }

  const synchronized = areMirrors(tree1, tree2);

  return [synchronized, tree1?.value];
}
