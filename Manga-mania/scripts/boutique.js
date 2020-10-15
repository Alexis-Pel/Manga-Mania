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
			let Totalday = 0;

			dayInWeek1 = document.getElementById("jour");
			day1 = document.getElementById("day");
			month1 = document.getElementById("month");

			name = localStorage.getItem('username');
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
				Totalday++;
			}

			function subDBSuper(){
				Total = Total- 65;
				DBSuper --;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceDBS.innerHTML = " ";
				DBSNumber.innerHTML =" ";
				compteurDBSuper= 0;
				Totalday--;
			}

			function addOPM(){
				OPM += 60;
				totalFcn();
				replaceOPM.innerHTML = "One Punch Man";
				compteurOPM++;
				OPMNumber.innerHTML = compteurOPM + "x";
				Totalday++;
			}

			function subOPM(){
				Total = Total - 60;
				OPM --;
				let total = document.getElementById("toto");
				total.innerHTML = Total;
				replaceOPM.innerHTML = " ";
				OPMNumber.innerHTML =" ";
				compteurOPM= 0;
				Totalday--
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
					window.alert( name +", merci de votre commande !")
					location.reload();
				}
			}

			function date() {
				var d = new Date();
				let day = d.getDate();
				let dayInWeek = d.getDay();
				let month = d.getMonth();
				if(dayInWeek == 1){
					jour = "Lundi"
				}
				if(dayInWeek == 2){
					jour = "Mardi"
				}
				if(dayInWeek == 3){
					jour = "Mercredi"
				}
				if(dayInWeek == 4){
					jour = "Jeudi"
				}
				if(dayInWeek == 5){
					jour = "Vendredi"
				}
				if(dayInWeek == 6){
					jour = "Samedi"
				}
				if(dayInWeek == 7){
					jour = "Dimanche"
				}
				if(month == 0){
					mois="Janvier"
				}
				if(month == 1){
					mois="Février"
				}
				if(month == 2){
					mois="Mars"
				}
				if(month == 3){
					mois="Avril"
				}
				if(month == 4){
					mois="Mai"
				}
				if(month == 5){
					mois="Juin"
				}
				if(month == 6){
					mois="Juillet"
				}
				if(month == 7){
					mois="Août"
				}
				if(month == 8){
					mois="Septembre"
				}
				if(month == 9){
					mois="Octobre"
				}
				if(month == 10){
					mois="Novembre"
				}
				if(month == 11){
					mois="Décembre"
				}

				day1.innerHTML = day;
				dayInWeek1.innerHTML = jour;
				month1.innerHTML = mois;
			  }