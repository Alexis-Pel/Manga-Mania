            Total = 0;
			Boruto = 0;
			DBSuper = 0;
			OPM = 0;
			Naruto = 0;
			HXH = 0;
			let compteurBoruto=0;
			let compteurDBSuper=0;
			let compteurOPM=0;
			let compteurNaruto=0;
			let compteurHXH = 0;

			replaceB = document.getElementById("replaceB");
			borutoNumber = document.getElementById("borutoNumber");

			replaceHXH = document.getElementById("replaceHXH");
			HXHNumber = document.getElementById("HXHNumber");

			replaceNar = document.getElementById("replaceNar");
			narutoNumber = document.getElementById("narutoNumber");

			replaceOPM = document.getElementById("replaceOPM");
			OPMNumber = document.getElementById("OPMNumber");

			replaceDBS = document.getElementById("replaceDBS");
			DBSNumber = document.getElementById("DBSNumber");

			function setMoney(){
			 money = localStorage.getItem('money');
			let argent = document.getElementById("argent");
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
				replaceDBS.innerHTML = "Dragon Ball : Super";
				compteurDBSuper++;
				DBSNumber.innerHTML = compteurDBSuper + "x";
			}

			function subDBSuper(){
				Total = Total- DBSuper;
				DBSuper = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceDBS.innerHTML = " ";
				DBSNumber.innerHTML =" ";
				compteurDBSuper= 0;
			}

			function addOPM(){
				OPM += 60;
				totalFcn();
				replaceOPM.innerHTML = "One Punch Man";
				compteurOPM++;
				OPMNumber.innerHTML = compteurOPM + "x";
			}

			function subOPM(){
				Total = Total- OPM;
				OPM = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceOPM.innerHTML = " ";
				OPMNumber.innerHTML =" ";
				compteurOPM= 0;
			}

			function addBoruto(){
				Boruto += 50;
				totalFcn();
				replaceB.innerHTML = "Boruto : Naruto Next Generation";
				console.log(compteurBoruto);
				compteurBoruto++;
				borutoNumber.innerHTML = compteurBoruto + "x";
			}

			function subBoruto(){
				Total = Total- Boruto;
				Boruto = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceB.innerHTML = " ";
				borutoNumber.innerHTML =" ";
				compteurBoruto= 0;
			}

			function addNaruto(){
				Naruto += 72;
				totalFcn();
				replaceNar.innerHTML = "Naruto";
				compteurNaruto++;
				narutoNumber.innerHTML = compteurNaruto + "x";
			}

			function subNaruto(){
				Total = Total- Naruto;
				Naruto = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceNar.innerHTML = " ";
				narutoNumber.innerHTML =" ";
				compteurNaruto= 0;
			}

			function addHXH(){
				HXH += 63;
				totalFcn();
				replaceHXH.innerHTML = "Hunter X Hunter";
				compteurHXH++;
				console.log(compteurHXH);
				HXHNumber.innerHTML = compteurHXH + "x";
				
			}

			function subHXH(){
				Total = Total- HXH;
				HXH = 0;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceHXH.innerHTML = " ";
				HXHNumber.innerHTML =" ";
				compteurHXH= 0;
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