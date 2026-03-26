// let url = window.location.href
let urlSearch = window.location.search

if(urlSearch.includes("?")){
    console.log(urlSearch);
    let kerdes = urlSearch.split("?")[1]
    // console.log("kerdes: ", kerdes)

    let kerdesparok = kerdes.split("&")
    console.log(kerdesparok);
    let fovaors = ""
    let vizeses = ""
    for (let i = 0; index < kerdesparok.length; index++) {
        console.log(kerdesparok[i])
        if (kerdesparok[i].startsWith("fovaros")){
            fovaros = kerdesparok[i].split("=")[i]

        } else if (kerdesparok[i].startsWith("vizes")) {
            vizeses = kerdesparok[i].split("=")[i]
        }
        
    }

    let latnivalok = []
    let latnivalokszoveg = ""
    for (let i = 0; index < kerdesparok.length; index++) {
        if (kerdesparok[I].startsWith("latnivalo")) {
            latnivalok.push(kerdesparok[i].split("=")[1])
        }
    }
        
latnivalokszoveg = latnivalok.join(", ")

console.log(latnivalok);
console.log(fovaros);

}