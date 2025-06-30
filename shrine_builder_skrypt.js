let repeats = 0;

//Ostatnia aktualizacja: 26.06.2025

document.getElementById("perkIMG1").src = "template.png";
document.getElementById("perkDescription1").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";
document.getElementById("perkIMG2").src = "template.png";
document.getElementById("perkDescription2").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";
document.getElementById("perkIMG3").src = "template.png";
document.getElementById("perkDescription3").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";
document.getElementById("perkIMG4").src = "template.png";
document.getElementById("perkDescription4").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";


select_perk.addEventListener('submit', (event) =>{
    event.preventDefault();
    let input = event.target.elements[0];

    if(verify_name(input.value.toLowerCase()) == 1){
        input.value = "";
    }
})

select_perk.addEventListener('reset', (event) =>{
    document.getElementById("perkIMG1").src = "template.png";
    document.getElementById("perkDescription1").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";
    
    document.getElementById("perkIMG2").src = "template.png";
    document.getElementById("perkDescription2").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";
    
    document.getElementById("perkIMG3").src = "template.png";
    document.getElementById("perkDescription3").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";
    
    document.getElementById("perkIMG4").src = "template.png";
    document.getElementById("perkDescription4").innerText = "Nazwa Umiejętnośći ang (Nazwa Umiejętnośći pl) - Nazwa Postaci ang - opis umiejętności pl";

    repeats=0;
    document.getElementById("ErrorSpace").innerText = "";
})

function copyText1(){
    navigator.clipboard.writeText(document.getElementById("perkDescription1").innerText);
}

function copyText2(){
    navigator.clipboard.writeText(document.getElementById("perkDescription2").innerText);
}

function copyText3(){
    navigator.clipboard.writeText(document.getElementById("perkDescription3").innerText);
}

function copyText4(){
    navigator.clipboard.writeText(document.getElementById("perkDescription4").innerText);
}


function visual(imgName, perkName, perkChar, perkDesc){
    document.getElementById("ErrorSpace").innerText = "";

    
    let value = document.getElementsByName("version")
    for(let radio of value){
        if(radio.checked){
            if(radio.value == "classic"){
                if (repeats == 0){
                    document.getElementById("perkIMG1").src = imgName;
                    document.getElementById("perkDescription1").innerText = perkName + " - " + perkChar + " - " + perkDesc;
                }
                else if (repeats == 1){
                    document.getElementById("perkIMG2").src = imgName;
                    document.getElementById("perkDescription2").innerText = perkName + " - " + perkChar + " - " + perkDesc;
                }
                else if (repeats == 2){
                    document.getElementById("perkIMG3").src = imgName;
                    document.getElementById("perkDescription3").innerText = perkName + " - " + perkChar + " - " + perkDesc;
                }
                else if (repeats == 3){
                    document.getElementById("perkIMG4").src = imgName;
                    document.getElementById("perkDescription4").innerText = perkName + " - " + perkChar + " - " + perkDesc;
                }
                else{
                    document.getElementById("ErrorSpace").innerText = "Przekroczono liczbę perków. Proszę zrestartować opisy perków.";
                }
            }
            else if(radio.value == "admin"){
                if (repeats == 0){
                    document.getElementById("perkIMG1").src = imgName;
                    document.getElementById("perkDescription1").innerText = "**" + perkName + "**" + " - " + "*" + perkChar + "*" + " - " + perkDesc;
                }
                else if (repeats == 1){
                    document.getElementById("perkIMG2").src = imgName;
                    document.getElementById("perkDescription2").innerText = "**" + perkName + "**" + " - " + "*" + perkChar + "*" + " - " + perkDesc;
                }
                else if (repeats == 2){
                    document.getElementById("perkIMG3").src = imgName;
                    document.getElementById("perkDescription3").innerText = "**" + perkName + "**" + " - " + "*" + perkChar + "*" + " - " + perkDesc;
                }
                else if (repeats == 3){
                    document.getElementById("perkIMG4").src = imgName;
                    document.getElementById("perkDescription4").innerText = "**" + perkName + "**" + " - " + "*" + perkChar + "*" + " - " + perkDesc;
                }
                else{
                    document.getElementById("ErrorSpace").innerText = "Przekroczono liczbę perków. Proszę zrestartować opisy perków.";
                }
            }
        }
    }

    // if (repeats == 0){
    //     document.getElementById("perkIMG1").src = imgName;
    //     document.getElementById("perkDescription1").innerText = perkName + " - " + perkChar + " - " + perkDesc;
    // }
    // else if (repeats == 1){
    //     document.getElementById("perkIMG2").src = imgName;
    //     document.getElementById("perkDescription2").innerText = perkName + " - " + perkChar + " - " + perkDesc;
    // }
    // else if (repeats == 2){
    //     document.getElementById("perkIMG3").src = imgName;
    //     document.getElementById("perkDescription3").innerText = perkName + " - " + perkChar + " - " + perkDesc;
    // }
    // else if (repeats == 3){
    //     document.getElementById("perkIMG4").src = imgName;
    //     document.getElementById("perkDescription4").innerText = perkName + " - " + perkChar + " - " + perkDesc;
    // }
    // else{
    //     document.getElementById("ErrorSpace").innerText = "Przekroczono liczbę perków. Proszę zrestartować opisy perków.";
    // }

    
}

function verify_name(input){
    if (input == "ace in the hole" || input == "as w rękawie")
    {
        visual("AceInTheHole.png", "Ace in the Hole (As w Rękawie)", "Ace Visconti", "Kiedy przeszukujesz skrzynie, masz 100% szans na dostanie zabójczego (czerwonego) lub gorszego dodatku dołączonego do przedmiotu oraz 50/75/100% szans na dostanie niepospolitego (zielonego) dodatku.");
    }
    else if (input == "adrenaline" || input == "adrenalina")
    {
        visual("Adrenaline.png", "Adrenaline (Adrenalina)", "Meg Thomas", "W momencie naprawienia wszystkich generatorów leczysz się o jeden stan zdrowia wyżej, a także przez 3 sekundy możesz biec o 50% szybciej. Jeżeli w momencie aktywacji Adrenaliny wisisz na haku, to umiejętność nie aktywuje się. Adrenalina ignoruje efekt wyczerpania oraz wywołuje go na 60/50/40 sekund.");
    }
    else if (input == "aftercare" || input == "druga pomoc")
    {
        visual("Aftercare.png", "Aftercare (Druga Pomoc)", "Jeff Johansen", "Widzisz aurę każdego ocalałego: którego uratowałeś z haka, który uratował ciebie z haka, na którym wykonałeś akcję leczenia lub który wykonał akcję leczenia na tobie. Ci ocalali widzą również twoją aurę. Efekt umiejętności może maksymalnie obejmować 1/2/3 ocalałych. Efekt resetuje się po powieszeniu przez ");
    }
    else if (input == "alert" || input == "czujność")
    {
        visual("Alert.png", "Alert (Czujność)", "Feng Min", "Kiedy zabójca wykonuje akcję niszczenia, widzisz jego aurę przez następne 3/4/5 sekund.");
    }
    else if (input == "any means necessary" || input == "po trupach do celu")
    {
        visual("AnyMeansNecessary.png", "Any Means Necessary (Po Trupach do Celu)", "Yui Kimura", "Widzisz aury zrzuconych palet. Naciśnij i przytrzymaj przycisk umiejętności 1 przez 6/5/4 s, żeby podnieść rzuconą wcześniej na ziemię paletę.");
    }
    else if (input == "appraisal" || input == "ocena sytuacji")
    {
        visual("Appraisal.png", "Appraisal (Ocena Sytuacji)", "Élodie Rakoto", "Rozpoczynasz próbę z 3 żetonami. Jeśli skrzynia została już otwarta, możesz użyć umiejętności, aby przeszukać ją ponownie i znaleźć kolejny przedmiot. Każdą skrzynię można przeszukać tylko raz. Przeszukujesz skrzynie o 40/60/80% szybciej");
    }
    else if (input == "autodidact" || input == "samouk")
    {
        visual("Autodidact.png", "Autodidact (Samouk)", "Adam Francis", "Rozpoczynasz rozgrywkę z karą równą -15% za udane testy umiejętności podczas leczenia innych ocalałych. Za każdy następny udany test umiejętności podczas leczenia innego ocalałego otrzymujesz żeton, aż do maksymalnie 3/4/5 żetonów. Każdy żeton zapewnia bonus +15% do postępu leczenia za trafione testy umiejętności. Podczas używania tego perka nie można trafić świetnych testów umiejętności. Umiejętność nie działa, kiedy do leczenia używasz apteczki.");
    }
    else if (input == "babysitter" || input == "niańka" || input == "strażnik" || input == "guardian"){
        visual("Babysitter.png", "Babysitter (Niańka)", "Steve Harrington", "Kiedy ściągniesz ocalałego z haka, uratowana przez ciebie osoba przez 20/25/30 sekund nie zostawia zarysowań oraz śladów krwi, porusza się szybciej o 15%, a ty widzisz aurę zabójcy przez 8 sekund.");
    }
    else if (input == "background player" || input == "gracz w tle")
    {
        visual("BackgroundPlayer.png", "Background Player (Gracz w Tle)", "Renato Lyra", "Gdy zabójca podniesie powalonego ocalałego, umiejętność aktywuje się na 10 sekund. Jeśli perk jest aktywny, a ty zaczniesz biegać, poruszasz się szybciej o 50% przez 5 sekund. Po użyciu umiejętności wywołuje ona wyczerpanie na 30/25/20 sekund.");
    }
    else if (input == "balanced landing" || input == "miękkie lądowanie" || input == "balance")
    {
        visual("BalancedLanding.png", "Balanced Landing (Miękkie Lądowanie)", "Nea Karlsson", "Efekty zmniejszonej prędkości ruchu po wykonaniu skoku z dużej wysokości są krótsze o 75%, a głośność jęków po upadku jest cichsza o 100%. W momencie upadku biegasz szybciej o 50% przez maksymalnie 3 sekundy. Umiejętność wywołuje wyczerpanie na 60/50/40 sekund.");
    }
    else if (input == "bardic inspiration" || input == "inspiracja barda")
    {
        visual("BardicInspiration.png", "Bardic Inspiration (Inspiracja Barda)", "Aestri Yazar", "Po staniu w bezruchu i wciśnięciu przycisku umiejętności rozpoczyna się interakcja, która trwa 15 sekund i obejmuje ocalałych w promieniu 16 metrów. Po zakończeniu losowana jest liczba od 1 do 20: 1 – ocalały krzyczy, 2–10 – każdy test umiejętności daje 1% progresu więcej, 11–19 – każdy test umiejętności daje 2% progresu więcej, 20 – każdy test umiejętności daje 3% progresu więcej. Efekty trwają przez 90 sekund. Umiejętność odnawia się co 110/100/90 sekund.");
    }
    else if (input == "better than new" || input == "lepsze niż nowe")
    {
        visual("BetterthanNew.png", "Better than New (Lepsze niż Nowe)", "Rebecca Chambers", "Po ukończeniu akcji leczenia na innym ocalałym, zyskuje on premię 12/14/16% szybszej prędkości do leczenia, otwierania skrzyń oraz oczyszczania i błogosławienia totemów dopóki ten ocalały nie zostanie ranny.");
    }
    else if (input == "better together" || input == "w kupie siła" || input == "situational awareness"){
        visual("BetterTogether.png", "Better Together (W Kupie Siła)", "Nancy Wheeler", "Kiedy naprawiasz generator, twoja aura jest podświetlona dla innych ocalałych na żółto w okręgu 32 metrów. Jeśli zabójca powali ocalałego podczas naprawy generatora, zobaczysz aurę wszystkich innych ocalałych przez 8/9/10 sekund.");
    }
    else if (input == "bite the bullet" || input == "zaciśnięte zęby")
    {
        visual("BitetheBullet.png", "Bite the Bullet (Zaciśnięte Zęby)", "Leon S. Kennedy", "Podczas leczenia ty i ocalały, którego leczysz, nie wydajecie żadnych dźwięków, w tym jęków bólu. Nieudane testy umiejętności w trakcie leczenia nie powodują głośnego powiadomienia dźwiękowego, a leczenie cofa się jedynie o 3/2/1%");
    }
    else if (input == "blast mine" || input == "mina")
    {
        visual("BlastMine.png", "Blast Mine (Mina)", "Jill Valentine", "Umiejętność aktywuje się po ukończeniu łącznie 40% postępu naprawy generatorów. Jeśli stoisz przy generatorze, naciśnij przycisk umiejętności 2, aby zamontować pułapkę aktywną przez 100/110/120 sekund. Aura tego generatora zostanie ukazana dla wszystkich ocalałych. Na generatorze może być aktywna tylko jedna mina. Gdy zabójca uszkodzi generator z miną, ta eksploduje, ogłuszając zabójcę i oślepiając wszystkich w pobliżu. Mina wyłącza się, gdy generator zostanie uszkodzony przez zabójcę lub gdy czas dobiegnie końca.");
    }
    else if (input == "blood pact" || input == "pakt krwi")
    {
        visual("BloodPact.png", "Blood Pact (Pakt Krwi)", "Cheryl Mason", "Gdy ty lub obsesja jesteście ranni, widzicie nawzajem swoje aury. Po wyleczeniu obsesji lub otrzymaniu od niej leczenia zyskujecie bonus 5/6/7% do prędkości ruchu, dopóki nie oddalicie się od siebie na więcej niż 16 m. (Zmniejsza szansę zostania obsesją. Jeśli jesteś obsesją, umiejętność wyłącza się.)");
    }
    else if (input == "blood rush" || input == "wrząca krew")
    {
        visual("BloodRush.png", "Blood Rush (Wrząca Krew)", "Renato Lyra", "Umiejętność aktywuje się po 40/50/60 sekundach od ściągnięcia z haka. Podczas biegu i stanu wyczerpania naciśnij przycisk aktywnej umiejętności 1, aby natychmiast anulować wyczerpanie. Umiejętność dezaktywuje się po użyciu lub wejściu w interakcję z generatorem, ocalałym, totemem, hakiem lub bramą wyjściową.");
    }
    else if (input == "boil over" || input == "do utraty tchu")
    {
        visual("BoilOver.png", "Boil Over (Do Utraty Tchu)", "Kate Denson", "Kiedy zabójca cię niesie efekty twojego szamotania są zwiększone o 60/70/80%. Utrudniasz zabójcy dostrzeganie aur haków w promieniu 16 m. Zyskujesz 33% bieżącego postępu w szamotaniu, gdy zabójca spada z dużej wysokości.");
    }
    else if (input == "bond" || input == "wieź")
    {
        visual("Bond.png", "Bond (Więź)", "Dwight Fairfield", "Widzisz aury sojuszników w zasięgu 20/28/36 metrów.");
    }
    else if (input == "boon: circle of healing" || input == "urok: krąg uzdrowienia" || input == "circle of healing" || input == "coh" || input == "krąg uzdrowienia")
    {
        visual("BoonCircleofHealing.png", "Boon: Circle of Healing (Urok: Krąg Uzdrowienia)", "Mikaela Reid", "Naciśnij i przytrzymaj przycisk umiejętności 1 w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Dobry totem ma zasięg na 24 metry. Możesz pobłogosławić jeden totem na raz. Każdy ocalały w zasięgu dobrego totemu zyskuje 50/75/100% premii do szybkości leczenia innych. Apteczki nie dają premii leczenia w zasięgu dobrego totemu. Ocalali widzą aury innych rannych ocalałych w zasięgu.");
    }
    else if (input == "boon: dark theory" || input == "urok: mroczna teoria" || input == "dark theory" || input == "mroczna teoria")
    {
        visual("BoonDarkTheory.png", "Boon: Dark Theory (Urok: Mroczna Teoria)", "Yoichi Asakawa", "Naciśnij i przytrzymaj przycisk umiejętności 1 w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Dobry totem ma zasięg na 24 metry. Możesz pobłogosławić jeden totem na raz. Wszyscy ocalali w zasięgu dobrego totemu otrzymują bonus 3% do prędkości ruchu. Efekt utrzymuje się przez 2/3/4 sekundy od opuszczenia obszaru działania dobrego totemu.");
    }
    else if (input == "boon: exponential" || input == "urok: wykładniczość" || input == "exponential" || input == "wykładniczość")
    {
        visual("BoonExponential.png", "Boon: Exponential (Urok: Wykładniczość)", "Jonah Vasquez", "Naciśnij i przytrzymaj przycisk umiejętności 1 w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Dobry totem ma zasięg na 24 metry. Możesz pobłogosławić jeden totem na raz. Każdy ocalały w zasięgu dobrego totemu zyskuje 90/95/100% premii do szybkości podnoszenia się i może w pełni wyleczyć się ze stanu agonii (wstać z ziemi).");
    }
    else if (input == "boon: illumination" || input == "urok: iluminacja" || input == "illumination" || input == "iluminacja"){
        visual("BoonIllumination.png", "Boon: Illumination (Dar: Iluminacja)", "Alan Wake", "Naciśnij i przytrzymaj przycisk umiejętności 1 w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Dobry totem ma zasięg na 24 metry. Możesz pobłogosławić jeden totem na raz. Ocalali w zasięgu dobrego totemu widzą aury generatorów i skrzyń na niebiesko. Jeśli masz już pobłogosławiony totem, niszczysz lub błogosławisz totemy 6/8/10% szybciej.");
    }
    else if (input == "boon: shadow step" || input == "urok: cienisty krok" || input == "shadow step" || input == "cienisty krok")
    {
        visual("BoonShadowStep.png", "Boon: Shadow Step (Urok: Cienisty Krok)", "Mikaela Reid", "Naciśnij i przytrzymaj przycisk umiejętności 1 w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Dobry totem ma zasięg na 24 metry. Możesz pobłogosławić jeden totem na raz. Czerwone zarysowania i aura każdego ocalałego w zasięgu dobrego totemu zostają ukryte przed zabójcą. Efekt utrzymuje się przez 2/3/4 sekundy od opuszczenia obszaru działania dobrego totemu.");
    }
    else if (input == "borrowed time" || input == "życie na kredyt" || input == "bt" || input == "borrowed")
    {
        visual("BorrowedTime.png", "Borrowed Time (życie na Kredyt)", "William 'Bill' Overbeck", "Ocalali zdjęci z haka zachowują efekt Wytrzymałości na dodatkowe 6/8/10 sekund oraz bonus do prędkości ruchu na dodatkowe 10 sekund.");
    }
    else if (input == "botany knowledge" || input == "wiedza botaniczna")
    {
        visual("BotanyKnowledge.png", "Botany Knowledge (Wiedza Botaniczna)", "Claudette Morel", "Twoja prędkość leczenia wzrasta o 30/40/50%, ale efektywność przedmiotów do leczenia, czyli apteczek, spada o 20%.");
    }
    else if (input == "breakdown" || input == "przełamanie")
    {
        visual("Breakdown.png", "Breakdown (Przełamanie)", "Jeff Johansen", "Za każdym razem, kiedy uciekniesz z haka lub ktoś cię z niego uratuje, hak ten niszczy się na 180 sekund, a ty widzisz aurę zabójcy przez 4/5/6 sekund.");
    }
    else if (input == "breakout" || input == "ucieczka")
    {
        visual("Breakout.png", "Breakout (Ucieczka)", "Yui Kimura", "Kiedy znajdujesz się w odległości 5 metrów od niesionego ocalałego, poruszasz się szybciej o 5/6/7%, a prędkość szamotania się ocalałego jest zwiększona o 25%.");
    }
    else if (input == "buckle up" || input == "zapnij pasy")
    {
        visual("BuckleUp.png", "Buckle Up (Zapnij Pasy)", "Ashley 'Ash' Williams", "Podczas leczenia innego ocalałego ze stanu agonii obaj widzicie aurę zabójcy. Po uleczeniu, leczony ocalały otrzymuje efekt pośpiechu o wartości 50% na 3/4/5 sekund i nie zostawia zarysowań.");
    }
    else if (input == "built to last" || input == "trwałosc przede wszystkim")
    {
        visual("BuilttoLast.png", "Built to Last (trwałość Przede Wszystkim)", "Feliks Richter", "Jeśli schowasz się w szafce na 14/13/12 sekund i trzymasz zużyty przedmiot, ładunki przedmiotu zostaną uzupełnione do 99%. Każde użycie tej umiejętności zmniejsza limit uzupełnienia ładunków przedmiotu o 33%.");
    }
    else if (input == "calm spirit" || input == "spokojny duch")
    {
        visual("CalmSpirit.png", "Calm Spirit (Spokojny Duch)", "Jake Park", "Nie odstraszasz już kruków ani nie krzyczysz. Nie wydajesz żadnych dźwięków podczas otwierania skrzyń, niszczenia i błogosławienia totemów, ale robisz to o 40/35/30% wolniej");
    }
    else if (input == "camaraderie" || input == "koleżeństwo" || input == "kinship" || input == "pokrewieństwo"){
        visual("Camaraderie.png", "Camaraderie (Koleżeństwo)", "Steve Harrington", "Gdy wisisz na haku drugi raz, umiejętność aktywuje się. Jeśli jakikolwiek ocalały znajdzie się w odległości 16 metrów od ciebie, perk zatrzymuje czas do śmierci na 26/30/34 sekundy, o ile umiejętność jest aktywna.");
    }
    else if (input == "champion of light" || input == "mistrz światła"){
        visual("ChampionOfLight.png", "Champion of Light (Mistrz Światła)", "Alan Wake", "Kiedy świecisz latarką, poruszasz się szybciej o 50%. Oślepienie zabójcy spowalnia go o 20% na 6 sekund, a perk zostaje wyłączony na 80/70/60 sekund.");
    }
    else if (input == "chemical trap" || input == "chemiczna pułapka"){
        visual("ChemicalTrap.png", "Chemical Trap (Chemiczna Pułapka)", "Ellen Ripley", "Po ukończeniu 20% generatora umiejętność aktywuje się. Jeśli stoisz obok zrzuconej palety, naciśnij przycisk aktywnej umiejętności 2, aby zainstalować pułapkę na 40/50/60 sekund. Aura palety z pułapką jest widoczna dla wszystkich ocalałych. Jeśli zabójca spróbuje zniszczyć paletę, pułapka wybuchnie i spowolni go o 50% na 4 sekundy.")
    }
    else if (input == "clairvoyance" || input == "jasnowidzenie")
    {
        visual("Clairvoyance.png", "Clairvoyance (Jasnowidzenie)", "Mikaela Reid", "Kiedy zniszczysz totem lub go pobłogosławisz, umiejętność ta aktywuje się. Aby jej użyć, nie możesz mieć żadnego przedmiotu w dłoni. Naciśnij i przytrzymaj przycisk umiejętności, a w promieniu 64 metrów ukażą ci się aury generatorów, bram, skrzyń, haków i włazu na łącznie maksymalnie 8/9/10 sekund.");
    }
    else if (input == "clean break" || input == "czyste złamanie")
    {
        visual("CleanBreak.png", "Clean Break (Czyste Złamanie)", "Taurie Cain", "Po wyleczeniu innego ocalałego perk się aktywuje. Gdy inny ocalały cię leczy, naciśnij przycisk umiejętności, by zyskać efekt Okaleczony. Po 80/70/60 sekundach zostaniesz w pełni wyleczony. Efekt zostanie anulowany, jeśli trafisz w stan agonii.");
    }
    else if (input == "corrective action" || input == "działanie korekcyjne")
    {
        visual("CorrectiveAction.png", "Corrective Action (Działanie Korekcyjne)", "Jonah Vasquez", "Zaczynasz próbę z 1/2/3 żetonami, a za każdy następny świetnie trafiony test umiejętności otrzymujesz kolejny żeton, do maksymalnie 5. Gdy ocalały zepsuje test umiejętności, nietrafiony test natychmiast zamieni się w trafiony, a ty stracisz jeden żeton i zobaczysz jego aurę na 6 sekund");
    }
    else if (input == "counterforce" || input == "przeciwdziałanie")
    {
        visual("Counterforce.png", "Counterforce (Przeciwdziałanie)", "Jill Valentine", "Niszczysz totemy o 20% szybciej, a za każdy kolejny zniszczony totem otrzymujesz dodatkowy bonus w wysokości 20%. Dodatkowo, za każdym razem gdy zniszczysz totem, aura najbardziej oddalonego od ciebie totemu ukaże się na 2/3/4 sekundy.");
    }
    else if (input == "cut loose" || input == "uwolnienie")
    {
        visual("CutLoose.png", "Cut Loose (Uwolnienie)", "Thalita Lyra", "Umiejętność aktywuje się po wykonaniu szybkiego przeskoku (fast vault) w pościgu. Gdy umiejętność jest aktywna, twoje szybkie przeskoki są ciche na 4/5/6 sekund, a udane wykonanie szybkiego przeskoku w tym czasie resetuje licznik. Po upływie tego czasu perk nie działa przez 45 sekund.");
    }
    else if (input == "dance with me" || input == "zatańcz ze mną")
    {
        visual("DanceWithMe.png", "Dance With Me (Zatańcz ze Mną)", "Kate Denson", "Gdy wykonujesz akcję szybkiego przeskoku lub wyskakujesz w pośpiechu z szafki, przez 5 sekund nie zostawiasz za sobą czerwonych zarysowań. Zatańcz ze Mną odnawia się po upływie 25/20/15 sekund.");
    }
    else if (input == "dead hard" || input == "twarda sztuka" ||input == "dh")
    {
        visual("DeadHard.png", "Dead Hard (Twarda Sztuka)", "David King", "Umiejętność aktywuje się, gdy zostaniesz ściągnięty z haka lub sam się z niego ściągniesz. Naciśnij przycisk aktywnej umiejętności 1 podczas biegu, aby zyskać efekt Wytrzymałości na 0,5 sekundy, po czym umiejętność się dezaktywuje i wywołuje efekt Wyczerpania na 60/50/40 sekund.");
    }
    else if (input == "deadline" || input == "termin"){
        visual("Deadline.png", "Deadline (Termin)", "Alan Wake", "Jeśli jesteś ranny, testy umiejętności pojawiają się częściej o 6/8/10% podczas naprawy generatora lub leczenia i pojawiają się w losowych miejscach. Kara za nieudany test umiejętności jest zmniejszona o 50%.");
    }
    else if (input == "deception" ||input == "oszustwo")
    {
        visual("Deception.png", "Deception (Oszustwo)", "Élodie Rakoto", "Interakcja z szafką podczas biegu uruchamia głośne powiadomienie w twojej lokalizacji i sprawia, że nie zostawiasz czerwonych zarysowań przez 3 sekundy. Nie możesz wejść do szafki podczas sprintu oraz w trakcie działania tej umiejętności. Można jej użyć raz na 25/20/15 sekund.");
    }
    else if (input == "decisive strike" || input == "ostateczny cios" || input == "ds")
    {
        visual("DecisiveStrike.png", "Decisive Strike (Ostateczny Cios)", "Laurie Strode", "Gdy ktoś zdejmie cię z haka lub gdy zejdziesz z niego samodzielnie, umiejętność aktywuje się na 40/50/60 sekund. Gdy umiejętność jest aktywna i złapie cię zabójca, wykonaj test umiejętności, aby mu się wyrwać i ogłuszyć go na 4 sekundy. Udany lub nieudany test umiejętności wyłącza Ostateczny Cios. Skuteczne ogłuszenie zabójcy czyni cię obsesją. Umiejętność i jej efekty są wyłączone, gdy zasilane są bramy wyjściowe lub gdy wejdziesz w interakcję z generatorem, hakiem, ocalałym, totemem lub bramami.");
    }
    else if (input == "deliverance" || input == "wybawienie" || input == "deli")
    {
        visual("Deliverance.png", "Deliverance (Wybawienie)", "Adam Francis", "Umiejętność aktywuje się po bezpiecznym uratowaniu innego ocalałego z haka. Gdy jest aktywna, masz 100% szans na udaną próbę samodzielnej ucieczki z haka. Po skutecznym uwolnieniu się z haka otrzymujesz efekt Okaleczenia na 100/80/60 sekund.");
    }
    else if (input == "desperate measures" || input == "desperacki krok")
    {
        visual("DesperateMeasures.png", "Desperate Measures (Desperacki Krok)", "Feliks Richter", "Zwiększa szybkość leczenia i zdejmowania z haka o 10/12/14% za każdego ocalałego, który jest ranny, zawieszony na haku lub w stanie agonii.");
    }
    else if (input == "detective's hunch" || input == "przeczucie detektywa")
    {
        visual("Detective'sHunch.png", "Detective's Hunch (Przeczucie Detektywa)", "David Tapp", "W momencie ukończenia naprawy generatora aury skrzyń, totemów i generatorów znajdujących się w zasięgu 32/48/64 metrów od ciebie stają się widoczne przez 10 sekund.");
    }
    else if (input == "distortion" || input == "zakłocenie")
    {
        visual("Distortion.png", "Distortion (Zakłócenie)", "Jeff Johansen", "Zaczynasz grę z 1 żetonem. Gdy twoja aura ma zostać ujawniona zabójcy, umiejętność aktywuje się i zużywa 1 żeton. Przez następne 8/10/12 sekund twoja aura i czerwone zarysowania nie będą widoczne dla zabójcy. Umiejętność nie aktywuje się, gdy jesteś w stanie agonii. Otrzymujesz 1 żeton za każde 15 sekund pościgu z zabójcą. Na raz możesz mieć nie więcej niż 2 żetony.");
    }
    else if (input == "diversion" || input == "dywersja" || input == "pebble")
    {
        visual("Diversion.png", "Diversion (Dywersja)", "Adam Francis", "Dywersja staje się aktywna po 30/25/20 sekundach przebywania poza pościgiem w zasięgu terroru zabójcy. Gdy umiejętność jest aktywna i kucasz w bezruchu, naciśnij przycisk aktywnej umiejętności 1, aby rzucić kamyk, który wywoła głośne powiadomienie dźwiękowe dla zabójcy w odległości 20 metrów oraz czerwone zarysowania. Umiejętność wyłącza się po użyciu.");
    }
    else if (input == "do no harm" || input == "nie krzywdzić")
    {
        visual("DoNoHarm.png", "Do no Harm (Nie Krzywdzić)", "Orela Rose", "Leczysz ocalałego o 50% szybciej za każdy jego hak. Świetne testy umiejętności przyspieszają leczenie o dodatkowe 3%.");
    }
    else if (input == "dramaturgy" || input == "dramaturgia"){
        visual("Dramaturgy.png", "Dramaturgy (Dramaturgia)", "Nicolas Cage", "Dramaturgia aktywuje się, kiedy jesteś zdrowy. Podczas biegania kliknij przycisk umiejętności, aby być zmuszonym do biegu przez 0,5 sekundy, a następnie poruszać się szybciej o 25% na 2 sekundy. Po użyciu perka może pojawić się losowo jeden z efektów: dodatkowe 25% szybkości na 2 sekundy, efekt Narażony na 12 sekund, krzyk, zdobycie losowego rzadkiego przedmiotu z dodatkami oraz upuszczenie aktualnego. Ten sam efekt nie może wystąpić dwa razy z rzędu. Powoduje efekt wyczerpania na 60/50/40 sekund.");
    }
    else if (input == "duty of care" || input == "obowiązek troski")
    {
        visual("DutyOfCare.png", "Duty of Care (Obowiązek Troski)", "Orela Rose", "Gdy jesteś zdrowy i przyjmiesz uderzenie ochronne, wszyscy ocalali w promieniu 12 metrów zyskują 25% dodatkowej prędkości ruchu na 4/5/6 sekund.");
    }
    else if (input == "empathic connection" || input == "empatyczne połączenie")
    {
        visual("EmpathicConnection.png", "Empathic Connection (Empatyczne Połączenie)", "Yoichi Asakawa", "Każdy ranny ocalały widzi twoją aurę w zasięgu. Leczysz innych ocalałych o 25/30/35% szybciej.");
    }
    else if (input == "empathy" || input == "empatia")
    {
        visual("Empathy.png", "Empathy (Empatia)", "Claudette Morel", "Dostrzegasz aury innych ocalałych w zasięgu 64/96/128 metrów, którzy są ranni.");
    }
    else if (input == "exultation" || input == "euforia")
    {
        visual("Exultation.png", "Exultation (Euforia)", "Trevor Belmont", "Ogłuszenie zabójcy paletą ulepsza rzadkość trzymanego przez ciebie przedmiotu o jeden poziom, a następnie odnawia 75% ładunków tego przedmiotu. Umiejętność odnawia się co 30/25/20 sekund.");
    }
    else if (input == "eyes of belmont" || input == "oczy belmonta")
    {
        visual("EyesOfBelmont.png", "Eyes of Belmont (Oczy Belmonta)", "Trevor Belmont", "Po zakończeniu naprawy generatora aura zabójcy zostaje dla ciebie ujawniona na 1/2/3 sekundy. Wydłuża czas ukazywania aury ze wszystkich perków o 2 sekundy.");
    }
    else if (input == "fast track" || input == "szybka ścieżka")
    {
        visual("FastTrack.png", "Fast Track (Szybka Ścieżka)", "Yun-Jin Lee", "Kiedy inny ocalały zostaje powieszony na haku, otrzymujesz 1/2/3 żetony. Wszystkie żetony zużywane są po trafieniu świetnego testu umiejętności podczas naprawy generatora. Każdy żeton daje 1% dodatkowego bonusu do naprawy generatora.");
    }
    else if (input == "finesse" || input == "finezja")
    {
        visual("Finesse.png", "Finesse (Finezja)", "Lara Croft", "Perk aktywuje się, gdy jesteś zdrowy. Twoje szybkie przeskoki są o 20% szybsze. Perk dezaktywuje się na 40/35/30 sekund po wykonaniu przeskoku.");
    }
    else if (input == "fixated" || input == "fiksacja" || input == "self-aware" || input == "self aware" || input == "samoświadomość"){
        visual("Fixated.png", "Fixated (Fiksacja)", "Nancy Wheeler", "Chodzisz szybciej o 10/15/20% oraz widzisz własne czerwone zarysowania.");
    }
    else if (input == "flashbang" || input == "granat błyskowy")
    {
        visual("Flashbang.png", "Flashbang (Granat Błyskowy)", "Leon S. Kennedy", "Po naprawieniu generatora w sumie w 50/45/40% umiejętność aktywuje się. Po wejściu do szafki i naciśnięciu przycisku umiejętności 1 otrzymujesz granat błyskowy, a umiejętność się dezaktywuje.");
    }
    else if (input == "flip flop" || input == "mijanka" || input == "flip-flop") 
    {
        visual("FlipFlop.png", "Flip-Flop (Mijanka)", "Ashley 'Ash' Williams", "Kiedy znajdujesz się w stanie agonii, 50% twojego aktualnego postępu podnoszenia się z ziemi zamieni się w postęp szamotania, maksymalnie do 40/45/50%");
    }
    else if (input == "fogwise" || input == "z myśla o mgle")
    {
        visual("Fogwise.png", "Fogwise (Z Myślą o Mgle)", "Vittorio Toscano", "Trafienie świetnego testu umiejętności podczas naprawy generatora spowoduje, że zobaczysz aurę zabójcy na 4/5/6 sekund.");
    }
    else if (input == "for the people" || input == "za ludzi" || input == "ftp" || input == "for the popo")
    {
        visual("ForthePeople.png", "For the People (Za Ludzi)", "Zarina Kassir", "Umiejętność jest aktywna tylko przy pełnym zdrowiu. Aby jej użyć, naciśnij przycisk umiejętności 1 podczas leczenia innego ocalałego bez apteczki, aby natychmiast go uleczyć. Otrzymujesz efekt Okaleczony na 80/70/60 sekund i stajesz się obsesją.");
    }
    else if (input == "friendly competition" || input == "przyjazna rywalizacja")
    {
        visual("FriendlyCompetition.png", "Friendly Competition (Przyjazna Rywalizacja)", "Thalita Lyra", "Umiejętność aktywuje się, kiedy ukończysz naprawę generatora z przynajmniej jednym innym ocalałym. Ty i ocalali, z którymi ukończyłeś naprawę generatora, naprawiacie generatory szybciej o 5% przez 45/60/75 sekund. Perk nie łączy się ze sobą.");
    }
    else if (input == "hardened" || input == "zaprawiona")
    {
        visual("Hardened.png", "Hardened (Zaprawiona)", "Lara Croft", "Perk aktywuje się, gdy otworzysz skrzynię i oczyścisz totem lub pobłogosławisz totem. Zamiast krzyczeć widzisz aurę killera na 3/4/5 sekund.");
    }
    else if (input == "head on" || input == "determinacja")
    {
        visual("HeadOn.png", "Head On (Determinacja)", "Jane Romero", "Determinacja aktywuje się po 3 sekundach przebywania w szafce. Kiedy umiejętność jest aktywna, wyskocz szybko z szafki, aby ogłuszyć zabójcę przechodzącego obok niej na 3 sekundy i dostać efekt wyczerpania na 60/50/40 sekund.");
    }
    else if (input == "hyperfocus" || input == "hiperskupienie")
    {
        visual("Hyperfocus.png", "Hyperfocus (Hiperskupienie)", "Rebecca Chambers", "Udany świetny test umiejętności podczas leczenia lub naprawy generatora powoduje, że otrzymujesz 1 żeton, maksymalnie do 6 żetonów. Każdy żeton zwiększa szanse na pojawienie się testu umiejętności o 4%, zwiększa szybkość kursora testu o 4% oraz zwiększa bonus za świetny test o dodatkowe 10/20/30% jego bazowej wartości. Utracisz wszystkie żetony, jeśli nie trafisz świetnego testu lub przestaniesz naprawiać generator");
    }
    else if (input == "inner focus" || input == "wewnętrzne skupienie")
    {
        visual("InnerFocus.png", "Inner Focus (Wewnętrzne Skupienie)", "Haddie Kaur", "Widzisz czerwone zarysowania innych ocalałych, a kiedy jakiś ocalały w promieniu 32 metrów od ciebie straci stan zdrowia z powodu zabójcy, to ujrzysz aurę zabójcy na 6/8/10 sekund");
    }
    else if(input == "inner strength" || input == "wewnętrzna siła" || input == "inner healing" || input == "wewnętrzne leczenie"){
        visual("InnerStrength.png", "Inner Strength (Wewnętrzna Siła)", "Nancy Wheeler", "Za każdym razem, kiedy zniszczysz totem, perk aktywuje się. Przebywając w szafce przez 10/9/8 sekund możesz wyleczyć się o jeden stan zdrowia, po czym umiejętność dezaktywuje się.");
    }
    else if(input == "invocation: treacherous crows" || input == "inwokacja: zdradzieckie wrony" || input == "treacherous crows" || input == "zdradzieckie wrony"){
        visual("InvocationTreacherousCrows.png", "Invocation: Treacherous Crows (Inwokacja: Zdradzieckie Wrony)", "Taurie Cain", "Gdy znajdujesz się w piwnicy, podejdź do stworzonego kręgu z soli i naciśnij przycisk umiejętności, by rozpocząć inwokację, która trwa 60 sekund. Pozostali ocalali będą widzieć twoją aurę oraz będą mogli dołączyć do inwokacji. Kiedy inwokacja dobiegnie końca, stajesz się ranny i otrzymujesz status okaleczonego do końca gry. Kiedy znajdujesz się w zasięgu terroru zabójcy, a ten przestraszy kruka, aura zabójcy zostaje ujawniona dla wszystkich ocalałych na 1/1.5/2 sekundy.");
    }
    else if(input == "invocation: weaving spiders" || input == "inwokacja: tkające pająki" || input == "weaving spiders" || input == "tkające pająki"){
        visual("InvocationWeavingSpiders.png", "Invocation: Weaving Spiders (Inwokacja: Tkające Pająki)", "Sable Ward", "Gdy znajdujesz się w piwnicy, podejdź do stworzonego kręgu z soli i naciśnij przycisk umiejętności, by rozpocząć inwokację, która trwa 60 sekund. Pozostali ocalali będą widzieć twoją aurę oraz będą mogli dołączyć do inwokacji. Kiedy inwokacja dobiegnie końca, stajesz się ranny i otrzymujesz status okaleczonego do końca gry, a wymagana ilość ładunków potrzebna do ukończenia każdego generatora zmniejsza się o 8/9/10. Perk wyłącza się u wszystkich ocalałych.");
    }
    else if (input == "iron will" || input == "żelazna wola")
    {
        visual("IronWill.png", "Iron Will (Żelazna Wola)", "Jake Park", "Jeśli jesteś ranny jęczysz ciszej o 80/90/100%. Umiejętność nie działa, jeśli ocalały ma na sobie efekt wyczerpania.");
    }
    else if (input == "leader" || input == "lider")
    {
        visual("Leader.png", "Leader (Lider)", "Dwight Fairfield", "Ocalali, którzy znajdują się w promieniu 8 metrów od ciebie, otrzymują bonus w wysokości 15/20/25% do szybszego leczenia, sabotowania haków, ściągania z haków, oczyszczania totemów, otwierania skrzyń oraz odblokowywania bram. Efekt utrzymuje się przez 15 sekund od momentu opuszczenia przez innego ocalałego zasięgu działania umiejętności. Perk nie łączy się sam ze sobą.");
    }
    else if (input == "left behind" || input == "porzucony")
    {
        visual("LeftBehind.png", "Left Behind (Porzucony)", "William 'Bill' Overbeck", "Jeśli zostaniesz ostatnim żywym ocalałym podczas meczu, będziesz w stanie ujrzeć aurę włazu w zasięgu 24/28/32 metrów");
    }
    else if (input == "light footed" || input == "lekki krok"){
        visual("LightFooted.png", "Light Footed (lekki krok)", "Ellen Ripley", "Umiejętność aktywuje się, gdy jesteś zdrowy. Twoje kroki są ciche, a umiejętność dezaktywuje się na 28/24/20 sekund po wykonaniu szybkiej akcji.");
    }
    else if (input == "lithe" || input == "gibkość")
    {
        visual("Lithe.png", "Lithe (Gibkość)", "Feng Min", "Umiejętność aktywuje się, kiedy zostajesz ostatnim żywym ocalałym, i ukrywa twoje czerwone zarysowania, ślady krwi oraz jęki bólu na 70/80/90 sekund.");
    }
    else if (input == "low profile" || input == "przyczajenie")
    {
        visual("LowProfile.png", "Low Profile (Przyczajenie)", "Ada Wong", "Umiejętność aktywuje się kiedy zostajesz ostatnim żywym ocalałym i ukrywa ona twoje czerwone zarysowania, ślady krwi oraz jęki bólu na 70/80/90 sekund.");
    }
    else if (input == "lucky break" || input == "łut szczescia")
    {
        visual("LuckyBreak.png", "Lucky Break (Łut Szczęścia)", "Yui Kimura", "Umiejętność aktywuje się za każdym razem, kiedy jesteś ranny. Ukrywa twoje czerwone zarysowania oraz plamy krwi na łączny czas 40/50/60 sekund. Za każdą sekundę spędzoną na leczeniu innego ocalałego czas trwania umiejętności wydłuża się o sekundę. Czas trwania nie może być większy od wartości początkowej");
    }
    else if(input == "lucky star" || input == "szczęśliwa gwiazda"){
        visual("LuckyStar.png", "Lucky Star (Szczęśliwa Gwiazda)", "Ellen Ripley", "Jeśli jesteś w szafce, nie wydajesz jęków bólu. Po wyjściu z szafki nie zostawiasz śladów krwi ani nie wydajesz żadnych odgłosów, widzisz aury innych ocalałych oraz aurę najbliższego generatora, po czym umiejętność dezaktywuje się na 40/35/30 sekund.");
    }
    else if (input == "made for this" || input == "stworzony do tego"){
        visual("MadeforThis.png", "Made for This (Stworzony do Tego)", "Gabriel Soma", "Umiejętność aktywuje się w momencie, kiedy zostaniesz ranny. Po uleczeniu innego ocalałego dostajesz efekt Wytrzymały na 6/8/10 sekund. Podczas trwania efektu Głębokie Rany, biegasz szybciej o 3%.");
    }
    else if (input == "mettle of man" || input == "ludzki zapał")
    {
        visual("MettleofMan.png", "Mettle of Man (Ludzki Zapał)", "Ashley 'Ash' Williams", "Umiejętność aktywuje się po przyjęciu 3 uderzeń ochronnych. W momencie, kiedy twój stan wskutek obrażeń miałby zmienić się ze stanu rannego do stanu agonii, zostanie to zignorowane i dalej będziesz ranny. Jeśli zostaniesz w pełni wyleczony, a perk będzie aktywny, to twoja aura zostanie pokazana zabójcy, jeżeli znajdujesz się od niego dalej niż 12/14/16 metrów. Umiejętność dezaktywuje się po tym, jak przejdziesz w stan agonii.");
    }
    else if (input == "mirrored illusion" || input == "lustrzana iluzja")
    {
        visual("MirroredIllusion.png", "Mirrored Illusion (Lustrzana Iluzja)", "Aestri Yazar", "Umiejętność aktywuje się po ukończeniu 20% postępu naprawy generatora. Po wciśnięciu przycisku umiejętności 2 w pobliżu totemu, skrzyni, generatora czy bramy pojawi się iluzja ciebie wykonującego akcję, która trwa 40/50/60 sekund.");
    }
    else if (input == "moment of glory" || input == "chwila chwały")
    {
        visual("MomentOfGlory.png", "Moment of Glory (Chwila Chwały)", "Trevor Belmont", "Po otworzeniu lub przeszukaniu dwóch skrzyń perk się aktywuje. Gdy odniesiesz rany, zyskujesz status Okaleczony na 80/70/60 sekund. Jeśli w tym czasie nie zostaniesz powalony, zostaniesz w pełni wyleczony.");
    }
    else if (input == "no mither" || input == "bez biadolenia")
    {
        visual("NoMither.png", "No Mither (Bez Biadolenia)", "David King", "Umiejętność wywołuje efekt okaleczenia na cały okres trwania próby. Kiedy używasz tej umiejętności, to nie zostawiasz za sobą śladów krwi, jęki wskutek obrażeń są redukowane o 25/50/75%, a twoje tempo podnoszenia się z ziemi jest zwiększone o 15/20/25%, i możesz sam się z niej podnieść.");
    }
    else if (input == "object of obsession" || input == "obiekt obsesji")
    {
        visual("ObjectofObsession.png", "Object of Obsession (Obiekt Obsesji)", "Laurie Strode", "Jeśli zabójca w jakikolwiek sposób zobaczy twoją aurę, to ty również zobaczysz jego aurę oraz otrzymasz bonus w wysokości 2/4/6% do prędkości leczenia, naprawiania generatorów oraz oczyszczania totemów. Jeżeli jesteś obsesją, co każde 30 sekund razem z zabójcą nawzajem zobaczycie swoje aury na 3 sekundy. Perk zwiększa szansę na bycie obsesją.");
    }
    else if (input == "off the record" || input == "nieoficjalnie" || input == "otr")
    {
        visual("OfftheRecord.png", "Off the Record (Nieoficjalnie)", "Zarina Kassir", "Gdy uciekniesz z haka lub ktoś cię z niego zdejmie, perk aktywuje się na 60/70/80 sekund. Efekt dezaktywuje się po włączeniu zasilania bram wyjściowych. Podczas działania umiejętności twoja aura nie będzie widoczna dla zabójcy, jęki bólu wywołane obrażeniami zostają całkowicie wyciszone, a ty otrzymujesz efekt Wytrzymałość");
    }
    else if (input == "open handed" || input == "otwarte karty" || input == "open-handed")
    {
        visual("OpenHanded.png", "Open-Handed (Otwarte Karty)", "Ace Visconti", "Zwiększa zasięg widoczności aur o 8/12/16 metrów. Nie łączy się z samym sobą.");
    }
    else if (input == "overcome" || input == "przezwyciężenie")
    {
        visual("Overcome.png", "Overcome (Przezwyciężenie)", "Jonah Vasquez", "Po otrzymaniu obrażeń zachowujesz premię do prędkości poruszania się przez dodatkowe 2 sekundy, po czym otrzymujesz efekt Wyczerpany na 60/50/40 sekund.");
    }
    else if (input == "overzealous" || input == "nadgorliwość")
    {
        visual("Overzealous.png", "Overzealous (Nadgorliwość)", "Haddie Kaur", "Umiejętność aktywuje się po oczyszczeniu dowolnego totemu. Kiedy perk jest aktywny, szybkość naprawy generatora zwiększa się o 8/9/10%. Bonus jest podwajany, jeśli oczyścisz lub pobłogosławisz przeklęty totem. Umiejętność wyłącza się, gdy w jakikolwiek sposób stracisz stan zdrowia.");
    }
    else if (input == "parental guidance" || input == "ojcowskie wskazówki")
    {
        visual("ParentalGuidance.png", "Parental Guidance (Ojcowskie Wskazówki)", "Yoichi Asakawa", "Po ogłuszeniu zabójcy w jakikolwiek sposób twoje czerwone zarysowania, ślady krwi oraz jęki bólu zostają ukryte na 5/6/7 sekund.");
    }
    else if (input == "pharmacy" || input == "farmacja")
    {
        visual("Pharmacy.png", "Pharmacy (Farmacja)", "Quentin Smith", "Otwierasz skrzynie szybciej o 70/85/100%, zasięg dźwięków otwierania skrzyń jest zmniejszony o 16 metrów. Masz gwarantowaną apteczkę pierwszej pomocy (zieloną)");
    }
    else if (input == "plot twist" || input == "zwrot akcji"){
        visual("PlotTwist.png", "Plot Twist (Zwrot Akcji)", "Nicolas Cage", "Umiejętność aktywuje się, gdy jesteś ranny. Naciśnij przycisk umiejętności 2 podczas kucania w bezruchu aby po cichu przejść w stan agonii. Nie pozostawiasz śladów krwi ani nie wydajesz żadnych dźwięków, a następnie możesz w pełni się uleczyć. Po wyleczeniu zyskujesz bonus 50% do prędkości poruszania się na 2/3/4 sekundy. Umiejętność dezaktywuje się, gdy samodzielnie odzyskasz zdrowie w jakikolwiek sposób. Może zostać ponownie użyta po zasileniu bram wyjściowych.");
    }
    else if (input == "poised" || input == "opanowanie")
    {
        visual("Poised.png", "Poised (Opanowanie)", "Jane Romero", "Kiedy po raz pierwszy zaczniesz naprawiać generator widzisz aurę zabójcy na 6 sekund. Po ukończeniu jakiegokolwiek generatora nie zostawiasz zarysowań przez 10/12/14 sekund. Umiejętności można ponownie użyć na innym generatorze");
    }
    else if (input == "potential energy" || input == "energia potencjalna")
    {
        visual("PotentialEnergy.png", "Potential Energy (Energia Potencjalna)", "Vittorio Toscano", "Po nieprzerwanej naprawie generatora przez 12/10/8 sekund naciśnij przycisk aktywnej umiejętności, aby ją aktywować. Od tej pory naprawiając generator, zamiast faktycznego postępu, ładujesz umiejętność. Za każde 1,5% postępu naprawy zyskujesz 1 żeton — maksymalnie 20. Jeśli posiadasz co najmniej 1 żeton i naprawiasz generator, możesz nacisnąć przycisk aktywnej umiejętności, aby zużyć wszystkie żetony i natychmiast zwiększyć postęp generatora o 1% za każdy żeton. Umiejętność wyłącza się i straci wszystkie żetony, jeśli: stracisz stan zdrowia posiadając żetony, chybisz test umiejętności.");
    }
    else if (input == "power struggle" || input == "intensywna walka")
    {
        visual("PowerStruggle.png", "Power Struggle (Intensywna Walka)", "Élodie Rakoto", "Gdy jesteś w stanie agonii, widzisz aury dostępnych palet. Jeśli zabójca cię niesie i osiągniesz 25/20/15% postępu szamotania się, możesz przewrócić pobliską paletę, aby go ogłuszyć");
    }
    else if (input == "prove thyself" || input == "wykaż się" || input == "prove")
    {
        visual("ProveThyself.png", "Prove Thyself (Wykaż Się)", "Dwight Fairfield", "Za każdego innego ocalałego pracującego przy generatorze w zasięgu 4 metrów otrzymujesz premię 6/8/10% do szybkości naprawy. Ta sama premia przyznawana jest również wszystkim ocalałym w zasięgu.");
    }
    else if (input == "quick gambit" || input == "szybki gambit")
    {
        visual("QuickGambit.png", "Quick Gambit (Szybki Gambit)", "Vittorio Toscano", "Kiedy zabójca goni cię 36 metry od generatora, każdy ocalały naprawiający ten generator naprawia go szybciej o 6/7/8%.");
    }
    else if (input == "quick & quiet" || input == "quick and quiet" || input == "szybko i cicho")
    {
        visual("Quick&Quiet.png", "Quick & Quiet (Szybko i Cicho)", "Meg Thomas", "Raz na 25/20/15 sekund możesz wykonać szybką akcję bez wydawania dźwięków i bez generowania głośnych powiadomień.");
    }
    else if (input == "rapid response" || input == "szybka reakcja")
    {
        visual("RapidResponse.png", "Rapid Response (Szybka Reakcja)", "Orela Rose", "Po szybkim wyskoczeniu z szafki aura zabójcy zostaje ujawniona na 2 sekundy, po czym otrzymujesz efekt Wyczerpania na 30/25/20 sekund.");
    }
    else if (input == "reactive healing" || input == "reaktywne leczenie")
    {
        visual("ReactiveHealing.png", "Reactive Healing (Reaktywne Leczenie)", "Ada Wong", "Gdy jesteś ranny, a ocalały znajdujący się w odległości 32 metrów od ciebie straci stan zdrowia, natychmiast otrzymasz 40/45/50% brakującego postępu leczenia.");
    }
    else if (input == "reassurance" || input == "podniesienie na duchu")
    {
        visual("Reassurance.png", "Reassurance (Podniesienie na Duchu)", "Rebecca Chambers", "Będąc w odległości 6 metrów od powieszonego ocalałego możesz użyć przycisku aktywnej umiejętności 2, aby wstrzymać jego licznik na haku na 20/25/30 sekund.");
    }
    else if (input == "red herring" || input == "fałszywy trop")
    {
        visual("RedHerring.png", "Red Herring (Fałszywy Trop)", "Zarina Kassir", "Jeśli naprawisz generator przez co najmniej 1 sekundę, zostanie on podświetlony żółtą aurą, dopóki nie zaczniesz naprawiać innego generatora lub ten nie zostanie ukończony. Gdy wejdziesz do szafki, zabójca otrzyma głośne powiadomienie z podświetlonego generatora, a umiejętność się wyłączy. Można jej użyć raz na 25/20/15 sekund.");
    }
    else if (input == "repressed alliance" || input == "stłumiony sojusz")
    {
        visual("RepressedAlliance.png", "Repressed Alliance (Stłumiony Sojusz)", "Cheryl Mason", "Po naprawianiu generatora przez co najmniej 55/50/45 sekund możesz zablokować go na 30 sekund, uniemożliwiając dostęp zarówno ocalałym, jak i zabójcy.")
    }
    else if (input == "residual manifest" || input == "resztkowe ukazanie")
    {
        visual("ResidualManifest.png", "Residual Manifest (Resztkowe Ukazanie)", "Haddie Kaur", "Po oślepieniu zabójcy nakładasz na niego efekt oślepienia na 20/25/30 sekund.");
    }
    else if (input == "resurgence" || input == "odrodzenie")
    {
        visual("Resurgence.png", "Resurgence (Odrodzenie)", "Jill Valentine", "Otrzymujesz 50/60/70% postępu leczenia po zdjęciu z haka.");
    }
    else if (input == "rookie spirit" || input == "zapał nowicjusza")
    {
        visual("RookieSpirit.png", "Rookie Spirit (Zapał Nowicjusza)", "Leon S. Kennedy", "Po 5/4/3 udanych testach umiejętności widzisz aury generatorów, którym cofa się postęp naprawy.");
    }
    else if (input == "saboteur" || input == "sabotażysta")
    {
        visual("Saboteur.png", "Saboteur (Sabotażysta)", "Jake Park", "Gdy inny ocalały jest niesiony, widzisz aury haków w odległości 56 metrów od niego. Haki plagi są oznaczone na żółto. Umiejętność pozwala sabotować haki bez użycia skrzynki z narzędziami, co trwa 2,3 sekundy. Perka można użyć raz na 70/65/60 sekund.");
    }
    else if(input == "scavenger" || input == "padlinożerca"){
        visual("Scavenger.png", "Scavenger (Padlinożerca)", "Gabriel Soma", "Umiejętność aktywuje się, gdy trzymasz w ręce zużytą skrzynkę do naprawy. Każdy świetnie trafiony test umiejętności daje ci 1 żeton (maks. 5). Po zdobyciu maksymalnej liczby żetonów tracisz je wszystkie, a skrzynka odzyskuje pełne ładunki. Następnie twoja prędkość naprawy jest zmniejszona o 50% na 40/35/30 sekund. Możesz przeszukać ponownie otwartą skrzynię i zyskać gwarantowaną podstawową skrzynkę do naprawy.");
    }
    else if(input == "scene partner" || input == "partner sceniczny"){
        visual("ScenePartner.png", "Scene Partner (Partner Sceniczny)", "Nicolas Cage", "Umiejętność aktywuje się, gdy jesteś w zasięgu terroru zabójcy. Kiedy spojrzysz w jego stronę, krzyczysz i ujawniasz jego aurę na 4/5/6 sekund. Po każdym krzyknięciu spowodowanym przez tę umiejętność istnieje szansa, że krzykniesz ponownie i zobaczysz przeciwnika na dodatkowe 2 sekundy. Umiejętność odnawia się co 40 sekund.");
    }
    else if(input == "second wind" || input == "drugi oddech" || input == "renewal" || input == "odnowienie"){
        visual("SecondWind.png", "Second Wind (Drugi Oddech)", "Steve Harrington", "Umiejętność aktywuje się, gdy jesteś w zasięgu terroru zabójcy. Kiedy spojrzysz w jego stronę, krzyczysz i ujawniasz jego aurę na 4/5/6 sekund. Po każdym krzyknięciu spowodowanym przez tę umiejętność istnieje szansa, że krzykniesz ponownie i zobaczysz przeciwnika na dodatkowe 2 sekundy. Umiejętność odnawia się co 40 sekund.");
    }
    else if (input == "self care" || input == "self-care" || input == "samoopatrywanie") {
        visual("SelfCare.png", "Self-Care (Samoopatrywanie)", "Claudette Morel", "Zyskujesz możliwość samodzielnego leczenia się bez apteczki z prędkością 25/30/35% normalnego leczenia.");
    }
    else if (input == "self preservation" || input == "instynkt samozachowawczy") {
        visual("SelfPreservation.png", "Self-Preservation (Instynkt Samozachowawczy)", "Yun-Jin Lee", "Gdy inny ocalały w promieniu 16 metrów od ciebie zostanie trafiony atakiem podstawowym lub specjalnym, umiejętność się aktywuje, a twoje czerwone zarysowania, ślady krwi i jęki bólu zostaną ukryte na 6/8/10 sekund.");
    }
    else if (input == "shoulder the burden" || input == "ciężar na barki") {
        visual("ShoulderTheBurden.png", "Shoulder the Burden (Ciężar na Barki)", "Taurie Cain", "Raz na próbę, tak długo, jak nie jesteś na swoim ostatnim haku, możesz ściągnąć ocalałego przy pomocy przycisku aktywnej umiejętności 2, przenosząc jego hak na siebie. Akcja ta powoduje krzyk i nakłada efekt Narażenie na ratującego na 40 sekund.");
    }
    else if (input == "smash hit" || input == "przebój") {
        visual("SmashHit.png", "Smash Hit (Przebój)", "Yun-Jin Lee", "Kiedy ogłuszysz zabójcę paletą poruszasz się szybciej o 50% na 4 sekundy. Umiejętność wywołuje wyczerpanie na 30/25/20 sekund.");
    }
    else if (input == "sole survivor" || input == "ostatnia ocalała") {
        visual("SoleSurvivor.png", "Sole Survivor (Ostatnia Ocalała)", "Laurie Strode", "Za każdym razem, gdy inny ocalały zostaje zabity lub poświęcony, otrzymujesz żeton. Każdy żeton chroni twoją aurę przed wykryciem przez zabójcę, jeśli dzieli was maksymalnie 20/22/24 metry. Jeśli jesteś ostatnim żywym ocalałym, zyskujesz 75% bonusu do szybkości naprawy generatorów i 50% bonusu do szybkości otwierania włazu lub bram wyjściowych.");
    }
    else if (input == "solidarity" || input == "solidarność") {
        visual("Solidarity.png", "Solidarity (Solidarność)", "Jane Romero", "Jeśli jesteś ranny i leczysz innego ocalałego bez użycia apteczki, to leczenie to leczy również ciebie. Współczynnik własnego leczenia wynosi 50/60/70% leczenia innego ocalałego.");
    }
    else if (input == "soul guard" || input == "strażnik duszy") {
        visual("SoulGuard.png", "Soul Guard (Strażnik Duszy)", "Cheryl Mason", "Zyskujesz efekt wytrzymałości na 4/6/8 sekund po wyleczeniu lub wyjściu ze stanu agonii. Jeśli znajduje się na tobie efekt klątwy, możesz w pełni wyleczyć się ze stanu agonii. Umiejętności można użyć raz na 30 sekund.");
    }
    else if (input == "specialist" || input == "specjalistka") {
        visual("Specialist.png", "Specialist (Specjalistka)", "Lara Croft", "Otwierając lub przeszukując skrzynie zyskujesz 1 żeton (maksymalnie 3). Gdy wykonasz świetny test umiejętności podczas naprawiania generatora, zużywasz 1 żeton i skracasz maksymalny czas naprawy o 2%/3%/4%.");
    }
    else if (input == "sprint burst" || input == "sprint" || input == "sb") {
        visual("SprintBurst.png", "Sprint Burst (Sprint)", "Meg Thomas", "Kiedy zaczynasz biec, poruszasz się szybciej o 50% przez 3 sekundy. Umiejętność wywołuje wyczerpanie na 60/50/40 sekund.");
    }
    else if (input == "stake out" || input == "nadzór") {
        visual("StakeOut.png", "Stake Out (Nadzór)", "David Tapp", "Za każde 15 sekund spędzone w zasięgu terroru zabójcy nie będąc w pościgu otrzymujesz jeden żeton, aż do maksymalnie 2/3/4 żetonów. Jeżeli masz przynajmniej jeden żeton, dobre testy umiejętności podczas naprawiania generatora są traktowane jako świetne, zabierają jeden żeton oraz dają dodatkowy 1% do postępu naprawy generatora.");
    }
    else if (input == "still sight" || input == "nieruchomy wzrok") {
        visual("StillSight.png", "Still Sight (Nieruchomy Wzrok)", "Aestri Yazar", "Po pozostaniu w bezruchu przez 6/5/4 sekundy, umiejętność się aktywuje. Dopóki się nie poruszysz, widzisz aurę Zabójcy, a także wszystkich generatorów i skrzyń w promieniu 18 metrów.");
    }
    else if (input == "streetwise" || input == "wiedza uliczna") {
        visual("Streetwise.png", "Streetwise (Wiedza Uliczna)", "Nea Karlsson", "Szybkość zużywania przedmiotów przez ciebie i innych ocalałych w zasięgu 8 metrów zmniejsza się o 15/20/25%. Po wyjściu z zasięgu działania umiejętności efekt utrzymuje się przez 15 sekund.");
    }
    else if(input == "strength in shadows" || input == "siła w cieniu"){
        visual("StrengthInShadows.png", "Strength in Shadows (Siła w Cieniu)", "Sable Ward", "Kiedy jesteś w piwnicy, perk się aktywuje. Podczas jego działania możesz leczyć się bez apteczki z prędkością 70%. Gdy zakończysz leczenie w piwnicy i z niej wyjdziesz, widzisz aurę zabójcy przez 6/8/10 sekund.");
    }
    else if (input == "teamwork: collective stealth" || input == "praca zespołowa: wspólne skradanie" || input == "collective stealth" || input == "wspólne skradanie") {
        visual("TeamworkCollectiveStealth.png", "Teamwork: Collective Stealth (Praca Zespołowa: Wspólne Skradanie)", "Renato Lyra", "Jeśli inny ocalały cię uleczy, to razem z tym ocalałem nie będziecie pozostawiali żadnych czerwonych zarysowań, dopóki pozostaniecie w odległości 8/12/16 metrów od siebie. Po opuszczeniu zasięgu efekt utrzymuje się przez 4 sekundy. Umiejętność nie łączy się ze sobą.");
    }
    else if (input == "teamwork: power of two" || input == "praca zespołowa: moc dwójki" || input == "power of two" || input == "moc dwójki") {
        visual("TeamworkPowerofTwo.png", "Teamwork: Power of Two (Praca Zespołowa: Moc Dwójki)", "Thalita Lyra", "Kiedy wyleczysz innego ocalałego, obaj zaczniecie poruszać się o 5% szybciej, dopóki pozostaniecie w zasięgu 8/12/16 metrów od siebie. Po opuszczeniu zasięgu efekt utrzymuje się przez 4 sekundy. Umiejętność nie łączy się ze sobą.");
    }
    else if (input == "technician" || input == "technik") {
        visual("Technician.png", "Technician (Technik)", "Feng Min", "Zasięg słyszalności dźwięków wydawanych przy naprawianiu generatora jest zmniejszony o 8 m. Nieudany test umiejętności NIE powoduje wybuchu generatora, ale utracone zostanie dodatkowe 5/4/3% stanu naprawy.");
    }
    else if (input == "tenacity" || input == "wytrwałość") {
        visual("Tenacity.png", "Tenacity (Wytrwałość)", "David Tapp", "Czołgasz się o 30/40/50% szybciej i jednocześnie możesz się regenerować, a jęki bólu w stanie agonii są ograniczone o 75%.");
    }
    else if (input == "troubleshooter" || input == "rozwiązywanie problemów"){
        visual("Troubleshooter.png", "Troubleshooter (Rozwiązywanie Problemów)", "Gabriel Soma", "W momencie rozpoczęcia pościgu z zabójcą umiejętność aktywuje się. Podczas działania perka widzisz aurę generatora z największym postępem naprawy oraz aurę zabójcy przez 4/5/6 sekund po zrzuceniu dowolnej palety. Efekty utrzymują się jeszcze przez 6/8/10 sekund po zakończeniu pościgu, po czym perk dezaktywuje się.")
    }
    else if (input == "unbreakable" || input == "niezłomość" || input == "dziadek" || input == "ub" || input == "niezłomność") {
        visual("Unbreakable.png", "Unbreakable (Niezłomość)", "William 'Bill' Overbeck", "Odblokowuje możliwość samodzielnego wyleczenia się ze stanu agonii, lecz jest to możliwe tylko raz na próbę. Zwiększa tempo podnoszenia się o 25/30/35%.");
    }
    else if (input == "up the ante" || input == "podnieść stawkę") {
        visual("UptheAnte.png", "Up the Ante (Podnieść Stawkę)", "Ace Visconti", "Za każdego ocalałego, który pozostaje przy życiu, umiejętność zapewnia premię w postaci 1/2/3% dodatkowego szczęścia dla wszystkich ocalałych.");
    }
    else if (input == "urban evasion" || input == "skrytość") {
        visual("UrbanEvasion.png", "Urban Evasion (Skrytość)", "Nea Karlsson", "Twoja prędkość podczas kucania jest zwiększona o 90/95/100%.");
    }
    else if (input == "vigil" || input == "czuwanie") {
        visual("Vigil.png", "Vigil (Czuwanie)", "Quentin Smith", "Ty i znajdujący się w promieniu 16 m sojusznicy wychodzicie z efektów Oślepienie, Okaleczony, Wyczerpanie, Narażony, Krwotok, Skrępowany i Nieświadomy o 30/35/40% szybciej. Poza zasięgiem ten efekt utrzymuje się przez 15 s.");
    }
    else if (input == "visionary" || input == "wizjoner") {
        visual("Visionary.png", "Visionary (Wizjoner)", "Feliks Richter", "Widzisz aurę generatora w promieniu 32 m od siebie. Gdy generator zostanie ukończony, umiejętność dezaktywuje się na 20/18/16 sekund.");
    }
    else if (input == "wake up!" || input == "pobudka!") {
        visual("WakeUp.png", "Wake Up! (Pobudka!)", "Quentin Smith", "Gdy zostaną uruchomione wszystkie wymagane generatory zobaczysz bramy wyjściowe. Gdy przystąpisz do otwierania bramy, inni ocalali zobaczą twoją aurę. Otwierasz bramy wyjściowe o 8/10/12.5% szybciej za każdego żyjącego ocalałego.");
    }
    else if (input == "we're gonna live forever" || input == "będziemy żyć wiecznie") {
        visual("We'reGonnaLiveForever.png", "We're Gonna Live Forever (Będziemy Żyć Wiecznie)", "David King", "Gdy leczysz innego ocalałego w stanie agonii prędkość twojego działania jest zwiększona o 100%. Kiedy skończysz leczenie, podniesiony ocalały dostaje wytrzymałość na 6/8/10 sekund (ten efekt działa raz na 30 sekund).");
    }
    else if (input == "wicked" || input == "nikczemny"){
        visual("Wicked.png", "Wicked (Nikczemny)", "Sable Ward", "Jeśli wisisz na haku w piwnicy, możesz samodzielnie się z niego ściągnąć. Po zejściu z haka — zarówno samodzielnie, jak i z pomocą — widzisz aurę Zabójcy przez 16/18/20 sekund.");
    }
    else if (input == "windows of opportunity" || input == "ostatnia szansa" || input == "windows") {
        visual("WindowsofOpportunity.png", "Windows of Opportunity (Ostatnia Szansa)", "Kate Denson", "Dostrzegasz aury palet, ścian i miejsc przeskoków znajdujących się w zasięgu 24/28/32 m od ciebie.");
    }
    else if (input == "wiretap" || input == "podsłuch") {
        visual("Wiretap.png", "Wiretap (Podsłuch)", "Ada Wong", "Po naprawieniu 40% generatora umiejętność aktywuje się. Gdy naprawisz kolejne 3% postępu, możesz nacisnąć przycisk aktywnej umiejętności, aby zamontować podsłuch na 100/110/120 sekund. Gdy podsłuch jest aktywny, wszyscy ocalali widzą aurę Zabójcy w promieniu 14 metrów od generatora. Jeśli Zabójca uszkodzi generator, podsłuch zostaje dezaktywowany.");
    }

    // **********************************************
    // ****************** ↑ survy ↑ *****************
    // **************** ↓ killerzy ↓ ****************
    // **********************************************

    else if (input == "a nurse's calling" || input == "wezwanie pielęgniarki") {
        visual("ANurse'sCalling.png", "A Nurse's Calling (Wezwanie Pielęgniarki)", "Nurse", "Widzisz aury ocalałych, którzy się leczą w odległości 20/24/28 metrów od ciebie.");
    }
    else if (input == "agitation" || input == "ekscytacja") {
        visual("Agitation.png", "Agitation (Ekscytacja)", "Traper", "Gdy nosisz ocalałego, twoja prędkość poruszania się zwiększa się o 6/12/18%, a zasięg twojego terroru wzrasta o 12 metrów.");
    }
    else if(input == "alien instinct" || input == "obcy instynkt"){
        visual("AlienInstinct.png", "Alien Instinct (Obcy Instynkt)", "Xenomorph", "Po powieszeniu ocalałego aura najdalszego rannego ocalałego zostaje ujawniona na 8 sekund, a ocalały ten otrzymuje efekt Nieświadomy na 40/50/60 sekund.");
    }
    else if (input == "all-shaking thunder" || input == "wstrząsający grzmot") {
        visual("All-ShakingThunder.png", "All-Shaking Thunder (Wstrząsający Grzmot)", "Houndmaster", "Po upadku z wysokości twój zasięg ataku zwiększa się o 75% na 16 sekund. Perk ten ma 5 sekund czasu odnowienia.");
    }
    else if (input == "awakened awareness" || input == "przebudzona świadomość") {
        visual("AwakenedAwareness.png", "Awakened Awareness (Przebudzona Świadomość)", "Mastermind", "Gdy niesiesz ocalałego, widzisz aurę innych ocalałych w odległości 16/18/20 metrów od ciebie.");
    }
    else if (input == "bamboozle" || input == "kpina") {
        visual("Bamboozle.png", "Bamboozle (Kpina)", "Clown", "Przechodzisz przez okna o 5/10/15% szybciej, dodatkowo gdy przejdziesz przez okno blokuje się ono na 8/12/16 sekund.");
    }
    else if (input == "barbecue & chilli" || input == "barbecue and chilli" || input == "barbecue i chilli" || input == "barba" || input == "bbq") {
        visual("Barbecue&Chilli.png", "Barbecue & Chilli (Barbecue i Chilli)", "Cannibal", "Po powieszeniu ocalałego na haku aura wszystkich ocalałych w odległości 60/50/40 metrów od haka zostaje ujawniona na 5 sekund.");
    }
    else if (input == "batteries included" || input == "baterie w zestawie"){
        visual("BatteriesIncluded.png", "Batteries Included (Baterie w Zestawie)", "Good Guy", "Kiedy jesteś w pobliżu ukończonego generatora poruszasz się szybciej o 5%. Bonus utrzymuje się przez 1/3/5 sekund po wyjściu z zasięgu.")
    }
    else if (input == "beast of prey" || input == "drapieżna bestia") {
        visual("BeastofPrey.png", "Beast of Prey (Drapieżna Bestia)", "Huntress", "Gdy osiągniesz pierwszy poziom rządzy krwi, otrzymujesz efekt Niewykrywalny na 30/35/40 sekund.");
    }
    else if (input == "blood echo" || input == "krwawe echo") {
        visual("BloodEcho.png", "Blood Echo (Krwawe Echo)", "Oni", "Po powieszeniu ocalałego wszyscy ranni ocalali otrzymują efekty: Zmasakrowany i Wyczerpanie na 20/25/30 sekund.");
    }
    else if (input == "blood warden" || input == "krwawy strażnik") {
        visual("BloodWarden.png", "Blood Warden (Krwawy Strażnik)", "Nightmare", "Widzisz aury ocalałych w bramie. Gdy dowolna brama wyjściowa jest otwarta, a ty powiesisz ocalałego, umiejętność aktywuje się na 30/40/60 sekund, a ocalali nie mogą uciec bramami wyjściowymi.");
    }
    else if (input == "bloodhound" || input == "pies gończy") {
        visual("Bloodhound.png", "Bloodhound (Pies Gończy)", "Wraith", "Ślady krwi stają się łatwiejsze do zauważenia oraz zostają na ziemi 2/3/4 sekundy dłużej.");
    }
    else if (input == "brutal strength" || input == "brutalna siła") {
        visual("BrutalStrength.png", "Brutal Strength (Brutalna Siła)", "Traper", "Niszczysz zrzucone palety, ściany oraz uszkadzasz generatory o 10/15/20% szybciej.");
    }
    else if (input == "call of brine" || input == "zew wody" || input == "cob") {
        visual("CallofBrine.png", "Call of Brine (Zew Wody)", "Onryo", "Po kopnięciu generatora perk aktywuje się na 70 sekund. W tym czasie generator traci postęp z prędkością 130/140/150% standardowego tempa.");
    }
    else if (input == "corrupt intervention" || input == "skażona interwencja") {
        visual("CorruptIntervention.png", "Corrupt Intervention (Skażona Interwencja)", "Plague", "Od początku próby trzy generatory znajdujące się najdalej od ciebie zostają zablokowane na 80/100/120 sekund. Umiejętność wyłączy się wcześniej, jeśli wprowadzisz jakiegokolwiek ocalałego w stan agonii.");
    }
    else if (input == "coulrophobia" || input == "koulrofobia" || input == "klaunofobia") {
        visual("Coulrophobia.png", "Coulrophobia (Koulrofobia)", "Clown", "Ocalali w zasięgu twojego terroru mają karę 30/40/50% do szybkości leczenia, a testy leczenia są o 50% szybsze.");
    }
    else if (input == "coup de grace" || input == "cios łaski" || input == "coup de grâce") {
        visual("CoupdeGrace.png", "Coup de Grâce (Cios Łaski)", "Twins", "Kiedy jakikolwiek generator zostanie naprawiony, otrzymujesz dwa żetony do maksymalnie pięciu. Następny podstawowy atak będzie miał zwiększony zasięg o 70/75/80% i zużyje jeden żeton.");
    }
    else if (input == "cruel limits" || input == "bezlitosne granice" || input == "claustrophobia" || input == "klaustrofobia"){
        visual("CruelLimits.png", "Cruel Limits (Bezlitosne Granice)", "Demogorgon", "Kiedy jakikolwiek generator zostanie ukończony, perk aktywuje się. Blokuje wszystkie okna na mapie na 20/25/30 sekund oraz podświetla dla zabójcy na żółto zablokowane okna.");
    }
    else if (input == "dark arrogance" || input == "mroczna arogancja") {
        visual("DarkArrogance.png", "Dark Arrogance (Mroczna Arogancja)", "Lich", "Wydłuża czas oślepienia i ogłuszenia paletą o 25% oraz jednocześnie przyspiesza przechodzenie przez okna o 15/20/25%.");
    }
    else if (input == "dark devotion" || input == "mroczne oddanie") {
        visual("DarkDevotion.png", "Dark Devotion (Mroczne Oddanie)", "Plague", "Po zranieniu obsesji twój zasięg terroru przenosi się na nią, a zabójca otrzymuje efekt niewykrywalności na 35/40/45 sekund. Zasięg terroru ocalałego wynosi 40 metrów.");
    }
    else if (input == "darkness revealed" || input == "ujawnienie ciemności") {
        visual("DarknessRevealed.png", "Darkness Revealed (Ujawnienie Ciemności)", "Dredge", "Kiedy otworzysz szafkę, aury wszystkich ocalałych w promieniu 8 metrów od dowolnej szafki na mapie zostaną ujawnione na 6/7/8 sekund. Umiejętność można użyć raz na 30 sekund.");
    }
    else if (input == "dead man's switch" || input == "czuwak") {
        visual("DeadMan'sSwitch.png", "Dead Man's Switch (Czuwak)", "Deathslinger", "Perk aktywuje się po powieszeniu ocalałego. Pierwszy ocalały który przerwie pracę nad generatorem, podczas trwania perka generator blokuje się na 40/45/50 sekund.");
    }
    else if (input == "deadlock" || input == "zakleszczenie") {
        visual("Deadlock.png", "Deadlock (Zakleszczenie)", "Cenobite", "Gdy generator zostanie naprawiony, inny generator z największą ilością postępu naprawy zostanie zablokowany na 15/20/25 sekund.");
    }
    else if (input == "deathbound" || input == "skazany na śmierć") {
        visual("Deathbound.png", "Deathbound (Skazany na Śmierć)", "Executioner", "Po ukończeniu leczenia ocalały krzyczy i aktywuje umiejętność. Gdy leczący oddali się na 12/8/4 metry od leczonego, otrzymuje efekt Nieświadomy do momentu otrzymania obrażeń.");
    }
    else if (input == "dissolution" || input == "rozpad") {
        visual("Dissolution.png", "Dissolution (Rozpad)", "Dredge", "Gdy zranisz ocalałego w dowolny sposób, Rozpad aktywuje się na 12/16/20 sekund. Gdy rozpad jest aktywny, a ocalały szybko przeskoczy przez paletę w twoim zasięgu terroru, Byt zniszczy tę paletę na koniec skoku.");
    }
    else if (input == "discordance" || input == "dysonans") {
        visual("Discordance.png", "Discordance (Dysonans)", "Legion", "Każdy generator w promieniu 64/96/128 m naprawiany przez dwóch lub więcej ocalałych zostaje oznaczony żółtą aurą. Gdy generator zostanie podświetlony po raz pierwszy, Dysonans uruchamia głośne powiadomienie przy generatorze. Gdy generator znajdzie się poza zasięgiem lub przestanie być naprawiany przez co najmniej dwóch ocalałych, aura pozostaje widoczna przez kolejne 4 sekundy.");
    }
    else if (input == "dominance" || input == "dominacja") {
        visual("Dominance.png", "Dominance (Dominacja)", "Dark Lord", "Przy pierwszej interakcji ocalałego z każdą skrzynką i totemem, są one zablokowane na 16 sekund. Aura zablokowanego totemu lub skrzyni jest ujawniona dla ciebie na czas działania umiejętności.");
    }
    else if (input == "dragon's grip" || input == "uścisk smoka") {
        visual("Dragon'sGrip.png", "Dragon's Grip (Uścisk Smoka)", "Blight", "Po uszkodzeniu generatora pierwszy ocalały, który wejdzie z nim w interakcję w trakcie kolejnych 30 sekund, krzyknie, ujawni swoją lokalizację na 4 sekundy i otrzyma efekt narażony na 60 sekund. Uścisk Smoka odnawia się co 60/50/40 sekund.");
    }
    else if (input == "dying light" || input == "umierające światło") {
        visual("DyingLight.png", "Dying Light (Umierające Światło)", "Shape", "Twoja obsesja otrzymuje premię w wysokości 33% do szybkości zdejmowania z haka i leczenia innych ocalałych. Za każdym razem, gdy powiesisz ocalałego innego niż obsesja, otrzymasz żeton. Jeśli obsesja żyje, każdy inny ocalały otrzymuje karę 2/2,5/3% do szybkości naprawy, leczenia i sabotażu za każdy żeton.");
    }
    else if (input == "enduring" || input == "wytrzymały") {
        visual("Enduring.png", "Enduring (Wytrzymały)", "Hillbilly", "Oszołomienie powodowane przez palety jest o 40/45/50% krótsze. Nie działa, gdy niesiesz ocalałego.");
    }
    else if (input == "eruption" || input == "erupcja") {
        visual("Eruption.png", "Eruption (Erupcja)", "Nemesis", "Po uszkodzeniu generatora jego aura podświetla się na żółto. Zawsze, gdy wprowadzisz ocalałego w stan agonii, każdy naruszony generator wybucha, a jego stan spada o 10% bieżącego postępu naprawy i zaczyna się cofać. Ocalały naprawiający generator w momencie wybuchu krzyknie i ujawni swoją aurę na 8/10/12 sekund.");
    }
    else if (input == "fire up" || input == "paląca potrzeba") {
        visual("FireUp.png", "Fire Up (Paląca Potrzeba)", "Nightmare", "Za każdy ukończony generator otrzymujesz żeton, maksymalnie do 5. Za każdy żeton szybciej niszczysz palety, przechodzisz przez okna, upuszczasz ocalałego i kopiesz generatory o 4/5/6%.");
    }
    else if (input == "forced hesitation" || input == "wymuszone wahanie"){
        visual("ForcedHesitation.png", "Forced Hesitation (Wymuszone Wahanie)", "Singularity", "W momencie powalenia ocalałego w jakikolwiek sposób, wszyscy pozostali ocalali w zasięgu 16 metrów od powalonego otrzymają efekt Skrępowany na 10 sekund, który spowolni ich o 20%. Umiejętności można użyć tylko raz na 40/35/30 sekund.");
    }
    else if (input == "forced penance" || input == "wymuszona pokuta") {
        visual("ForcedPenance.png", "Forced Penance (Wymuszona Pokuta)", "Executioner", "Ocalały otrzymuje efekt Okaleczenie na 60/70/80 sekund po przyjęciu ochronnego uderzenia.");
    }
    else if (input == "forever entwined" || input == "połączeni na zawsze") {
        visual("ForeverEntwined.png", "Forever Entwined (Połączeni na Zawsze)", "Ghoul", "Gdy ocalały odniesie rany, zyskujesz jeden żeton, maksymalnie do 8. Za każdy żeton podnosisz, upuszczasz i wieszasz ocalałych o 4% szybciej.");
    }
    else if (input == "franklin's demise" || input == "zguba franklina" || input == "franklin") {
        visual("Franklin'sDemise.png", "Franklin's Demise (Zguba Franklina)", "Cannibal", "Twoje podstawowe ataki sprawiają, że ocalali upuszczają trzymane przedmioty. Przedmiot leżący na ziemi traci wszystkie ładunki po 150/120/90 s, jeśli nie zostanie podniesiony. Oznacz białą aurą przedmioty na ziemi w odległości 32 m. Aura powoli zmienia kolor na czerwony, dopóki przedmiot nie straci wszystkich ładunków.");
    }
    else if (input == "friends 'til the end" || input == "przyjaciele do końca"){
        visual("Friends'TiltheEnd.png", "Friends 'Til the End (przyjaciele do końca)", "Good Guy", "Po powieszeniu dowolnego ocalałego, który nie jest obsesją, aura obsesji zostaje ujawniona na 6/8/10 s, a obsesja cierpi na efekt Narażony przez 20 s. Po powieszeniu obsesji, losowy ocalały krzyknie, ujawniając swoją lokalizację, i zostanie oznaczony jako nowa obsesja.");
    }
    else if (input == "furtive chase" || input == "tajemny pościg") {
        visual("FurtiveChase.png", "Furtive Chase (Tajemny Pościg)", "Ghost Face", "Po powieszeniu obsesji utrzymujesz efekt Niewykrywalny oraz efekt Pośpiechu o 10% na 14/16/18 sekund.");
    }
    else if (input == "game afoot" || input == "gra w toku") {
        visual("GameAfoot.png", "Game Afoot (Gra w Toku)", "Skull Merchant", "Perk aktywuje się podczas gonienia obsesji. Jeśli w trakcie pościgu kopiesz paletę lub generator, poruszasz się szybciej o 7% na 8/9/10 sekund.");
    }
    else if (input == "gearhead" || input == "maniak techniki") {
        visual("Gearhead.png", "Gearhead (Maniak Techniki)", "Deathslinger", "Gdy ocalały straci stan zdrowia, umiejętność się aktywuje na 30 sekund. Gdy umiejętność jest aktywna i dowolny ocalały wykona test umiejętności w trakcie naprawy generatora, jego aura zostanie ujawniona na 6/7/8 sekund.");
    }
    else if (input == "genetic limits" || input == "ograniczenia genetyczne"){
        visual("GeneticLimits.png", "Genetic Limits (Ograniczenia Genetyczne)", "Singularity", "Gdy ocalały utraci stan zdrowia, otrzymuje on status Wyczerpanie na 6/7/8 sekund.")
    }
    else if (input == "grim embrace" || input == "ponure objęcia") {
        visual("GrimEmbrace.png", "Grim Embrace (Ponure Objęcia)", "Artist", "Gdy powiesisz ocalałego na hak po raz pierwszy, wszystkie generatory zostają zablokowane na 6/8/10 sekund, pod warunkiem że zabójca oddali się minimum 16 metrów od haka. Dodatkowo otrzymujesz 1 żeton, a po uzbieraniu 4 żetonów, jeśli oddalisz się na minimum 16 metrów od haka, wszystkie generatory zablokują się na 40 sekund, a aura obsesji zostanie ujawniona na 6 sekund.");
    }
    else if (input == "haywire" || input == "awaria") {
        visual("Haywire.png", "Haywire (Awaria)", "Animatronic", "Jeśli brama ma co najmniej 50% postępu, jej wskaźnik zmniejsza się z prędkością 40/45/50% normalnego tempa otwierania. Podczas tego procesu światła bramy losowo błyskają.");
    }
    else if (input == "hex: blood favour" || input== "klątwa: łaska krwi" || input == "blood favour" || input == "łaska krwi") {
        visual("HexBloodFavour.png", "Hex: Blood Favour (Klątwa: Łaska Krwi)", "Blight", "Po zranieniu ocalałego wszystkie palety w promieniu 24/28/32 metrów od ciebie zostają zablokowane na 15 sekund.");
    }
    else if (input == "hex: crowd control" || input == "klątwa: panowanie nad tłumem" || input == "crowd control" || input == "panowanie nad tłumem") {
        visual("HexCrowdControl.png", "Hex: Crowd Control (Klątwa: Panowanie nad Tłumem)", "Trickster", "Gdy ocalały wykona szybki przeskok przez okno zostaje ono zablokowane. Okna blokują się do maksymalnie 3/4/5 wstecz");
    }
    else if (input == "hex: devour hope" || input == "klątwa: pożeracz nadziei" || input == "devour hope" || input == "pożeracz nadziei" || input == "devour") {
        visual("HexDevourHope.png", "Hex: Devour Hope (Klątwa: Pożeracz Nadziei)", "Hag", "Gdy ocalały zostanie zdjęty z haka w odległości co najmniej 24 metrów od ciebie, otrzymujesz żeton. Przy 2 żetonach, po 10 sekundach od zdjęcia z haka, otrzymujesz efekt Pośpiechu do prędkości ruchu o 3/4/5%. Przy 3 żetonach, wszyscy ocalali otrzymują efekt Narażenia. Przy 5 żetonach, możesz zabić ocalałego własnoręcznie, niezależnie od tego, ile razy wisiał na haku.");
    }
    else if (input == "hex: face the darkness" || input == "klątwa: staw czoła ciemnosci" || input == "face the darkness" || input == "staw czoła ciemnosci") {
        visual("HexFacetheDarkness.png", "Hex: Face the Darkness (Klątwa: Staw Czoła Ciemności)", "Knight", "Gdy ocalały straci stan zdrowia, Klątwa aktywuje się. Gdy Klątwa jest aktywna, wszyscy ocalali poza twoim zasięgiem terroru zaczną krzyczeć co 35/30/25 sekund oraz ujawnią swoją aurę na 2 sekundy.");
    }
    else if (input == "hex: haunted ground" || input == "klątwa: nawiedzona ziemia" || input == "haunted ground" || input == "nawiedzona ziemia" || input == "haunted") {
        visual("HexHauntedGround.png", "Hex: Haunted Ground (Klątwa: Nawiedzona Ziemia)", "Spirit", "Na mapie pojawiają się dwa przeklęte totemy. Gdy ocalały zniszczy jeden z nich, wszyscy ocalali otrzymują efekt Narażenia na 40/50/60 sekund.");
    }
    else if (input == "hex: huntress lullaby" || input == "klątwa: kołysanka łowczyni" || input == "huntress lullaby" || input == "kołysanka łowczyni" || input == "lullaby" || input == "kołysanka") {
        visual("HexHuntressLullaby.png", "Hex: Huntress Lullaby (Klątwa: Kołysanka Łowczyni)", "Huntress", "Za każdym razem, gdy dowolny ocalały nie trafi testu umiejętności, traci dodatkowe 2/4/6% postępu naprawy lub leczenia. Gdy powiesisz ocalałego na haku, otrzymujesz żeton: Przy 1-4 żetonach czas pomiędzy pojawieniem się ostrzeżenia a testem umiejętności jest skrócony. Przy 5 żetonach testy umiejętności nie mają żadnego ostrzeżenia.");
    }
    else if (input == "hex: nothing but misery" || input == "klątwa: nic poza cierpieniem" || input == "nothing but misery" || input == "nic poza cierpieniem") {
        visual("HexNothingButMisery.png", "Hex: Nothing but Misery (Klątwa: Nic poza Cierpieniem)", "Ghoul", "Po zadaniu 8 podstawowych ataków, Klątwa aktywuje się. Gdy następnym razem zranisz ocalałego podstawowym atakiem, otrzyma on efekt Skrępowania na 15 sekund, co spowalnia jego poruszanie się o 5%.");
    }
    else if (input == "hex: pentimento" || input == "klątwa: pentimento" || input == "pentimento") {
        visual("HexPentimento.png", "Hex: Pentimento (Klątwa: Pentimento)", "Artist", "Gdy ocalały zniszczy totem, jego aura zostaje ujawniona na biało. Możesz odbudować zniszczony totem jako przeklęty Totem Pentimento. Za pierwszy postawiony totem ocalali otrzymują karę w wysokości 20% do kręcenia generatorów i leczenia. Za każdy kolejny totem kara zwiększa się o 1%, 2% lub 3%");
    }
    else if (input == "hex: plaything" || input == "klątwa: igraszka" || input == "plaything" || input == "igraszka") {
        visual("HexPlaything.png", "Hex: Plaything (Klątwa: Igraszka)", "Cenobite", "Gdy ocalały jest wieszany na haku poraz pierwszy dowolny czysty totem staje się przeklęty i jest możliwy do zniszczenia przez pierwsze 90s tylko dla osoby powieszonej. Do czasu zniszczenia totemu osoba nim dotknięta dostaje efekt nieświadomy. Aura totemu jest widziana przez osobe przeklętą z  24/20/16m.");
    }
    else if (input == "hex: retribution" || input == "klątwa: odwet" || input == "retribution" || input == "odwet") {
        visual("HexRetribution.png", "Hex: Retribution (Klątwa: Odwet)", "Deathslinger", "Osoba, która oczyściła lub pobłogosławiła dowolny totem, otrzymuje efekt nieświadomy na 35/40/45 sekund. Gdy ten totem jest klątwą, aura każdego ocalałego jest widoczna przez 15 sekund.");
    }
    else if (input == "hex: ruin" || input == "klątwa: ruina" || input == "ruin" || input == "ruina") {
        visual("HexRuin.png", "Hex: Ruin (Klątwa: Ruina)", "Hag", "Każdy nienaprawiany generator jest automatycznie poddany regresowi z prędkością 50%, 75% lub 100%.");
    }
    else if (input == "hex: the third seal" || input == "klątwa: trzecia pieczęć" || input == "third seal" || input == "trzecia pieczęć" || input == "the third seal") {
        visual("HexTheThirdSeal.png", "Hex: The Third Seal (Klątwa: Trzecia Pieczęć)", "Hag", "Ostatni 2/3/4 ocalali zaatakowani podstawowym atakiem otrzymuje efekt ślepoty.");
    }
    else if(input == "hex: two can play" || input == "klątwa: gra dla dwojga"){
        visual("HexTwoCanPlay.png", "Hex: Two Can Play (Klątwa: Gra Dla Dwojga)", "Good Guy", "Jeśli zostaniesz oślepiony lub ogłuszony 4/3/2 razy podczas rozgrywki i na mapie nie ma przeklętego totemu z tym perkiem, zwykły totem zamienia się w przeklęty. Jeśli na mapie jest totem powiązany z tą klątwą i ocalały cię oślepi lub ogłuszy, ten ocalały także jest oślepiony na 1,5 sekundy.");
    }
    else if (input == "hex: undying" || input == "klątwa: nieumarły" || input == "undying" || input == "nieumarły") {
        visual("HexUndying.png", "Hex: Undying (Klątwa: Nieumarły)", "Blight", "Na początku próby losowy totem na mapie staje się hex totemem. Gdy ocalały znajduje się w odległości 2/3/4 metrów od zwykłego totemu, jego aura zostaje ujawniona. Jeśli masz drugą klątwę w buildzie, to po jej zniszczeniu Undying przejmuje jej właściwości.");
    }
    else if (input == "hex: wretched fate" || input == "klątwa: nędzny los") {
        visual("HexWretchedFate.png", "Hex: Wretched Fate (Klątwa: Nędzny Los)", "Dark Lord", "Gdy jeden generator na mapie zostanie ukończony, losowy zwykły totem na mapie zmienia się w klątwę. Obsesja naprawia generatory o 33% wolniej, a aura totemu jest widoczna z odległości 12 metrów.");
    }
    else if (input == "help wanted" || input == "potrzebna pomoc") {
        visual("HelpWanted.png", "Help Wanted (Potrzebna Pomoc)", "Animatronic", "Po skopaniu generatora zostaje on skompromitowany. Możesz mieć tylko jeden skompromitowany generator naraz. Jeśli taki generator zostanie ukończony, twoje ataki podstawowe są szybsze o 25% przez 40/50/60 sekund.");
    }
    else if (input == "hoarder" || input == "zbieracz") {
        visual("Hoarder.png", "Hoarder (Zbieracz)", "Twins", "Ocalali w promieniu 32/48/64 metrów od ciebie ujawniają swoją lokalizację, gdy wejdą w interakcję ze skrzyniami lub podniosą przedmiot.");
    }
    else if (input == "hubris" || input == "pycha") {
        visual("Hubris.png", "Hubris (Pycha)", "Knight", "Ocalały, który cię ogłusza, otrzymuje efekt narażony na 10/15/20 sekund. Hubris odnawia się przez 20 sekund.");
    }
    else if (input == "human greed" || input == "ludzka chciwość") {
        visual("HumanGreed.png", "Human Greed (Ludzka Chciwość)", "Dark Lord", "Widzisz aurę nieotwartych skrzynek i ocalałych na 5 sekund, gdy znajdują się oni w odległości 8 metrów od skrzynki. Otrzymujesz również opcję kopania skrzynek, by je zamknąć. Umiejętność ta ma 10 sekund czasu odnowienia.");
    }
    else if (input == "hysteria" || input == "histeria") {
        visual("Hysteria.png", "Hysteria (Histeria)", "Nemesis", "Gdy zdrowy ocalały zostanie zraniony w dowolny sposób, wszyscy ranni ocalali otrzymują efekt Nieświadomy na 30/35/40 sekund. Czas odnowienia wynosi 20 sekund.");
    }
    else if (input == "i'm all ears" || input == "zamieniam się w słuch" || input == "im all ears") {
        visual("I'mAllEars.png", "I'm All Ears (Zamieniam Się w Słuch)", "Ghost Face", "Ujawniona ci jest aura ocalałych wykonujących szybkie akcje w promieniu 48 metrów na 6 sekund. I'm All Ears odnawia się 60/45/30 sekund.");
    }
    else if (input == "infectious fright" || input == "zaraźliwy strach") {
        visual("InfectiousFright.png", "Infectious Fright (Zaraźliwy Strach)", "Plague", "W momencie wprowadzenia ocalałego w stan agonii, wszyscy inni ocalali, którzy znajdują się w zasięgu twojego terroru, krzykną i ujawnią swoją lokalizację na 4/5/6 sekund.");
    }
    else if (input == "iron maiden" || input == "żelazna dziewica") {
        visual("IronMaiden.png", "Iron Maiden (Żelazna Dziewica)", "Legion", "Otwierasz szafki szybciej o 30/40/50%. Każdy ocalały, który wyjdzie z jakiejkolwiek szafki na mapie, krzyknie, ujawniając swoją lokalizację na 4 sekundy, i otrzyma efekt Narażony na 30 sekund.");
    }
    else if (input == "knock out" || input == "nokaut") {
        visual("KnockOut.png", "Knock Out (Nokaut)", "Cannibal", "Gdy ocalały zrzuci paletę i odsunię się od niej na odległość 6 metrów, otrzymuje efekt Spowolnienia w wysokości 5% na 3/4/5 sekund.");
    }
    else if (input == "languid touch" || input == "ospały dotyk") {
        visual("LanguidTouch.png", "Languid Touch (Ospały Dotyk)", "Lich", "Jeśli ocalały spłoszy kruka w promieniu 36 metrów od ciebie, otrzymuje on status Wyczerpania na 6/8/10 sekund. Czas odnowienia wynosi 5 sekund.");
    }
    else if (input == "lethal pursuer" || input == "śmiertelny pościg" || input == "lethal") {
        visual("LethalPursuer.png", "Lethal Pursuer (Śmiertelny Pościg)", "Nemesis", "Na początku próby, aury wszystkich ocalałych zostaną ci ujawnione na 7/8/9 sekund. Za każdym razem, gdy aura ocalałego jest dla ciebie widoczna, czas jej pokazywania wydłuża się o 2 sekundy.");
    }
    else if (input == "leverage" || input == "przewaga") {
        visual("Leverage.png", "Leverage (Przewaga)", "Skull Merchant", "Gdy ocalały zdejmie innego ocalałego z haka, otrzymuje on 50% karę na szybkość leczenia na 30 sekund.");
    }
    else if (input == "lightborn" || input == "zrodzony w świetle") {
        visual("Lightborn.png", "Lightborn (Zrodzony w Świetle)", "Hillbilly", "Otrzymujesz odporność na oślepienie spowodowane latarkami, petardami, granatami błyskowymi i minami, a aury ocalałych, którzy próbują cię oślepić, zostaną ci ujawnione na 6/8/10 sekund.");
    }
    else if (input == "machine learning" || input == "uczenie maszynowe"){
        visual("MachineLearning.png", "Machine Learning (Uczenie Maszynowe)", "Singularity", "Po kopnięciu generatora jego aura zostaje ujawniona na żółto. Gdy ocalali ukończą tego generatora, otrzymujesz status niewykrywalny i 8% pośpiechu na 60 sekund.")
    }
    else if (input == "mad grit" || input == "twardy charakter") {
        visual("MadGrit.png", "Mad Grit (Twardy Charakter)", "Legion", "Niosąc ocalałego, nie otrzymujesz kary w postaci czasu odnawiania po niecelnym podstawowym ataku. Jeżeli trafisz kogoś niosąc ocalałego na plecach, to pasek szamotania ocalałego zatrzyma się na 2/3/4 sekundy.");
    }
    else if (input == "make your choice" || input == "dokonaj wyboru") {
        visual("MakeYourChoice.png", "Make Your Choice (Dokonaj Wyboru)", "Pig", "Kiedy ocalały uratuje innego ocalałego z haka w odległości co najmniej 32 metrów od ciebie, umiejętność zmusi ratującego do krzyku i nałoży na niego efekt Narażony. Efekt trwa przez 40/50/60 sekund, a sama umiejętność odnawia się co 40/50/60 sekund.");
    }
    else if (input == "merciless storm" || input == "bezlitosny sztorm") {
        visual("MercilessStorm.png", "Merciless Storm (Bezlitosny Sztorm)", "Onryo", "Kiedy generator osiągnie 90% postępu naprawy, pracujący przy nim ocalali będą musieli nieustannie wykonywać testy umiejętności. Jeśli nie trafią jakiegokolwiek testu lub przerwą naprawę, generator zostanie zablokowany na 16/18/20 sekund.");
    }
    else if(input == "mindbreaker" || input == "osłabienie woli" || input == "fearmonger" || input == "władca strachu"){
        visual("Mindbreaker.png", "Mindbreaker (Osłabienie Woli)", "Demogorgon", "Wszyscy ocalali naprawiający generatory otrzymują efekty Oślepienie i Wyczerpanie na czas trwania naprawy. Jeśli ocalały posiadał już wcześniej efekt Wyczerpanie, czas trwania tego efektu zostanie zatrzymany, dopóki naprawia generator. Po odejściu od generatora obydwa statusy utrzymają się przez 3/4/5 sekund.");
    }
    else if (input == "monitor & abuse" || input == "monitor and abuse" || input == "bestialska obserwacja" || input == "monitor") {
        visual("Monitor&Abuse.png", "Monitor & Abuse (Bestialska Obserwacja)", "Doctor", "Kiedy jesteś w pościgu, twój zasięg terroru jest zwiększony o 8 metrów, a gdy nie jesteś w pościgu, twój zasięg terroru zmniejsza się o 8 metrów.");
    }
    else if (input == "nemesis" || input == "nemezis") {
        visual("Nemesis.png", "Nemesis (Nemezis)", "Oni", "Za każdym razem, gdy ocalały cię oślepi lub ogłuszy paletą, staje się on twoją obsesją, otrzymuje efekt nieświadomości na 40/50/60 sekund, a jego aura zostaje ujawniona na 8 sekund.");
    }
    else if (input == "no way out" || input == "bez wyjścia") {
        visual("NoWayOut.png", "No Way Out (Bez Wyjścia)", "Trickster", "Po pierwszym powieszeniu ocalałego na haku, umiejętność Bez Wyjścia otrzymuje żeton. Po zasileniu bram wyjściowych, umiejętność Bez Wyjścia aktywuje się. Gdy ocalały używa przełącznika bramy wyjściowej, otrzymujesz głośne powiadomienie dźwiękowe. Byt blokuje oba przełączniki bramy wyjściowej na 12 sekund oraz dodatkowe 6/9/12 sekund za każdy posiadany przez ciebie żeton.");
    }
    else if (input == "no quarter" || input == "ani kroku wstecz") {
        visual("NoQuarter.png", "No Quarter (Ani Kroku Wstecz)", "Houndmaster", "Gdy progres samodzielnego leczenia u ocalałego osiągnie 75%, ten ocalały dostaje nieskończone testy umiejętności aż do zakończenia leczenia. Jeśli ocalały nie zda testu umiejętności lub leczenie zostanie przerwane, ocalały otrzymuje status Okaleczony na 30 sekund.");
    }
    else if (input == "none are free" || input == "nikt nie jest wolny") {
        visual("NoneAreFree.png", "None are Free (Nikt Nie Jest Wolny)", "Ghoul", "Gdy powiesisz ocalałego po raz pierwszy, uzyskujesz jeden żeton, do maksymalnie 4. Gdy ostatni generator na mapie zostanie ukończony, wszystkie palety i okna zostaną zablokowane na 16 sekund za każdy żeton.");
    }
    else if (input == "nowhere to hide" || input == "nie ma gdzie się ukryć") {
        visual("NowheretoHide.png", "Nowhere to Hide (Nie Ma Gdzie Się Ukryć)", "Knight", "Kiedy uszkodzisz generator, ujawniasz aurę wszystkich ocalałych stojących w promieniu 24 metrów od twojej pozycji na 3/4/5 sekund.");
    }
    else if (input == "oppression" || input == "opresja") {
        visual("Oppression.png", "Oppression (Opresja)", "Twins", "W momencie uszkodzenia generatora, postęp maksymalnie trzech innych losowych generatorów także spada. Jeśli generatory te są akurat naprawiane, ocalały będzie musiał wykonać trudny test umiejętności. Umiejętność odnawia się 60/50/40 sekund.");
    }
    else if (input == "overcharge" || input == "przeciążenie") {
        visual("Overcharge.png", "Overcharge (Przeciążenie)", "Doctor", "Perk aktywuje się po kopnięciu generatora. Następnym razem, gdy ocalały zacznie pracę nad tym generatorem, otrzyma on trudny test umiejętności. Nieudany test umiejętności powoduje utratę progresu o 2/3/4%. Po uszkodzeniu generatora zaczyna on się regresować z prędkością 85% standardowej wartości i stopniowo wzrasta do 130%.");
    }
    else if (input == "overwhelming presence" || input == "przytłaczająca obecność") {
        visual("OverwhelmingPresence.png", "Overwhelming Presence (Przytłaczająca Obecność)", "Doctor", "Ocalali objęci działaniem umiejętności zużywają ładunki swoich przedmiotów 80/90/100% szybciej.");
    }
    else if (input == "play with your food" || input == "baw się swoim jedzeniem") {
        visual("PlaywithYourFood.png", "Play with Your Food (Baw Się Swoim Jedzeniem)", "Shape", "Za każdym razem, kiedy pozwolisz obsesji przed sobą uciec, otrzymasz żeton, do maksymalnej liczby 3 żetonów. Każdy żeton zwiększa twoją szybkość ruchu o 3/4/5%. Wykonanie podstawowego lub specjalnego ataku zużywa jeden żeton.");
    }
    else if (input == "pop goes the weasel" || input == "entliczek pentliczek" || input == "entliczek-pentliczek" || input == "pop") {
        visual("PopGoestheWeasel.png", "Pop Goes the Weasel (Entliczek-Pentliczek)", "Clown", "Po powieszeniu ocalałego, następny generator, który kopniesz, natychmiast straci 20% aktualnego postępu naprawy. Umiejętność ta aktywuje się na 35/40/45 sekund po powieszeniu ocalałego na haku.");
    }
    else if (input == "predator" || input == "drapieżnik") {
        visual("Predator.png", "Predator (Drapieżnik)", "Wraith", "Gdy ocalały ucieknie z pościgu jego aura zostaję ujawniona na 4 sekundy. Perk odnawia się 60/50/40 sekund");
    }
    else if (input == "rancor" || input == "uraza") {
        visual("Rancor.png", "Rancor (Uraza)", "Spirit", "Za każdym razem, gdy ocalali ukończą naprawę generatora, obsesja dostrzega twoją aurę na 5/4/3 sekundy, a ty widzisz położenie wszystkich ocalałych na 3 sekundy. Gdy ocalali zasilą wszystkie bramy wyjściowe, obsesja otrzymuje efekt Narażony i możesz ją zabić.");
    }
    else if(input == "rapid brutality" || input == "gwałtowna brutalność"){
        visual("RapidBrutality.png", "Rapid Brutality (Gwałtowna Brutalność)", "Xenomorph", "Nie otrzymujesz żądzy krwi. Po uderzeniu ocalałego podstawowym atakiem zyskujesz bonus do prędkości o 5% na 8/9/10 sekund.");
    }
    else if (input == "remember me" || input == "zapamiętaj mnie") {
        visual("RememberMe.png", "Remember Me (Zapamiętaj Mnie)", "Nightmare", "Za każdym razem, gdy zranisz obsesję, otrzymujesz jeden token, do maksymalnie 3/4/5. Za każdy token pozostali ocalali otwierają bramę o 30% wolniej.");
    }
    else if (input == "save the best for last" || input == "najlepsze zostaw na koniec" || input == "stbfl") {
        visual("SavetheBestforLast.png", "Save the Best for Last (Najlepsze Zostaw na Koniec)", "Shape", "Gdy ocalały, który nie jest obsesją, straci stan zdrowia, otrzymujesz żeton, do maksymalnie 6/7/8. Za każdy żeton odnawianie podstawowego ataku jest zmniejszone o 4%. Gdy obsesja straci stan zdrowia, tracisz 2 żetony.");
    }
    else if (input == "scourge hook: floods of rage" || input == "hak plagi: przypływ gniewu" || input == "floods of rage" || input == "przypływ gniewu" || input == "flods") {
        visual("ScourgeHookFloodsofRage.png", "Scourge Hook: Floods of Rage (Hak Plagi: Przypływ Gniewu)", "Onryo", "4 losowe haki zmieniają się w haki plagi. Gdy ocalały zostanie z nich ściągnięty, aury wszystkich innych ocalałych zostają ci ujawnione na 5/6/7 sekund.");
    }
    else if (input == "scourge hook: gift of pain" || input == "hak plagi: ofiarowany ból" || input == "gift of pain" || input == "ofiarowany ból") {
        visual("ScourgeHookGiftofPain.png", "Scourge Hook: Gift of Pain (Hak Plagi: Ofiarowany Ból)", "Cenobite", "Na początku próby cztery losowe haki stają się hakami plagi. Gdy ocalały zostanie zdjęty z haka plagi, otrzymuje efekty Zmasakrowany i Krwotok na 90 sekund. Po wyleczeniu otrzymuje 10/13/16% kary do prędkości naprawy generatorów i leczenia, aż do następnego zranienia.");
    }
    else if (input == "scourge hook: hangman's trick" || input == "hak plagi: sztuczka kata" || input == "hangman's trick" || input == "sztuczka kata") {
        visual("Hangman'sTrick.png", "Hangman's Trick (Sztuczka Kata)", "Pig", "Na początku próby cztery losowe haki na mapie stają się hakami plagi. Gdy niesiesz ocalałego na ramieniu, aura wszystkich ocalałych w zasięgu 8/10/12 metrów od haków plagi zostaje ci ujawniona.");
    }
    else if (input == "scourge hook: jagged compass" || input == "hak plagi: uszkodzony kompas" || input == "jagged compass" || input == "uszkodzony kompas") {
        visual("ScourgeHookJaggedCompass.png", "Scourge Hook: Jagged Compass (Hak Plagi: Uszkodzony Kompas)", "Houndmaster", "Na początku próby cztery losowe haki stają się hakami plagi. Gdy ocalały zostanie zdjęty z haka, ten hak zmienia się w hak plagi, zastępując jeden z poprzednich. Po powieszeniu ocalałego na haku plagi aura generatora z największym postępem zostaje ujawniona na 10 sekund.");
    }
    else if (input == "scourge hook: pain resonance" || input == "hak plagi: rezonans bólu" || input == "pain resonance" || input == "pain res" || input == "rezonans bólu") {
        visual("ScourgeHookPainResonance.png", "Scourge Hook: Pain Resonance (Hak Plagi: Rezonans Bólu)", "Artist", "Na początku próby maksymalnie cztery losowe haki zostają zamienione w haki plagi. Otrzymujesz także cztery żetony umiejętności. Za każdym razem, gdy powiesisz jakiegoś ocalałego po raz pierwszy na haku plagi, tracisz jeden żeton, a generator z największym postępem naprawy natychmiast traci 10/15/20% tego postępu. Jeśli stracisz wszystkie żetony, umiejętność wyłącza się do końca próby.");
    }
    
//******************************************************************************************
//******************************************************************************************
//**************************************** PRZERWA *****************************************
//******************************************************************************************
//******************************************************************************************

    else if (input == "septic touch" || input == "zaraźliwy dotyk") {
        visual("SepticTouch.png", "Septic Touch (zaraźliwy dotyk)", "Dredge", "Ocacli podejmujący akcję leczenia w twoim zasięgu terroru otrzymują efekt oślepienie i wyczerpanie. Efekt trwa 6/8/10 po zakończeniu akcji leczenia");
    }
    else if (input == "shadowborn" || input == "zrodzony w cieniu") {
        visual("Shadowborn.png", "Shadowborn (Zrodzony w Cieniu)", "Wraith", "Po oslepieniu w dowolny sposób dostajesz bonus do szybkości 6/8/10% na 10 sekund");
    }
    else if (input == "spirit fury" || input == "duchowa furia") {
        visual("SpiritFury.png", "Spirit Fury (Duchowa Furia)", "Spirit", "Po zniszczeniu 4/3/2 palet kolejna, która cię ogłuszy automatycznie zostanie zniszczona.");
    }
    else if (input == "starstruck" || input == "oczarowanie") {
        visual("Starstruck.png", "Starstruck (Oczarowanie)", "Trickster", "Gdy podczas niesienia ocalałego wszyscy inni ocalali w twoim zasięgu terroru dostają efekt narażony. Efekt utrzymuje się 26/28/30 sekund po wyjściu z zasięgu terroru. Umiejętność odnawia się w 60 sekund.");
    }
    else if (input == "stridor" || input == "jęki") {
        visual("Stridor.png", "Stridor (Jęki)", "Nurse", "Jęczenie ocalałego jest głośniejsze o 25/50/50% a zwykły oddech o 0/0/25%.");
    }
    else if (input == "superior anatomy" || input == "ponadprzeciętna anatomia") {
        visual("SuperiorAnatomy.png", "Superior Anatomy (Ponadprzeciętna Anatomia)", "Mastermind", "Kiedy ocalały wykonuje szybki przeskok w promieniu 8 metrów od ciebie superior anatomy się aktywuje. Kiedy perk jest aktywny twój następny przeskok będzie szybszy o 30/35/40%. Superior anatomy dezaktywuje się po przeskoku i odnawia się 30s.");
    }
    else if (input == "surge" || input == "skok napięcia" || input == "jolt" || input == "wstrząs"){
        visual("Surge.png", "Surge (Skok Napięcia)", "Demogorgon", "Za każdym razem kiedy powalisz ocalałego podstawowym atakiem wszystkie generatory w promieniu 32m. eksplodują i zaczną się odrazu regresować o 6/7/8%.");
    }
    else if (input == "surveillance" || input == "inwigilacja") {
        visual("Surveillance.png", "Surveillance (Inwigilacja)", "Pig", "Aura generatorów poddanych regresowi jest ci ujawniona na biało. Kiedy ocalały przerywa regres aura generatora zmienia kolor na żółty na 8/12/16s.");
    }
    else if (input == "terminus" || input == "końcowy przystanek") {
        visual("Terminus.png", "Terminus (Końcowy Przystanek)", "Mastermind", "Kiedy bramy są zasilote terminus się aktywuje. Kiedy perk jest aktywny Wszyscy ocalali którzy wiszą na haku, są ranni lub są w stanie agonii otrzymują efekt okaleczony. Efekt utrzymuje się 20/25/30s po otworzeniu bram.");
    }
    else if (input == "territorial imperative" || input == "zwierzę terytorialne") {
        visual("TerritorialImperative.png", "Territorial Imperative (Zwierzę Terytorialne)", "Huntress", "Aury ocalałych znajdujących się w piwnicy, dalej niż 32 metry od ciebie, są ci ukazane na 4/5/6s. Territorial imperatiwe odnawia się 45s.");
    }
    else if (input == "thanatophobia" || input == "tanatofobia") {
        visual("Thanatophobia.png", "Thanatophobia (Tanatofobia)", "Nurse", "Za każdego ocalałego, który wisi, jest ranny lub jest w stanie agonii jest nakładana kara  1/1.5/2% do akcji takich jak naprawianie, oczyszczanie totemów i sabotowanie. Jeśli 4 ocalałych spełnia powyższy warunek nakładana kara jest większa o 12%.");
    }
    else if (input == "thrilling tremors" || input == "dreszczyk emocji") {
        visual("ThrillingTremors.png", "Thrilling Tremors (Dreszczyk Emocji)", "Ghost Face", "Kiedy podnosisz ocalałego wszystkie nienaprawiane generatory są blokowane przez byt na 16s. Aura zablokowanych generatorów jest ci ujawniana kolorem białym. Thrilling tremors odnawia się 100/80/60s.");
    }
    else if (input == "thwack!" || input == "trach!") {
        visual("THWACK.png", "THWACK! (Trach!)", "Skull Merchant", "Po powieszeniu ocalałego THWACK! się aktywuje. Przy następnym zniszczeniu palety lub zniszczalnej ściany wszyscy ocalali w promieniu 28/30/32m krzyczą i ujawniają swoją aure na 4s.");
    }
    else if (input == "tinkerer" || input == "majsterkowicz") {
        visual("Tinkerer.png", "Tinkerer (Majsterkowicz)", "Hillbilly", "Kiedy generator jest naprawiony w 70% Otrzymujesz status niewykrywalny na 12/14/16s oraz w miejscu naprawiania generatora. Tinkerer może być aktywowany tylko raz na danym generatorze.");
    }
    else if (input == "trail of torment" || input == "ścieżka udręki") {
        visual("TrailofTorment.png", "Trail of Torment (Ścieżka udręki)", "Executioner", "Po uszkodzeniu generatora otrzymujesz status niewykrywalny do momentu kiedy generator przestanie się regresować. Aura generatora pod działaniem trail of torment jest ujawniana ocalałym na żółto. Umiejętność odnawia się 60/45/30s");
    }
    else if (input == "ultimate weapon" || input == "broń doskonała"){
        visual("UltimateWeapon.png", "Ultimate Weapon (Broń Doskonała)", "Xenomorph", "Po otwarciu szafki umiejętność aktywuje się na 15 sekund. Jeśli w tym czasie ocalały wejdzie w zasięg 32m od ciebie to zobaczysz jego aurę, a także dostanie efekt ślepoty na 30s. umiejętność potrzebuje 80/70/60 sekund na odnowienie.")
    }
    else if(input == "undone" || input == "cofnięty"){
        visual("Undone.png", "Undone (Cofnięty)", "Unknown", "Kiedy Ocalały nie trafi testu umiejętności (przy leczeniu bądź przy reperowaniu generatora) dostajesz 3 tokeny do maksymalnej ilości 18/24/30 Tokenów. Po skopaniu generatora traci on 1% progressu oraz blokuje sie na 1 sekunde za każdy token jednak dopiero po odblokowaniu zaczyna sie regressować. Perk ma cooldawn na 60 sekund");
    }
    else if (input == "unforeseen" || input == "nieprzewidziane"){
        visual("Unforeseen.png", "Unforeseen (Nieprzewidziane)", "Unknown", "Po skopaniu generatora twój Terror Radius przenosi sie na ten generator na 22/26/30 sekund o stałym zasięgu 32 metrów. W tym samym czasie dostajesz efekt Niewykrywalny. Perk ma cooldawn 30 sekund");
    }
    else if (input == "unbound" || input == "uwolniony"){
        visual("Unbound.png", "Unbound (Uwolniony)", "Unknown", "Ten perk aktywuje się po 24/27/30 sekundach od zranienia Ocalałego w dowolny sposób. Po przejściu przez okno otrzymujesz 5% Haste na 10 sekund.");
    }
    else if (input == "unnerving presence" || input == "niepokojąca obecność") {
        visual("UnnervingPresence.png", "Unnerving Presence (Niepokojąca Obecność)", "Trapper", "Kiedy ocalały znajduje się w twoim terrorze jego skillchecki są zmiejszone o 40/50/60% oraz występują częściej o 10%.");
    }
    else if (input == "weave attunement" || input == "Dostrojenie Splotu") {
        visual("WeaveAttunement.png", "Weave Attunement (Dostrojenie Splotu)", "Lich", "Kiedy przedmiot zostanie wyczerpany po raz pierwszy, zostaje upuszczony. Widzisz aurę upuszczonych przedmiotów. Aury ocalałych w promieniu 8m od upuszczonych przedmiotów zostaną ujawnione. Kiedy Ocalały podnosi przedmiot Ocalałego, otrzymuje efekt statusu Nieświadomyna 20/25/30s.");
    }
    else if (input == "zanshin tactics" || input == "taktyka zanshin") {
        visual("ZanshinTactics.png", "Zanshin Tactics (Taktyka Zanshin)", "Oni", "Zabójca dostrzega aury okien, palet i zniszczalnych ścian w odległości 24/28/32m");
    }
    else
    {
        document.getElementById("ErrorSpace").innerText = `Nie można było znaleźć perka o nazwie "${input}". Spróbuj ponownie`;
        return 0;
    }
    repeats += 1;
    return 1;
}
