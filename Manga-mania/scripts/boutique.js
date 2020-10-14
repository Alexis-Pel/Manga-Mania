            Total = 0;
			Boruto = 0;
			DBSuper = 0;
			OPM = 0;
			Naruto = 0;
			HXH = 0;
			
			function setMoney(){
			 money = localStorage.getItem('money')
			let argent = document.getElementById("argent")
			argent.innerHTML = money;
			}

			function totalFcn(){
				Total = Boruto + DBSuper + OPM + Naruto + HXH;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
			}

			function addDBSuper(){
				DBSuper += 65;
				totalFcn();
			}

			function subDBSuper(){
				Total = Total- DBSuper;
				DBSuper = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
			}

			function addOPM(){
				OPM += 60;
				totalFcn();
			}

			function subOPM(){
				Total = Total- OPM;
				OPM = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
			}

			function addBoruto(){
				Boruto += 50;
				totalFcn();
			}

			function subBoruto(){
				Total = Total- Boruto;
				Boruto = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
			}

			function addNaruto(){
				Naruto += 72;
				totalFcn();
			}

			function subNaruto(){
				Total = Total- Naruto;
				Naruto = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
			}

			function addHXH(){
				HXH += 63;
				totalFcn();
			}

			function subHXH(){
				Total = Total- HXH;
				HXH = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
			}
			function checkpay(){
				if (Total > money ){
					window.alert("Vous n'avez pas assez d'argent")
				}
				else{
					money = money - Total;
					localStorage.setItem("money", money)
					window.alert("Merci de votre commande !")
					location.reload();
				}
			}