function repeatTest(){
    let paragraphe1=document.createElement("p");
    paragraphe1.textContent="Titre de la page :"  +document.title;
    document.body.append(paragraphe1);
    let paragraphe2=document.createElement("p");
    paragraphe2.textContent="Notre tableau contient" +document.getElementsByTagName("tr").length +" ligne(s) ";
    document.body.append(paragraphe2);
    let paragraphe3=document.createElement("p");
    paragraphe3.textContent="Notre page contient "+document.getElementsByTagName("th").length +" colonne(s) ";
    document.body.append(paragraphe3);
    let paragraphe4=document.createElement("p");
    paragraphe4.textContent="Notre page contient "+document.getElementsByClassName("Semestre").length +" Semestre(s) ";
    document.body.append(paragraphe4);
    let paragraphe5=document.createElement("p");
    let k=document.getElementsByClassName("E1S5");
    paragraphe5.textContent="la note de S5 de E1  est"+ k[0].innerHTML;
    document.body.append(paragraphe5);
    let paragraphe6=document.createElement("p");
    k=document.getElementsByClassName("E2S5");
    paragraphe6.textContent="la note de S5 de E2  est"+ k[0].innerHTML;
    document.body.append(paragraphe6);
    let paragraphe7=document.createElement("p");
    k=parseInt(document.querySelectorAll("td")[26].innerHTML)+2;
    paragraphe7.textContent="la note de S5 de E1  est"+k;
    paragraphe7.className='modif'
    document.body.append(paragraphe7);
     let textearea = document.createElement("textarea");
    document.body.appendChild(textearea);
    
}