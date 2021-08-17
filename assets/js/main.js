//helping function
function getMe(id){
    let val = document.getElementById(id).value;
    return Number(val);
}
//Html Injection
function inject(Id,giv,add){
    document.getElementById(Id).innerHTML = giv+add;
}
function radio(ID){
    let rad = document.getElementById(ID).checked
    return String(rad)
}
function calc(){
    let netto = radio("brutto");
    let brutto = radio("netto");
    let nein = radio("nein");
    let seven = radio("seven");
    let betrag = getMe("betrag");
    console.log(netto,brutto,nein,seven)
    let switchVal=String(netto+brutto+nein+seven);
    console.log(switchVal);
    let pro,result;
    console.log(netto)
    switch (switchVal) {
        case "truefalsetruefalse":
            pro = betrag*19/100;
            result = betrag+pro;
            inject("msb",pro," €")
            inject("bn","Brutto","betrag");
            inject("bnb",result," €")
            break;
        case "truefalsefalsetrue":
            pro = betrag*7/100;
            result = betrag+pro;
            inject("msb",pro," €")
            inject("bn","Brutto","betrag");
            inject("bnb",result," €")
            break;
        case "falsetruetruefalse":
            pro = betrag*19/100;
            result = betrag-pro;
            console.log(result);
            inject("msb",pro," €");
            inject("bn","Netto","betrag");
            inject("bnb",result," €");
            break;
        case "falsetruefalsetrue":
            pro = betrag*7/100;
            result = betrag-pro;
            inject("msb",pro," €");
            inject("bn","Netto","betrag");
            inject("bnb",result," €");
            break;
        default:
            break;
    }
}
