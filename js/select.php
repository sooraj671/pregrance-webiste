
<?php
session_start();
$pdo = new PDO('mysql:host=localhost;port=4000;dbname=pregnancy',
       'root', '');
       $title = $_POST['title'];
       $sql = "SELECT * FROM contact";

       $stmt = $pdo->query($sql);
       $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
       echo $rows[0]['username'];
       echo $rows[0]['birth_date'];
       echo $rows[0]['email'];
       echo $rows[0]['phone'];
       echo $rows[0]['message'];
       $_SESSION['birth_date'] = $rows[1]['exam_time'];
       $_SESSION['email'] = $rows[0]['exam_date'];
       $_SESSION['phone'] = $rows[0]['exam_dur'];
       $_SESSION['message'] = $rows[0]['exam_dur'];
    //   header('Location:display-exam.php');
       return;
?>
