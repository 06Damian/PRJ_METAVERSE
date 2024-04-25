<?php require("script.php"); ?>

<?php
    $antwoordvraag1D = ""; // Define or retrieve these values appropriately
    $antwoordvraag2D = "";
    $antwoordvraag3D = "";
    $resultaat = "";
    $response = "";
    $tussen = "";
    if(isset($_POST['submit'])){
        if(empty($_POST['email']) || empty($_POST['Voornaam']) || empty($_POST['Achternaam'])){
            $response = "All the field are required";
        }else{
            $response = "succes";
        }
    }
?>

<form action="" method="post" enctype="multipart/form-data">
    <label>Uw email</label>
    <input type="email" name="email" value="">

    <label>Voornaam</label>
    <input type="name" name="Voornaam" value="">

    <label>Tussenvoegsel</label>
    <input type="text" name="Tussenvoegsel" value=""> 

    <label>Achternaam</label>
    <input type="text" name="Achternaam" value="">

    <button type="submit"name="submit">Begin</button>
</form>

<?php 
    $data = json_decode(file_get_contents("php://input")); //Vang de data op die door fetch API verstuurd word en zet het om in een object
    function emailSentD($antwoordvraag1, $antwoordvraag2, $antwoordvraag3, $resultaat, $tussen){
        $standerdsubject = "Resultaten ROMP quick test";
        $messagemade = "Beste meneer/mevrouw ".$tussen. $_POST['Achternaam'].",\nWe hebben de resultaten van uw test.\nUw antwoord op vraag 1 was: ". $antwoordvraag1."\nUw antwoord op vraag 2 was: ". $antwoordvraag2."\nUw antwoord op vraag 3 was: ". $antwoordvraag3."\nHier uit hebben we een resultaat kunnen maken namelijk:". $resultaat ."\n Dankuwel voor uw tijd en als u meer infromatie wil of wil dat wij u verder helpen twijfel dan niet en neem contact op.\n\nMet vriendelijke groet,\nHet team van ROMP";
        $response = sendMail($_POST['email'], $standerdsubject, $messagemade);
    };
    
    if(empty($_POST['Tussenvoegsel'])){
        $tussen = "";
    }else{
        $tussen = $_POST['Tussenvoegsel']." ";
    };
    if($response == "succes"){
        echo "u kunt beginnen met de toets";
        emailSentD($antwoordvraag1D, $antwoordvraag2D, $antwoordvraag3D, $resultaat, $tussen);
    };
    
    

?>