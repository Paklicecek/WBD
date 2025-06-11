<?php
session_start();
$success = false;

if($_SERVER["REQUEST_METHOD"] == "POST"){
$username = $_POST["username"];
$password = md5($_POST["password"]);
$name = $_POST["name"];

$conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
$conn->set_charset("utf8");

$sql = "INSERT INTO TaskList (username,password,name) VALUES ('$username','$password','$name')";
$res = $conn->query($sql);

if($res){
    $success = true;
}



$conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task list</title>
    <link rel="stylesheet" href="../Styles/register.css?v=12">
</head>
<body>
    <header>
        <a href="../index.php">Back to sign in</a>
    </header>
    <main>
        <form action="register.php" method="post">
            <h1>Create new user</h1>
            <div class="container">
                <div class="nameCon">
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="James" id="name" required>
                </div>
                <div class="usernameCon">
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="James_55" id="username" required>
                </div>
                <div class="passwordCon">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="myPassword" id="password" required>
                </div>
                <?php 
                if($success){
                    echo "<p style='color:green;'>Your account has been created.</p>";
                }
                ?>
                <button type="submit" id="submit" class="submit">Create new account</button>

                <p>&copy; 2025, Dominik Opat.</p>
            </div>
        </form>
    </main>    
</body>
</html>