<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php
        $Fname = htmlspecialchars($_POST["Fname"]);
        $Lname = htmlspecialchars($_POST["Lname"]);
        $Age = htmlspecialchars($_POST["Age"]);

        $conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
        $conn->set_charset("utf8");
        $sql = "INSERT INTO Form (Jmeno, Prijimeni, Vek) VALUES ('$Fname', '$Lname', '$Age')";

        $conn->query($sql);

        $conn->close();

   ?> 
</body>
</html>