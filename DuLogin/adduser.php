<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $noveJmeno = $_POST["noveJmeno"];
        $novePrijimeni = $_POST["novePrijimeni"];
        $novyUsername = $_POST["novyUser"];
        $novyPassword = md5($_POST["novyPassword"]);
        $conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
        $conn->set_charset("utf8");
        $sql = "INSERT INTO Dulogin2 (username,heslo,jmeno,prijimeni) VALUES ('$novyUsername','$novyPassword','$noveJmeno','$novePrijimeni')";
        $conn->query($sql);
        $conn->close();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DuLogin</title>
    <link rel="stylesheet" href="adduser.css?v=3">
</head>
<body>
    <header>

    </header>
    <main>
    <form action="adduser.php" method="post">
        <div class="container">
            <h1>Přidání uživatele</h1>
            <label for="noveJmeno">Jméno:</label>
            <input type="text" name="noveJmeno" id="noveJmeno" required maxlength="64">

            <label for="novePrijimeni">Příjmení:</label>
            <input type="text" name="novePrijimeni" id="novePrijimeni" required maxlength="64">

            <label for="novyUser">Uživatelské jméno:</label>
            <input type="text" name="novyUser" id="novyUser" required maxlength="64">

            <label for="novyPassword">Heslo:</label>
            <input type="password" name="novyPassword" id="novyPassword" required maxlength="64">
            <div class="buttoncon">
                <input type="submit" value="Vytvořit uživatele" class="button" id="submit">
                <a href="welcome.php" class="button">Zpět</a>
            </div>
        </div>
    </form>
            
    </main>
    <footer>
        <p>&copy; 2025, Dominik Opat.</p>
    </footer>
</body>
</html>