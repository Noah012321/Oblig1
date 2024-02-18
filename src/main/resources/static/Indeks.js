let biletterArray = [];

function validateForm() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const tallAntall = Number(antall)
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonNr").value;
    const epost = document.getElementById("epost").value;
    const epostRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const navnRegex = /^[a-zA-ZæøåÆØÅ' ]{2,30}$/;

    const kinoinfo = {
        filmer: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonNr: telefonNr,
        epost: epost
    };

    biletterArray.push(kinoinfo);

    if (!film || !antall || !fornavn || !etternavn || !telefonNr || !epost) {
        alert("Alle feltene må være utfylt!");
        return false;
    }
    if (!navnRegex.test(fornnavn + etternavn)) {
        let ut = "Skriv inn gyldig navn!";
        ut=ut.fontcolor("red");
        return false;
    }
    if (!/^\d{8}$/.test(telefonNr)) {
        let ut="Telefonnummeret må være 8 siffer langt";
        ut=ut.fontcolor("red");
        document.write(ut);
        return false;
    }
    if (!epostRegex.test(epost)) {
        let ut = "Skriv inn gyldig epost!";
        ut=ut.fontcolor("red");
        return false;
    }
    if (isNaN(tallAntall)) {
        let ut = "Du må skrive antallet ved bruk av tall!"
        ut=ut.fontcolor("red")
        document.write(ut)
        return false;
    }

    for (let i = 0; i<biletterArray.length;i++) {
        let ut = "Antall: " + biletterArray[i].antall + ", " +
            "Fornavn: " + biletterArray[i].fornavn + " " + biletterArray[i].etternavn + ", " +
            "TelefonNr: " + biletterArray[i].telefonNr + ", " +
            "Epost: " + biletterArray[i].epost;
        document.getElementById("Informasjon").innerHTML=ut;
    }
    console.log("hei")

}

function slettInformasjon() {
    document.getElementById("Informasjon").textContent = '';
}