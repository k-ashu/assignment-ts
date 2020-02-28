const fetch = require('node-fetch')

const bstFromPreorder = require('./bst')
const createArray = require('./createArray')
const traverse = require('./traverse')

const url = 'http://172.19.101.133:3000/get_data_in_preorder_form'

const fetchData = async()=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        const node = bstFromPreorder(data)
        traverse(node)
        var arr = node.val
        createArray(node.left,arr)
        createArray(node.right,arr)

        return arr
    }
    catch(e){
        console.log(e)
    }
}


module.exports = fetchData