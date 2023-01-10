<?php 

$server = "localhost";
$user = "admin";
$pass = "admin";
$database = "admin";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

?>