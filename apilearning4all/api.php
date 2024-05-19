<?php

// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mycoursesdb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Consultar datos
$sql = "SELECT * FROM courses";
$result = $conn->query($sql);



if ($result->num_rows > 0) {
    // Obtener datos
    $cursos = array();
    while($row = $result->fetch_assoc()) {
        $cursos[] = $row;
    }

// Devolver los datos como JSON
header('Content-Type: application/json');
echo json_encode($cursos);
} else {
echo "No se encontraron datos en la base de datos";
}

$conn->close();
?>
