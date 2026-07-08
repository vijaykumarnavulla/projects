function test(input){
   var arr = input;
   var count = arr[1];
    var sequence = arr[0];
    var obj = {};
    for(var i = 0 ; i < sequence.length ; i++){
        if(!obj[sequence[i]]){
            obj[sequence[i]] = i+'';
        }
        else{
            obj[sequence[i]] = obj[sequence[i]] +','+i;
        }

    }
    var regex = new RegExp('[^'+sequence+']','g');

    for(var i = 2; i < arr.length ;i++){
        var person = arr[i];   
            
        person = person.replace(regex,'');
        var storeIndex = -1;
        if(!person){
            console.log('NEGATIVE');
            continue;
                    }
        for(let i = 0; i < person.length ; i++){
            let match =  person.substring(i,(person.length-1)-(person.length-1-(i+1)));
            let currentIndex = obj[match];
            if(currentIndex.indexOf(',') !== -1){
                currentIndex = currentIndex.split(',');
                let inValue = parseInt(currentIndex);
                for(var index = 0 ; index < currentIndex.length;index++){
                    if(parseInt(storeIndex) < parseInt(currentIndex[index]) ){
                       currentIndex = currentIndex[index];
                       break;
                    }
                   currentIndex = currentIndex[index];
                }          
            }
            if(parseInt(storeIndex) > parseInt(currentIndex)){
                
                console.log('NEGATIVE');
                break;
            }
            if(i === person.length -1){
                 console.log('POSITIVE');
            }
          storeIndex = currentIndex;            
            
        }
       
    }
}

test(['coronavirus',3,'zzzz','crnas','onarous']);