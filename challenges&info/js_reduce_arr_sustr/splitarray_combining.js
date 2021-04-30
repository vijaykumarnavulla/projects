function test() {
  var arr = [
    {feild1:1,list:['list1','list2','list3','list4']},
    {feild1:2,list:['list5','list6','list7','list8']},
    {feild1:3,list:['list11','list12','list13','list14']},
    {feild1:4,list:['list21','list22','list23']},
    {feild1:5,list:[]}
    ];
var newList = arr.reduce((acc,curr,index)=>{

   let res = curr.list.reduce((a,c)=> {
       a.push({...arr[index], group:c})
       return a
    }, [])
    if(!res || !res.length){
        res = [{...arr[index], group:null}];
    }
    acc = [...acc,...res];
    return acc;
}
, [])
   console.log(newList);
}
          
test();