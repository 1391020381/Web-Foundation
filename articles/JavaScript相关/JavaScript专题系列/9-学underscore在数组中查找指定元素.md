## ES6 findIndex
```
[12,5,130,44].findIndex(item=>{
return item >=15
})
```

## findLastIndex
```
function findLastIndex(array,predicate,context){
  var length = array.length
  for(var i = length -1;i>=0;i--){
   if(predicate.call(context,array[i],i,array)) return i
  }
  return -1
}
console.log(findLastIndex([1,2,3,4],function(item,index,array){
  if(item ==1)

}))
```