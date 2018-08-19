# Mimmit Koodaa -workshop
Resources used at our Mimmit Koodaa workshop.


# Workshop Outline

## 01 - RAKENNE
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

##### Random thought
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

## 02 - Tyylit
Miten saadaan aiemmin tehdyt palikat näyttämään siltä miltä me halutaan niiden näyttävän?

##### Random thought
Pitäiskö tässä välissä näyttää meiän tyylittelemä versio ja sit kulkee askel askeleelta sitä kohti? Vai pitäiskö lähestyy enemmän sitä kautta et kysellään ja käydään yhessä läpi erilaisia asioita joita voi saitilla muuttaa (värit, fontit, whitespacet, reunukset, pyöristykset...) ja sit näytetään miten niitä voi säätää? Jälkimmäinen varmaan jonkun verran hitaampi tapa lähestyä mut toisaalta vois olla pedagogisesti hyvä kokemus joutua miettimään et mitä kaikkee eri elementeille oikeestaan voikaan tehdä. Ekaan vaihtikseen vois ehkä saada samaa pedagogista kulmaa sillä et kävis läpi meiän esimerkkiä painottaen sitä et valitkaa fontit ja värit ja muut sen mukaan, mikä fiilis teillä on

```
Tähän väliin tarttis miettiä et missä järjestyksessä css-jutut kannattaa käydä läpi. Tavallaan värit ja fontit on aika selkee selittää ja siks hyvä piste alottaa. Toisaalta ite ainakin lähen normaalisti liikkeelle isommista viivoista ja yleisestä asettelusta ja rakenteesta ja sit siitä siirryn vasta väreihin ja fontteihin ja sit whitespaceen.
```

## 03 - Luokat
Miten me saadaan jotkut listalla olevista asioista tehdyn näkösiksi?

### Class-attribuutti
Mille tahansa html-elementille voi lisätä luokan ja tyylitellä sitä
Tässä esimerkissä tarvitaan "done" luokka (voi nimetä miten haluaa) ja laittaa sille joku tyyli joka saa sen näyttämään tehdyltä (viiva läpi? harmaa väri? tai ehkä vihree?)

CSS:ssä luokkia tyylitellessä käytetään pistettä jotta ne erottuu perus tägeistä.

## 04 - Toiminnallisuus
Meiän todo-lista on nyt valmis. Voidaan käyttää sitä niin että koodiin mennään lisäilemään uusia rivejä ja lisätään ja done-luokka jo tehdyille taskeille. Tää on vaan ehkä paskin käyttöliittymä mitä ihmiskunta on keksiny.

Aika-ajoin tai oikeestaan aika usein tulee sellasia tilanteita, että halutaan saada nettisaitilla tehdyt klikkaukset tekemään muutakin kuin siirtymään sivulta toiselle. Silloin tarvitaan javascriptiä.

##### Random thought
Halutaanko tehdä staten kautta vai suoraan domiin? Veikkaisin että state on konseptina vaikeempi saada hakattuu jengin päähän mut toisaalta modernimpi ja pidemmän päälle käytännöllisempi tapa tehdä juttuja.

## 05 - Bonus features and customisation
Kun saitti/softa on siinä vaiheessa, että asiat on about paikallaan, ei näytä ihan perseeltä ja toimiikin joten kuten, voidaan alkaa miettimään mitä muuta kivaa halutaan tehdä. Tässä vaiheessa voidaan alkaa lisäämään monipuolisempia elementtejä (ohjeet, eri tärkeystasot taskeille), hienompaa ulkoasua (kuvia, ikoneita, tarkempaa hinkkausta...), tai uusia toiminnallisuuksia (tietojen tallentaminen, vanhojen juttujen poistaminen...).

Tässä vaiheessa on tärkeää priorisoida ja tehdä valintoja mikä tekee palvelusta helpompaa käyttää ja mikä vaan monimutkaistaa asioita. Tehtävien uudelleenjärjestely voi helpottaa käyttöä, kuten voi eri tärkeysasteet, mutta kun yksinkertaiseen todo-listaan alkaa lisäämään liikaa avainsanoja, tägejä, prioriteettitasoja, sijainteja, kalentereja ym, tullaan helposti feature creeppiin.

##### Random thought
Voitais vaikka tehdä valmiiks muutama eri toiminnallisuus ja antaa tyyppien valita mitä he haluavat tehdä ja tyyliin mennä pienempiin ryhmiin sen mukaan mitä kukakin haluu tehdä tmv