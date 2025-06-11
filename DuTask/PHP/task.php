<?php
session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task list</title>
    <link rel="stylesheet" href="../Styles/task.css?v=30">
    <script src="../Javascript/script.js?v=16" defer></script>
</head>
<body>
    <header>
        <a href="../index.php">Switch users</a>
    </header>
    <main>
        <div class="form">
            <?php
            $username = $_SESSION["username"];
                echo "<h1>$username's Task List</h1>";
            ?>
            <div class="container">
                <div class="newTask">
                    <input type="date" id="date" required>
                    <input type="text" id="task" placeholder="Clean the stairs" required>
                    <div class="customSelect">
                        <div class="selected"><p id="selected">Yellow</p><img src="../Icons/arrow.png" alt="Prásk"></div>
                        <div class="options">
                            <div class="option" value="Yellow" style="background: yellow;border-radius: 4px 4px 0px 0px;padding: 0rem 1rem 0rem 0.5rem;">Yellow</div>
                            <div class="option" value="Blue" style="background: blue;padding: 0rem 1rem 0rem 0.5rem;color: white;">Blue</div>
                            <div class="option" value="Green" style="background: green;padding: 0rem 1rem 0rem 0.5rem;">Green</div>
                            <div class="option" value="Violet" style="background: violet;padding: 0rem 1rem 0rem 0.5rem;">Violet</div>
                            <div class="option" value="Orange" style="background: orange;padding: 0rem 1rem 0rem 0.5rem;">Orange</div>
                            <div class="option" value="Red" style="background: red; border-radius: 0px 0px 4px 4px;padding: 0rem 1rem 0rem 0.5rem;">Red</div>
                        </div>
                    </div>
                    <button type="submit" id="submit" class="submit">Add!</button>
                </div>
            </div>
        </div>
    </main>    
</body>
</html>
