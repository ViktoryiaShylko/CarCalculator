let jeepModels = ["Compass", "Grand Cherokee", "Wrangler"];
let mercedesModels = ["Maybach", "A-class", "C-class", "G-class"];
let bmwModels = ["X3", "X5", "M4", "Series 8"];
let audiModels = ["Q5", "Q7", "A3", "A7", "TT"];

let btn = document.querySelector('#submit');
let price = document.querySelector('#price');


const classesAuto = document.querySelectorAll('.classAuto');


let finalArr = [];

function selectModel (sender) {
    if (sender.options[sender.selectedIndex].value == "none"){
        document.getElementById("make").style.display = "none";
    }
    else{
        document.getElementById("make").style.display = "block";
    }

 
    let optionsString = "";
    
    
    if (sender.options[sender.selectedIndex].value == "jeep"){
        finalArr.push(+50000);
          for (let model of jeepModels){
              optionsString += `<option>${model}</option>`;
              switch(model){
                  case "Compass": finalArr.push(+3000);break;
                  case "Grand Cherokee": finalArr.push(+5000);break;
                  case "Wrangler": finalArr.push(+7000);break;
              }
          }
         
    }

    if (sender.options[sender.selectedIndex].value == "mercedes"){
        finalArr.push(+80000);
        for (let model of mercedesModels){
            optionsString += `<option>${model}</option>`;
            switch(model){
                case "Maybach": finalArr.push(+10000);break;
                case "A-class": finalArr.push(+6000);break;
                case "C-class": finalArr.push(+7000);break;
                case "G-class": finalArr.push(+9000);break;
            }
        }
        
  }

  if (sender.options[sender.selectedIndex].value == "bmw"){
    finalArr.push(+70000);
    for (let model of bmwModels){
        optionsString += `<option>${model}</option>`;

        switch(model){
            case "X3": finalArr.push(+5000);break;
            case "X5": finalArr.push(+6000);break;
            case "M4": finalArr.push(+7000);break;
            case "Series 8": finalArr.push(+8000);break;
        }
    }
   
}

if (sender.options[sender.selectedIndex].value == "audi"){
    finalArr.push(+60000);
    for (let model of audiModels){
        optionsString += `<option>${model}</option>`;
        switch(model){
            case "Q5": finalArr.push(+5000);break;
            case "Q7": finalArr.push(+6000);break;
            case "A3": finalArr.push(+7000);break;
            case "A7": finalArr.push(+8000);break;
            case "TT": finalArr.push(+9000);break;
        }
    }
    
}
    document.getElementById("make").innerHTML = optionsString;
} 



btn.addEventListener('click',()=>{
    classesAuto.forEach((item,index)=>{
         if(item.checked){
            finalArr.push(+item.value);   
         }
         summChecks(); 
    })  
    sum(finalArr);
    showSum();
});

function summChecks(){
    let checkedProperties = document.querySelectorAll('input.addProperties:checked');
    console.log(checkedProperties);
    /*
    let checkedValues = Array.from(checkedProperties).map(item => +item.value);
    console.log(checkedValues);
    let propertiesPrice;
    checkedValues.forEach((item,i)=>{
        propertiesPrice += item ;
        return propertiesPrice;
        
        })
        console.log(propertiesPrice);
        finalArr.push(+propertiesPrice);*/
}

function sum(elem){
    let finalPrice;
    elem.forEach((item,i)=>{
    finalPrice += item ;
    })
    console.log (finalPrice)
}
function showSum() {
    price.value = finalPrice + ' ₽';
}
console.log(finalArr);