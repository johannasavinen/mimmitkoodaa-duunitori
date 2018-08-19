# Mimmit Koodaa -workshop
Resources used at our Mimmit Koodaa workshop.


# Workshop Outline

## 101 - RAKENNE
Mikä on nettisaitti ja miten sellainen tehdään?
- Mikä on nettisaitti? Miten muutamasta tekstitiedostosta tulee nettisaitit?
- Mikä on rakenteen, tyylien ja toiminnallisuuksien ero?
- Mitä ovat HTML-tagit ja miksi niitä käytetään?


### Taustakyssäreitä

#### Mitä juttuja on nettisaiteilla?
- Tekstiä
- Kuvia
- Fontteja ja värejä
- Asettelua
- Liikettä
- Erilaisia kenttiä
- Nappuloita

#### Mikä oikeestaan on nettisaitti?
Tekstiä, jossa on tietyin standardein merkattuja juttuja
- Rakenne, linkit(!) ja sisältö (HTML)
- Tyylit ja asettelu (CSS)
- Toiminnallisuus (Javascript)

##### TODO:
- Tarviiko vääntää rautalangasta mistä johtuu että tietty komento/rivi/tägi/mikälie johtaa tiettyyn lopputulokseen?
    - W3C ja silleen
    - Vois ehkä ohimennen sivuta silleen "don't you worry about this mut jossain on joku all male panel joka kertoo miten asiat on"

### HTML-koodin alkeet

- Tägi = `<tägin_nimi>`
    - Esim. <input> = input-kenttä
- Jotkut, tai oikeestaan suurin osa tägeistä alkaa ja loppuu = `<tägin_nimi> ... </tägin_nimi>`
    - Esim. <h1>Moimoi</h1> = heading 1 = 1. tason otsikko
- HTML-tägit on ei-ees-kovin-paljoa-yksinkertaistaen kasa laatikoita toisten laatikoiden sisällä
    - Esim.
```HTML
<form>
    <h1>Täytä tämä lomake</h1>
    <p>Tämä lomake kannattaa täyttää koska se on tosi kiva ja helppo ja lyhyt täyttää</p>
    <input type="email">
    <input type="text">
</form>
```    

## 201 - Tyylit
Miten saadaan aiemmin tehdyt palikat näyttämään siltä miltä me halutaan niiden näyttävän?

##### TODO:
Pitäiskö tässä välissä näyttää meiän tyylittelemä versio ja sit kulkee askel askeleelta sitä kohti? Vai pitäiskö lähestyy enemmän sitä kautta et kysellään ja käydään yhessä läpi erilaisia asioita joita voi saitilla muuttaa (värit, fontit, whitespacet, reunukset, pyöristykset...) ja sit näytetään miten niitä voi säätää? Jälkimmäinen varmaan jonkun verran hitaampi tapa lähestyä mut toisaalta vois olla pedagogisesti hyvä kokemus joutua miettimään et mitä kaikkee eri elementeille oikeestaan voikaan tehdä. Ekaan vaihtikseen vois ehkä saada samaa pedagogista kulmaa sillä et kävis läpi meiän esimerkkiä painottaen sitä et valitkaa fontit ja värit ja muut sen mukaan, mikä fiilis teillä on

```
Tähän väliin tarttis miettiä et missä järjestyksessä css-jutut kannattaa käydä läpi. Tavallaan värit ja fontit on aika selkee selittää ja siks hyvä piste alottaa. Toisaalta ite ainakin lähen normaalisti liikkeelle isommista viivoista ja yleisestä asettelusta ja rakenteesta ja sit siitä siirryn vasta väreihin ja fontteihin ja sit whitespaceen.
```

## 202 - Luokat
Miten me saadaan jotkut listalla olevista asioista tehdyn näkösiksi?

### Class-attribuutti
Mille tahansa html-elementille voi lisätä luokan ja tyylitellä sitä
Tässä esimerkissä tarvitaan "done" luokka (voi nimetä miten haluaa) ja laittaa sille joku tyyli joka saa sen näyttämään tehdyltä (viiva läpi? harmaa väri? tai ehkä vihree?)

CSS:ssä luokkia tyylitellessä käytetään pistettä jotta ne erottuu perus tägeistä.

##### TODO:
Luokkiin turvautuminen vasta kun on pakko voi ehkä kannustaa/ohjata vaivihkaa ajattelemaan semanttisesti eikä vaan tekemään huojuvaa div-tornia

## 301 - Toiminnallisuus
Meiän todo-lista on nyt valmis. Voidaan käyttää sitä niin että koodiin mennään lisäilemään uusia rivejä ja lisätään ja done-luokka jo tehdyille taskeille. Tää on vaan ehkä paskin käyttöliittymä mitä ihmiskunta on keksiny.

Aika-ajoin tai oikeestaan aika usein tulee sellasia tilanteita, että halutaan saada nettisaitilla tehdyt klikkaukset tekemään muutakin kuin siirtymään sivulta toiselle. Silloin tarvitaan javascriptiä.

##### TODO:
Halutaanko tehdä staten kautta vai suoraan domiin? Veikkaisin että state on konseptina vaikeempi saada hakattuu jengin päähän mut toisaalta modernimpi ja pidemmän päälle käytännöllisempi tapa tehdä juttuja.

### Javascriptin perusteet
Avainero html:n sekä css:n ja javascriptin välillä on ohjelmointi. Html & css = merkkaus. Noilla kirjoitetaan miten asiat on ja miltä niiden tulee näyttää, ei muuta. Javascriptillä pystytään tekemään interaktiivisuutta ja reagoimaan esimerkiksi käyttäjän tekosiin tai mihin tahansa muuhun ulkopuoliseen juttuun.

Jotta pystytään tekemään ja reagoimaan erilaisiin tilanteisiin, 

#### Tyypit
- String
    - Pätkä tekstiä
    - Esim. taski to do listalla
    - Syntaksi `'Tee sovellus'`, `'Tee sovellus'`
- Integer
    - Numero
    - Esim. todo-listan pituus
    - Syntaksi `313`
- Boolean (true)
    - Tosi vai epätosi
    - Esim. onko todo-listan tehtävä tehty

##### TODO:
Tähän väliin vois selostaa muuttujan koska sit on helpompi puhua siitä, miten listasta ja objektista otetaan juttuja ulos

##### TODO:
Tähän väliin vois avata consolen johon voi oikeesti kirjottaa juttuja. Sit console.logia voi käyttää näyttämään juttuja. Siitä kannattaa sanoa ainakin, että kaikki mikä me nyt ulostetaan consoleen voitais saada näkymään varsinaisella sivullakin, yksinkertaisuuden vuoks laitetaan vaan tässä välissä consoleen ja murehditaan oikeesti sivulle juttujen saamista myöhemmin.

#### Variable
On tosi kivaa että voidaan kirjottaa tekstinpätkiä, numeroita ja tosia ja epätosia juttuja, mutta jos ei oo mitään tapaa säilöä kirjotettuja juttuja, hommat käy äkkiä vaikeiksi. Sitä varten meillä on muuttujat. Muuttuja on periaatteessa tapa tallentaa asia ohjelman muistiin ja antaa sille sellanen nimi, jota me voidaan myöhemmin käyttää ja löytää sieltä sama juttu uudestaan. TLDR: `var tehtava = 'Tee sovellus'`

### Array
Lista jutuista
    - Esim. lista kaikista todo-taskeista
    - Syntaksi `['Tee sovellus', 'Tee siitä kivan näköinen', 'Laita se toimimaan']`

Yksittäisen listalla olevan asian löytäminen
```javascript
var todo_lista = ['Tee sovellus', 'Tee siitä kivan näköinen', 'Laita se toimimaan'];
console.log(todo_lista[2]); // 'Tee siitä kivan näköinen'
```
### Object
Fancympi lista.

Aiemman listan voi ajatella joko näin: `Tee sovellus, Tee siitä kivan näköinen, Laita se toimimaan` tai
```
1: Tee sovellus
2: Tee siitä kivan näköinen
3: Laita se toimimaan
```

Molemmissa tapauksissa voidaan puhua listan 2. asiasta ja tarkoittaa taskia Tee siitä kivan näköinen. Jälkimmäisessä tilanteessa voidaan kuitenkin tehdä tällainen taika
```
rakenne: Tee sovellus
tyylit: Tee siitä kivan näköinen
toiminnallisuus: Laita se toimimaan
```

Tässä viimeisessä versiossa voidaan ottaa listan ns. "rakennes asia", tai `todo_lista['rakenne']`. Perinteinen esimerkki, missä tästä on hyötyä on sanakirja. On aika turhaa jos on vaan lista sanojen määritelmiä, mutta jos voidaan ettiä `sanakirja['kumiankka']` ja saada ulos oikea määritelmä, on sanakirjasta paljon enemmän hyötyä.

Objektien ja listojen hauska puoli on se, että niitä voi myös laittaa sisäkkäin, eli meillä voi olla lista listoista. Jos vaikka tehdään todo-sovelluksesta monipuolisempi ja tehdään useampia listoja, meillä voisi olla kattotason lista nimeltä all_todos, joka sisältää tehtävälistan sekä ostoslistan. Koodissa se vois näyttää tältä:
```javascript
var all_todos = [['Tee sovellus', 'Tee siitä kivan näköinen', 'Laita se toimimaan'], ['kahvi', 'maito']];
```

Ton lukeminen alkaa olemaan aavistuksen hankalaa, joten tässä kohti voi tuoda esiin sen, että javascriptissä voi käyttää tyhjää tilaa melkeen miten vaan jeesaamaan omaa hahmotusta:
```javascript
var all_todos = [
    [
        'Tee sovellus',
        'Tee siitä kivan näköinen',
        'Laita se toimimaan'
    ], [
        'kahvi',
        'maito'
    ]
];


console.log(all_todos);
```
Yleensä kun joku juttu (sulkeet) aukeaa otetaan uusi rivi ja mennään seuraavalle sisennystasolle. Kun on "samantasoisia" juttuja kuten listan eri palikat, pidetään ne omilla riveillä ja samalla sisennystasolla toistensa kanssa. Kun taas juttu (sulkeet) menee kiinni, mennään sisennyksessä yksi pykälä taaksepäin.

Tyhjiä rivejä voidaan käyttää jäsentämään juttuja, vähän niinku kappalejakoja.

##### TODO: Funktion vois koittaa selittää tässä välissä tai loopin yhteydessä

### Loop
Nyt päästään koodin kulun ohjaamiseen eli siihen mikä koodissa oikeesti on se ydin. Perusjutut, joilla koodia voidaan ohjata on ehtolausekkeet ja loopit. Kun nää konseptit ymmärtää hyvin, pystyy periaatteessa tekemään kaiken, mitä koodaten voi tehdä.

Nyt, kun meillä on listoittain juttuja, me saatetaan välillä haluta tehdä jokaiselle listalla olevalle jutulle joku tietty toiminto. Esim. Voidaan haluta ottaa lista todo-taskeista ja console.logata jokainen niistä.

```javascript
var todo = ['Tee sovellus', 'Tee siitä kivan näköinen', 'Laita se toimimaan'];

for (var i = 0; i < todo.length; i += 1) {
    console.log(todo[i]);
}

todo.forEach(function(item) {
    console.log(item);
});
```

Toi for-loopin syntaksi on ihan perseestä ja sen selittäminen vie paljon aikaa, mielummin lähtisin tekemään foreach tai map tai mitä vaan muuta mut toisaalta toi on niiiin perustava asia et sen vois kuitenkin ehkä koittaa käydä läpi.

### If
Ehdolliset jutut on toinen tapa tehdä flow-controllia, ja tavallaan ehkä jännempi näistä kahdesta. If-lauseke tarkoittaa käytännössä sitä, että ajetaan joku tietty osa ohjelmasta vaan, jos joku ehto on tosi. Esimerkiksi, annetaan listan elementeille luokka 'done' jos ja vain jos kyseinen tehtävä on oikeesti tehty. 

```javascript
if (task_state === 'done') {
    console.log('Tehty!');
}
```

Seuraavassa esimerkissä on yhdistetty tietotyyppejä, muuttujia, listoja, objekteja, luuppeja ja ehtolauseita eli kaikkea mitä nyt javascriptistä ollaan käyty läpi. Tän kun tajuaa, ymmärtää 90 % koodaamisesta.

##### TODO: Tän vois ehkä yrittää yleisökysymyksillä vääntää läpi :thinking_face:

```javascript
var todo = [
    {
        task: 'Tee sovellus',
        done: true,
    }, {
        task: 'Tee siitä kivan näköinen',
        done: true,
    }, {
        task: 'Laita se toimimaan',
        done: false,
    }
];

function logTodo(item) {
    var status = '';
    if (item.done === true) {
        status = 'Done:';
    } else {
        status = 'Not done:';
    }
    console.log(status, item.task);
}

todo.forEach(logTodo);
```

## 302 - DOM
HTML-koodi on tosi kivaa tollasenaan, mutta se on vielä jännempää, kun javascriptillä pääsee muuttamaan juttuja, joita sieltä löytyy.
Esim. lisätään juttu todo-listalle. Silloin meidän täytyy sekä lisätä se asia meiän koodin muistissa olevalle listalle että saada se html-koodi päivitettyä niin, että se näyttää kaikki oikeat tehtävät oikeilla statuksilla.

Tässä kohti vois heittää `<li>` elementit html:stä helvettiin ja tehdä ne kaikki javascriptin puolella. Nyt sit pitäis tehdä päätös mennäänkö state-mallilla vai suoraan domia säätämällä.

## 3XX - Bonus features and customisation
Kun saitti/softa on siinä vaiheessa, että asiat on about paikallaan, ei näytä ihan perseeltä ja toimiikin joten kuten, voidaan alkaa miettimään mitä muuta kivaa halutaan tehdä. Tässä vaiheessa voidaan alkaa lisäämään monipuolisempia elementtejä (ohjeet, eri tärkeystasot taskeille), hienompaa ulkoasua (kuvia, ikoneita, tarkempaa hinkkausta...), tai uusia toiminnallisuuksia (tietojen tallentaminen, vanhojen juttujen poistaminen...).

Tässä vaiheessa on tärkeää priorisoida ja tehdä valintoja mikä tekee palvelusta helpompaa käyttää ja mikä vaan monimutkaistaa asioita. Tehtävien uudelleenjärjestely voi helpottaa käyttöä, kuten voi eri tärkeysasteet, mutta kun yksinkertaiseen todo-listaan alkaa lisäämään liikaa avainsanoja, tägejä, prioriteettitasoja, sijainteja, kalentereja ym, tullaan helposti feature creeppiin.

##### TODO:
Voitais vaikka tehdä valmiiks muutama eri toiminnallisuus ja antaa tyyppien valita mitä he haluavat tehdä ja tyyliin mennä pienempiin ryhmiin sen mukaan mitä kukakin haluu tehdä tmv