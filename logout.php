<?php
session_start(); // بدء الجلسة
session_destroy(); // تدمير الجلسة
header("Location: index.html"); // إعادة التوجيه إلى الصفحة الرئيسية
exit();
?>
