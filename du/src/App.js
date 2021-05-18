import React from 'react';
import multer from 'multer';


export default function App(){

  var express = require('express')
  var app = express()
  var multer  = require('multer')
  var upload = multer()
 
app.post('/profile', upload.none(), function (req, res, next) {
  let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Error loading file");
    else
        res.send("The file is loaded");
})
app.listen(3000);

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

  return(
    <div className="App">
      <div className="container">
      <h1>Naceňování nových projektů</h1>      
      <form 
      onSubmit={createTable()}  
      action="/upload" 
      method="post" 
      enctype="multipart/form-data">
        <label>Nahrat soubor</label><br /><br />
        <input type="file" name="filedata" />
        <input type="submit" value="Submit" />
      </form>      
      </div>      
    </div>    
  )
 }