<?php 
  $servername = "10.3.22.38";
  $username = "userconvoportal";
  $password = "j820hfi53.2024";
  $dbname = "convocatorias";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $id = $_POST['idt'];
  $descarga = 1;
  $sql = "INSERT INTO descargas VALUES (NULL, $id, $descarga, CURRENT_TIMESTAMP())";
  $resultado = mysqli_query($conn, $sql);

  $conn->close();

?>