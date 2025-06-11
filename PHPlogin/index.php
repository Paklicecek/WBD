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
    $logged = false;
        if(isset($_POST["password"]))
        {
            if(!empty($_POST["password"]))
            {
                $username = htmlspecialchars($_POST["username"]);
                $password = md5(htmlspecialchars($_POST["password"]));
                $sql = "SELECT * FROM `Login` WHERE password = '$password' AND username = '$username'";
                $res = $conn->query($sql);
                if($res->num_rows == 1){
                    echo "Logged in";
                    $logged = true;
                }
            }
        }
        if(isset($_POST["Rpassword2"]))
        {
            if(!empty($_POST["Rpassword2"]))
            {
                $Rusername = htmlspecialchars($_POST["Rusername"]);
                $Rpassword = htmlspecialchars($_POST["Rpassword"]);
                $Rpassword2 = htmlspecialchars($_POST["Rpassword2"]);
            }
        }

        

        
        if(!$logged){
            ?>
                <h2>Register</h2>
                <form action="index.php" method="post">
                    
                    <label for="Rusername">Zadej username:</label>
                    <input type="text" name="Rusername" id="Rusername" required>
                    
                    <label for="Rpassword">Vytvoř heslo:</label>
                    <input type="password" name="Rpassword" id="Rpassword" required>
                    
                    <label for="Rpassword2">Zadej heslo znovu:</label>
                    <input type="password" name="Rpassword2" id="Rpassword2" required>
                    
                    <input type="submit" value="Odeslat">
                </form>
                <?php
            if(!empty($Rpassword2)){
                if($Rpassword != $Rpassword2){
                    echo "Zadal jsi špatně heslo";
                }
                else{
                    if(strlen($Rpassword) < 8){
                        echo "Vytvoř heslo které má aspoň 8 znaků";
                    }
                    else if(strlen($Rpassword) >= 8 && $Rpassword == $Rpassword2){
                        $Rpassword = md5($Rpassword);
                        $Rpassword2 = md5($Rpassword2);
                        $sql = "INSERT INTO Login (username, password) VALUES ('$Rusername','$Rpassword')";
                        $conn->query($sql);
                        echo "Odesláno";
                        else{
                            echo "Tohle jméno je zabrané!";
                        }
                    }
                }
            }
        }
        
        $conn->close();

   ?> 
</body>
</html>