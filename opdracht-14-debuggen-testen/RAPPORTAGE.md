 # RAPPORTAGE – Favorite Movies App

Projectomschrijving
Deze applicatie stelt gebruikers in staat om films toe te voegen aan een favorietenlijst, films te verwijderen en duplicaten te voorkomen. De applicatie is gebouwd met React en maakt gebruik van state en props.

---

 Bug Fixes

 Bug 1: useState niet geïmporteerd
- Probleem: De applicatie crashte bij het starten.
- Oorzaak:useState werd gebruikt in App.jsx maar niet geïmporteerd.
- Oplossing: useState geïmporteerd vanuit React.


Bug 2: Verkeerde duplicate check bij toevoegen film

Probleem: Films konden niet correct worden toegevoegd of geblokkeerd.

Oorzaak: Er werd gecontroleerd op setMovies.includes() in plaats van movies.includes().

Oplossing: De check aangepast naar de juiste state array.


Bug 3: Inputveld werd niet leeggemaakt na toevoegen

Probleem: Na het toevoegen van een film bleef de invoer staan.

Oorzaak: De state van het inputveld werd niet gereset.

Oplossing: setMovie('') toegevoegd na succesvol toevoegen.


 Bug 4: React warning over ontbrekende key

Probleem: Console warning bij het renderen van de filmlijst.

Oorzaak: .map() werd gebruikt zonder unieke key.

Oplossing: key toegevoegd aan MovieItem component.
 
 
 
 Test Results
User Story 1: Movies toevoegen aan favorietenlijst  PASSED

Invoerveld aanwezig:  PASSED

Toevoegknop aanwezig: PASSED

Film wordt toegevoegd: PASSED

Film verschijnt in lijst:  PASSED

Lege invoer geeft foutmelding:  PASSED

Invoerveld wordt leeggemaakt: PASSED

User Story 2: Films verwijderen uit favorietenlijst PASSED

Elke film heeft een verwijderknop:  PASSED

Film wordt verwijderd bij klik:  PASSED

Film verdwijnt direct uit lijst:  PASSED

Geen foutmelding bij succesvol verwijderen:  PASSED

User Story 3: Duplicate films voorkomen PASSED

Duplicate toevoegen geeft foutmelding: PASSED

Duplicate wordt niet toegevoegd:  PASSED

Lijst bevat geen duplicaten:  PASSED

User Story 4: Lege lijstmelding tonen  PASSED

Lege lijst toont melding:  PASSED

Melding verdwijnt bij toevoegen film:  PASSED

Melding verschijnt opnieuw bij lege lijst:  PASSED

 Test Scenario’s
Test Scenario 1: Happy Path  PASSED

Inception en The Matrix succesvol toegevoegd

Inception succesvol verwijderd

The Matrix succesvol verwijderd

Lege lijstmelding correct weergegeven



Test Scenario 2: Error Handling  PASSED

Lege invoer geblokkeerd met foutmelding

Duplicate film geblokkeerd met foutmelding

Geen duplicaten in lijst



Test Scenario 3: Edge Cases  PASSED

Invoer met spaties wordt geblokkeerd

Lange filmnaam wordt correct weergegeven

Speciale karakters worden ondersteund

Conclusie

Alle bugs zijn succesvol opgelost en alle acceptatiecriteria zijn getest en behaald.
De applicatie functioneert stabiel en voldoet aan de gestelde requirements.