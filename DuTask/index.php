<?php
session_start();
$correct = true;

if($_SERVER["REQUEST_METHOD"] == "POST"){
$username = $_POST["username"];
$password = md5($_POST["password"]);
$_SESSION["username"] = $username;

$conn = new mysqli("localhost","opat.do.2023","Listo2020pad","db23opat");
$conn->set_charset("utf8");

$sql = "SELECT * FROM `TaskList` WHERE password = '$password' AND username = '$username'";
$res = $conn->query($sql);

if($res->num_rows >= 1){
    header("Location: PHP/task.php");
    exit;
}
else{
    $correct = false;
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
    <link rel="stylesheet" href="Styles/style.css?v=6">
</head>
<body>
    <header>
        <a href="PHP/register.php">Create new account</a>
    </header>
    <main>
        <form action="index.php" method="post">
            <h1>Sign in</h1>
            <div class="container">
                <div class="usernameCon">
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="Joe" id="username" required>
                </div>
                <div class="passwordCon">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="myPassword" id="password" required>
                </div>
                <?php
                if(!$correct){
                    echo "<p style='color:red;'>Wrong username or password.</p>";
                }
                ?>
                <button type="submit" id="submit" class="submit">Sign in</button>
                <p>&copy; 2025, Dominik Opat.</p>
            </div>
        </form>
    </main>    
</body>
</html>