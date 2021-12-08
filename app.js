function helloWorld(){
    console.log("hello World")
}

helloWorld()

function createRows(r,c){
    const rows = document.createElement("div")
    for(let i = 0; i < r; i++){
        let row = document.createElement("div")
        row.className = "boardRow";
        for(let j = 0; j < c; j++){
            var offset = i * 3;
            var charactersArray = ["7","8","9","4","5","6","1","2","3","%","0",".",]
            let square = `<button class='square' onClick='onClick(this)' value=${charactersArray[i]}>${charactersArray[j + offset]}</button>`
            row.insertAdjacentHTML("beforeend",square);
           
        }
        rows.insertAdjacentHTML("beforeend",row.outerHTML);
    }
    return rows
}

function createNumberPad(){
    const numberPad = document.getElementById("numbers-pad");
    const rows = createRows(4,3);
    var content = rows.outerHTML;
    numberPad.insertAdjacentHTML("afterbegin",content);
    
}

function onClick(e){
    console.log(e.textContent)
}


createNumberPad()


// var keyPad = document.getElementById("key-pad");

// keyPad.insertAdjacentHTML("afterbegin","<div class='square'></div>");
