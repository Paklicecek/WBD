<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
        $conn->set_charset("utf8");
        
        $jmeno = $_POST['jmeno'];
        $prijimeni = $_POST['prijimeni'];
        $vek = $_POST['vek'];
        $rocnik = $_POST['rocnik'];
        $predmet = $_POST['predmet'];

        $sql = "INSERT INTO Formulář (Jmeno,Prijimeni,Vek,Rocnik,Predmet) VALUES ('$jmeno','$prijimeni','$vek','$rocnik','$predmet')";
        $res = $conn->query($sql);
        $conn->close();
    ?>
</body>
</html>