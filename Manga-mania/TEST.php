         <?php
                $pseudo = $_POST['pseudo'];;
                $money = $_POST['money'];;
                $servname = 'localhost';
                $dbname = 'manga';
                $user = 'root';
                $pass = 'root';
            
            try{
                $dbco = new PDO("mysql:host=$servname;dbname=$dbname", $user, $pass);
                $dbco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                
                $sql = "INSERT INTO user(username, money)
                        VALUES('$pseudo',$money)";
                
                $dbco->exec($sql);
            }
            
            catch(PDOException $e){
              echo "Erreur : " . $e->getMessage();
            }
        ?>
 <!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
	<title>Boutique</title>
</head>
    <header>
        <h1> Manga Mania </h1>
        </br>
    </header>
	<body>
        <div class="menu">
			<ul>
			<li><a id="bouton1" href="index.html">Accueil</a></li>
			<li><a href="#2">Articles</a></li>
			<li><a href="boutique.html">Boutique</a></li>
			<li><a href="#4">Contact</a></li>
			</ul>
                </div>
                
                <h1>Connection Réussie<h1>
                        <h2>Veuillez cliquer sur une des pages du menu</h2>
        </body>
</html>
