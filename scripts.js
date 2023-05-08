 function getsmallerNumber(){
    let input_a = document.querySelector("#number_input").value;
    // let num = Number(input_a);
    // "1234467" "1", "2", "3"
    
    let arrayNum = input_a.split("");
    let minNum = Number(arrayNum[0]);
    arrayNum.forEach( (elem) => {
        if(Number(elem) < minNum){
            minNum = Number(elem);
        }
    });

    document.querySelector("#output").innerHTML = minNum;
}