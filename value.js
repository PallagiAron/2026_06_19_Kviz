function szamol() {
    console.log("hello")
    let szelesseg = document.getElementById("szelesseg").value
    let magassag = document.getElementById("magassag").value
    

    
    let magassakErtek = document.getElementById("magassag_ertek")
    let terulet = Document.getElementById("terulet")

    const teruleteredmeny = szelesseg * magassag
    magassakErtek.innerText = `A magasság érték: &{magassag}`
    teruletlistaelem.innerText = `terulet erteke: ${teruleteredmeny}`
}