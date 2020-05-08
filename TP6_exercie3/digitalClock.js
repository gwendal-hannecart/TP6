function addSegments(digitId){
    for(let i=0;i<7;i++){
        let segment=document.createElement("div");
        segment.textContent=" "
        segment.className = "segment off segment"+i;
        let chaine=digitId;
        document.getElementById(chaine).appendChild(segment);
        
  }
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    for(let i=0;i<7;i++){
        if(segmentStates[value][i]===1){
           let name=".segment"+i;
           document.getElementById(digitId).querySelector(name).className="segment segment"+i;
          
        }
        else{
            let name=".segment"+i;
            document.getElementById(digitId).querySelector(name).className="segment off segment"+i;
        }
  }
    // TODO : compléter
}




function init(){
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
    // TODO : compléter
}



function main(){
    init();
   /* updateDigit("hours-tens", 2);
    updateDigit("hours-minutes", 0);
    updateDigit("minutes-tens", 2);
    updateDigit("minutes-units", 0);*/
    setInterval(function() {
        updateDigit("hours-tens", Math.trunc(new Date().getHours()/10));
        updateDigit("hours-units",  new Date().getHours()%10);
        updateDigit("minutes-tens", Math.trunc( new Date().getMinutes()/10));
        updateDigit("minutes-units",  new Date().getMinutes()%10);
    }, 1000);
// TODO : compléter
}
main();
