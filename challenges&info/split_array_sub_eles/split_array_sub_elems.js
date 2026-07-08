function fetchArray(inpurArr){    
    let arr = inpurArr;
    arr= arr.sort(function(a, b){return a - b});   
    let parentObj = {};
    let tmpArr = [];

    for(let i = 0 ; i  < arr.length; i++){
        let obj = {};
        let ele=arr[i]+'';
        let isd = false;
           
        //if(i === 0 )        
        let arra = ele.split('');

        for(let i = 0 ; i < arra.length; i++){
            
           if(tmpArr.toString().indexOf(arra[i]) !== -1){
            isd = true;
            break;
          }
        }
        if(!isd){
            obj[ele]=ele;
            tmpArr.push(ele);
        }                 

        for(let j = 0; j < arr.length;j++){
            let str1 = ele + '';
            let str2 = arr[j]+'';

            let str = str1+''+str2;

            let strArr = str1.split('');            

            if(str2.indexOf(str1) === -1 && str1.indexOf(str2) === -1){
                let revStr = str2+str1;

                if(parentObj[str] === undefined && parentObj[revStr] === undefined){
                    let isDup = false;
                                        
                    for(let s1 of str1){
                        if(str2.indexOf(s1) !== -1){
                            isDup = true;
                            break;
                        }
                     }

                     if(!isDup)
                    obj[str]=str1+','+str2;

                }
                    
            }            
          
        }
        parentObj = {...parentObj,...obj};
    }

//output result

 for(let ele in parentObj){
        console.log(parentObj[Number(ele)]);
    }    
}


fetchArray([1,34,3,45,50]);