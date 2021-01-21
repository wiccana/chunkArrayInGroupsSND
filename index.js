const chunkArrayInGroups = function(arr, size){
       
    let newArr = []
     let auxArr = []

     for(let i = 0; i < arr.length; i++){

        auxArr.push(arr[i])
     
        if( auxArr.length == size || i == arr.length -1){
            console.log('push')
            newArr.push(auxArr)
            auxArr = []
        }


    }
     
    console.log('newArr', newArr)
     return newArr

   

}

module.exports = chunkArrayInGroups
