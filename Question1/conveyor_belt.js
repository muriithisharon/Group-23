
function conveyorBelt (item){
    let conveyorlist = ["bag","shoes"]
    conveyorlist.push(item)
     

    if (conveyorlist.length > 0){
        dequedItem = conveyorlist.shift()

    }
    return dequedItem
    
};

console.log(conveyorBelt("scarf"));