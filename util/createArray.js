
function createArray (root,obj){
    if(obj.children === undefined)
        obj.children = []
    if(root!=null){
        // console.log(obj)
        obj.children.push(root.val);
        obj.children[obj.children.length-1].children=[]
        createArray(root.left,obj.children[obj.children.length-1])
        createArray(root.right,obj.children[obj.children.length-1])
    }
    else obj.children.push({})
}

module.exports = createArray

