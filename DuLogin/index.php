<?php
    session_start();
    $correct = true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DuLogin</title>
    <link rel="stylesheet" href="style.css?v=7">
</head>
<body>
    <header>

    </header>
    <main>
        
        <?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
        $conn->set_charset("utf8");
        
        $username = $_POST["Jmeno"];
        $_SESSION["username"] = $username;
        $password = md5($_POST["Password"]);
        $_SESSION["password"] = $password;
        $sql = "SELECT * FROM `Dulogin2` WHERE heslo = '$password' AND username = '$username'";
        $res = $conn->query($sql);
        if($res->num_rows >= 1){
            header("Location: welcome.php");
            exit;
        }
        else{
            $correct = false;
        }
        $conn->close();
    }
    ?>
    <form action="index.php" method="post">
        <div class="container">
            <h1>Přihlášení</h1>
            <?php 
            if(!$correct){
            echo "<p id='Fail'>Neplatné uživatelské jméno nebo heslo.</p>";
            }
            ?>
            <label for="Jmeno">Uživatelské jméno:</label>
            <input type="text" name="Jmeno" id="Jmeno" required>

            <label for="Password">Heslo:</label>
            <input type="password" name="Password" id="Password" required>
            <div class="gap">
                <input type="submit" value="Přihlásit se" id="submit" class="button">
            </div>
        </div>
    </form>

    </main>
    <footer>
        <p>&copy; 2025, Dominik Opat.</p>
    </footer>
</body>
</html>