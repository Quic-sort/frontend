import React from 'react'

function GetStringList(data) {

    const len = data.length;

    if(len===0){
        return "";
    }
    const str = data.substring(1,len-3);

    // const stringArr = str.replace(/"/g, '').split(', ');

    
    const regex = /"(.*?)"/g;
    let match;
    const result = [];
    
    while ((match = regex.exec(str)) !== null) {
        result.push(match[1]);
    }

    var arr = result.map((item)=><li>{item}</li>)
    
    return arr;
}

export default GetStringList