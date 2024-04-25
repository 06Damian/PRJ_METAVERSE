let Answers = {}; //Data die verstuurd moet worden
        fetch('form.php', { //Aangeven naar welk bestand
            method: 'POST', //Soort versturing, POST net zoals forms
            headers: {
                'Content-Type': 'application/json' //Soort data die verstuurd word
            },
            body: JSON.stringify(Answers) //De data zelf omzetten in text
        })
        .then(response => response.text()) //Text versturen
        .then(data => {
            console.log(data); // Log de respons van het PHP-bestand
            // Voeg hier eventueel andere acties toe na ontvangst van de respons
        })