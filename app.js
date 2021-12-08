

function createRows(r,c, array){
    const rows = document.createElement("div")
    for(let i = 0; i < r; i++){
        let row = document.createElement("div")
        row.className = "boardRow";
        for(let j = 0; j < c; j++){
            var offset = i * c;

            console.log(array[j+offset])
            if(array[j + offset] === "="){
                let rectangle = `<button class='rectangle' onClick='onClick(this)'>${array[j + offset]}</button>`
                row.insertAdjacentHTML("beforeend",rectangle);
            }else{
                let square = `<button class='square' onClick='onClick(this)'>${array[j + offset]}</button>`
                 row.insertAdjacentHTML("beforeend",square);
            }  
        }
    rows.insertAdjacentHTML("beforeend",row.outerHTML);
    }
    return rows
}

function createNumberPad(){
    const numberPad = document.getElementById("numbers-pad");
    var numberPadArray = ["7","8","9","4","5","6","1","2","3","%","0",".",]
    const rows = createRows(4,3, numberPadArray);
    var content = rows.outerHTML;
    numberPad.insertAdjacentHTML("afterbegin",content);
}

function onClick(e){
    console.log(e.textContent)
}

function  createTopRow(){
    const keyPad = document.getElementById("key-pad");
    const topRowArray =["C","÷","x","<"]
    const rows = createRows(1,4,topRowArray)
    rows.className= "top-row";
    var content = rows.outerHTML;
    keyPad.insertAdjacentHTML("afterbegin",content);
}

function createOuterColumn(){
    const keyPad = document.getElementById("key-pad");
    const outerColumnArray = ["-","+","="];
    const column = createRows(3,1, outerColumnArray);
    column.className = "outer-column";
    var content = column.outerHTML ; 
    keyPad.insertAdjacentHTML("afterbegin",content);

}


createTopRow()
createNumberPad()
createOuterColumn()


// var keyPad = document.getElementById("key-pad");

// keyPad.insertAdjacentHTML("afterbegin","<div class='square'></div>");
