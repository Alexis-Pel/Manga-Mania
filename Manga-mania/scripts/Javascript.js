let naru = document.getElementById("narutoimg");
let hunt = document.getElementById("Hunterimg");

let sypn = document.getElementById("synopsisN");
let infn = document.getElementById("infoN");

let syph = document.getElementById("synopsisH");
let infh = document.getElementById("infoH");

let sypop = document.getElementById("synopsisOp");
let infop = document.getElementById("infoOp");

let sypdb = document.getElementById("synopsisDb");
let infdb = document.getElementById("infoDb");

let syptg = document.getElementById("synopsisTg");
let inftg = document.getElementById("infoTg");

let sypbe = document.getElementById("synopsisBe");
let infbe = document.getElementById("infoBe");

let sypbor = document.getElementById("synopsisBor");
let infbor = document.getElementById("infoBor");

let sypDBS = document.getElementById("synopsisDBS");
let infDBS = document.getElementById("infoDBS");

let sypAOT = document.getElementById("synopsisAOT");
let infAOT = document.getElementById("infoAOT");

let clique = 0;

let sous = document.getElementsByClassName("sous");
let art = document.getElementById("art");
let sousMenuArticles = document.getElementById("sousMenuArticle")

window.addEventListener("click", dis)

art.addEventListener("mouseenter", openArticle)
sousMenuArticles.addEventListener("mouseleave", closeArticle)

function openArticle() {
    for (let index = 0; index < sous.length; index++) {
        const element = sous[index];
        
    element.style.display = "block";
    }

}

function closeArticle() {
    for (let index = 0; index < sous.length; index++) {
        const element = sous[index];
        console.log(element);
    element.style.display = "none";
    }
}

function dis (event) {
    switch (event.target.id) {
        case "narutoimg":
            clique++;
            sypn.innerHTML = "Naruto (ナルト?) est un shōnen manga écrit et dessiné par Masashi Kishimoto. Naruto a été prépublié dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha entre septembre 1999 et novembre 2014. La série a été compilée en 72 tomes.";
            infn.innerHTML = "L'origine de Naruto se déroule dans un monde rétro-futuriste où, bien que de nombreuses technologies modernes aient vu le jour, les ninjas et les samouraïs sont restés de véritables puissances militaires. Chaque pays a un village, qui représente la force militaire du pays, dirigé par un Kage (prononcé Kagué). Les villages, à travers leurs ninjas, se livrent des guerres les uns aux autres, à petite ou grande échelle, que ce soit pour obtenir des caractéristiques avantageuses propres aux villages ennemis, ou pour soumettre un autre village et gagner en puissance. <br/>Une nouvelle série du nom de Naruto Shippuden (trad. litt. : Naruto : Légende de la tornade) est diffusée sur TV Tokyo depuis le 15 février 2007. Cette série reprend quant à elle la trame du manga.";
         
            break;
    
            case "Hunterimg":
                syph.innerHTML = "Hunter × Hunter (ハンターハンター, Hantā Hantā?) est un shōnen manga écrit et dessiné par Yoshihiro Togashi. Il est pré-publié depuis mars 1998 dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha, et a été compilé en trente-six tomes au 4 octobre 2018. En mai 2013, le manga s'est vendu à plus de 65 millions d'exemplaires au Japon. La version française est publiée aux éditions Kana, et trente-six tomes sont sortis au 3 mai 2019."
                infh.innerHTML = "Gon Freecss a douze ans, et rêve de devenir hunter (chasseur en anglais). Les hunters sont des citoyens d'élite autorisés à faire quasiment tout ce qu'ils souhaitent sur simple présentation de leur carte de membre : ils peuvent ainsi acquérir gratuitement tout objet à la vente sur les fonds de l'association; réquisitionner tout véhicule, logement et outil pour leur travail; et sont de facto habilités à exercer tous les métiers du monde, pouvant tout aussi bien devenir chasseurs de prime, chefs-cuisinier, archéologues, zoologues, justiciers ou consultants dans divers domaines. Son père, Ging Freecss, qu'il ne connaît pas directement, est considéré comme un des plus grands hunters de son temps. C'est aussi pour le retrouver que Gon veut devenir hunter."
            break;

            case "OnePimg":
                sypop.innerHTML = "One Punch Man (ワンパンマン, Wanpanman?) est un manga en ligne écrit et dessiné par ONE. Il est publié sur le site personnel de l'auteur depuis le 3 juin 2009. La série est devenue très populaire, dépassant les dix millions de visites avec une moyenne de 20 000 par jour."
                infop.innerHTML = "Jeune inactif ayant perdu goût à la vie, il décide de devenir un héros après avoir affronté un crabe géant. Dès lors, il s’entraîne pendant trois ans afin de devenir un puissant héros soit dix kilomètres de course à pied, cent pompes, cent abdos, cent squats, chaque jour. Après un entrainement « intensif », Saitama remarque deux changements : il est devenu terriblement fort, au point de vaincre ses ennemis en un coup, et a perdu tous ses cheveux..."
            break;

            case "DragonBimg":
                sypdb.innerHTML = "Dragon Ball (ドラゴンボール, Doragon Bōru?, litt. Dragon Ball) est une série de mangas créée par Akira Toriyama, celui-ci s'inspirant librement du roman de Wu Cheng'en La Pérégrination vers l'Ouest. Publiée pour la première fois dans le magazine Weekly Shōnen Jump de 1984 à 1995 et éditée en albums de 1985 à 1995 par Shūeisha. Glénat publie l'édition française depuis février 1993."
                infdb.innerHTML = "L'histoire de Dragon Ball suit la vie de Son Goku, un garçon à la queue de singe inspiré du conte traditionnel chinois La Pérégrination vers l'Ouest. Son Goku est un jeune garçon simple d'esprit et pur doté d'une queue de singe et d'une force extraordinaire. Il vit seul, après la mort de son grand-père adoptif, sur une montagne et en pleine nature, dans un paysage ayant les caractéristiques d'une forêt sauvage. Un jour, il rencontre Bulma, une jeune fille de la ville, très intelligente mais immature et impulsive. Elle est à la recherche des sept boules de cristal légendaires appelées Dragon Balls."
            break;

            case "TokyoGimg":
                syptg.innerHTML = "Tokyo Ghoul (東京喰種トーキヨーグール, Tōkyō Gūru?) est un manga de Sui Ishida, pré-publié dans le magazine shonen Weekly shonen g Jump depuis 2011. La première partie, Tokyo Ghoul, est parue de 2011 à 2014 et a été compilée en 14 volumes reliés. La deuxième partie, Tokyo Ghoul:re (東京喰種トーキヨーグール:re?), est publiée entre 2014 et 2018 au Japon. La version française est éditée par Glénat Manga depuis août 2013."
                inftg.innerHTML = "Dans la ville de Tokyo, des créatures nommées goules sont apparues et se nourrissent de chair humaine pour survivre. Un jour, Ken Kaneki, jeune étudiant, se fait attaquer par l'une d'entre elles et subit une grave blessure. Pour rester en vie, il reçoit une greffe de la goule qui l'a attaqué et devient un hybride, mi-humain mi-goule (borgne artificielle). Rapidement, il se rend compte qu'il ne peut plus manger les mêmes aliments qu'auparavant."
            break;

            case "BleuEimg":
                sypbe.innerHTML = "Blue Exorcist (青の祓魔師エクソシスト, Ao no Ekusoshisuto?), connu également sous le nom Ao no Exorcist, est un shōnen manga écrit et illustré par Kazue Kato. Il est prépublié depuis avril 2009 dans le magazine Jump Square de l'éditeur Shūeisha, et vingt-deux tomes sont sortis en novembre 2018. La version française est éditée par Kazé depuis mai 2010."
                infbe.innerHTML = "Le monde de Blue Exorcist se compose de deux dimensions qui s'opposent comme deux faces de miroirs. Le premier est le monde dans lequel les êtres humains vivent, Assiah. L’autre est le monde des démons, la Géhenne. Normalement, le voyage et même toute forme de contact entre les deux est impossible. Toutefois, les démons peuvent passer dans ce monde en possédant tout ce qui existe en son sein. Satan est le dieu des démons, mais il y a une chose qu’il n’a pas : un réceptacle dans le monde humain assez puissant pour le contenir. À cette fin, il a engendré Okumura Rin et Okumura Yukio (mais seul Rin a hérité des pouvoirs de Satan, Yukio étant trop faible), ses fils, d’une femme humaine, mais ces derniers sont-ils en accord avec ses plans, ou doivent-ils devenir autre chose ? Après avoir tué le père gardien Fujimoto, lors d’une tentative qui aurait dû permettre à Rin de retourner dans le monde des démons, il lui donne un rêve : devenir un exorciste pour vaincre le dieu des démons."
            break;

            case "Borutoimg":
                infbor.innerHTML = "Depuis que son père est devenu Hokage et occupe la plus haute fonction du village de Konoha, Boruto Uzumaki, fils de Naruto Uzumaki et Hinata Hyûga, vit dans l'ombre de celui-ci. Cherchant toujours à attirer l'attention de ce dernier, il a pris la ferme résolution de le surpasser. Mais la vie que mènent les ninjas de haute-volée est rythmée par les missions complexes et les entraînements rigoureux, il va d'ailleurs apprendre à ses dépens que devenir le meilleur ninja n'est pas une tâche aisée. En compagnie de Sarada Uchiwa, la fille de Sasuke Uchiwa et Sakura Haruno et de Mitsuki le fils d'Orochimaru, Boruto va dès lors découvrir l'univers des ninjas, ainsi que ses fondements."
                sypbor.innerHTML = "Boruto: Naruto Next Generations (BORUTO-ボルト- -NARUTO　NEXT　GENERATIONS-, Boruto: Naruto Nekusuto Jenerēshonzu?) est un manga dérivé faisant suite à Naruto, par Ukyō Kodachi et dessiné par Mikio Ikemoto, sous la supervision de Masashi Kishimoto, l'auteur du manga Naruto. Il est prépublié depuis le 9 mai 2016 dans le magazine Weekly Shōnen Jump et publié en volumes reliés par Shūeisha depuis août 2016. La version française est publiée par Kana depuis mars 2017.Une adaptation en anime est diffusée depuis le 5 avril 2017 sur TV Tokyo au Japon1 et en simulcast une heure après la diffusion japonaise sur Anime Digital Network en VOSTFr dans les pays francophones2 le dimanche à 9h30 pendant l'heure d'hiver et à 10h30 pendant l'heure d'été3. En France, il est diffusé depuis le 28 mai 2018 en VF sur Game One4. Au Québec, il est diffusé à 8h30 le samedi et dimanche matin sur Unis Télé ."
            break;

            case "DBSimg":
                sypDBS.innerHTML = "Dragon Ball Super (ドラゴンボール超スーパー, Doragon bōru sūpā?) est une série télévisée d'animation japonaise produite par le studio Toei Animation, diffusée du 5 juillet 2015 au 25 mars 2018 sur la chaîne Fuji TV. Akira Toriyama, auteur du manga original, est crédité en tant que scénariste et responsable du concept art des personnages1 de cette série, qui fait office de suite directe à son œuvre."
                infDBS.innerHTML ="Après le combat contre Boo, la Terre connait une période de paix. Cependant, le dieu de la destruction, Beerus (破壊神ビルス, Hakaishin Birusu?), vient de se réveiller d'un sommeil de 39 ans avec l'intention d'affronter le Super Saiyan Divin (超サイヤ人ゴッド, Sūpā Saiya-jin Goddo?), le guerrier légendaire dont parle une ancienne prophétie exprimée par le Poisson Oracle.Beerus part alors à la recherche de ce Super Saiyan Divin. Il apparaît sur la planète Kaio, là où se trouve Son Goku. Ce dernier décide de l'affronter mais malgré sa puissance en Super Saiyan 3, il ne parvient pas à le battre. Beerus va ensuite sur Terre accompagné de l'ange, Whis. Ils rencontrent Bulma, qui va les inviter à sa fête d'anniversaire. Tout se passe bien jusqu'au moment où Boo mange tous les flans. Beerus s'énerve et menace de détruire la planète Terre."
            break;

            case "AOTimg":
                sypAOT.innerHTML = "L’Attaque des Titans (進撃の巨人, Shingeki no Kyojin?, litt. Les Titans assaillants, souvent abrégé SnK) est un shōnen manga écrit et dessiné par Hajime Isayama. Il est prépublié depuis septembre 2009 dans le magazine Bessatsu Shōnen Magazine de l’éditeur Kōdansha, et trente-deux tomes sont sortis en septembre 2020. La version française est publiée par Pika Édition dans la collection seinen depuis juin 2013."
                infAOT.innerHTML ="L’histoire tourne autour du personnage d’Eren Jäger dans un monde où l’humanité vit entourée d’immenses murs pour se protéger de créatures gigantesques, les Titans. Le récit raconte le combat mené par l’humanité pour reconquérir son territoire, en éclaircissant les mystères liés à l’apparition des Titans."
            break;

        default:
            break;
    }
    
}

function setNote(){
   let HXHNote = document.getElementById("HXHNote");
     noteHXH = localStorage.getItem("Hunter X Hunter");
     HXHNote.innerHTML = noteHXH;

     let BorutoNote = document.getElementById("BorutoNote");
     noteBoruto = localStorage.getItem("Boruto");
     BorutoNote.innerHTML = noteBoruto;

     let DBSNote = document.getElementById("DBSNote");
     noteDBS = localStorage.getItem("DBS");
     DBSNote.innerHTML = noteDBS;

     let AOTNote = document.getElementById("AOTNote");
     noteAOT = localStorage.getItem("AOT");
     AOTNote.innerHTML = noteAOT;

}



/*
let naru = document.getElementById("narutoimg");
let sypn = document.getElementById("synopsisN");
let infn = document.getElementById("infoN");

let hunt = document.getElementById("Hunterimg");
let syph = document.getElementById("synopsisH");
let infh = document.getElementById("infoH");

naru.addEventListener("mouseover", sourieOn)
naru.addEventListener("mouseleave", sourieOff)
hunt.addEventListener("mouseover", sourieOn)
hunt.addEventListener("mouseleave", sourieOff)

function sourieOn() {
   sypn.style.display = "block";
   infn.style.display = "block";
   sypn.innerHTML = "Naruto (ナルト?) est un shōnen manga écrit et dessiné par Masashi Kishimoto. Naruto a été prépublié dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha entre septembre 1999 et novembre 2014. La série a été compilée en 72 tomes.";
   infn.innerHTML = "L'origine de Naruto se déroule dans un monde rétro-futuriste où, bien que de nombreuses technologies modernes aient vu le jour, les ninjas et les samouraïs sont restés de véritables puissances militaires. Chaque pays a un village, qui représente la force militaire du pays, dirigé par un Kage (prononcé Kagué). Les villages, à travers leurs ninjas, se livrent des guerres les uns aux autres, à petite ou grande échelle, que ce soit pour obtenir des caractéristiques avantageuses propres aux villages ennemis, ou pour soumettre un autre village et gagner en puissance";

   syph.style.display = "block";
   infh.style.display = "block";
   syph.innerHTML = "Hunter × Hunter (ハンターハンター, Hantā Hantā?) est un shōnen manga écrit et dessiné par Yoshihiro Togashi. Il est pré-publié depuis mars 1998 dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha, et a été compilé en trente-six tomes au 4 octobre 2018. En mai 2013, le manga s'est vendu à plus de 65 millions d'exemplaires au Japon. La version française est publiée aux éditions Kana, et trente-six tomes sont sortis au 3 mai 2019."
   infh.innerHTML = "Gon Freecss a douze ans, et rêve de devenir hunter (chasseur en anglais). Les hunters sont des citoyens d'élite autorisés à faire quasiment tout ce qu'ils souhaitent sur simple présentation de leur carte de membre : ils peuvent ainsi acquérir gratuitement tout objet à la vente sur les fonds de l'association; réquisitionner tout véhicule, logement et outil pour leur travail; et sont de facto habilités à exercer tous les métiers du monde, pouvant tout aussi bien devenir chasseurs de prime, chefs-cuisinier, archéologues, zoologues, justiciers ou consultants dans divers domaines. Son père, Ging Freecss, qu'il ne connaît pas directement, est considéré comme un des plus grands hunters de son temps. C'est aussi pour le retrouver que Gon veut devenir hunter."
}

function sourieOff() {
    sypn.style.display = "none";
    infn.style.display = "none";

    syph.style.display = "none";
    infh.style.display = "none";
 }
 */