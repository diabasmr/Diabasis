<!DOCTYPE html>
<html lang="en">
<head>
<meta name="description"
		content="A CS girly's blog mixing fashion, books, and films with a personal touch. Dive into style, stories, and cinema through Diabasis' lens!">
	<meta name="keywords"
		content="fashion blog, books review, film critique, web design, girly blog, lifestyle, Diabasis, Diaba, personal blog">
	<meta charset="UTF-8">
	<title> Diabasis-form </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://kit.fontawesome.com/db9b6937ac.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="style-harmony.css">
	<link rel="stylesheet" type="text/css" href="index-style.css">
	<link rel="shortcut icon" href="logo-diabasis.webp" />
	<script src="./JS/index.js" defer></script>
</head>
<body>
<header>
	<a href="https://diabasis.vercel.app/index.html"><img src="cute-green-little-house.webp" alt="Diabasis A WEBSITE" id="homie" style="height: 10%;"></a>
	<img src="barre-nav.webp" alt="Diabasis A WEBSITE" id="barre">
</header>

<form action="https://diabasis-form.alwaysdata.net/diabasis-form.php" class="my-form" id="ancre" method="post">
		<h3>Newsletter <i class="fa-regular fa-envelope" style="color: #db7c84;"></i></h3>
		<div class="form-group">
			<label>Email</label>
			<input type="email" name="email">
		</div>
		<div class="form-group">
			<label>Message</label>
			<textarea name="message" placeholder="Do not hesitate tell me anything love"></textarea>
		</div>
		<div class="form-group">
			<label>Gender</label>
			<select name="gender">
				<option value="Ladies">Ladies</option>
				<option value="Gentleman">Gentleman</option>
				<option value="Other">Other</option>
			</select>
		</div>

		<input class="btn" type="submit" name="submit" value="COMMIT">

    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST["message"]);
$gender = htmlspecialchars($_POST["gender"]);

$file = "mails_envoyes.txt";  
$mail_content = "To: $to\nSubject: $subject\nHeaders: $headers\nMessage: $message\n\n";  
file_put_contents($file, $mail_content, FILE_APPEND);  

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $to = "diabasamoura@gmail.com";
    $subject = "Diabasis Newsletter";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "Email: $email\n";
    $body .= "Genre: $gender\n";
    $body .= "Message: \n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p style='color: darkseagreen; font-size:30px;'>Votre message a été envoyé avec succès !</p>";
    } else {
        echo "<p style='color: red; font-size:30px;'>Une erreur est survenue, veuillez réessayer.</p>";
    }
} else {
    echo "<p style='color: red; font-size:30px;'>Veuillez entrer une adresse email valide.</p>";
}
}
?>

    </form>
</body>
</html>
