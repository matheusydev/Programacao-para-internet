async function consultarPais(pais) {
    let url = "https://restcountries.com/v3.1/name/" + pais; 
    let response = await fetch(url);
    let json = await response.json();
    let capital = json[0].capital;
    let sigla = json[0].cca2;
    let nomeOficial = json[0].name.official;
    return Sigla: ${sigla} - Capital: ${capital} - Nome: ${nomeOficial} ;
}

console.log(await consultarPais('brazil'));