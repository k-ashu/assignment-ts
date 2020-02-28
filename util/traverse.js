function traverse(root){
    if(root!==null){
        traverse(root.left)
        console.log(root.val)
        traverse(root.right)
    }
}


module.exports = traverse