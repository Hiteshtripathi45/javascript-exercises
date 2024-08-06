const repeatString = function(a,b) {
    let st=''
    for(let i=0;i<b;i++){
        st=st+a
    }
    if(b<0){
        return 'ERROR'
    }
    else{
        return st
    }
};

// Do not edit below this line
module.exports = repeatString;
