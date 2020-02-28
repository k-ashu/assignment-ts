
function TreeNode({inorder_index,name,designation}) {
    this.val={
        inorder_index,
        name,
        designation
    }
    this.left = this.right = null;
}
const data =[{"inorder_index":30,"name":"Gwynne Shotwell","designation":"CEO"},{"inorder_index":20,"name":"Tim Hughes","designation":"CFO"},{"inorder_index":15,"name":"Gwynne Shotwell","designation":"Manager"},{"inorder_index":17,"name":"Bret Johnsen","designation":"SSD"},{"inorder_index":25,"name":"Joy Dunn","designation":"Manager"},{"inorder_index":40,"name":"Andy Lambert","designation":"CTO"},{"inorder_index":35,"name":"Umer Khan","designation":"Manager"},{"inorder_index":50,"name":"Hans Koenigsmann","designation":"Manager"},{"inorder_index":45,"name":"Mark Ruff","designation":"SSD"}]

const bstFromPreorder = (preorder, l = 0, r = preorder.length - 1) => {
    if (l > r) return null;    
    if (l === r) return new TreeNode(preorder[l]);
    
    const node = new TreeNode(preorder[l]);
    
    let pivot = l + 1;
    
    while (pivot <= r && preorder[pivot].inorder_index <= preorder[l].inorder_index) {
        pivot++;
    }

    node.left = bstFromPreorder(preorder, l + 1, pivot - 1);
    node.right = bstFromPreorder(preorder, pivot, r);
    
    return node;
};

module.exports = bstFromPreorder


