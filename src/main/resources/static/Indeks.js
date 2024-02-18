// Oppretter Array for å lagre infoen fra brukeren og Regex for input validering
let kinoBilettArray = [];
let telefonNrRegex = /^(\+\d{1,3}[- ]?)?\d{8}$/;
let epostRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let navnRegex = /^[a-zA-ZæøåÆØÅ' ]{2,30}$/;

// Lager en funksjon som skjer når brukeren clicker på kjøp billett
function kjopBilett() {
    // Først lagrer all informasjon som brukerenen skriver i input feltene
    const filmer = document.getElementById("filmer").value;
    const antallBiletter = document.getElementById("antallBiletter").value;
    const fornNavn = document.getElementById("fornNavn").value;
    const etterNavn = document.getElementById("etterNavn").value;
    const telefonNr = document.getElementById("telefonNr").value;
    const epost = document.getElementById("epost").value;

    //Her bruker jeg if-settninger for å skjekke at inputene har riktig verdi
    if (!fornNavn || !etterNavn || !telefonNr || !epost || !antallBiletter) {
        alert("Alle felt må fylles ut");
        return false; // Stopp funksjonen her
    }

    // Her bruker jeg regex-kode for å validere telefonnr, epost og navn
    if (!telefonNrRegex.test(telefonNr)) {
        alert("Vennligst skriv inn gyldig telefonnummer");
        return false;
    }

    if (!epostRegex.test(epost)) {
        alert("Vennligst skriv inn gyldig e-postadresse");
        return false;
    }
    if (!navnRegex.test(fornNavn + etterNavn)) {
        alert("Skriv inn gyldig navn")
        return false;
    }

    // lager objektet med verdiene fra input
    const kinoinfo = {
        filmer: filmer,
        antall: antallBiletter,
        fornNavn: fornNavn,
        etterNavn: etterNavn,
        telefonNr: telefonNr,
        epost: epost
    }
    // pusher objektet til arrayet
    kinoBilettArray.push(kinoinfo);

    let output = document.getElementById("output");
    output.innerHTML = ""; // Tømmer output-elementet før vi legger til ny informasjon

    // For loop og formatering for å printe ut arrayet
    for (let i = 0; i < kinoBilettArray.length; i++) {
        output.innerHTML += "<p><strong>Billett " + (i + 1) + ":</strong><br>" +
            "Film: " + kinoBilettArray[i].filmer +
            " Antall: " + kinoBilettArray[i].antallBiletter +
            " Navn: " + kinoBilettArray[i].fornNavn +
            " " + kinoBilettArray[i].etterNavn +
            " Telefonnr: " + kinoBilettArray[i].telefonNr +
            " Epost: " + kinoBilettArray[i].epost + "</p>";
    }
    // Fjerner verdiene etter at man har kjøpt billett
    document.getElementById("antallBiletter").value = "";
    document.getElementById("fornNavn").value = "";
    document.getElementById("etterNavn").value = "";
    document.getElementById("telefonNr").value = "";
    document.getElementById("epost").value = "";
}

// Funksjon for slettning av array(Billettene)
function slettArray() {
    kinoBilettArray = [];
    let output = document.getElementById("output");
    output.innerHTML = "";
}

