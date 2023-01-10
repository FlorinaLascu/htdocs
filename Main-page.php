<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main-page.css">
    <title>Main page</title>
</head>
<body>

    <div class="container">
    <div class="navbar">
    <div class="navbar-content-text">
    <?php echo "<h1>Bine ai venit " . $_SESSION['username'] . "</h1>"; ?></div>
    <div class="navbar-content-logout">
            <a href="logout.php">Deloghează-te</a>
    </div>
</div>
</div>

<div id="container">
    <div class="panel" id="one">
      <div class="text">
        <h3>CATEVA</h3>
        <h1>INFORMATII</h1></div>
      <div class="bottom button1"><a href="informatii.html">CITESTE</a></div>
    </div>
    <div class="panel" id="two">
      <div class="text">
        <h3>MODEL</h3>
        <h1>3D</h1></div>
      <div class="bottom button2"><a href="3d.html">DESCOPERA</a></div>
    </div>
            
         
            
</body>
</html>