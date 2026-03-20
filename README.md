# Testad-Wordle-Algoritm-A
Algoritm A – feedback
Denna funktion definierar reglerna för den feedback spelet ger när spelaren gissar ett ord. Den ska uppfylla följande kriterier:

Inputs: Två ord (två textsträngar)
Ett ord som är gissningen
Ett ord som är det korrekta ordet
Funktionalitet: Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var
Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
letter (bokstaven)
result (ett av följande värden)
‘incorrect’: Finns inte med i det andra ordet
‘misplaced’: Finns med i det andra ordet, men på annan plats
‘correct’: Korrekt plats i det andra ordet 
Exempel:

Orden “CYKLA” (utvalt) och “HALLÅ” (gissning) skulle ge följande tillbaka:

H / incorrect
A / misplaced
L / incorrect (eftersom det redan finns ett korrekt L)
L / correct
Å / incorrect
