const useNode=()=>{
    const insertNode=(tree,commentId,item)=>{
        if(tree.id===commentId){
            tree.items.push({
                id:new Date().getTime(),
                name:item,
                items:[]
            })
            return tree;
        }
        let latestNode=[];
        latestNode=tree.items.map((obj)=>{
            return insertNode(obj,commentId,item);
        })
        return {...tree,latestNode};
    }
    const editNode=(tree,commentId,value)=>{
        if (tree.id===commentId){
            tree.name=value;
            return tree
        }
        tree.items.map((obj)=>{
            return editNode(obj,commentId,value);
        })
        return {...tree}
    }
    const deleteNode=(tree,commentId)=>{}

    return  {insertNode,editNode,deleteNode}
}
export default useNode;