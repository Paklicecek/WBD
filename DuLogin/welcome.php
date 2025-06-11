<?php
    session_start();

    $username = $_SESSION['username'];

    $conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
    $conn->set_charset("utf8");
    $sql = "SELECT jmeno,prijimeni FROM `Dulogin2` WHERE username = '$username'";
    $res = $conn->query($sql);
    if($res->num_rows == 1){
        $row = $res->fetch_assoc();
        $jmeno = $row['jmeno'];
        $prijimeni = $row['prijimeni'];
    }
    $conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="welcome.css?v=4">
</head>
<body>
    <header>

    </header>
    <main>
        <div class="container">
            <h1 id = "vitej">Vítej</h1>
            <?php echo "<h2 id='user'>" . $jmeno . " " . $prijimeni. "</h2>";?>
            <p style="color: green;" id="size">Jste úspěšně přihlášen.</p>
            <div class="buttoncon">
                <a href="index.php" class="button">Odhlásit</a>
                <a href="adduser.php" class="button">Přidat uživatele</a>
                </div>
            </div>
    </main>
    <footer>
        <p>&copy; 2025, Dominik Opat.</p>
    </footer>
</body>
</html>