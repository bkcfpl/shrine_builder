let repeats = 0;

//Ostatnia aktualizacja: 7.3.3

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
        visual("AceInTheHole.png", "Ace in the Hole (As w Rękawie)", "Ace Visconti", "Kiedy przeszukujesz skrzynie, masz 100% szans na dostanie bardzo rzadkiego dodatku dołączonego do przedmiotu oraz 50% szans na dostanie ultra rzadkiego dodatku.");
    }
    else if (input == "adrenaline" || input == "adrenalina")
    {
        visual("Adrenaline.png", "Adrenaline (Adrenalina)", "Meg Thomas", "W momencie naprawienia wszystkich generatorów leczysz się o jeden stan zdrowia wyżej, a także przez 5 sekund możesz biec ze 150% normalnej prędkości biegu. Jeżeli w momencie aktywacji Adrenaliny wisisz na haku, to umiejętność aktywuje się odrazu, kiedy zostaniesz z niego zdjęty. Adrenalina ignoruje efekt wyczerpania oraz wywołuje go na 60/50/40 sekund.");
    }
    else if (input == "aftercare" || input == "druga pomoc")
    {
        visual("Aftercare.png", "Aftercare (Druga Pomoc)", "Jeff Johansen", "Widzisz aurę każdego ocalałego: którego uratowałeś z haka lub który uratował ciebie z haka, na którym wykonałeś akcję leczenia lub który wykonał akcję leczenia na tobie. Ci ocalali widzą również twoją aurę. Efekt umiejętności może maksymalnie obejmować 1/2/3 ocalałych.");
    }
    else if (input == "alert" || input == "czujność")
    {
        visual("Alert.png", "Alert (Czujność)", "Feng Min", "Kiedy zabójca wykonuje akcję niszczenia, widzisz jego aurę przez następne 3/4/5 sekund.");
    }
    else if (input == "any means necessary" || input == "po trupach do celu")
    {
        visual("AnyMeansNecessary.png", "Any Means Necessary (Po Trupach do Celu)", "Yui Kimura", "Naciśnij przycisk umiejętności 1, a następnie przytrzymaj go przez 6/5/4 s, żeby podnieść rzuconą wcześniej na ziemię paletę.");
    }
    else if (input == "appraisal" || input == "ocena sytuacji")
    {
        visual("Appraisal.png", "Appraisal (Ocena Sytuacji)", "Élodie Rakoto", "Rozpoczynasz próbę z 3 żetonami. Jeżeli jakaś skrzynia została już otwarta, możesz użyć umiejętności, aby ponownie ją przeszukać i znaleźć kolejny przedmiot. Przeszukanie jest możliwe tylko raz na daną skrzynię. Przeszukujesz skrzynie o 40/60/80% szybciej.");
    }
    else if (input == "autodidact" || input == "samouk")
    {
        visual("Autodidact.png", "Autodidact (Samouk)", "Adam Francis", "Rozpoczynasz rozgrywkę z karą równą -25% za udane testy umiejętności podczas leczenia innych ocalałych. Za każdy następny udany test umiejętności podczas leczenia innego ocalałego otrzymujesz żeton, aż do maksymalnie 3/4/5 żetonów. Każdy żeton zapewnia bonus +15% do postępu leczenia za trafione testy umiejętności. Umiejętność nie działa, kiedy do leczenia używasz apteczki.");
    }
    else if (input == "babysitter" || input == "niańka"){
        visual("Babysitter.png", "Babysitter (Niańka)", "Steve Harrington", "");

        //to pisał ? (powrót st)
    }
    else if (input == "background player" || input == "gracz w tle")
    {
        visual("BackgroundPlayer.png", "Background Player (Gracz w Tle)", "Renato Lyra", "Gdy zabójca podniesie powalonego ocalałego otrzymasz 200% bonusu do prędkości poruszania się na 5. Po użyciu umiejętności wywołuje ona wyczerpanie na 60/50/40 sekund.");

        //to pisał wpserek (z newsów, zmiana perków)
    }
    else if (input == "balanced landing" || input == "miękkie lądowanie" || input == "balance")
    {
        visual("BalancedLanding.png", "Balanced Landing (Miękkie Lądowanie)", "Nea Karlsson", "Efekty zmniejszonej prędkości ruchu po wykonaniu skoku z dużej wysokości są krótsze o 75%, a głośność jęków po upadku jest cichsza o 100%. W momencie upadku zaczynasz biec ze 150% normalnej prędkości biegu przez maksymalnie 3 sekundy. Umiejętność wywołuje wyczerpanie na 60/50/40 sekund.");
    }
    else if (input == "better than new" || input == "lepsze niż nowe")
    {
        visual("BetterthanNew.png", "Better than New (Lepsze niż Nowe)", "Rebecca Chambers", "Po ukończeniu akcji leczenia na innym ocalałym, zyskuje on premię 12/14/16% szybszej prędkości do leczenia, otwierania skrzyń oraz oczyszczania i błogosławienia totemów.");
        
        //gigachad do tąd pisał, a dalej pisze awicki
    }
    else if (input == "better together" || input == "razem lepiej"){
        visual("BetterTogether.png", "Better Together (Razem Lepiej)", "Nancy Wheeler", "");

        //to pisał ? (powrót st)
    }
    else if (input == "bite the bullet" || input == "zaciśnięte zęby")
    {
        visual("BitetheBullet.png", "Bite the Bullet (Zaciśniętete Zęby)", "Leon S. Kennedy", "podczas leczenia nie wydajesz żadnych dźwięków, w tym jęków bólu (tak samo ocalały, którego leczysz). Nieudane testy umiejętności w trakcie leczenia nie powodują głośnego powiadomienia dźwiękowego, a leczenie cofa się jedynie o 3/2/1%.");
    }
    else if (input == "blast mine" || input == "mina")
    {
        visual("BlastMine.png", "Blast Mine (Mina)", "Jill Valentine", "Umiejetność/mina aktywuje się po ukończeniu łącznie 50% postępu naprawy (dowolnego generatora) generatorów. Po co najmniej 3 s naprawiania generatora naciśnij przycisk umiejętności, aby zamontować pułapkę aktywną przez 100/110/120 s. Aury generatorów z minami zostaną podświetlone na żółto dla wszystkich ocalałych. Na generatorze może być aktywna tylko jedna mina. Gdy zabójca uszkodzi generator z pułapką, ta eksploduje, ogłuszając zabójcę i oślepiając wszystkich w pobliżu. Mina wyłącza się, gdy generator zostanie uszkodzony przez zabójcę lub gdy czas dobiegnie końca.");
    }
    else if (input == "blood pact" || input == "pakt krwi")
    {
        visual("BloodPact.png", "Blood Pact (Pakt Krwi)", "Cheryl Mason", "Gdy ty lub obsesja jesteście ranni, widzicie nawzajem swoje aury. Po wyleczeniu obsesji lub otrzymaniu od niej leczenia zyskujecie bonus 5/6/7% do prędkości ruchu, dopóki nie oddalicie się od siebie na więcej niż 16 m. (Zmniejsza szansę zostania obsesją. Jeśli jesteś obsesją, umiejętność wyłącza się.)");
    }
    else if (input == "blood rush" || input == "wrząca krew")
    {
        visual("BloodRush.png", "Blood Rush (Wrząca Krew)", "Renato Lyra", "Umiejętność aktywuje się, gdy do  śmierci pozostało ci jedno zawieszenie na haku. Przy pełnym zdrowiu, podczas biegu i Wyczerpania naciśnij przycisk aktywnej umiejętności ,aby stracić stan zdrowia i natychmiast anulować stan Wyczerpania oraz otrzymać efekt Okaleczony na 28/24/20 s. Automatyczne uzdrowienie nastąpi po 28/24/20 s.");
    }
    else if (input == "boil over" || input == "do utraty tchu")
    {
        visual("BoilOver.png", "Boil Over (Do Utraty Tchu)", "Kate Denson", "Efekty twojej walki z zabójcą są zwiększone o (killera bardziej miota na boki)  60/70/80%. Utrudniasz zabójcy dostrzeganie aur haków w promieniu 16 m. Zyskujesz 33% bieżącego postępu w szamotaniu, gdy zabójca spada z dużej wysokości.");
    }
    else if (input == "boon: circle of healing" || input == "urok: krąg uzdrowienia" || input == "circle of healing" || input == "coh" || input == "krąg uzdrowienia")
    {
        visual("BoonCircleofHealing.png", "Boon: Circle of Healing (Urok: Krąg Uzdrowienia)", "Mikaela Reid", "Naciśnij i przytrzymaj przycisk umiejętności 1 w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Delikatne dzwonki rozbrzmiewają w zasięgu 24 m. Każdy ocalały w zasięgu dobrego totemu zyskuje 50/75/100% premii do szybkości leczenia innych. Apteczki nie dają premii leczenia w zasięgu dobrego totemu.");
    }
    else if (input == "boon: dark theory" || input == "urok: mroczna teoria" || input == "dark theory" || input == "mroczna teoria")
    {
        visual("BoonDarkTheory.png", "Boon: Dark Theory (Urok: Mroczna Teoria)", "Yoichi Asakawa", "Naciśnij i przytrzymaj przycisk umiejętności w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Delikatne dzwonki rozbrzmiewają w zasięgu 24 m. Wszyscy ocalali w zasięgu dobrego totemu otrzymują bonus 2% do prędkości ruchu. Efekt utrzymuje się przez 2/3/4 s od opuszczenia obszaru działania dobrego totemu.");
    }
    else if (input == "boon: exponential" || input == "urok: wykładniczość" || input == "exponential" || input == "wykładniczość")
    {
        visual("BoonExponential.png", "Boon: Exponential (Urok: Wykładniczość)", "Jonah Vasquez", "Naciśnij i przytrzymaj przycisk umiejętności w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Delikatne dzwonki rozbrzmiewają w zasięgu 24 m. Każdy ocalały w zasięgu dobrego totemu zyskuje 90/95/100% premii do szybkości leczenia i może w pełni wyleczyć się ze stanu agonii.");
    }
    else if (input == "boon: shadow step" || input == "urok: naprawiacz dusz" || input == "shadow step" || input == "naprawiacz dusz")
    {
        visual("BoonShadowStep.png", "Boon: Shadow Step (Urok: Naprawiacz Dusz)", "Mikaela Reid", "Naciśnij i przytrzymaj przycisk umiejętności w pobliżu zwykłego lub przeklętego totemu, aby go pobłogosławić i stworzyć dobry totem. Delikatne dzwonki rozbrzmiewają w zasięgu 24 m Czerwone zarysowania i aura każdego ocalałego w zasięgu dobrego totemu zostają ukryte przed zabójcą. Efekt utrzymuje się przez 2/3/4 s od opuszczenia obszaru działania dobrego totemu.");
    }
    else if (input == "bond" || input == "wieź")
    {
        visual("Bond.png", "Bond (Więź)", "Dwight Fairfield", "Widzisz aury sojuszników w zasięgu 20/28/36 m.");

        //awicki do tąd pisał
        //to był 26.04.2023, poniżej jest 27.04.2023
        //to pisze gigachad
    }
    else if (input == "borrowed time" || input == "życie na kredyt" || input == "bt" || input == "borrowed")
    {
        visual("BorrowedTime.png", "Borrowed Time (życie na Kredyt)", "William 'Bill' Overbeck", "Ocalali zdjęci z haka zachowują efekt Wytrzymałości na dodatkowe 6/8/10 oraz bonus do prędkości ruchu na dodatkowe 10 s.");
    }
    else if (input == "botany knowledge" || input == "wiedza botaniczna")
    {
        visual("BotanyKnowledge.png", "Botany Knowledge (Wiedza Botaniczna)", "Claudette Morel", "Twoja prędkość leczenia wzrasta o 30/40/50%, a wytrzymałość przedmiotów do leczenia, czyli apteczek spada o 20%.");
    }
    else if (input == "breakdown" || input == "przełamanie")
    {
        visual("Breakdown.png", "Breakdown (Przełamanie)", "Jeff Johansen", "Za każdym razem, kiedy uciekniesz z Haka lub ktoś cię z niego uratuje, hak ten niszczy się na 180s i możesz zobaczyć aurę zabójcy przez 4/5/6 sekund.");
    }
    else if (input == "breakout" || input == "ucieczka")
    {
        visual("Breakout.png", "Breakout (Ucieczka)", "Yui Kimura", "Kiedy znajdujesz się w odległości 5 metrów od niesionego ocalałego otrzymujesz efekt Pośpiech i poruszasz się z prędkością zwiększoną o 5/6/7%, a prędkość szamotania się ocalałego jest zwiększona o 25%.");
    }
    else if (input == "buckle up" || input == "zapnij pasy")
    {
        visual("BuckleUp.png", "Buckle Up (Zapnij Pasy)", "Ashley 'Ash' Williams", "Podczas, gdy wyleczysz innego ocalałego ze stanu agonii, obaj zobaczycie aurę zabójcy przez 6/8/10 sekund. Leczony ocalały otrzyma także efekt pośpiechu o wartości 10% na ten sam czas.");
    }
    else if (input == "built to last" || input == "trwałosc przede wszystkim")
    {
        visual("BuilttoLast.png", "Built to Last (trwałość Przede Wszystkim)", "Feliks Richter", "Jeśli schowasz się w szafce na 14/13/12 sekund i trzymasz zużyty przedmiot, ładunki przedmiotu zostaną uzupełnione do 99%. Każde użycie tej umiejętności zmniejsza limit uzupełnienia ładunków przedmiotu o 33%.");
    }
    else if (input == "calm spirit" || input == "spokojny duch")
    {
        visual("CalmSpirit.png", "Calm Spirit (Spokojny Duch)", "Jake Park", "Używając tej umiejętności nie będziesz odstraszał już kruków i krzyczał. Perk umożliwia też bezszelestne otwieranie skrzyń, niszczenie i błogosławienie totemów, ale o 40/35/30% wolniej.");
    }
    else if (input == "camaraderie" || input == ""){
        visual("Camaraderie.png", "Camaraderie ()", "Steve Harrington", "");

        //to pisał ? (powrót st)
    }
    else if (input == "chemical trap" || input == "chemiczna pułapka"){
        visual("ChemicalTrap.png", "Chemical Trap (Chemiczna Pułapka)", "Ellen Ripley", "po skończeniu 70/60/50% generatora umiejętność aktywuje się. Jeśli stoisz obok zrzuconej palety naciśnij przycisk aktywnej umiejętności 2 aby zainstalował pułapkę na 100/110/120s. Aura palety z pułapką jest pokazana wszystkim ocalałym. Jeśli zabójca spróbuje zniszczyć paletę, pułapka wybuchnie , i spowolni zabójcę o 50% na 4s.")
    
        //to pisał bkcf (z newsów, nowa postać)
    }
    else if (input == "corrective action" || input == "działanie korekcyjne")
    {
        visual("CorrectiveAction.png", "Corrective Action (Działanie Korekcyjne)", "Jonah Vasquez", "Zaczynasz próbę z następującą liczbą żetonów: 1/2/3, a za każdy następny świetnie trafiony test umiejętności otrzymujesz kolejny żeton, których maksymalnie możesz mieć aż 5. Kiedy współpracujesz z ocalałym i zepsuje on test umiejętności, to nietrafiony test umiejętności natychmiastowo zamieni się w trafiony, a ty stracisz jeden żeton.");
    }
    else if (input == "counterforce" || input == "przeciwdziałanie")
    {
        visual("Counterforce.png", "Counterforce (Przeciwdziałanie)", "Jill Valentine", "Niszczysz totemy o 20% szybciej i za każdy następny zniszczony totem otrzymujesz kolejny bonus w wysokości 20% do szybszego niszczenia totemów. Dodatkowo za każdym razem kiedy zniszczysz jakiś totem, aura najbardziej oddalonego od ciebie totemu pokaże ci się na 2/3/4 sekundy.");
    }
    else if (input == "clairvoyance" || input == "jasnowidzenie")
    {
        visual("Clairvoyance.png", "Clairvoyance (Jasnowidzenie)", "Mikaela Reid", "Kiedy zniszczysz totem lub go pobłogosławisz, umiejętność ta aktywuje się. Aby jej użyć nie możesz żadnego przedmiotu w dłoni, a następnie musisz nacisnąć i przytrzymać przycisk umiejętności. Kiedy to zrobisz, w promieniu 64 metrów ukażą ci się aury generatorów, bram, skrzyń, haków i włazu na łącznie maksymalnie 8/9/10 sekund.");
        
        //gigachad do tąd pisał, a dalej pisze awicki
    }
    else if (input == "cut loose" ||input == "uwolnienie")
    {
        visual("CutLoose.png", "Cut Loose (Uwolnienie)", "Thalita Lyra", "Umiejętność aktywuje się po wykonaniu pośpiesznego  przeskoku (fast vault) w pościgu. Gdy umiejętność jest aktywna, twoje pośpieszne przeskoki są ciche przez maksymalnie 4/5/6 s, a udane wykonanie pośpiesznego przeskoku w tym czasie resetuje zegar.");
    }
    else if (input == "dance with me" ||input == "zatańcz ze mną")
    {
        visual("DanceWithMe.png", "Dance With Me (Zatańcz ze Mną)", "Kate Denson", "Gdy wykonujesz akcję szybkiego przeskoku lub wyskakujesz w pośpiechu z szafki, przez 3 s nie zostawiasz za sobą czerwonych zarysowań. Zatańcz ze Mną odnawia się po upływie 60/50/40 s.");
    }
    else if (input == "dead hard" ||input == "twarda sztuka" ||input == "dh")
    {
        visual("DeadHard.png", "Dead Hard (Twarda Sztuka)", "David King", "Twarda Sztuka aktywuje się, gdy zostaniesz ściągnięty z haka, lub sam się ściągniesz z haka. Gdy odniesiesz ranę, sięgnij do swoich zapasów adrenaliny, aby uniknąć obrażeń. Naciśnij przycisk aktywnej umiejętności podczas biegu, aby zyskać efekt Wytrzymałości na 0,5 s. Wywołuje Wyczerpanie na 60/50/40 s. Twarda Sztuka wyłącza się, do momentu ponownego bezpiecznego unhooku");
    }
    else if (input == "deception" ||input == "oszustwo")
    {
        visual("Deception.png", "Deception (Oszustwo)", "Élodie Rakoto", "Interakcja z szafką podczas sprintu uruchamia głośne powiadomienie w twojej lokalizacji i sprawia, że zostawiasz czerwone zarysowania przez 3 s. Nie wchodzisz do szafek podczas sprintu oraz podczas działania tej umiejętności. Oszustwo można uruchomić raz na 60/50/40 s.");
    }
    else if (input == "decisive strike" || input == "ostateczny cios" || input == "ds")
    {
        visual("DecisiveStrike.png", "Decisive Strike (Ostateczny Cios)", "Laurie Strode", "Gdy ktoś zdejmie cię z haka lub gdy zejdziesz z niego samodzielnie, Ostateczny Cios stanie się aktywny na40/50/60 Gdy umiejętność jest aktywna i złapie cię zabójca, wykonaj test umiejętności, aby automatycznie mu się wyrwać i ogłuszyć go na 3 sekundy. Udany lub nieudany test umiejętności wyłącza Ostateczny Cios. Skuteczne ogłuszenie zabójcy zmieni cię w obsesję. Umiejętność i jej efekty są wyłączone, gdy zasilane są bramy wyjściowe.");
    }
    else if (input == "deliverance" || input == "wybawienie" || input == "deli")
    {
        visual("Deliverance.png", "Deliverance (Wybawienie)", "Adam Francis", "Wybawienie aktywuje się po bezpiecznym uratowaniu innego ocalałego z haka. Gdy umiejętność jest aktywna, masz 100% szans na sukces przy próbie samodzielnej ucieczki z haka. Skuteczne uratowanie z haka nałoży na ciebie efekt Okaleczenia na okres 100/80/60 s.");
    }
    else if (input == "desperate measures" || input == "desperacki krok")
    {
        visual("DesperateMeasures.png", "Desperate Measures (Desperacki Krok)", "Feliks Richter", "Zwiększa szybkość leczenia i zdejmowania z haka o 10/12/14% za każdego zranionego, zawieszonego na haku lub umierającego ocalałego.");
    }
    else if (input == "detective's hunch" || input == "przeczucie detektywa")
    {
        visual("Detective'sHunch.png", "Detective's Hunch (Przeczucie Detektywa)", "David Tapp", "W momencie ukończenia naprawy generatora aury generatorów, skrzyń i totemów znajdujących się w zasięgu 32/48/64 m od ciebie stają się widoczne przez 10 s. (Jeżeli posiadasz mapę pozwalającą śledzić cele, to generatory, skrzynie i totemy ujawnione dzięki Przeczuciu Detektywa zostaną do niej dodane.)");
    }
    else if (input == "distortion" || input == "zakłocenie")
    {
        visual("Distortion.png", "Distortion (Zakłócenie)", "Jeff Johansen", "Zaczynasz grę z 3 żetonami. Gdy twoja aura ma zostać ujawniona zabójcy, umiejętność aktywuje się i żeton zostaje wykorzystany. Przez następne 6/8/10 s (gdy umiejętność jest aktywna) twoja aura i czerwone zarysowania nie będą widoczne dla zabójcy. Ta umiejętność nie aktywuje się, gdy jesteś w stanie agonii. Odzyskaj żeton za każde 30 s spędzone w zasięgu terroru zabójcy. Zakłócenie nie może mieć więcej niż 3 żetony.");
    }
    else if (input == "diversion" || input == "dywersja" || input == "pebble")
    {
        visual("Diversion.png", "Diversion (Dywersja)", "Adam Francis", "Dywersja staje się aktywna po 40/35/30 s przebywania poza pościgiem w zasięgu terroru zabójcy. Gdy Dywersja jest aktywna: kucając w bezruchu, naciśnij przycisk aktywnej umiejętności 1, aby rzucić kamyk, który wywoła głośne powiadomienie dźwiękowe dla zabójcy w odległości 20 m.");
        
        //awicki do tąd pisał
        //to był 27.04.2023, poniżej jest 28.04.2023
        //to pisze gigachad
    }
    else if (input == "dramaturgy" || input == "dramaturgia"){
        visual("Dramaturgy.png", "Dramaturgy (Dramaturgia)", "Nicolas Cage", "Aktywuje się kiedy jesteś zdrowy. Podczas biegania kliknij przycisk umiejętności aby unieść wysoko kolana na 0,5s. a następnie zyskać 25% szybkości na 2 sekundy. Po użyciu perka może pojawić się LOSOWO jeden z efektów: Exposed na 12s., dodatkowe 25% szybkości na 2s., krzyk, zdobycie losowego rzadkiego przedmiotu z dodatkami oraz upuszczenie aktualnego. Ten sam efekt, nie może wystąpić dwa razy z rzędu. Powoduje efekt wyczerpania na 60/50/40s.");

        //to pisała whiten (z newsów, nowa postać)
    }
    else if (input == "empathic connection" || input == "empatyczne połączenie")
    {
        visual("EmpathicConnection.png", "Empathic Connection (Empatyczne Połączenie)", "Yoichi Asakawa", "Kiedy inny ocalały jest ranny, to widzi on twoją aurę w zasięgu 32/64/96 metrów. Leczysz innych ocalałych o 10% szybciej.");
    }
    else if (input == "empathy" || input == "empatia")
    {
        visual("Empathy.png", "Empathy (Empatia)", "Claudette Morel", "Dostrzegasz aury innych Ocalałych z twojej drużyny w zasięgu 64/96/128 metrów, gdy są oni ranni lub są w stanie agonii. Empatia nie ujawnia aur sojuszników, którzy są aktualnie w pościgu z zabójcą.");
    }
    else if (input == "fast track" || input == "szybka ucieczka")
    {
        visual("FastTrack.png", "Fast Track (Szybka Ucieczka)", "Yun-Jin Lee", "Kiedy inny ocalały zostaje powieszony na haku, otrzymujesz żetony (1/2/3). Wszystkie żetony zostają zużyte, jeśli trafisz świetny test umiejętności podczas naprawiania generatora. Każdy żeton to 1% dodatkowego bonusu za trafienie świetnego testu umiejętności przy naprawie generatora.");
    }
    else if (input == "fixated" || input == ""){
        visual("Fixated.png", "Fixated ()", "Nancy Wheeler", "");

        //to pisał ? (powrót st)
    }
    else if (input == "flashbang" || input == "granat błyskowy")
    {
        visual("Flashbang.png", "Flashbang (Granat Błyskowy)", "Leon S. Kennedy", "Po naprawieniu generatora lub generatorów o wartości łącznie 70/60/50% postępu naprawy, umiejętność aktywuje się. Wejdź do szafki i naciśnij przycisk aktywnej umiejętności 1, aby stworzyć granat błyskowy (umiejętność nie wymaga nie posiadania przedmiotu, kiedy chcemy stworzyć granat błyskowy).");
    }
    else if (input == "flip flop" || input == "mijanka" || input == "flip-flop") 
    {
        visual("FlipFlop.png", "Flip-Flop (Mijanka)", "Ashley 'Ash' Williams", "Kiedy znajdujesz się w stanie agonii, 50% twojego aktualnego postępu podnoszenia się z ziemi zamieni się w postęp szamotania, maksymalnie do 40/45/50%.");
    }
    else if (input == "fogwise" || input == "z myśla o mgle")
    {
        visual("Fogwise.png", "Fogwise (Z Myślą o Mgle)", "Vittorio Toscano", "Trafienie świetnego testu umiejętności spowoduje, że zobaczysz aurę zabójcy na 4/5/6 sekund.");
    }
    else if (input == "for the people" || input == "za ludzi" || input == "ftp" || input == "for the popo")
    {
        visual("ForthePeople.png", "For the People (Za Ludzi)", "Zarina Kassir", "Umiejętność jest włączona tylko i wyłącznie przy pełnym zdrowiu. Aby aktywować umiejętność, naciśnij przycisk umiejętności 1 podczas leczenia innego ocalałego bez apteczki, aby natychmiast zmienić jego stan ze stanu agonii do rannego lub ze stanu rannego na zdrowy.");
    }
    else if (input == "friendly competition" || input == "przyjazna rywalizacja")
    {
        visual("FriendlyCompetition.png", "Friendly Competition (Przyjazna Rywalizacja)", "Thalita Lyra", "Umiejętność aktywuje się, kiedy ukończysz naprawę generatora z przynajmniej jednym innym ocalałym.  Wraz z ocalałymi, z którymi ukończyłeś dany generator, otrzymujesz bonus prędkości o wysokości 5% do naprawiania generatorów na następne 45/60/75 sekund.");
    }
    else if (input == "head on" || input == "determinacja")
    {
        visual("HeadOn.png", "Head On (Determinacja)", "Jane Romero", "Determinacja aktywuje się po 3 sekundach przebywania w szafce. Kiedy umiejętność ta jest aktywna, wyskocz szybko z szafki, aby ogłuszyć zabójcę przechodzącego obok niej na 3 sekundy. Umiejętność wywołuje efekt wyczerpania na 60/50/40 sekund.");
    }
    else if (input == "hyperfocus" || input == "hiperskupienie")
    {
        visual("Hyperfocus.png", "Hyperfocus (Hiperskupienie)", "Rebecca Chambers", " Udany świetny test umiejętności podczas leczenia lub naprawiania generatora powoduje, że otrzymujesz jeden żeton (Maksymalnie możesz mieć 6 żetonów). Każdy żeton zwiększa szanse na pojawienie się testu umiejętności o 4% oraz zwiększa szybkość kursora testu umiejętności o 4%. Każdy żeton zwiększa bonus za zaliczenie świetnego testu umiejętności o kolejne 10/20/30% jego bazowej wartości. Utracisz wszystkie żetony, jeśli zamiast świetnego testu umiejętności trafisz normalny.");
    }
    else if (input == "inner focus" || input == "wewnętrzne skupienie")
    {
        visual("InnerFocus.png", "Inner Focus (Wewnętrzne Skupienie)", "Haddie Kaur", "Jesteś w stanie zobaczyć czerwone zarysowania innych ocalałych, a kiedy jakiś ocalały w promieniu 32 metrów od ciebie straci stan zdrowia, to ujrzysz aurę zabójcy na 3/4/5 sekund.");
    }
    else if(input == "inner strength" || input == "wewnętrzna siła"){
        visual("InnerStrength.png", "Inner Strength (Wewnętrzna Siła)", "Nancy Wheeler", "");

        //to pisał ? (powrót st)
    }
    else if (input == "iron will" || input == "żelazna wola")
    {
        visual("IronWill.png", "Iron Will (Żelazna Wola)", "Jake Park", "Jęki, które zostały spowodowane na skutek obrażeń są ograniczone o 25/50/75%. Umiejętność nie działa, jeśli ocalały ma na sobie efekt wyczerpania.");
    }
    else if (input == "leader" || input == "lider")
    {
        visual("Leader.png", "Leader (Lider)", "Dwight Fairfield", "Ocalali, którzy znajdują się w promieniu 8 metrów od ciebie, otrzymują bonus w wysokości 15/20/25% do szybszego leczenia, sabotowania haków, ściągania z haków, oczyszczania totemów, otwierania skrzyń oraz odblokowywania bram. Efekt utrzymuje się przez 15 sekund od momentu opuszczenia przez innego ocalałego zasięgu działania umiejętności.");
    }
    else if (input == "left behind" || input == "porzucony")
    {
        visual("LeftBehind.png", "Left Behind (Porzucony)", "William 'Bill' Overbeck", "Jeśli zostaniesz ostatnim żywym ocalałym podczas meczu, będziesz w stanie ujrzeć aurę włazu, który znajduje się w zasięgu 24/28/32 metrów od ciebie.");
    }
    else if (input == "light footed" || input == "lekko stopy"){
        visual("LightFooted.png", "Light Footed (lekko stopy)", "Ellen Ripley", " umiejętność aktywuje się gdy jesteś zdrowy. Twoje kroki są ciche, a umiejętność wyłącza się na 28/24/20s po zrobieniu szybkiej akcji.");

        //to pisał bkcf (z newsów, nowa postać)
    }
    else if (input == "lithe" || input == "gibkość")
    {
        visual("Lithe.png", "Lithe (Gibkość)", "Feng Min", "Po wykonaniu szybkiego przeskoku przez okno zaczynasz biec z prędkością 150% normalnego biegu przez maksymalnie 3 sekundy. Umiejętność ta wywołuje wyczerpanie na 60/50/40 sekund.");
    }
    else if (input == "low profile" || input == "przyczajenie")
    {
        visual("LowProfile.png", "Low Profile (Przyczajenie)", "Ada Wong", "Umiejętność uaktywnia się, kiedy zostajesz ostatnim żywym ocalałym. Ukrywa ona twoje czerwone zarysowania, ślady krwi oraz jęki bólu na 70/80/90 sekund.");
    }
    else if (input == "lucky break" || input == "łut szczescia")
    {
        visual("LuckyBreak.png", "Lucky Break (Łut Szczęścia)", "Yui Kimura", "Umiejętność aktywuje się za każdym razem kiedy doznasz obrażeń i ukryje twoje czerwone zarysowania oraz plamy krwi na łącznie 40/50/60 sekund. Za każdą sekundę spędzoną na leczeniu innego ocalałego czas trwania umiejętności wydłuża się o sekundę. Czas trwania nie może być większy od wartości początkowej.");
    }
    else if(input == "lucky star" || input == "szczęśliwa gwiazda"){
        visual("LuckyStar.png", "Lucky Star (Szczęśliwa Gwiazda)", "Ellen Ripley", "Po schowaniu się w szafce umiejętność aktywuje się. Nie zostawiasz śladów krwi ani nie wydajesz żadnych odgłosów przez 10s. Po wyjściu z szafki widzisz aury innych ocalałych, najbliższego gena na 10s. Ta umiejętność wymaga 40/35/30s aby ją uruchomić ponownie.");

        //to pisał bkcf (z newsów, nowa postać)
    }
    else if (input == "made for this" || input == "stworzony do tego"){
        visual("MadeforThis.png", "Made for This (Stworzony do Tego)", "Gabriel Soma", "Umiejętność aktywuje się w momencie kiedy zostaniesz ranny. Po uleczeniu innego ocalałego dostajesz efekt wytrzymały na 6/8/10s. (nie zmienione). Podczas efektu głębokie rany biegasz szybciej o 3% (nawet podczas wyczerpania)");
    
        //to pisał gigachad (z newsów, nowa postać)
    }
    else if (input == "mettle of man" || input == "ludzki zapał")
    {
        visual("MettleofMan.png", "Mettle of Man (Ludzki Zapał)", "Ashley 'Ash' Williams", "Umiejętność aktywuje się po przyjęciu 3 uderzeń ochronnych. W momencie kiedy twój stan w skutek obrażeń miałby zmienić się ze stanu rannego do stanu agonii, zostanie to zignorowane i dalej będziesz ranny. Jeśli zostaniesz później w pełni wyleczony, to twoja aura zostanie pokazana zabójcy, jeżeli znajdujesz się od niego dalej niż w zasięgu 12/14/16 metrów.");
    }
    else if (input == "no mither" || input == "bez biadolenia")
    {
        visual("NoMither.png", "No Mither (Bez Biadolenia)", "David King", "Umiejętność wywołuje efekt okaleczenia na cały okres trwania próby. Kiedy używasz tej umiejętności to nie zostawiasz za sobą śladów krwi, jęki w skutek obrażeń są redukowane 0 25/50/75%, a twoje tempo podnoszenia się z ziemi jest zwiększone o 15/20/25% i możesz sam się z niej podnieść.");
    }
    else if (input == "object of obsession" || input == "obiekt obsesji")
    {
        visual("ObjectofObsession.png", "Object of Obsession (Obiekt Obsesji)", "Laurie Strode", "Jeśli zabójca w jakikolwiek sposób zobaczy twoją aurę, to ty również zobaczysz jego aurę oraz otrzymasz bonus w wysokości 2/4/6% do prędkości leczenia, naprawiania generatorów oraz oczyszczania totemów. Jeżeli jesteś obsesją, to co każde 30 sekund razem z zabójcą nawzajem zobaczycie swoje aury na 3 sekundy.");
        
        //gigachad do tąd pisał, a dalej pisze awicki (spóźniony o 1 dzień)
    }
    else if (input == "off the record" || input == "nieoficjalnie" || input == "otr")
    {
        visual("OfftheRecord.png", "Off the Record (Nieoficjalnie)", "Zarina Kassir", "Gdy uciekniesz z haka lub ktoś cię z niego zdejmie, umiejętność Nieoficjalnie aktywuje się na 60/70/80 s. Jednak umiejętność i jej efekty dezaktywują się po włączeniu zasilania bram wyjściowych. Gdy umiejętność Nieoficjalnie jest aktywna: twoja aura nie będzie widoczna dla zabójcy, jęki bólu wywołane obrażeniami zostaną ograniczone o 100%, otrzymujesz efekt Wytrzymałość.");
    }
    else if (input == "open handed" || input == "otwarte karty" || input == "open-handed")
    {
        visual("OpenHanded.png", "Open-Handed (Otwarte Karty)", "Ace Visconti", "Zwiększa możliwości dostrzegania aury przez ciebie i członków twojego zespołu. Zwiększa zasięg umiejętności bazujących na odczytywaniu aur o 8/12/16 m.");
    }
    else if (input == "overcome" || input == "przezwyciężenie")
    {
        visual("Overcome.png", "Overcome (Przezwyciężenie)", "Jonah Vasquez", "Po otrzymaniu obrażeń zachowujesz premię do prędkości poruszania się przez dodatkowe 2. Przezwyciężenie wywołuje efekt Wyczerpany na 60/50/40s Przezwyciężenia nie można używać podczas działania Wyczerpania.");
    }
    else if (input == "overzealous" || input == "nadgorliwość")
    {
        visual("Overzealous.png", "Overzealous (Nadgorliwość)", "Haddie Kaur", "Umiejętność aktywuje się po oczyszczeniu dowolnego totemu. Szybkość naprawy generatora zwiększa się o 8/9/10%. Bonus jest podwajany, jeśli oczyścisz lub pobłogosławisz przeklęty totem. Umiejętność wyłącza się, gdy w jakikolwiek sposób stracisz stan zdrowia.");
    }
    else if (input == "parental guidance" || input == "ojcowskie wskazówki")
    {
        visual("ParentalGuidance.png", "Parental Guidance (Ojcowskie Wskazówki)", "Yoichi Asakawa", "Po ogłuszeniu zabójcy w jakikolwiek sposób twoje czerwone zarysowania, ślady krwi i jęki bólu zostają ukryte na 5/6/7 s.");
    }
    else if (input == "pharmacy" || input == "farmacja")
    {
        visual("Pharmacy.png", "Pharmacy (Farmacja)", "Quentin Smith", "Gdy otrzymasz obrażenia, aktywuje się Farmacja. W tym czasie: otwieranie skrzyń jest 40/60/80% szybsze; zasięg słyszenia dźwięku otwieranych skrzyń jest zmniejszony o 8 metrów. Farmacja zapewnia apteczkę po otworzeniu skrzyni.");
    }
    else if (input == "plot twist" || input == "zwrot akcji"){
        visual("PlotTwist.png", "Plot Twist (Zwrot Akcji)", "Nicolas Cage", "Aktywuje się kiedy jesteś ranny. Naciśnij przycisk umiejętności, aby kucnąć i po cichu wejść w dying state. Po wejściu w stan umierania nie pozostawisz kałuży krwi, oraz nie wydasz żadnego dźwięku, po czym w pełni możesz odzyskać zdrowie. Po uleczeniu się zyskujesz 50% speeda na 2/3/4s. Perk dezaktywuje się kiedy samodzielnie odzyskasz zdrowie w jakikolwiek sposób. Perk zadziała ponownie po zasileniu bram wyjściowych.");

        //to pisała whiten (z newsów, nowa postać)
    }
    else if (input == "poised" || input == "opanowanie")
    {
        visual("Poised.png", "Poised (Opanowanie)", "Jane Romero", "Po ukończeniu naprawy generatora nie pozostawiasz czerwonych zarysowań przez 6/8/10 s.");
    }
    else if (input == "potential energy" || input == "energia potencjalna")
    {
        visual("PotentialEnergy.png", "Potential Energy (Energia Potencjalna)", "Vittorio Toscano", "Po przepracowaniu przy generatorze 12/10/8 sekund bez przerwy, naciśnij przycisk aktywnej umiejętności , aby aktywować tę umiejętność. Kiedy umiejętność jest aktywna, naprawa generatora powoduje jej ładowanie, a nie postęp naprawy generatora. Za każde 1,5% naprawy generatora umiejętność zyskuje 1 żeton – maksymalnie 20. Gdy umiejętność ma przynajmniej jeden żeton i pracujesz nad generatorem, możesz nacisnąć przycisk aktywnej umiejętności , aby zużyć wszystkie żetony i natychmiast zwiększyć postęp generatora o 1% za każdy żeton. Umiejętność wyłączy się. jeśli stracisz stan zdrowia, podczas gdy umiejętność ma żetony (co najmniej 1), żetony przepadną i umiejętność wyłączy się. Chybienie testu umiejętności także spowoduje utratę żetonów.");
    }
    else if (input == "power struggle" || input == "intensywna walka")
    {
        visual("PowerStruggle.png", "Power Struggle (Intensywna Walka)", "Élodie Rakoto", "Gdy jesteś w stanie agonii, widzisz aury dostępnych palet. Kiedy niesie cię zabójca, osiągnięcie 25/20/15% postępu szamotania aktywuje Intensywną Walkę. Gdy Intensywna Walka jest aktywna, możesz przewrócić pobliską paletę, aby ogłuszyć zabójcę.");
    }
    else if (input == "prove thyself" || input == "wykaż się" || input == "prove")
    {
        visual("ProveThyself.png", "Prove Thyself (Wykaż Się)", "Dwight Fairfield", "Za każdego innego ocalałego pracującego przy generatorze w zasięgu 4 m otrzymujesz premię 6/8/10% do szybkości naprawy. Ta sama premia przyznawana jest wszystkim ocalałym w zasięgu.");
        
        //awicki do tąd pisał, a dalej pisze tina
    }
    else if (input == "quick gambit" || input == "szybki gambit")
    {
        visual("QuickGambit.png", "Quick Gambit (Szybki Gambit)", "Vittorio Toscano", "Kiedy zabójca goni cię 24 metry od generatora każdy ocalały naprawia ten generator szybciej o 6/7/8%.");
    }
    else if (input == "quick & quiet" || input == "quick and quiet" || input == "szybko i cicho")
    {
        visual("Quick&Quiet.png", "Quick & Quiet (Szybko i Cicho)", "Meg Thomas", "Raz na 30/25/20 sekund nie wydajesz żadnych dźwięków podczas przeskoku przez okno oraz chowania się w szafce.");
    }
    else if (input == "reactive healing" || input == "reaktywne leczenie")
    {
        visual("ReactiveHealing.png", "Reactive Healing (Reaktywne Leczenie)", "Ada Wong", "Podczas gdy jesteś ranny a ocalały będący 32 metry od ciebie straci stan zdrowia natychmiast dostaniesz 40/45/50% brakującego postępu leczenia.");
    }
    else if (input == "reassurance" || input == "podniesienie na duchu")
    {
        visual("Reassurance.png", "Reassurance (Podniesienie na Duchu)", "Rebecca Chambers", "Gdy jesteś 6 metrów od powieszonego ocalałego możesz użyć przycisku aktywnej umiejętności 2 by wstrzymać fazę walki ocalałego na 20/25/30 sekund.");
    }
    else if (input == "red herring" || input == "fałszywy trop")
    {
        visual("RedHerring.png", "Red Herring (Fałszywy Trop)", "Zarina Kassir", "Naprawiając generator przez conajmniej 3 sekundy zostaje on dla ciebie podświetlony żółtą aurą, Gdy wejdziesz do szafki zabójca dostanie głośne powiadomienie z generatora podświetlonego aurą. Umiejętność można użyć raz na 60/50/40 sekund.");
    }
    else if (input == "repressed alliance" || input == "stłumiony sojusz")
    {
        visual("RepressedAlliance.png", "Repressed Alliance (Stłumiony Sojusz)", "Cheryl Mason", "Gdy będziesz naprawiać generator przez conajmniej 55/50/45 sekund będziesz mógł zablokować go na 30 sekund.");
    }
    else if (input == "residual manifest" || input == "resztkowe ukazanie")
    {
        visual("ResidualManifest.png", "Residual Manifest (Resztkowe Ukazanie)", "Haddie Kaur", "Po oślepieniu zabójcy dostaje on efekt oślepienia na 20/25/30 sekund.");
    }
    else if (input == "resurgence" || input == "odrodzenie")
    {
        visual("Resurgence.png", "Resurgence (Odrodzenie)", "Jill Valentine", "Otrzymujesz 40/45/50 % postępu leczenia po zdjęciu z haka.");
    }
    else if (input == "rookie spirit" || input == "zapał nowicjusza")
    {
        visual("RookieSpirit.png", "Rookie Spirit (Zapał Nowicjusza)", "Leon S. Kennedy", "Po 5/4/3 dobrych testach umiejętności widzisz aury generatorów, którym cofa się postęp naprawy.");
    }
    else if (input == "saboteur" || input == "sabotażysta")
    {
        visual("Saboteur.png", "Saboteur (Sabotażysta)", "Jake Park", "Gdy inny ocalały jest niesiony widzisz aury haków z odległości 56 metrów, haki plagi są oznaczone na kolor żółty. Umiejętność pozwala sabotować haki bez użycia skrzynki z narzędziami co trwa 2.3 sekundy. Sabotarzu można użyć raz na 70/65/60 sekund.");

        //tina do tąd pisała
        //to był 28.04.2023, poniżej jest 29.04.2023
        //to pisze gigachad
    }
    else if(input == "scavenger" || input == "padlinożerca"){
        visual("Scavenger.png", "Scavenger (Padlinożerca)", "Gabriel Soma", "Umiejętność uaktywni się, kiedy w ręce trzymał będziesz zużytą skrzynkę do naprawy. Każdy następny świetnie trafiony test umiejętności spowoduje, że otrzymasz jeden żeton. Maksymalna ilość żetonów to 5. Kiedy zdobędziesz maksymalną ilość żetonów, to automatycznie je wszystkie stracisz, a twoja skrzynka do naprawy odzyska swoje wszystkie ładunki. Następnie przez 40/35/30 sekund twoja prędkość naprawy będzie zredukowana o 50%. Umiejętność ta gwarantuje także możliwość ponownego przeszukania otwartej już skrzyni, z której mamy zagwarantowaną bazową skrzynkę do naprawy.")
    
        //to pisał gigachad (z newsów, nowa postać)
    }
    else if(input == "scene partner" || input == "partner sceniczny"){
        visual("ScenePartner.png", "Scene Partner (Partner Sceniczny)", "Nicolas Cage", "Aktywuje się kiedy jesteś w terrorze killera. Kiedy spojrzysz w stronę killera krzyczysz oraz ujawniasz aurę zabójcy na 3/4/5s. Jest szansa, że możesz krzyknąć ponownie i zobaczyć przeciwnika na dodatkowe 2s. Cooldown: 60s.");
        
        //to pisała whiten (z newsów, nowa postać)
    }
    else if(input == "second wind" || input == "drugi wiatr"){
        visual("SecondWind.png", "Second Wind (Drugi wiatr)", "Steve Harrington", "");

        //to pisał ? (powrót st)
    }
    else if (input == "self care" || input == "samoopatrywanie" || input == "self-care") {
        visual("SelfCare.png", "Self-Care (Samoopatrywanie)", "Claudette Morel", "Zyskujesz możliwość samodzielnego leczenia się bez apteczki z prędkością 25/30/35% normalnego leczenia.");
    }
    else if (input == "self preservation" || input == "instynkt samozachowawczy" || input == "self-preservation") {
        visual("SelfPreservation.png", "Self-Preservation (Instynkt Samozachowawczy)", "Yun-Jin Lee", "Gdy inny ocalały w promieniu 16 metrów od ciebie zostanie trafiony atakiem podstawowym lub specjalnym, to umiejętność aktywuje się, a twoje czerwone zarysowania, ślady krwi i jęki bólu zostaną ukryte na 6/8/10 sekund.");
    }
    else if (input == "smash hit" || input == "przebój") {
        visual("SmashHit.png", "Smash Hit (Przebój)", "Yun-Jin Lee", "Kiedy ogłuszysz zabójcę paletą, rozpoczynasz sprint z prędkością 150% normalnego biegu na maksymalnie 4 sekundy. Umiejętność wywołuje wyczerpanie na 30/25/20 sekund.");
    }
    else if (input == "sole survivor" || input == "ostatnia ocalała") {
        visual("SoleSurvivor.png", "Sole Survivor (Ostatnia Ocalała)", "Laurie Strode", "Za każdym razem, kiedy inny ocalały zostanie zabity lub poświęcony, otrzymujesz żeton. Każdy żeton zapobiega odczytaniu twojej aury przez zabójcę, jeśli znajdujecie się w odległości maksymalnie 20/22/24 metrów od siebie. Jeżeli jesteś ostatnim żywym ocalałym, zyskujesz bonus w wysokości 75% do szybszego naprawiania generatorów oraz bonus w wysokości 50% do szybszego otwierania włazu lub bram wyjściowych.");
    }
    else if (input == "solidarity" || input == "solidarność") {
        visual("Solidarity.png", "Solidarity (Solidarność)", "Jane Romero", "Jeśli jesteś ranny i leczysz innego ocalałego bez użycia apteczki, to leczenie to leczy również ciebie. Współczynnik własnego leczenia wynosi 40/45/50% leczenia innego ocalałego.");
    }
    else if (input == "soul guard" || input == "strażnik duszy") {
        visual("SoulGuard.png", "Soul Guard (Strażnik Duszy)", "Cheryl Mason", "Zyskujesz efekt Wytrzymałość na 4/6/8 sekund po wyleczeniu lub wyjściu ze stanu agonii. Jeżeli nałożona jest na ciebie jakaś klątwa, to możesz w pełni wyleczyć się ze stanu agonii. Umiejętności można użyć raz na 30 sekund.");
    }
    else if (input == "sprint burst" || input == "sprint" || input == "sb") {
        visual("SprintBurst.png", "Sprint Burst (Sprint)", "Meg Thomas", "Kiedy zaczynasz biec, przechodzisz w sprint, otrzymując 150% normalnej prędkości biegu na maksymalnie 3 sekundy. Umiejętność wywołuje wyczerpanie na 60/50/40 sekund.");
    }
    else if (input == "stake out" || input == "nadzór") {
        visual("StakeOut.png", "Stake Out (Nadzór)", "David Tapp", "Za każde 15 sekund spędzone w zasięgu terroru zabójcy, nie będąc w pościgu, otrzymujesz jeden żeton, aż do maksymalnie 2/3/4 żetonów. Jeżeli masz przynajmniej jeden żeton, dobre testy umiejętności podczas naprawiania generatora są traktowane jako świetne, zabierają jeden żeton oraz dają dodatkowy 1% do postępu naprawy generatora.");
    }
    else if (input == "streetwise" || input == "wiedza uliczna") {
        visual("Streetwise.png", "Streetwise (Wiedza Uliczna)", "Nea Karlsson", "Szybkość zużywania przedmiotów przez ciebie i innych ocalałych w zasięgu 8 metrów zmniejsza się o 15/20/25%. Po wyjściu z zasięgu działania umiejętności efekt utrzymuje się przez 15 sekund.");
    }
    else if (input == "teamwork: collective stealth" || input == "praca zespołowa: wspólne skradanie" || input == "collective stealth" || input == "wspólne skradanie") {
        visual("TeamworkCollectiveStealth.png", "Teamwork: Collective Stealth (Praca Zespołowa: Wspólne Skradanie)", "Renato Lyra", "Jeśli inny ocalały cię uleczy, to razem z tym ocalałem nie będziecie pozostawiali żadnych czerwonych zarysowań, dopóki pozostaniecie w odległości maksymalnie 12 metrów od siebie. Umiejętności można użyć raz na 180/160/140 sekund.");
    }
    else if (input == "teamwork: power of two" || input == "praca zespołowa: moc dwójki" || input == "power of two" || input == "moc dwójki") {
        visual("TeamworkPowerofTwo.png", "Teamwork: Power of Two (Praca Zespołowa: Moc Dwójki)", "Thalita Lyra", "Kiedy wyleczysz innego ocalałego, obaj zaczniecie poruszać się o 5% szybciej, dopóki pozostaniecie w zasięgu 12 metrów od siebie lub dopóki jeden z was nie straci stanu zdrowia. Umiejętność tą można aktywować tylko raz na 180/160/140 sekund.");

        //gigachad do tąd pisał, a dalej pisze awicki
    }
    else if (input == "technician" || input == "technik") {
        visual("Technician.png", "Technician (Technik)", "Feng Min", "Zasięg słyszalności dźwięków wydawanych przy naprawianiu generatora jest zmniejszony o 8 m. Nieudany test umiejętności skutkuje następującymi efektami: Generator nie wybuchnie. Generator jak zwykle straci postęp naprawy. Utracone zostanie dodatkowe 5/4/3% stanu naprawy.");
    }
    else if (input == "tenacity" || input == "wytrwałość") {
        visual("Tenacity.png", "Tenacity (Wytrwałość)", "David Tapp", "W beznadziejnych sytuacjach twoja nadludzka wytrwałość sprawia, że czołgasz się o 30/40/50% szybciej. Możesz się jednocześnie regenerować. Jęki bólu w stanie agonii są ograniczone o 75%");
    }
    else if (input == "troubleshooter" || input == "rozwiązywanie problemów"){
        visual("Troubleshooter.png", "Troubleshooter (Rozwiązywanie Problemów)", "Gabriel Soma", "W momencie, kiedy zaczniesz pościg z zabójcą, umiejętność ta aktywuje się. Podczas działania umiejętności będziesz mógł zobaczyć aurę generatora z największą wartością postępu naprawy oraz aurę zabójcy przez 4/5/6 sekund po zrzuceniu jakiejkolwiek palety. Efekty działania umiejętności będą utrzymywały się jeszcze przez 6/8/10 sekund po zakończeniu pościgu.")
    
        //to pisał gigachad (z newsów, nowa postać)
    }
    else if (input == "unbreakable" || input == "niezłomność" || input == "dziadek" || input == "ub") {
        visual("Unbreakable.png", "Unbreakable (Niezłomność)", "William 'Bill' Overbeck", "Odblokowuje możliwość samodzielnego wyleczenia się ze stanu agonii, lecz jest to możliwe tylko raz na próbę. Zwiększa tempo regeneracji o 25/30/35%.");
    }
    else if (input == "up the ante" || input == "podnieść stawkę") {
        visual("UptheAnte.png", "Up the Ante (Podnieść Stawkę)", "Ace Visconti", "Za każdego ocalałego, który pozostaje przy życiu, umiejętność zapewnia premię w postaci 1/2/3% dodatkowego szczęścia dla wszystkich ocalałych.");
    }
    else if (input == "urban evasion" || input == "skrytość") {
        visual("UrbanEvasion.png", "Urban Evasion (Skrytość)", "Nea Karlsson", "Twoja prędkość skradania się jest zwiększona o 90/95/100%.");
    }
    else if (input == "vigil" || input == "czuwanie") {
        visual("Vigil.png", "Vigil (Czuwanie)", "Quentin Smith", "Ty i znajdujący się w promieniu 8 m sojusznicy wychodzicie z efektów Oślepienie, Okaleczony, Wyczerpanie, Narażony, Krwotok, Skrępowany i Nieświadomy o 20/25/30% szybciej. Poza zasięgiem ten efekt utrzymuje się przez 15 s.");
    }
    else if (input == "visionary" || input == "wizjoner") {
        visual("Visionary.png", "Visionary (Wizjoner)", "Feliks Richter", "Widzisz aurę generatora w promieniu 32 m od siebie. Gdy generator zostanie ukończony, umiejętność Wizjoner jest niedostępna przez 20/18/16 s.");
    }
    else if (input == "wake up!" || input == "pobudka!") {
        visual("WakeUp.png", "Wake Up! (Pobudka!)", "Quentin Smith", "Gdy zostaną uruchomione wszystkie wymagane generatory, zobaczysz bramy wyjściowe w zasięgu 128 m. Gdy przystąpisz do otwierania bramy, inni ocalali w odległości do 128 m zobaczą twoją aurę. Gdy umiejętność Pobudka! jest aktywna, otwierasz bramy wyjściowe o 15/20/25% szybciej.");
    }
    else if (input == "we're gonna live forever" || input == "będziemy żyć wiecznie") {
        visual("We'reGonnaLiveForever.png", "We're Gonna Live Forever (Będziemy Żyć Wiecznie)", "David King", "Gdy leczysz innego ocalałego w stanie agonii, prędkość twojego działania jest zwiększona o 100%. Oprócz tego wykonywanie dowolnej z następujących czynności aktywuje dodatkową funkcję tej umiejętności: Wykonaj bezpieczne zdjęcie z haka Przyjmij uderzenie, aby bronić ocalałego Uratuj ocalałego, ogłuszając zabójcę paletą Uratuj ocalałego, oślepiając zabójcę latarką Gdy dodatkowa funkcja tej umiejętności jest aktywna, leczenie innego ocalałego ze stanu agonii daje mu Wytrzymałość na 6/8/10 s i wyłącza dodatkową funkcję.");
    }
    else if (input == "windows of opportunity" || input == "ostatnia szansa" || input == "windows") {
        visual("WindowsofOpportunity.png", "Windows of Opportunity (Ostatnia Szansa)", "Kate Denson", "Dostrzegasz aury palet, ścian i miejsc przeskoków znajdujących się w zasięgu 24/28/32 m od ciebie.");

        //awicki do tąd pisał, a dalej pisze tina
    }
    else if (input == "wiretap" || input == "podsłuch") {
        visual("Wiretap.png", "Wiretap (Podsłuch)", "Ada Wong", "Umiejętność aktywuje się po zrobieniu 50% generatora. Po 3% naprawy generatora nacisnij przycisk aktywnej umiejętności by zamontować podsłuch na 100/110/120 sekund.Gdy podsłuch jest aktywny każdy ocalały widzi aure zabójcy 14 metrów od generatora. Gdy zabójca uszkodzi generator podłuch się dezaktywuje.");
    }
    else if (input == "a nurse's calling" || input == "wezwanie pielęgniarki") {
        visual("ANurse'sCalling.png", "A Nurse's Calling (Wezwanie Pielęgniarki)", "Nurse", "Widzisz aury ocalałych, którzy się leczą 20/24/28 metrów od ciebie.");
    }
    else if (input == "agitation" || input == "ekscytacja") {
        visual("Agitation.png", "Agitation (Ekscytacja)", "Traper", "Gdy nosisz ocalałego twoja prędkość chodzenia jest o 6/12/18% większa, oraz twój zasięg terroru wzrasta o 12 metrów.");
    }
    else if(input == "alien instinct" || input == "instynkt obcego"){
        visual("AlienInstinct.png", "Alien Instinct (Instynkt Obcego)", "Xenomorph", "Po powieszeniu ocalałego widzisz aurę najdalszego rannego ocalałego na 5 sekund, a ten ocalały dostaje efekt nieświadomy na 16/18/20s");

        //to pisał bkcf (z newsów, nowa postać)
    }
    else if (input == "awakened awareness" || input == "przebudzona świadomość") {
        visual("AwakenedAwareness.png", "Awakened Awareness (Przebudzona Świadomośc)", "Mastermind", "Gdy niesiesz ocalałego widzisz aure innych ocalałych 16/18/20 metrów od ciebie.");
    }
    else if (input == "bamboozle" || input == "kpina") {
        visual("Bamboozle.png", "Bamboozle (Kpina)", "Clown", "Przechodzisz przez okna o 5/10/15% szybciej, dodatkowo gdy przejdziesz przez okno blokuje się ono na 8/12/16 sekund.");
    }
    else if (input == "barbecue & chilli" || input == "barbecue and chilli" || input == "barbecue i chilli" || input == "barba" || input == "bbq") {
        visual("Barbecue&Chilli.png", "Barbecue & Chilli (Barbecue i Chilli)", "Cannibal", "Po powieszeniu ocalałego aury ocalałych w odległości większej niż 60/50/40 metrów od ciebie są dla ciebie widoczne na 4 sekundy.");
    }
    else if (input == "beast of prey" || input == "drapieżna bestia") {
        visual("BeastofPrey.png", "Beast of Prey (Drapieżna Bestia)", "Huntress", "Zyskujesz o 30/40/50% więcej punktów krwi za działania w kategorii łowca oraz dostajesz efekt niewykrywalny po osiągnięciu 1 poziomu żądzy krwi.");
    }
    else if (input == "blood echo" || input == "krwawe echo") {
        visual("BloodEcho.png", "Blood Echo (Krwawe Echo)", "Oni", "Po powieszeniu ocalałego wszyscy inni ranni ocalali dostają efekt krwawienia oraz wyczerpania na 45 sekund. Umiejętność odnawia się w 80/70/60 sekund.");
    }
    else if (input == "blood warden" || input == "krwawy strażnik") {
        visual("BloodWarden.png", "Blood Warden (Krwawy Strażnik)", "Nightmare", "Widzisz aury ocalałych w bramie. Gdy dowolna brama wyjściowa jest otwarta a ty powiesisz ocalałego umięjetnośc aktywuje się na 30/40/60 sekund a ocalali nie mogą ucieć bramami wyjściowymi.");
    }
    else if (input == "bloodhound" || input == "pies gończy") {
        visual("Bloodhound.png", "Bloodhound (Pies Gończy)", "Wraith", "Ślady krwi stają się łatwiejsze do zauważenia oraz zostają na ziemi 2/3/4 sekundy dłużej.");

        //tina do tąd pisała
        //to był 29.04.2023, poniżej jest 30.04.2023
        //to pisze gigachad
    }
    else if (input == "brutal strength" || input == "brutalna siła") {
        visual("BrutalStrength.png", "Brutal Strength (Brutalna Siła)", "Traper", "Niszczysz zrzucone palety, ściany oraz uszkadzasz generatory o 10/15/20% szybciej.");
    }
    else if (input == "call of brine" || input == "zew wody" || input == "cob") {
        visual("CallofBrine.png", "Call of Brine (Zew Wody)", "Onryo", "Po uszkodzeniu generatora umiejętność staje się aktywna na 60 sekund. W czasie działania umiejętności postęp cofania się generatora jest równy 115/120/125%, normalnej prędkości cofania, a aura samego generatora zostaje ci ujawniona. Dodatkowo, dostaniesz głośne powiadomienie dźwiękowe za każdym razem, kiedy ocalały trafi świetny test umiejętności na generatorze objętym działaniem umiejętności.");
    }
    else if (input == "corrupt intervention" || input == "skażona interwencja") {
        visual("CorruptIntervention.png", "Corrupt Intervention (Skażona Interwencja)", "Plague", "Od początku próby, 3 generatory znajdujące się najdalej od ciebie zostają zablokowane na 80/100/120 sekund. Umiejętność wyłączy się przed czasem, jeżeli wprowadzimy jakiegokolwiek ocalałego w stan agonii.");
    }
    else if (input == "coulrophobia" || input == "koulrofobia" || input == "klaunofobia") {
        visual("Coulrophobia.png", "Coulrophobia (Koulrofobia)", "Clown", "Ocalali w zasięgu twojego terroru otrzymują karę o wysokości 30/40/50% do szybkości postępu leczenia, a testy umiejętności leczenia są o 50% szybsze.");
    }
    else if (input == "coup de grace" || input == "cios łaski" || input == "coup de grâce") {
        visual("CoupdeGrace.png", "Coup de Grâce (Cios Łaski)", "Twins", "Kiedy jakikolwiek generator zostanie naprawiony, otrzymujesz dwa żeton do maksymalnie 5. Następny podstawowy atak będzie mógł mieć zwiększony zasięg o 70/75/80% oraz zużyje się jeden żeton.");
    }
    else if (input == "dark devotion" || input == "mroczne oddanie") {
        visual("DarkDevotion.png", "Dark Devotion (Mroczne Oddanie)", "Plague", "eśli twoja obsesja zostanie zraniona, twój terror przenosi się na nią na 20/25/30 sekund, przez co słychać to będzie tak jakby to ona była zabójcą, zasięg jej terroru będzie wynosił wtedy 32 metry, a ty zyskasz status Niewykrywalny na ten sam okres czasu.");
    }
    else if (input == "darkness revealed" || input == "ujawnienie ciemności") {
        visual("DarknessRevealed.png", "Darkness Revealed (Ujawnienie Ciemności)", "Dredge", "Kiedy otworzysz szafkę, aury wszystkich ocalałych w promieniu 8 metrów od jakiejkolwiek szafki na mapie zostaną ci ujawnione na 3/4/5 sekund. Umiejętności można użyć raz na 30 sekund.");
    }
    else if (input == "dead man's switch" || input == "czuwak") {
        visual("DeadMan'sSwitch.png", "Dead Man's Switch (Czuwak)", "Deathslinger", "Po powieszeniu ocalałego umiejętność aktywuje się na 20/25/30 sekund. Jeśli podczas działania umiejętności jakikolwiek inny ocalały przestanie pracować nad generatorem, to generator ten zablokuje się do końca czasu działania umiejętności.");
    }
    else if (input == "deadlock" || input == "zakleszczenie") {
        visual("Deadlock.png", "Deadlock (Zakleszczenie)", "Cenobite", "Gdy generator zostanie naprawiony, to inny generator z największa ilością postępu naprawy zostanie zablokowany na 20/25/30 sekund.");
    }
    else if (input == "deathbound" || input == "skazany na śmierć") {
        visual("Deathbound.png", "Deathbound (Skazany na Śmierć)", "Executioner", "Jeżeli ocalały wyleczy innego ocalałego o jeden stan zdrowia w odległości większej niż 32 metry od ciebie, to ocalały ten krzyknie i stworzy głośne powiadomienie dźwiękowe. Na następne 60 sekund ocalały ten zyska także efekt Nieświadomy za każdym razem, kiedy będzie dalej niż 16/12/8 metrów od wyleczonego ocalałego.");

        //gigachad do tąd pisał, a dalej pisze awicki
    }
    else if (input == "dissolution" || input == "rozpad") {
        visual("Dissolution.png", "Dissolution (Rozpad)", "Dredge", "Gdy ranisz ocalałego w dowolny sposób, Rozpad aktywuje się na 12/16/20 s. Gdy Rozpad jest aktywny, a ocalały przeskoczy szybko przez paletę w twoim zasięgu terroru, Byt zniszczy tę paletę na koniec skoku");
    }
    else if (input == "discordance" || input == "dysonans") {
        visual("Discordance.png", "Discordance (Dysonans)", "Legion", "Każdy generator w promieniu 64/96/128 m naprawiany przez dwóch lub więcej ocalałych zostaje oznaczony żółtą aurą. Gdy generator zostanie podświetlony po raz pierwszy, Dysonans uruchamia głośne powiadomienie przy generatorze. Gdy generator znajdzie się poza zasięgiem lub przestanie być naprawiany przez co najmniej dwóch ocalałych, aura pozostaje widoczna przez kolejne 4 sekundy.");
    }
    else if (input == "dragon's grip" || input == "uścisk smoka") {
        visual("Dragon'sGrip.png", "Dragon's Grip (Uścisk Smoka)", "Blight", "Po uszkodzeniu generatora pierwszy ocalały, który wejdzie z nim w interakcję w trakcie kolejnych 30 s krzyknie, ujawni swoją lokalizację na 4 s i otrzyma efekt Narażony na 60 s. Uścisk Smoka odnawia się 120/100/80 s.");
    }
    else if (input == "dying light" || input == "umierające światło") {
        visual("DyingLight.png", "Dying Light (Umierające Światło)", "Shape", "Twoja obsesja otrzymuje premię 33% do szybkości czynności przy zdejmowaniu z haka i leczeniu innych ocalałych. Za każdym razem, kiedy powiesisz ocalałego innego niż twoja obsesja, otrzymasz żeton. Jeśli obsesja żyje, każdy inny ocalały otrzymuje 2/2.5/3% kary do szybkości naprawy, leczenia i sabotażu za każdy żeton.");
    }
    else if (input == "enduring" || input == "wytrzymały") {
        visual("Enduring.png", "Enduring (Wytrzymały)", "Hillbilly", "Oszołomienie powodowane przez palety jest o 40/45/50% krótsze. Nie działa, gdy niesiesz ocalałego.");
    }
    else if (input == "eruption" || input == "erupcja") {
        visual("Eruption.png", "Eruption (Erupcja)", "Nemesis", "Po uszkodzeniu generatora jego aura podświetla się na żółto. Zawsze gdy wprowadzisz ocalałego w stan agonii, każdy naruszony generator wybucha, a jego stan spada o 10% bieżącego postępu naprawy i zaczyna się cofać. Ocalały naprawiający generator w momencie wybuchu krzyknie i ujawni swoją aurę na 8/10/12 s.");
    }
    else if (input == "fire up" || input == "paląca potrzeba") {
        visual("FireUp.png", "Fire Up (Paląca Potrzeba)", "Nightmare", "Za każdy ukończony generator otrzymujesz kumulatywny bonus 3/3.5/4% do prędkości podnoszenia, zrzucania, przeskakiwania oraz niszczenia generatorów, palet i ścian do końca próby.");
    }
    else if (input == "forced hesitation" || input == "wymuszone wahanie"){
        visual("ForcedHesitation.png", "Forced Hesitation (Wymuszone Wahanie)", "Singularity", "W momencie powalenia ocalałego w jakikolwiek sposób, wszyscy pozostali ocalali w zasięgu 16 metrów od powalonego otrzymają efekt Skrępowany na 10 sekund, który spowolni ich o 20%. Umiejętności można użyć tylko raz na 40/35/30 sekund.");

        //to pisał gigachad (z newsów, nowa postać)
    }
    else if (input == "forced penance" || input == "wymuszona pokuta") {
        visual("ForcedPenance.png", "Forced Penance (Wymuszona Pokuta)", "Executioner", "Ocalali, którzy przyjmą uderzenie ochronne, otrzymają efekt Okaleczony na 60/70/80 s.");
    }
    else if (input == "franklin's demise" || input == "zguba franklina" || input == "franklin") {
        visual("Franklin'sDemise.png", "Franklin's Demise (Zguba Franklina)", "Cannibal", "Twoje podstawowe ataki sprawiają, że ocalali upuszczają trzymane przedmioty. Przedmiot leżący na ziemi traci wszystkie ładunki po 150/120/90 s, jeśli nie zostanie podniesiony. Oznacz białą aurą przedmioty na ziemi w odległości 32 m. Aura powoli zmienia kolor na czerwony, dopóki przedmiot nie straci wszystkich ładunków.");
    }
    else if (input == "furtive chase" || input == "tajemny pościg") {
        visual("FurtiveChase.png", "Furtive Chase (Tajemny Pościg)", "Ghost Face", "Po powieszeniu obsesji zabójca porusza się 5% szybciej i otrzymuje efekt niewykrywalny na 14/16/18 sekund. Gdy ocalały ratuje obsesję z haka, sam staje się obsesją.");

        //to pisał wpserek (z newsów, zmiana perków)

        //awicki do tąd pisał, a dalej pisze tina
    }
    else if (input == "game afoot" || input == "gra w toku") {
        visual("GameAfoot.png", "Game Afoot (Gra w Toku)", "Skull Merchant", "Umiejętność aktywuje się podczas gonienia obsesji, niszczenie ścian, palet i uszkadzanie generatorów daje 5% pośpiechu na 8/9/10 sekund.");
    }
    else if (input == "gearhead" || input == "maniak techniki") {
        visual("Gearhead.png", "Gearhead (Maniak Techniki)", "Deathslinger", "Gdy ocalały straci stan zdrowia umiejętność się aktywuje na 30 sekund. Gdy umiejętność jest aktywna i dowolny ocalały wykona test umięjetności w trakcie naprawy generatora jego aura zostanie ci ujawniona na 6/7/8 sekund.");
    }
    else if (input == "genetic limits" || input == "ograniczenia genetyczne"){
        visual("GeneticLimits.png", "Genetic Limits (Ograniczenia Genetyczne)", "Singularity", "Kiedy ocalały ukończy jakąkolwiek akcję leczenia, otrzyma on efekt Wyczerpania na 24/28/32 sekundy.")

        //to pisał gigachad (z newsów, nowa postać)
    }
    else if (input == "grim embrace" || input == "ponure objęcia") {
        visual("GrimEmbrace.png", "Grim Embrace (Ponure Objęcia)", "Artist", "Gdy powiesisz ocalałego na hak po raz pierwszy dostajesz żeton, gdy uzbierasz ich 4, generatory zablokują się na 30/35/40 sekund oraz pokaże ci aurę obsesji na 5 sekund.");
    }
    else if (input == "hex: blood favour" || input== "klątwa: łaska krwi" || input == "blood favour" || input == "łaska krwi") {
        visual("HexBloodFavour.png", "Hex: Blood Favour (Klątwa: Łaska Krwi)", "Blight", "Gdy zranisz ocalałego wszystkie okna i palety zostaną zablokowane na 15 sekund w promieniu 24/28/32 metrów.");
    }
    else if (input == "hex: crowd control" || input == "klątwa: panowanie nad tłumem" || input == "crowd control" || input == "panowanie nad tłumem") {
        visual("HexCrowdControl.png", "Hex: Crowd Control (Klątwa: Panowanie nad Tłumem)", "Trickster", "Jeśli ocalały wykona szybki przeskok przez okno, to zablokuje je na kolejne 40/50/60 sekund. Efekt ten działa tylko wtedy, kiedy klątwa jest aktywna.");

        //to pisał gigachad (ja pominąłem)
    }
    else if (input == "hex: devour hope" || input == "klątwa: pożeracz nadziei" || input == "devour hope" || input == "pożeracz nadziei" || input == "devour") {
        visual("HexDevourHope.png", "Hex: Devour Hope (Klątwa: Pożeracz Nadziei)", "Hag", "Kiedy ocalały zostaje zdjęty z haka dalej od zabójcy jak 24 metry zabójca dostaje żeton. Przy 2 żetonach zabójca po 10 sekundach od zdjęcia z haka otrzymuje efekt 3/4/5% pośpiechu do prędkości ruchu Przy 3 żetonach każdy ocalały otrzymuje efekt narażony Przy 5 żetonach zabójca otrzymuje możliwość zabicia ocalałego nie ważne ile ten razy wisiał na haku");

        //to pisał rafau (ja pominąłem)
    }
    else if (input == "hex: face the darkness" || input == "klątwa: staw czoła ciemnosci" || input == "face the darkness" || input == "staw czoła ciemnosci") {
        visual("HexFacetheDarkness.png", "Hex: Face the Darkness (Klątwa: Staw Czoła Ciemności)", "Knight", "Gdy ocalały straci stan zdrowia klątwa aktywuje się. Gdy klątwa jest aktywna wszyscy ocalali poza twoim zasięgiem terroru zaczną krzyczeć co 35/30/25 sekund oraz ujawnią swoją aure na 2 sekundy.");
    }
    else if (input == "hex: haunted ground" || input == "klątwa: nawiedzona ziemia" || input == "haunted ground" || input == "nawiedzona ziemia" || input == "haunted") {
        visual("HexHauntedGround.png", "Hex: Haunted Ground (Klątwa: Nawiedzona Ziemia)", "Spirit", "Na mapie pojawiają się 2 przeklęte totemy, gdy ocalały zniszczy jeden z totemów każdy z ocalałych dostanie efekt narażenia na 40/50/60 sekund.");
    }
    else if (input == "hex: huntress lullaby" || input == "klątwa: kołysanka łowczyni" || input == "huntress lullaby" || input == "kołysanka łowczyni" || input == "lullaby" || input == "kołysanka") {
        visual("HexHuntressLullaby.png", "Hex: Huntress Lullaby (Klątwa: Kołysanka Łowczyni)", "Huntress", "Za każdym razem gdy dowolny ocalały nie trafi testu umiejętności traci dodatkowe 2/4/6% naprawy lub postępu leczenia. Gdy powiesisz ocalałego na haku dostajesz żeton. od 1 do 4 żetonów czas pomiędzy pojawieniem się ostrzeżenia a testem umiejętności jest skrócony. 5 żetonów nie ma w ogóle ostrzeżenia.");

        //tina do tąd pisał, a dalej pisze rafau
    }
    else if (input == "hex: pentimento" || input == "klatwa: pentimento" || input == "pentimento") {
        visual("HexPentimento.png", "Hex: Pentimento (Klątwa: Pentimento)", "Artist", "Każdy oczyszczony totem może zostać raz wskrzeszony wtedy zostaje na niego nałożona klątwa pentimento: 1 wskrzeszony totem wydłuża czas naprawy generatorów o 20/25/30%, 2 wydłużają czas leczenia o 20/25/30%, 3 wydłużają czas podnoszenia ocalałych w stanie agonii o 20/25/30%, 4 wydłużają czas otwierania bram o 20/25/30%, 5 powodują zablokowanie wszystkich totemów przez byt");
    }
    else if (input == "hex: plaything" || input == "klątwa: igraszka" || input == "plaything" || input == "igraszka") {
        visual("HexPlaything.png", "Hex: Plaything (Klątwa: Igraszka)", "Cenobite", "Gdy ocalały jest wieszany na haku poraz pierwszy dowolny czysty totem staje się przeklęty i jest możliwy do zniszczenia przez pierwsze 90s tylko dla osoby powieszonej. Do czasu zniszczenia totemu osoba nim dotknięta dostaje efekt nieświadomy. Aura totemu jest widziana przez osobe przeklętą z  24/20/16m.");
    }
    else if (input == "hex: retribution" || input == "klątwa: odwet" || input == "retribution" || input == "odwet") {
        visual("HexRetribution.png", "Hex: Retribution (Klątwa: Odwet)", "Deathslinger", "Osoba która oczyściła lub pobłogosławiła dowolny totem otrzymuje efekt nieświadomy na 35/40/45s. Gdy tym totemem będzie klątwa aura każdego ocalałego jest ukazana  na 15s.");
    }
    else if (input == "hex: ruin" || input == "klątwa: ruina" || input == "ruin" || input == "ruina") {
        visual("HexRuin.png", "Hex: Ruin (Klątwa: Ruina)", "Hag", "Każdy nienaprawiany generator jest automatycznie poddany regresowi z prędkością 50/75/100%. Kiedy ocalały zgninie z dowolnych przyczyn przeklęty totem zmienia się w czysty");
    }
    else if (input == "hex: the third seal" || input == "klątwa: trzecia pieczęć" || input == "third seal" || input == "trzecia pieczęć" || input == "the third seal") {
        visual("HexTheThirdSeal.png", "Hex: The Third Seal (Klątwa: Trzecia Pieczęć)", "Hag", "Ostatni 2/3/4 ocalali zaatakowani podstawowym atakiem otrzymuje efekt ślepoty.");
    }
    else if (input == "hex: undying" || input == "klątwa: nieumarły" || input == "undying" || input == "nieumarły") {
        visual("HexUndying.png", "Hex: Undying (Klątwa: Nieumarły)", "Blight", "Dostrzegasz aury ocalałych którzy zbliżają się do totemu na 2m przez 4/5/6s. Kiedy inna klątwa zostaje oczyszczona zastępuje ona nieumarłego.");
    }
    else if (input == "hoarder" || input == "zbieracz") {
        visual("Hoarder.png", "Hoarder (Zbieracz)", "Twins", "Dostajesz głośne powiadomienie na 4 sekundy gdy ocalały podnosi przedmiot lub otwiera skrzynie w promieniu 32/48/64m od ciebie.");
    }
    else if (input == "hubris" || input == "pycha") {
        visual("Hubris.png", "Hubris (Pycha)", "Knight", "Ocalały, który cię ogłusza otrzymuje efekt narażony na 10/15/20s. Hubris odnawia się przez 20s.");
    }
    else if (input == "hysteria" || input == "histeria") {
        visual("Hysteria.png", "Hysteria (Histeria)", "Nemesis", "Ocalali, którzy zostali zranieni otrzymują efekt nieświadomy na 20/25/30s. Hysteria odnawia się 30s.");
    }
    else if (input == "i'm all ears" || input == "zamieniam się w słuch" || input == "im all ears") {
        visual("I'mAllEars.png", "I'm All Ears (Zamieniam Się w Słuch)", "Ghost Face", "Ujawniona ci jest aura ocalałych wykonujących szybkie akcje w promieniu 48m na 6s. I'm all ears odnawia się 40/50/60s.");

        //rafau do tąd pisał
        //to był 30.04.2023, poniżej jest 01.05.2023
        //to pisze gigachad
    }
    else if (input == "infectious fright" || input == "zaraźliwy strach") {
        visual("InfectiousFright.png", "Infectious Fright (Zaraźliwy Strach)", "Plague", "W momencie wprowadzenia ocalałego w stan agonii, wszyscy inni ocalali, którzy znajdują się w zasięgu twojego terroru krzykną i ujawnią swoją lokalizacje na 4/5/6 sekund.");
    }
    else if (input == "iron maiden" || input == "żelazna dziewica") {
        visual("IronMaiden.png", "Iron Maiden (Żelazna Dziewica)", "Legion", "Otwierasz szafki szybciej o 30/40/50%. Każdy ocalały, który wyjdzie z jakiejkolwiek szafki na mapie krzyknie ujawniając swoją lokalizacje na 4 sekundy i otrzyma efekt narażony na 30 sekund.");
    }
    else if (input == "knock out" || input == "nokaut") {
        visual("KnockOut.png", "Knock Out (Nokaut)", "Cannibal", "Ocalali wprowadzeni w stan agonii twoimi podstawowymi atakami nie zostaną pokazani innym ocalałym, jeśli są oni w odległości większej niż 32/24/16 metrów. Na 15 sekund od momentu powalenia ocalali otrzymują efekt oślepienia, czołgają się o 50% wolniej, a ich prędkość podnoszenia się jest zmniejszona o 25%.");
    }
    else if (input == "lethal pursuer" || input == "śmiertelny pościg" || input == "lethal") {
        visual("LethalPursuer.png", "Lethal Pursuer (Śmiertelny Pościg)", "Nemesis", "Na początku próby aury wszystkich ocalałych zostaną ci ujawnione na 7/8/9 sekund. Za każdym razem, gdy aura ocalałego jest dla ciebie widoczna, okres czasu jej pokazywania wydłuża się o 2 sekundy.");
    }
    else if (input == "leverage" || input == "przewaga") {
        visual("Leverage.png", "Leverage (Przewaga)", "Skull Merchant", "Za każdym razem, kiedy powiesisz ocalałego, otrzymujesz jeden żeton, których możesz mieć maksymalnie dziesięć. Z pierwszym i każdym następnym powieszeniem umiejętność aktywuje się na 30 sekund. Każdy żeton zmniejsza szybkość leczenia się ocalałych o kolejne 3/4/5%.");
    }
    else if (input == "lightborn" || input == "zrodzony w świetle") {
        visual("Lightborn.png", "Lightborn (Zrodzony w Świetle)", "Hillbilly", "Otrzymujesz odporność na oślepienie spowodowane latarkami, petardami, granatami błyskowymi i minami, a aury ocalałych, którzy próbują cię oślepić zostaną ci ujawnione na 6/8/10 sekund.");
    }
    else if (input == "machine learning" || input == "uczenie maszynowe"){
        visual("MachineLearning.png", "Machine Learning (Uczenie Maszynowe)", "Singularity", "Kiedy uszkodzisz jakikolwiek generator, umiejętność ta aktywuje się. Następne uszkodzenia innego generatora spowoduje, że aura uszkadzanego generatora zostanie podświetlona na kolor żółty, dopóki nie zostanie on naprawiony. Kiedy podświetlony na żółto generator zostanie ukończony, otrzymasz status Niewykrywalny oraz efekt Pośpiechu o wartości 10% na 20/25/30 sekund. Po tym czasie umiejętność dezaktywuje się. Jeśli uszkodzisz inny generator niż ten, który jest aktualnie oznaczony na żółto, to umiejętność ta przeniesie się na ostatnio kopnięty generator.")
    
        //to pisał gigachad (z newsów, nowa postać)
    }
    else if (input == "mad grit" || input == "twardy charakter") {
        visual("MadGrit.png", "Mad Grit (Twardy Charakter)", "Legion", "Niosąc ocalałego, nie otrzymujesz kary w postaci czasu odnawiania po niecelnym podstawowym ataku. Jeżeli trafisz kogoś niosąc ocalałego na plecach, to pasek szamotania ocalałego zatrzyma się na 2/3/4 sekundy.");
    }
    else if (input == "make your choice" || input == "dokonaj wyboru") {
        visual("MakeYourChoice.png", "Make Your Choice (Dokonaj Wyboru)", "Pig", " Kiedy ocalały uratuje innego ocalałego z haka w odległości co najmniej 32 metrów od ciebie, umiejętność zmusi ratującego do krzyku i nałoży na niego efekt narażony. Efekt trwa przez 40/50/60 sekund, a sama umiejętność odnawia się przez 40/50/60 sekund.");
    }
    else if (input == "merciless storm" || input == "bezlitosny sztorm") {
        visual("MercilessStorm.png", "Merciless Storm (Bezlitosny Sztorm)", "Onryo", "Kiedy generator osiągnie 90% postępu naprawy, pracujący przy nim ocalali będą musieli nieustannie wykonywać testy umiejętności. Jeśli nie trafią jakiegokolwiek testu lub przerwą naprawę, generator zostanie zablokowany na 16/18/20 sekund.");
    }
    else if (input == "monitor & abuse" || input == "monitor and abuse" || input == "bestialska obserwacja" || input == "monitor") {
        visual("Monitor&Abuse.png", "Monitor & Abuse (Bestialska Obserwacja)", "Doctor", "Kiedy jesteś w pościgu, twój zasięg terroru jest zwiększony o 8 metrów, a gdy nie jesteś w pościgu, twój zasięg terroru zmniejsza się o 8 metrów, a twoje pole widzenia zwiększa się o 3/5/10°.");

        //gigachad do tąd pisał, a dalej pisze awicki
    }
    else if (input == "nemesis" || input == "nemezis") {
        visual("Nemesis.png", "Nemesis (Nemezis)", "Oni", "Ocalały, który cię oślepi lub ogłuszy paletą bądź szafką, staje się twoją obsesją.Za każdym razem, gdy nowy ocalały zostaje obsesją, otrzymuje efekt Nieświadomy na 40/50/60 s, a jego aura staje się dla ciebie widoczna na 4 s.");
    }
    else if (input == "no way out" || input == "bez wyjścia") {
        visual("NoWayOut.png", "No Way Out (Bez Wyjścia)", "Trickster", "Po pierwszym powieszeniu ocalałego na haku umiejętność Bez Wyjścia otrzymuje żeton. Po zasileniu bram wyjściowych Bez Wyjścia aktywuje się. Gdy ocalały używa przełącznika bramy wyjściowej, otrzymujesz głośne powiadomienie dźwiękowe. Byt blokuje oba przełączniki bramy wyjściowej na 12 s oraz dodatkowe 6/9/12 s za każdy posiadany przez ciebie żeton.");
    }
    else if (input == "nowhere to hide" || input == "nie ma gdzie się ukryć") {
        visual("NowheretoHide.png", "Nowhere to Hide (Nie Ma Gdzie Się Ukryć)", "Knight", "Kiedy uszkodzisz generator, ujawniasz aurę wszystkich ocalałych stojących w promieniu 24 m od twojej pozycji na 3/4/5 s.");
    }
    else if (input == "oppression" || input == "opresja") {
        visual("Oppression.png", "Oppression (Opresja)", "Twins", "W momencie uszkodzenia generatora stan maksymalnie 3 innych losowych generatorów także spada. Jeśli generatory te są akurat naprawiane, ocalały będzie musiał wykonać trudny test umiejętności. Czas odnowienia Opresji wynosi 120/100/80 s.");
    }
    else if (input == "overcharge" || input == "przeciążenie") {
        visual("Overcharge.png", "Overcharge (Przeciążenie)", "Doctor", "Przeciąż generator, wykonując na nim akcję Uszkodź Generator. Ocalały, który przystąpi ponownie do naprawy generatora, będzie musiał zmierzyć się z trudnym testem umiejętności. Niezaliczenie testu spowoduje dodatkową utratę 2/3/4% postępu. Zaliczenie testu umiejętności nie zapewni żadnego postępu, ale powstrzyma wybuch generatora. Po przeciążeniu generatora prędkość spadku postępu jego naprawy wzrasta z 75% do 200% na 30 s.");
    }
    else if (input == "overwhelming presence" || input == "przytłaczająca obecność") {
        visual("OverwhelmingPresence.png", "Overwhelming Presence (Przytłaczająca Obecność)", "Doctor", "Ocalali znajdujący się w zasięgu terroru cierpią z powodu niewydajności. Ocalali objęci działaniem umiejętności zużywają ładunki swoich przedmiotów 80/90/100% szybciej.");
    }
    else if (input == "play with your food" || input == "baw się swoim jedzeniem") {
        visual("PlaywithYourFood.png", "Play with Your Food (Baw Się Swoim Jedzeniem)", "Shape", " Za każdym razem, kiedy pozwolisz obsesji przed sobą uciec, otrzymasz żeton, do maksymalnej liczby 3 żetonów. Każdy żeton zwiększa twoją szybkość ruchu o 3/4/5%. Wykonanie podstawowego lub specjalnego ataku zużywa jeden żeton.");
    }
    else if (input == "pop goes the weasel" || input == "entliczek pentliczek" || input == "entliczek-pentliczek" || input == "pop") {
        visual("PopGoestheWeasel.png", "Pop Goes the Weasel (Entliczek-Pentliczek)", "Clown", "Po powieszeniu ocalałego, następny generator, który kopniemy natychmiastowo straci 30% aktualnego postępu naprawy. Umiejętność ta aktywuje się na 35/40/45 sekund po powieszniu ocalałego na haku.");
    }
    else if (input == "predator" || input == "drapieżnik") {
        visual("Predator.png", "Predator (Drapieżnik)", "Wraith", "Czerwone zarysowania zostawiane przez ocalałych będą się pojawiać znacznie bliżej siebie.");
    }
    else if (input == "rancor" || input == "uraza") {
        visual("Rancor.png", "Rancor (Uraza)", "Spirit", "Za każdym razem, gdy ocalali ukończą naprawę generatora, obsesja dostrzega twoją aurę na okres 5/4/3 sekund. Za każdym razem, gdy ocalali ukończą naprawę generatora, dostrzegasz położenie wszystkich ocalałych na okres 3 sekund. Gdy ocalali zasilą wszystkie bramy wyjściowe, na obsesję zostaje nałożony efekt Narażony i możesz ją zabić.");

        //awicki do tąd pisał, a dalej pisze tina
    }
    else if(input == "rapid brutality" || input == "gwałtowna brutalność"){
        visual("RapidBrutality.png", "Rapid Brutality (Gwałtowna Brutalność)", "Xenomorph", "Nie dostajesz żądzy krwi (bloodlust). Po uderzeniu ocalałego podstawowym atakiem dostajesz bonus do prędkości 5% na 8/9/10s.");
    
        //to pisał bkcf (z newsów, nowa postać)
    }
    else if (input == "remember me" || input == "zapamiętaj mnie") {
        visual("RememberMe.png", "Remember Me (Zapamiętaj Mnie)", "Nightmare", "Gdy obsesja straci stan zdrowia dostajesz żeton do maksymalnie 2/3/4, za każdy żeton ocalali otwierają bramy wyjściowe dłużej o 6 sekund. Obsesja jest odporna na efekt umiejętności.");
    }
    else if (input == "save the best for last" || input == "najlepsze zostaw na koniec" || input == "stbfl") {
        visual("SavetheBestforLast.png", "Save the Best for Last (Najlepsze Zostaw na Koniec)", "Shape", "Gdy ocalały który nie jest obsesją straci stan zdrowia dostajesz żeton aż do maksymalnie 8. za każdy żeton odnawianie podstawowego ataku jest zmniejszone o 5%. Gdy obsesja straci stan zdrowia tracisz 4/3/2 żetony.");
    }
    else if (input == "scourge hook: floods of rage" || input == "hak plagi: przypływ gniewu" || input == "floods of rage" || input == "przypływ gniewu" || input == "flods") {
        visual("ScourgeHookFloodsofRage.png", "Scourge Hook: Floods of Rage (Hak Plagi: Przypływ Gniewu)", "Onryo", "4 Losowe haki zmieniają się w haki plagi. Gdy ocalały zostanie ściągnięty aury wszystkich innych ocalałych zostaną ci ujawnione na 5/6/7 sekund.");
    }
    else if (input == "scourge hook: gift of pain" || input == "hak plagi: ofiarowany ból" || input == "gift of pain" || input == "ofiarowany ból") {
        visual("ScourgeHookGiftofPain.png", "Scourge Hook: Gift of Pain (Hak Plagi: Ofiarowany Ból)", "Cenobite", "4 Losowe haki zmieniają się w haki plagi. Gdy ocalały zostanie ściągnięty z haka plagi dostanie efekty krwotok i zmasakrowany aż do wyleczenia. Gdy ocalały pierwszy raz zostanie wyleczony dostaje kare 10/13/16% do prędkości leczenia i naprawy aż do otrzymania kolejnych obrażeń.");
    }
    else if (input == "scourge hook: hangman's trick" || input == "hak plagi: sztuczka kata" || input == "hangman's trick" || input == "sztuczka kata") {
        visual("Hangman'sTrick.png", "Hangman's Trick (Sztuczka Kata)", "Pig", "Na początku próby 4 losowe haki zamieniają się w haki plagi. WIdzisz ich aurę na biało, a kiedy niesiesz ocalałego widzisz aurę ocalałych w zasięgu 8/9/10 metrów od haków plagi. Dostajesz głośne powiadomienie kiedy ktoś zaczyna sabotażować hak.");
    }
    else if (input == "scourge hook: pain resonance" || input == "hak plagi: rezonans bólu" || input == "pain resonance" || input == "pain res" || input == "rezonans bólu") {
        visual("ScourgeHookPainResonance.png", "Scourge Hook: Pain Resonance (Hak Plagi: Rezonans Bólu)", "Artist", "Na początku próby maksymalnie cztery losowe haki zostają zamienione w haki plagi. Otrzymujesz także cztery żetony umiejętności. Za każdym razem, kiedy powiesisz jakiegoś ocalałego pierwszy raz, stracisz jeden żeton, a generator z największą ilością postępu naprawy natychmiast straci 25% tego postępu. Jeśli stracisz wszystkie żetony, umiejętność wyłączy się do końca próby.");
    }
    else if (input == "septic touch" || input == "zaraźliwy dotyk") {
        visual("SepticTouch.png", "Septic Touch (zaraźliwy dotyk)", "Dredge", "Gdy ocalały wykona akcje leczenia w twoim zasięgu terroru dostanie efekt oślepienie i wyczerpanie na 6/8/10 sekund.");
    }
    else if (input == "shadowborn" || input == "zrodzony w cieniu") {
        visual("Shadowborn.png", "Shadowborn (Zrodzony w Cieniu)", "Wraith", "Twoje pole widzenia jest zwiększone o 9/12/15 stopni.");
    }
    else if (input == "spirit fury" || input == "duchowa furia") {
        visual("SpiritFury.png", "Spirit Fury (Duchowa Furia)", "Spirit", "Po zniszczeniu 4/3/2 palet kolejna, która cię ogłuszy automatycznie zostanie zniszczona.");
    }
    else if (input == "starstruck" || input == "oczarowanie") {
        visual("Starstruck.png", "Starstruck (Oczarowanie)", "Trickster", "Gdy podczas niesienia ocalałego wszyscy inni ocalali w twoim zasięgu terroru dostają efekt narażony. Efekt utrzymuje się 26/28/30 sekund po wyjściu z zasięgu terroru. Umiejętność odnawia się w 60 sekund.");
    }
    else if (input == "stridor" || input == "jęki") {
        visual("Stridor.png", "Stridor (Jęki)", "Nurse", "Jęczenie ocalałego jest głośniejsze o 25/50/50% a zwykły oddech o 0/0/25%.");

        //tina do tąd pisała, a dalej pisze rafau
    }
    else if (input == "superior anatomy" || input == "ponadprzeciętna anatomia") {
        visual("SuperiorAnatomy.png", "Superior Anatomy (Ponadprzeciętna Anatomia)", "Mastermind", "Kiedy ocalały wykonuje szybki przeskok w promieniu 8 metrów od ciebie superior anatomy się aktywuje. Kiedy perk jest aktywny twój następny przeskok będzie szybszy o 30/35/40%. Superior anatomy dezaktywuje się po przeskoku i odnawia się 30s.");
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
    else if (input == "trail of torment" || input == "szlak udręki") {
        visual("TrailofTorment.png", "Trail of Torment (Szlak Udręki)", "Executioner", "Po uszkodzeniu generatora otrzymujesz status niewykrywalny do momentu kiedy generator przestanie się regresować. Aura generatora pod działaniem trail of torment jest ujawniana ocalałym na żółto.");
    }
    else if (input == "ultimate weapon" || input == "broń doskonała"){
        visual("UltimateWeapon.png", "Ultimate Weapon (Broń Doskonała)", "Xenomorph", "Po otwarciu szafki umiejętność aktywuje się na 30 sekund. Jeśli w tym czasie ocalały wejdzie w zasięg twojego terroru krzyknie, ujawni swoją lokalizację, a także dostanie efekt ślepoty na 30s. umiejętność potrzebuje 40/35/30 sekund na odnowienie.")
        
        //to pisał bkcf (z newsów, nowa postać)
    }
    else if (input == "unnerving presence" || input == "niepokojąca obecność") {
        visual("UnnervingPresence.png", "Unnerving Presence (Niepokojąca Obecność)", "Trapper", "Kiedy ocalały znajduje się w twoim terrorze jego skillchecki są zmiejszone o 40/50/60% oraz występują częściej o 10%.");
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
