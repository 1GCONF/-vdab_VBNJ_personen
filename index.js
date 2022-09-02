/*De gebruiker typt per persoon de naam en de lengte.
Hij herhaalt dit tot hij stop typt bij de naam.

Toon de kleinste lengte van de personen.
Toon de personen met een lengte gelijk aan de kleinste lengte.
Toon per persoon de naam en de lengte.

Toon de grootste lengte van de personen.
Toon daarna de personen met een lengte gelijk aan de grootste lengte.
Toon per persoon de naam en de lengte*/



function tikPersonen(arr_personen){
    let persoonNaam=prompt("Naam: ");
    while(persoonNaam!=="stop"){
        while(!(/[a-zA-Z]+/g.test(persoonNaam))){
            if(persoonNaam==="stop"){
                break;
            }else{
                persoonNaam=prompt("Foute invoer. Naam:");
            }
        }
        if(persoonNaam==="stop"){
            break;
        }else{
            let persoonLengte=+prompt("Lengte: ");
            while(!(persoonLengte>0)){
                if(persoonLengte==="stop"){
                    break;
                }else{
                    persoonLengte=prompt("Foute invoer. Lengte: ")
                }
            }
            if(persoonLengte==="stop"){
                break;
            }
            arr_personen.push({naam:persoonNaam,lengte:persoonLengte});
            persoonNaam=prompt("Naam: ");
        }
    }
    return arr_personen;
}
function toonPersonenInElement(arr_personen,elementQuerySelector){
    const titel_h2=document.createElement("h2");
    titel_h2.innerHTML="alle personen:"
    titel_h2.className="titel_h2"
    const ul=document.createElement("ul");
    arr_personen.map(persoon=>{
        const li = document.createElement("li");
        li.innerHTML=`
            <span>${persoon.naam} - </span>
            <span>${persoon.lengte} cm</span>
        `
        ul.appendChild(li);
    });
    document.querySelector(elementQuerySelector).append(titel_h2,ul);
}
function berekenKleinsteLengte(arr_personen){
    const alleLengtes=    arr_personen.map(persoon=>{
        return persoon.lengte
    });
    const kleinste= Math.min(...alleLengtes);
    return arr_personen.filter(persoon=>{
       return persoon.lengte===kleinste;
    })
}
function toonKleinsteInElement(arr_personen,elementQuerySelector){
    const titel_h2=document.createElement("h2");
    titel_h2.innerHTML="kleinste persoon:";
    titel_h2.className="titel_h2"
    const ul = document.createElement("ul");
    arr_personen.map(persoon=>{
        const li = document.createElement("li");
        li.innerHTML=`
            <span>${persoon.naam} - </span>
            <span>${persoon.lengte} cm</span>
        `
        ul.appendChild(li);
    })
    document.querySelector(elementQuerySelector).append(titel_h2,ul)
}
function berekenGrootsteLengte(arr_personen){
    const alleLengtes=    arr_personen.map(persoon=>{
        return persoon.lengte
    });
    const grootste= Math.max(...alleLengtes);
    return arr_personen.filter(persoon=>{
       return persoon.lengte===grootste;
    })
}
function toonGrootsteInElement(arr_personen,elementQuerySelector){
    const titel_h2=document.createElement("h2");
    titel_h2.innerHTML="grootste persoon";
    titel_h2.className="titel_h2"
    const ul = document.createElement("ul");
    arr_personen.map(persoon=>{
        const li = document.createElement("li");
        li.innerHTML=`
            <span>${persoon.naam} - </span>
            <span>${persoon.lengte} cm</span>
        `
        ul.appendChild(li);
    })
    document.querySelector(elementQuerySelector).append(titel_h2,ul)
}
const personen=tikPersonen([]);
if(personen.length>0){
    const kleinsteLengte=berekenKleinsteLengte(personen);
    const grootsteLengte=berekenGrootsteLengte(personen);
    toonPersonenInElement(personen,".allePersonen");
    toonKleinsteInElement(kleinsteLengte,".kleinstePersoon");
    toonGrootsteInElement(grootsteLengte,".grootstePersoon");
}


