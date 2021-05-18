import React from 'react';

export default function Table() {
  return(    
  
  function createTable() {
    var array = [[1,2,3],[4,5,6],[7,8,9]];
    var content = "";
    array.forEach(function(row) {
        content += "<tr>";
        row.forEach(function(cell) {
            content += "<td>" + cell + "</td>" ;
        });
        content += "</tr>";
    });
    document.getElementById("1").innerHTML = content;
}
   
  )
  
}