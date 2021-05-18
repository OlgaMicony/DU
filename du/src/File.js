import React from 'react';


export default function File(){
  var express = require("express")
  var multer  = require("multer")
  var upload = multer({ dest: 'uploads/' })

  var app = express()
 
  




  return(
    <div className="File">
      <form 
      onSubmit={handleSubmit}  
      action="/upload" 
      method="post" 
      enctype="multipart/form-data">
        <label>Nahrat soubor</label><br /><br />
        <input type="file" name="filedata" />
        <input type="submit" value="Submit" />
      </form>
    </div>

  )
}

