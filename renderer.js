// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fs = require('fs');

function copyData() {
    try
    {
        addText("Checking for Updated files")
        fs.copyFileSync('AppVersion/ArcsUpdateStick.exe','ArcsUpdateStick.exe')
    }
    catch(ex)
    {
        if(ex.message.includes('no such file'))
            addText("Error: Cant find update file");
    }
    
}

function addText(text) {
    document.getElementById("textarea").value = document.getElementById("textarea").value + "\n" +  text;
}


document.querySelector('#btnEd').addEventListener('click', copyData)
