/**
 * Javascript on selainten ymmärtämä ohjelmointikieli, jolla pystyy lisäämään ja
 * poistamaan juttuja HTML:stä ja CSS:stä ja muutenkin operoimaan nettisaitin
 * sisällöillä. Javascriptillä tehdään siis kaikki nettijuttujen
 * toiminnallisuus, kuten listan elementtien lisääminen ja muokkaaminen.
 */

/**
 * Javascriptin perusteet
 */

/**
 * Tyypit
 *
 * Asiat voi saada erilaisia arvoje, kuten tekstiä, numeroita ja listoja.
 * Näiden ero on tärkeä ymmärtää, sillä eri tyyppiä olevilla asioilla voi tehdä
 * erilaisia juttuja. Et voi esimerkiksi tehdä kertolaskua teksteillä, mutta
 * numeroilla voit.
 */

/**
 * Integer = Numero
 *
 * Esim todo-listan tehtävien määrä
 */

3;

// Voi tehdä esim.
3 + 1; // 4

/**
 * String = Pätkä tekstiä
 *
 * Esim todo-listan yksi tehtävä
 */

('Tee sovellus');

// Näitäkin voi itse asiassa plussailla

'Tee sovellus' + 'Tee sovellus'; // 'Tee sovellusTee sovellus'

/**
 * Boolean = tosi / epätosi
 *
 * Esim. onko todo-listan tehtävä tehty?
 * Tää on vähän vähemmän selkee kun vertaa miten noin normaalisti muuten
 * käyttää erilaisia tietotyyppejä. Toisaalta, tää on äkkiä hiffattu kun
 * miettii vaan että maailma on tosi mustavalkonen ja asia voi olla true tai
 * false eli tosi tai epätosi.
 */

true;
false;

// Ei voi laskeskella, mutta voi tehdä mm. logiikkaa ja: && tai: || ei: !
true && false; // false
false || true; // true
!true; // false

/**
 * Muuttujat
 *
 * Ennen ku mennään kompleksisiin tyyppeihin, käydään läpi muuttujat ja
 * funktiot. Se että ohjelmassa voi vaan olla pätkä tekstiä on aika hyödytöntä
 * jos sillä ei voi tehä mitään. Siksi on muuttujia ja funktioita.
 *
 * Muuttuja on tosi samanlainen kun matikassa on muuttuja - sen sijaan että
 * käytetään tiettyä arvoa (3), voidaan tehdä muuttuja ja antaa sille arvo
 * (pituus = 3). Kun meillä on tollain tallennettu todo-listan pituus,
 * voidaan sitä käyttää myöhemmin jossain muussa yhteydessä
 */

// Muuttujaa luodessa tarvitaan alkuun "var" -avainsana (variable).
// (skipataan const & let)
var pituus = 3;
// Tallennettua tietoa voidaan käyttää ja/tai muokata myöhemmin
pituus = pituus - 1;
pituus; // 2

/**
 * Funktiot
 *
 * Funktiot on periaatteessa pienoisohjelmia, jotka ottaa sisäänsä asioita ja
 * jotka päästää ulos asioita. Meillä on käytössä aika laaja sarja erilaisia
 * javascriptin omia funktioita, joita yhdistelemällä me pystytään rakentelemaan
 * meidän oma todo-app.
 */

// Esim. kirjota tekstiä konsoliin. (opasta tässä välissä konsoli)
console.log(pituus);

/**
 * Note: `console` on periaatteessa kokoelma, josta löytyy erilaisia juttuja.
 * Kokeile mitä tapahtuu, kun ton vaihtaa vaikka `console.error()` funktioon.
 * Palataan tähän kokoelma-asiaan kohta, mutta headsuppina, pisteellä erotetaan
 * Kokoelmat ja niitten osat toisistaan.
 */

/**
 * Valmiiden funktioiden lisäksi me voidaan ite tehdä omia. Tästä on hyötyä
 * erityisesti kun halutaan tehdä samat stepit uudestaan ja uudestaan esim. aina
 * nappulaa painaessa.
 */

function huudaJaKirjoitaConsoleen(asia) {
  console.log(asia);
  alert(asia);
}

// Nyt voidaan sit tehdä esim
huudaJaKirjoitaConsoleen('Moi!');
huudaJaKirjoitaConsoleen('Mitä kuuluu?');

/**
 * Array = Lista
 *
 * Nyt päästään näihin kompleksisiin tyyppeihin. Nää on periaatteessa eri tapoja
 * tallentaa samaan paikkaan useampi perustyyppi. Esimerkiksi todo-lista on
 * lista, jossa on useita tekstejä.
 */

var lista = ['Tee sovellus', 'Tee siitä kivan näköinen', 'Laita se toimimaan'];

/**
 * Listalta saa ulos asioita hakasuluilla. Esim, jos halutaan listan toinen
 * palikka
 */

console.log(lista[2]); // 'Laita se toimimaan'

/**
 * Oho, miks tuli 3. eikä 2.?
 *
 * Listan järjestysnumerot alkaa nollasta!
 * Tää on aluks vähän hämäävää, mutta tälle on teknis-historiallisia syitä, ja
 * nykyään jos joku koodikieli yhtäkkiä päättäis, että alotetaanpa ykkösestä,
 * kaikki olis ihan sekasin. Tän oppii hahmottaan aika nopeesti, ja sit jos
 * tulee jotain ns one off virheitä, sit vaan vähän raapii päätään ja koittaa
 * uudestaan.
 */

/**
 * Korjattu 2. tehtävä
 */

console.log(lista[1]); // Tee siitä kivan näköinen
console.log(lista.length); // Mitäköhän tää vois tehdä?

/**
 * Huomaa myös, että meidän tekemällä listalla on pisteen takana erilaisia
 * toiminnallisuuksia. Riippuen siitä mikä tietotyyppi meillä on käytössä, oli
 * se sitten simppeli tai kompleksi, niillä on jotain tiettyjä, javascriptin
 * määrittelyjen mukaisia toimintoja. Kaikki tarvittavat tullaan selittämään,
 * mutta näittenkin olemassaolo on hyvä tiedostaa.
 */

/**
 * Object = objekti
 *
 * Vedetään vähän tietojenkäsittelytieteen mutkia suoriksi, mutta helpoin tapa
 * ajatella objekteja on ajatella, että ne on vaan listoja. Erona on, että
 * kun listoilta sä voit ettiä vain järjestysnumerolla (0,1,2,3....), objektissa
 * kaikille jutuille on annettu tietty "avain", jolla niitä voi poimia.
 *
 * Klassinen esimerkki tästä on sanakirja: jos sanakirja olis vaan lista, sen
 * käyttäminen edellyttäis että sä tiedät, kuinka mones sana "aapinen" on.
 * (sanakirja[67]). Sen sijaan objektista sä voit ettiä avaimella "aapinen" sen
 * määritelmän (sanakirja['aapinen']), ihan sama onks sitä ennen 1 vai 1000 sanaa.
 */

/**
 * Pitäydytään todo-listaesimerkeissä. Todo-listan tehtävistä voidaan ajatella,
 * että meillä on oikeestaan 2 tietoa: Varsinainen teksti ('Tee sovellus') ja
 * tieto, onko tehtävä tehty (Mites se boolean menikään, mitkä meiän avainsanat
 * oli? True & False).
 *
 * Näitten tietojen säilöminen on kaikista helpointa objektilla, koska sit nää
 * pysyy kätevästi yhdessä nipussa.
 */

task = { nimi: 'Tee sovellus', tehty: true };

console.log(task['nimi']);
/**
 * Voidaan myös käyttää piste-notaatiota. Tässä nyt voi viitata aiempaan
 * pointtiin consolesta ja meidän [].lengthistä.
 */
console.log(task.nimi);

/**
 * Note: On periaatteessa ihan sama kumpaa käyttää muuten, mutta pisteen kanssa
 * on tarkemmat nimeämissäännöt ja silloin ei voi käyttää muuttujanimeä.
 *
 * Tää tässä vähän tällasena jos joku on sillee "dafuq?"
 */
function taskJuttu(juttu) {
  console.log(task[juttu]);
}
console.log(taskJuttu(nimi));
console.log(taskJuttu(tehty));

/**
 * Note: Kompleksit tyypit voi sisältää simppeleitä tai komplekseja tyyppejä
 * Esim. meidän lopullinen todo-lista javascriptissä vois näyttää tältä:
 */

var todoLista = [
  { nimi: 'Tee sovellus', tehty: true },
  { nimi: 'Tee siitä kivan näköinen', tehty: true },
  { nimi: 'Laita se toimimaan', tehty: false },
];

/**
 * Whitespace
 *
 * Ohjelmoinnissa on yleensä kourallinen juttuja jotka on pakko erottaa
 * välilyönnillä (esim. avainsanat function ja var). Aika usein välilyönnit ja
 * rivinvaihdot on kuitenkin merkityksettömiä, ja niitä voi käyttää niin, että
 * omasta koodista tulee selkeempää.
 *
 * Vaihtoehtosia tapoja kirjottaa sama juttu:
 */

// todoLista=[{nimi:'Tee sovellus',tehty: true },{ nimi:'Tee siitä kivan näköinen',tehty:true},{nimi:'Laita se toimimaan',tehty:false}];

// var todoLista = [
//   { nimi: 'Tee sovellus',               tehty: true    },
//   { nimi: 'Tee siitä kivan näköinen',   tehty: true    },
//   { nimi: 'Laita se toimimaan',         tehty: false   },
// ];

// todoLista = [
//   {
//     nimi: 'Tee sovellus',
//     tehty: true,
//   },
//   {
//     nimi: 'Tee siitä kivan näköinen',
//     tehty: true,
//   },
//   {
//     nimi: 'Laita se toimimaan',
//     tehty: false,
//   },
// ];

/**
 * Whitespacen käyttämisestä on monia mielipiteitä, mutta kunhan saman projektin
 * parissa työskentelevät on samaa mieltä, jutut rullaa.
 *
 * Nyrkkisääntöjä omassa duunissa:
 * - Uuden rivin aloittavat säännöt pätee vain jos rivistä tulee muuten ihan
 *   överipitkä (historia ja 80 merkkiä)
 * - Kaikenlaiset sulkeet alottaa uuden rivin.
 * - Sulkeiden sisällä sisennetään juttuja 2(4) välillyönnin verran (tab-lol)
 * - Pilkku -> uusi rivi
 * - Vältä "taulukkomallia" vaikka se onkin usein tyydyttävimmän näkönen
 */

/**
 * Flow control
 *
 * Nyt päästään ohjelmoinnin ytimeen eli flow controlliin. On lopulta aika se ja
 * sama, vaikka vois tehdä mitä juttuja, jos ei pysty valitsemaan milloin
 * mitäkin juttuja tehdään ja miten usein niitä tehdään. Tätä varten on
 * ehtolausekkeet ja loopit. Nää kun hanskaa, pystyy periaatteessa tekemään
 * kaiken, mitä koodaten voi tehdä. Loput on vaan syntaksia ja I/O:ta.
 */

/**
 * If = ehtolauseke
 *
 * Jos joku asia on tosi, tehdään joku juttu. Muuten tehdään jotain muuta.
 *
 * Tähän väliin joku whiteboardattu flowchart
 *
 * Logataan tehtävä ja onko se tehty.
 */

if (!todoLista[0].tehty) {
  // Jos tehtävä on tekemättä
  console.warn('Tekemättä: ', task.nimi); // Varoitetaan 'Tekemättä: xyz'
} else {
  // Muutoin
  console.log(':)'); // Piirrä hymynaama koska hymynaamat ovat kivoja
}

/**
 * For = loop
 *
 * Saman jutun toistaminen on äkkiä aika ärsyttävää. Besides, me ei edes voida
 * etukäteen tietää kuinka monta taskia meillä on. Sitä varten meillä on loopit.
 *
 * Kaikista perusein esimerkki on tehdä joku tietty juttu kaikille listan
 * sisällä oleville asioille.
 *
 * Onko järkee mennä trad for-loopilla vai voidaanko tehä vaan foreach? Imo
 * voidaan, jos tulee jossain yhteydessä erikseen tarve palata tähän ni palataan
 *
 * Usein koodia voi lukea semisuoraan tai vähintäänkin halutun suoritteen
 * englanniksi kääntäminen auttaa hahmottamaan tilannetta:
 * For every item on my list I want to warn if it's not done.
 * For (every item on my list) { warn if it's not done }
 * ^ Tässä ollaan jo helvetin lähellä valmista koodia
 */

// for (var i = 0; i < todoLista.length; i += 1) {
//   varoitaTekemattomista(todoLista[i]);
// }

// // Purku:
// for (
//   var i = 0; // Laskuri, alkaa nollasta
//   i < todoLista.length; // Jatketaan kunnes laskuri on yhtä pienempi kuin todoListan pituus (muista 0-alkuisuus!)
//   i += 1 // Sama kuin `i = i + 1`. Tämä viimenen juttu tapahtuu joka kierroksen päätteeksi, eli joka kierroksella korotetaan laskuria yhdellä.
// ) {
//   varoitaTekemattomista(
//     // Aiemmin määritelty funktio
//     todoLista[i]
//   ); // Meidän sama vanha todo-lista // Numero, jota laskurilla mennään tällä hetkellä.
// }

/**
 * Foreach = Jokaiselle asialle
 *
 * Listalla oli valmiita ominaisuuksia, kuten .lenght. Listoilta löytyy myös
 * .forEach, joka tekee jonkun toiminnon jokaiselle listalta löytyvälle asialle.
 *
 * Usein koodia voi lukea semisuoraan tai vähintäänkin halutun suoritteen
 * englanniksi kääntäminen auttaa hahmottamaan tilannetta:
 * For each item on my list I want to warn if it's not done.
 * Take my list. For each item on it, warn if the item is not done.
 * ^ Tässä ollaan jo helvetin lähellä valmista koodia
 */

todoLista.forEach(function(item) {
  if (item.tehty) {
    console.warn('Tekemättä: ', task.nimi);
  } else {
    console.log(':)');
  }
});

// Ton ns. nimeämättömän funktion voi myös nimetä ni on vähän tutumman näkönen
todoLista.forEach(function varoitaTekemattomista(item) {
  if (item.tehty) {
    console.warn('Tekemättä: ', task.nimi);
  } else {
    console.log(':)');
  }
});

// Sit ton funktion voi vielä ottaa pois tuolta loopista ni selkeytyy lisää
function varoitaTekemattomista(item) {
  if (item.tehty) {
    console.warn('Tekemättä: ', task.nimi);
  } else {
    console.log(':)');
  }
}

todoLista.forEach(varoitaTekemattomista);

/**
 * Task:
 *
 * Tee todo-lista
 * Loggaa konsoliin jokainen todo-listan tehtävä ja varoita, jos kyseistä
 * tehtävää ei vielä ole thety
 */

(function() {
  // Tee todo-lista
  var todoLista = [
    { nimi: 'Tee sovellus', tehty: true },
    { nimi: 'Tee siitä kivan näköinen', tehty: true },
    { nimi: 'Laita se toimimaan', tehty: false },
  ];

  function loggaaTehtava(tehtava) {
    if (tehtava.tehty) {
      console.log('Tehty: ' + tehtava.nimi);
    } else {
      console.warn('Tekemättä: ' + tehtava.tehty);
    }
  }

  todoLista.forEach(loggaaTehtava);
})();
