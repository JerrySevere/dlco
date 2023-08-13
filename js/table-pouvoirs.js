const table_pouvoirs = {
    title: 'Pouvoirs',
    items:[
              {
                  "name": "Adaptation environnementale",
                  "description": "<p>Les aventuriers voyagent parfois sous les oc\u00e9ans, dans le ciel ou dans d\u2019autres environnements dangereux. Ce pouvoir permet de respirer, parler et de se d\u00e9placer \u00e0 son Allure normale sous l\u2019eau, dans le vide, la lave d\u2019un volcan, la chaleur br\u00fblante d\u2019un d\u00e9sert ou le froid glacial des steppes arctiques, etc. La pression, l\u2019atmosph\u00e8re, l\u2019air ainsi que tous les aspects n\u00e9cessaires \u00e0 la vie du personnage sont&nbsp;fournis par ce pouvoir.</p>\n<p>La protection est compl\u00e8te, mais ne concerne que l\u2019environnement. Une boule de feu fera des d\u00e9g\u00e2ts normaux \u00e0 un personnage prot\u00e9g\u00e9 par ce pouvoir. En cas de r\u00e9ussite du jet d\u2019Arcane, le pouvoir est activ\u00e9. Sur une Relance, le co\u00fbt de maintien de ce pouvoir est de 1 pour 2 heures.&nbsp;</p>\n<p>Cibles suppl\u00e9mentaires : l\u2019arcaniste peut affecter&nbsp;jusqu\u2019\u00e0 cinq cibles en payant 2 PP par cible.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible.</p>\n<p>\u00c9lu : aucun effet visible.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : une armure de m\u00e9tal, un projecteur de champ de force.</p>\n<p>Maitre Chi : disponible, mais la Dur\u00e9e est grandement&nbsp;r\u00e9duite. Le personnage doit effectuer un jet d\u2019Intellect&nbsp;&nbsp;pour \u00ab se concentrer \u00bb et maintenir son pouvoir chaque round.</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "1 heure (1 / heure)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Vitesse",
                  "description": "<p>Les combattants qui ont besoin de se rapprocher le plus rapidement possible de leurs ennemis utilisent r\u00e9guli\u00e8rement ce pouvoir, tout autant que ceux qui doivent distancer les cr\u00e9atures les plus rapides.</p>\n<p>Vitesse permet \u00e0 la cible de se d\u00e9placer plus rapidement. Avec un succ\u00e8s, l\u2019Allure est doubl\u00e9e. Avec une Relance, courir devient une action gratuite, n\u2019infligeant donc plus le malus de -2 habituel.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : appel\u00e9 vitesse du faucon.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : potion de vitesse, chaussures hydrauliques, acc\u00e9l\u00e9rant musculaire.</p>\n<p>Maitre Chi : le personnage devient flou.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Barri\u00e8re",
                  "description": "<p>Barri\u00e8re cr\u00e9e un mur solide et immobile, pour prot\u00e9ger l\u2019arcaniste ou emprisonner un adversaire. Quel que soit la mani\u00e8re dont est faite la barri\u00e8re (glace, pierre, \u00e9nergie, etc.), elle a une R\u00e9sistance de 10. Chaque Point de Pouvoir d\u00e9pens\u00e9 cr\u00e9e une section de mur large d\u2019une case. L\u2019\u00e9paisseur de la barri\u00e8re varie entre quelques centim\u00e8tres pour les mat\u00e9riaux durs jusqu\u2019\u00e0 30 centim\u00e8tres pour les mat\u00e9riaux comme les os ou la glace. Le positionnement est laiss\u00e9 \u00e0 la discr\u00e9tion de l\u2019arcaniste, mais chaque section au-del\u00e0 de la premi\u00e8re doit \u00eatre li\u00e9e \u00e0 au moins une autre. Lorsque le pouvoir arrive \u00e0 son terme, ou quand la barri\u00e8re est bris\u00e9e, elle tombe en poussi\u00e8re.</p>\n<p>Chaque section de la barri\u00e8re peut \u00eatre d\u00e9truite par une attaque d\u00e9passant sa R\u00e9sistance de 10. Frapper le mur est automatique avec une attaque de corps \u00e0 corps (une attaque \u00e0 distance implique un jet normal, par contre, une Relance n\u2019octroie pas de bonus aux d\u00e9g\u00e2ts).</p>\n<p>Il est possible d\u2019escalader une barri\u00e8re solide avec un jet d\u2019Escalade dot\u00e9 d\u2019un malus de -2. Les versions enflamm\u00e9es peuvent \u00eatre travers\u00e9es mais provoquent 2d4 points de d\u00e9g\u00e2ts.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : un mur de force presque invisible.</p>\n<p>Huckster : un feu qui inflige 2d4 points de d\u00e9g\u00e2ts lorsqu\u2019on tente de le traverser. Appel\u00e9 cercle de feu.</p>\n<p>Savant fou : un \u00ab pi\u00e8ge instantan\u00e9 \u00bb, un pistolet paralysant, un gel incendiaire (2d4 points de d\u00e9g\u00e2ts pour traverser).</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "3 (1 / Round)"
              },
              {
                  "name": "Transformation",
                  "description": "<p>De nombreuses cultures content des l\u00e9gendes de chamanes ou de sorciers capables de prendre la forme d\u2019animaux normaux. C\u2019est tout \u00e0 fait ce que permet ce pouvoir : se transformer en animaux, voire en cr\u00e9atures encore plus \u00e9tranges.</p>\n<p>Un personnage peut apprendre ce sort d\u00e8s le Rang Novice, mais il ne peut adopter la forme des cr\u00e9atures les plus puissantes avant d\u2019avant atteint le Rang requis. Le co\u00fbt en Points de Pouvoir d\u00e9pend du type de cr\u00e9ature dans lequel le personnage souhaite se transformer. Utilise la table ci-dessous pour d\u00e9terminer le co\u00fbt et le Rang minimum pour un type de cr\u00e9ature que tu n\u2019y trouveras pas.</p>\n<p>Les armes et autres effets personnels sont transform\u00e9s en m\u00eame temps que le personnage, r\u00e9apparaissant \u00e0 la fin du pouvoir, mais les autres objets tombent \u00e0 terre.</p>\n<p>Lorsqu\u2019il est transform\u00e9, le personnage conserve son \u00c2me, son Intellect, et les Comp\u00e9tences associ\u00e9es (bien que, incapable de parler, il ne pourra certainement pas utiliser certaines d\u2019entre elles). Il prend la Force, l\u2019Agilit\u00e9 et les Comp\u00e9tences associ\u00e9es de l\u2019animal. Il devient incapable d\u2019utiliser la plupart des machines. Il ne peut pas parler ni utiliser des pouvoirs, bien qu\u2019il puisse continuer \u00e0 en maintenir. La Vigueur passe au meilleur des valeurs entre celle de l\u2019arcaniste et celle de l\u2019animal.</p>\n<p>Le Marshal d\u00e9cide ce qu\u2019un animal peut ou ne pas faire. Un chamane transform\u00e9 en chien pourra tenter d\u2019appuyer sur la g\u00e2chette d\u2019un fusil, par exemple, mais la Comp\u00e9tence utilis\u00e9e sera le Tir de l\u2019animal, soit d4-2 puisque le chien n\u2019a pas cette Comp\u00e9tence. Il peut utiliser la Persuasion, mais sans la parole, il subit un malus de -4 \u00e0 ses tentatives, ou m\u00eame encore plus en fonction des circonstances.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane prend la forme de l\u2019animal choisi.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>Co\u00fbt /&nbsp; &nbsp;Rang /&nbsp;&nbsp;Animaux</p>\n<p>3 /&nbsp; &nbsp;Novice/&nbsp;&nbsp;Faucon, lapin, chat</p>\n<p>4 /&nbsp; Aguerri /&nbsp;&nbsp;Chien, loup, cerf</p>\n<p>5 /&nbsp; V\u00e9t\u00e9ran /&nbsp;&nbsp;Lion, tigre</p>\n<p>6 / &nbsp;H\u00e9ro\u00efque /&nbsp;&nbsp;Ours, requin</p>\n<p>7 /&nbsp; L\u00e9gendaire /&nbsp;&nbsp;Grand requin blanc</p>\n<p>&nbsp;</p>",
                  "rank": "sp\u00e9cial",
                  "pp": "0",
                  "damage": "",
                  "range": "Personnelle",
                  "duration": "1 minute (1 / minute)"
              },
              {
                  "name": "Sanctification",
                  "description": "<p>Gr\u00e2ce \u00e0 sanctification, un \u00e9lu ou un chamane consacre des zones enti\u00e8res de terrain et provoque une grande souffrance chez les cr\u00e9atures mal\u00e9fiques surnaturelles tentant d\u2019y p\u00e9n\u00e9trer.</p>\n<p>L\u2019\u00e9lu doit passer une semaine enti\u00e8re en pri\u00e8re et rester dans les limites de la zone choisie durant tout ce temps. Cette derni\u00e8re est d\u00e9limit\u00e9e par le Marshal mais englobe en g\u00e9n\u00e9ral une \u00e9glise, un champ de bataille ou tout autre lieu d\u2019importance. S\u2019il n\u2019y a aucune limite pr\u00e9cise, la zone prot\u00e9g\u00e9e sera \u00e9gale \u00e0 cinq fois la Comp\u00e9tence d\u2019Arcane dupersonnage en m\u00e8tres.</p>\n<p>\u00c0 la fin du rituel, un jet d\u2019Arcane est effectu\u00e9. En cas de r\u00e9ussite, la zone est sanctifi\u00e9e. En cas d\u2019\u00e9chec, le pr\u00eatre doit recommencer depuis le d\u00e9but. Une cr\u00e9ature mal\u00e9fique surnaturelle qui tente de p\u00e9n\u00e9trer sur cette terre consacr\u00e9e doit r\u00e9ussir un jet d\u2019\u00c2me \u00e0 chaque round ou subir une blessure.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane cr\u00e9e une peinture de sable \u00e9labor\u00e9e (ou tout autre rituel) au centre de la zone.</p>\n<p>\u00c9lu : aspersion d\u2019eau b\u00e9nite et pri\u00e8re.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "10",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "Permanent jusqu'\u00e0 d\u00e9sacralisation"
              },
              {
                  "name": "T\u00e9l\u00e9kin\u00e9sie",
                  "description": "<p>T\u00e9l\u00e9kin\u00e9sie repr\u00e9sente la capacit\u00e9 de d\u00e9placer un objet ou une cr\u00e9ature (y compris soi) par un pouvoir d\u2019arcane. Un arcaniste peut soulever 5 fois son d\u00e9 d\u2019\u00c2me avec un succ\u00e8s, et 25 fois son d\u00e9 d\u2019\u00c2me avec une Relance.</p>\n<p>Soulever des cr\u00e9atures : les cibles vivantes peuvent r\u00e9sister \u00e0 ce pouvoir avec un jet d\u2019\u00c2me oppos\u00e9 au jet d\u2019Arcane. En cas de succ\u00e8s, la cible n\u2019est pas affect\u00e9e. En cas d\u2019\u00e9chec par contre, elle est soulev\u00e9e comme l\u2019indique ce pouvoir, et ne b\u00e9n\u00e9ficie pas d\u2019autres chances d\u2019y \u00e9chapper.</p>\n<p>Une victime peut occasionnellement r\u00e9ussir \u00e0 s\u2019agripper \u00e0 quelque chose d\u2019assez solide pour essayer de r\u00e9sister \u00e0 T\u00e9l\u00e9kin\u00e9sie. Dans ce cas, il doit r\u00e9ussir un jet de Force oppos\u00e9 \u00e0 un jet d\u2019Arcane du personnage. En cas de succ\u00e8s, il a r\u00e9ussi \u00e0 s\u2019agripper, et ne peut pas \u00eatre d\u00e9plac\u00e9 ou \u00e9cras\u00e9 ce round.</p>\n<p>Armes t\u00e9l\u00e9kin\u00e9tiques : un arcaniste peut utiliser ce pouvoir pour brandir une arme et la faire attaquer. Dans ce cas, sa Comp\u00e9tence Combat est la m\u00eame que sa Comp\u00e9tence Arcane, et les d\u00e9g\u00e2ts sont bas\u00e9s sur son \u00c2me plut\u00f4t que sur sa Force. Par exemple, une \u00e9p\u00e9e courte faisant Force+d6 points de d\u00e9g\u00e2ts fera \u00c2me+d6 points de d\u00e9g\u00e2ts quand elle est utilis\u00e9e gr\u00e2ce \u00e0 un pouvoir de T\u00e9l\u00e9kin\u00e9sie.</p>\n<p>L\u2019arme se comporte normalement, et octroie toujours un bonus aux d\u00e9g\u00e2ts en cas de Relance lors de l\u2019attaque.</p>\n<p>Chutes : des personnages plus tourn\u00e9s vers la violence utilisent parfois ce pouvoir pour faire chuter leurs victimes de grandes hauteurs ou les balancer contre des mur tels des pantins d\u00e9sarticul\u00e9s. Une cr\u00e9ature peut \u00eatre d\u00e9plac\u00e9e d\u2019autant de cases que le d\u00e9 d\u2019Intellect de l\u2019arcaniste. Les cr\u00e9atures \u00ab l\u00e2ch\u00e9es \u00bb subissent les d\u00e9g\u00e2ts de chute habituels. Les victimes qui sont pr\u00e9cipit\u00e9es contre des murs ou d\u2019autres objets solides subissent \u00c2me+d6 points de d\u00e9g\u00e2ts.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster agite sa main comme s\u2019il contr\u00f4lait la force. Appel\u00e9 doigts fantomatiques.</p>\n<p>Savant fou : un projecteur magn\u00e9tique, un g\u00e9n\u00e9rateur de force.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "5",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "3 (1 / Round)"
              },
              {
                  "name": "Dissipation",
                  "description": "<p>Dissipation permet \u00e0 un personnage d\u2019annuler les sortil\u00e8ges, miracles, appareils de Science \u00e9trange ou les manifestation de maitrise du chi de ses ennemis. Il n\u2019a aucun effet sur les pouvoirs inn\u00e9s. Il ne fonctionne pas non plus sur les objets magiques ou les enchantements, \u00e0 moins que l\u2019objet ou l\u2019enchantement ne sp\u00e9cifie le contraire.</p>\n<p>Dissipation peut \u00eatre utilis\u00e9 sur un pouvoir en cours d\u2019utilisation et \u00e9galement pour contrer un pouvoir au moment o\u00f9 il est lanc\u00e9. Dans le second cas, l\u2019arcaniste doit \u00eatre En attente et tenter d\u2019interrompre l\u2019action de son adversaire.</p>\n<p>Dans les deux cas, la r\u00e9solution est g\u00e9r\u00e9e par un jet d\u2019Arcane oppos\u00e9 entre les deux adversaires. Le personnage tentant la dissipation subit un malus de -2 \u00e0 son jet si sa cible utilise un type d\u2019Arcane diff\u00e9rent du sien (magie contre miracles, etc.)</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : une courte danse d\u00e9di\u00e9e \u00e0 Coyote, le roublard.</p>\n<p>\u00c9lu : un serment au nom de son dieu.</p>\n<p>Huckster : un geste de la main.</p>\n<p>Savant fou : un d\u00e9chargeur d\u2019\u00e9nergie n\u00e9gative.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "3",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "Instantann\u00e9e"
              },
              {
                  "name": "Manipulation \u00e9l\u00e9mentaire",
                  "description": "<p>Un personnage qui choisit ce pouvoir doit s\u00e9lectionner un \u00e9l\u00e9ment auquel il s\u2019applique. Il peut toutefois choisir \u00e0 nouveau ce pouvoir et l\u2019associer \u00e0 un autre \u00e9l\u00e9ment gr\u00e2ce \u00e0 l\u2019Atout Nouveau Pouvoir. Manipulation \u00e9l\u00e9mentaire permet d\u2019accomplir de petites t\u00e2ches li\u00e9es \u00e0 l\u2019\u00e9l\u00e9ment s\u00e9lectionn\u00e9.</p>\n<p>Voici une liste d\u2019exemples :</p>\n<p>Air : l\u2019arcaniste peut cr\u00e9er de petits courants d\u2019air capables d\u2019\u00e9teindre une chandelle, attiser un feu, soulever une jupe ou rafraichir son corps d\u2019une chaleur \u00e9touffante (+1 \u00e0 un jet de fatigue provoqu\u00e9 par de la chaleur).</p>\n<p>Terre : d\u2019un geste de la main, l\u2019arcaniste peut faire un trou d\u2019une trentaine de centim\u00e8tres de c\u00f4t\u00e9 dans de la terre meuble (la moiti\u00e9 dans de la pierre), ou projeter du sable dans le visage d\u2019un adversaire pour l\u2019aveugler (+1 \u00e0 un jet de Ruse).</p>\n<p>Feu : l\u2019arcaniste peut d\u2019un claquement de doigts cr\u00e9er une petite flamme (de la taille de celle d\u2019une allumette). Il peut attiser un feu existant (+1 au jet pour d\u00e9terminer si un feu s\u2019\u00e9tend), le faire brusquement flamber plus fort (potentiellement dans le cadre d\u2019une Ruse), ou enflammer lentement un objet (comme avec une allumette).</p>\n<p>Eau : l\u2019arcaniste peut faire appara\u00eetre un demi-litre d\u2019eau quelque part \u00e0 vue (mais pas \u00e0 l\u2019int\u00e9rieur d\u2019une personne ou d\u2019un objet). D\u2019un geste de la main, il peut purifier 4 litres d\u2019eau, qu\u2019il s\u2019agisse d\u2019eau empoisonn\u00e9e, croupie ou simplement d\u2019eau de mer. Une personne empoisonn\u00e9e depuis moins d\u2019une minute peut \u00e9galement b\u00e9n\u00e9ficier de ce pouvoir et gagner une seconde chance de r\u00e9sister aux effets du poison.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : air et terre uniquement. Un court serment aux esprits animaux. L\u2019esprit accomplit ensuite l\u2019acte \u2013 un g\u00e9moys2 creusera un trou, un faucon attisera une flamme, etc.</p>\n<p>\u00c9lu : air et eau uniquement. Les pr\u00eatres vaudou manipulent \u00e9galement le feu.</p>\n<p>Huckster : air et feu uniquement. Un geste de la main.</p>\n<p>Savant fou : g\u00e9n\u00e9rateur de foudre.</p>\n<p>Maitre Chi : air uniquement. Un geste de la main.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Intellect x 2",
                  "duration": "Instantan\u00e9e",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Vol",
                  "description": "<p>Vol permet \u00e0 un personnage de voler \u00e0 son Allure, et de monter \u00e0 la moiti\u00e9 de cette vitesse. Ces vitesses peuvent \u00eatre doubl\u00e9es en multiplant par 2 le nombre de Points de Pouvoir lors du d\u00e9clenchement du pouvoir.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : uniquement disponible pour les \u00ab sorci\u00e8res \u00bb personnages non-joueurs.</p>\n<p>Savant fou : un disque volant, un ornithopt\u00e8re, un propulseur dorsal.</p>\n<p>Maitre Chi : le personnage ne vole pas vraiment mais il</p>\n<p>peut \u00ab sauter \u00bb et faire de grands bonds au-dessus de</p>\n<p>la cime des arbres, danser sur les lances, etc.</p>\n<p>&nbsp;</p>",
                  "rank": "V\u00e9t\u00e9ran",
                  "pp": "3",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": false,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "T\u00e9n\u00e8bres",
                  "description": "<p>Ce pouvoir fait exactement ce que son nom indique : il cr\u00e9e une aura de t\u00e9n\u00e8bres sur un Grand Gabarit. Les attaques vers, depuis ou \u00e0 travers la zone subissent le malus habituel de l\u2019obscurit\u00e9 totale de -6.</p>\n<p>T\u00e9n\u00e8bres doit \u00eatre lanc\u00e9 sur un objet inanim\u00e9 comme une pi\u00e8ce, une \u00e9p\u00e9e, un bouclier, ou m\u00eame les v\u00eatements d\u2019un personnage. Si l\u2019objet est une possession d\u2019un adversaire, le jet d\u2019Arcanes est oppos\u00e9 \u00e0 un jet d\u2019Agilit\u00e9 de la cible.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster claque des doigts.</p>\n<p>Savant fou : un objet annulateur de lumi\u00e8re, une bombe ou une potion fumig\u00e8ne.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "3 (1 / Round)"
              },
              {
                  "name": "Enfouissement",
                  "description": "<p>Ce pouvoir permet \u00e0 un arcaniste se trouvant sur de la terre de se fondre dans le sol. Il peut rester dans le sol dans une sorte de \u00ab limbe \u00bb, ou se d\u00e9placer dans la port\u00e9e du pouvoir. Un h\u00e9ros avec un Intellect de d8 peut ainsi se d\u00e9placer de 16 cases (32 m\u00e8tres) lors du premier round, maintenir le sort et rester sous terre pendant le second round, et se d\u00e9placer \u00e0 nouveau de 16 cases avant la fin du sort.</p>\n<p>Un personnage enfoui peut tenter de surprendre une cible (m\u00eame si cette derni\u00e8re l\u2019a vu dispara\u00eetre sous terre) en r\u00e9ussissant un jet oppos\u00e9 de Discr\u00e9tion contre la Perception de l\u2019adversaire. En cas de Succ\u00e8s, il b\u00e9n\u00e9ficie d\u2019un bonus de +2 \u00e0 l\u2019attaque et aux d\u00e9g\u00e2ts, et +4 en cas de Relance. Une cible En attente peut tenter d\u2019interrompre l\u2019attaque norma-lement.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : les chamanes peuvent utiliser ce pouvoir mais se d\u00e9placent tr\u00e8s lentement et ne peuvent jamais prendre le dessus sur ses victimes. Ils peuvent se d\u00e9placer de 2 cases par round au lieu de deux fois leur Intellect.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : une machine personnelle pouvant enfouir, un petit engin v\u00e9hicul\u00e9.</p>\n<p>Maitre Chi : le personnage plonge dans la terre et en ressort \u00e0 grande vitesse, comme une toupie humaine.</p>\n<p>Appel\u00e9 la rotation de la terre.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Intellect x 2",
                  "duration": "3 (2 / round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": false,
                      "huckster": false,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Enchev\u00eatrement",
                  "description": "<p>Ce pouvoir permet \u00e0 un personnage de restreindre les mouvements d\u2019une cible gr\u00e2ce \u00e0 des lianes, des m\u00e8ches de cheveux, des toiles d\u2019araign\u00e9e ou des plantes grimpantes. Le jet d\u2019Arcane est oppos\u00e9 \u00e0 un jet d\u2019Agilit\u00e9 de la cible. En cas de succ\u00e8s, la cible est partiellement emp\u00eatr\u00e9e, et subit un malus de -2 \u00e0 son Allure, ainsi qu\u2019\u00e0 tous les jets de Comp\u00e9tences li\u00e9es \u00e0 la Force ou \u00e0 l\u2019Agilit\u00e9. Avec une Relance, la cible est totalement immobilis\u00e9e et ne peut pas utiliser de Comp\u00e9tences li\u00e9es \u00e0 la Force ou \u00e0 l\u2019Agilit\u00e9.</p>\n<p>Chaque round suivant, une cible affect\u00e9e peut tenter de s\u2019\u00e9chapper en r\u00e9ussissant un jet de Force ou d\u2019Agilit\u00e9. D\u2019autre personnages peuvent \u00e9galement tenter de lib\u00e9rer une victime en r\u00e9ussissant un jet de Force avec une p\u00e9nalit\u00e9 de -2.</p>\n<p>Pour 2 Points de Pouvoir, Enchev\u00eatrement affecte une cible unique. Pour 4 Points de Pouvoir, il affecte toutes les cibles dans un Gabarit Moyen.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : des racines ou des branches anim\u00e9es.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : la cible est li\u00e9e par des bandes mystiques d\u2019\u00e9nergie indubitablement surnaturelles. Appel\u00e9 liens mystiques.</p>\n<p>Savant fou : une machine \u00e0 enchev\u00eatrer, des bolas \u00ab m\u00e9moire \u00bb en m\u00e9tal.</p>\n<p>Maitre Chi : le personnage lance un morceau de corde ou de cha\u00eene d\u2019enchev\u00eatrement sur son adversaire.</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "Sp\u00e9cial",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Joueur",
                  "description": "<p>Cet effet mineur permet \u00e0 certains arcanistes de transformer le pouvoir magique en chance insolente. S\u2019il r\u00e9ussit, le personnage convertit 5 Points de Pouvoir en un Jeton tir\u00e9 au hasard dans le Pot. Un \u00e9chec irritera au contraire les capricieux esprits de la chance et lui co\u00fbtera un Jeton. Il ne pourra pas d\u00e9penser de Jeton sur le jet d\u2019arcane, pas plus qu\u2019il ne pourra le faire s\u2019il n\u2019a plus de Jeton \u00e0 engager.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : aucun effet visible. Appel\u00e9 saint flambeur.</p>\n<p>Huckster : aucun effet visible. Appel\u00e9 tapis.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : un moment de concentration.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "5",
                  "damage": "",
                  "range": "Personnelle",
                  "duration": "Permanente",
                  "classe_arcane": {
                      "chaman": false,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": false,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Ami des b\u00eates",
                  "description": "<p>Ce pouvoir permet \u00e0 l\u2019arcaniste de parler aux animaux et&nbsp; de guider leurs actions. Il ne fonctionne qu\u2019avec les cr\u00e9atures dot\u00e9es d\u2019une intelligence animale, et en aucun cas sur les humano\u00efdes, les cr\u00e9atures conjur\u00e9es, magiques ou les&nbsp;animaux surnaturels. L\u2019animal doit se trouver dans la port\u00e9e du sort, il n\u2019appara\u00eet pas par magie.&nbsp; Le co\u00fbt du contr\u00f4le d\u00e9pend de la Taille de la cr\u00e9ature. Le co\u00fbt de base est de 3, plus le double de la Taille si cette derni\u00e8re est sup\u00e9rieure \u00e0 0.&nbsp;</p>\n<p>Il est \u00e9galement possible de contr\u00f4ler des essaims. Le co\u00fbt&nbsp;est de 3 pour les petits essaims, 5 pour les moyens et 8 pour&nbsp;les gros. Ainsi, contr\u00f4ler un rat co\u00fbte 3 Points de Pouvoir,&nbsp;autant que pour contr\u00f4ler un petit essaim de ces cr\u00e9atures.&nbsp;</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible.</p>\n<p>\u00c9lu : aucun effet visible.</p>\n<p>Huckster : le huckster sort une carte appropri\u00e9e de sa&nbsp;manche. Appel\u00e9 appel de la nature.</p>\n<p>Savant fou : un spray de ph\u00e9romones de contr\u00f4le, un&nbsp;rayon manipulateur d\u2019animaux.</p>\n<p>Maitre Chi : aucun effet visible.&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "",
                  "damage": "",
                  "range": "Intellect x 100 m\u00e8tres",
                  "duration": "10 minutes",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Explosion",
                  "description": "<p>Explosion est un pouvoir \u00e0 aire d\u2019effet qui peut affecter un grand nombre d\u2019adversaires en m\u00eame temps. Le personnage d\u00e9termine d\u2019abord o\u00f9 il veut centrer l\u2019aire d\u2019effet et fait le jet appropri\u00e9. Les modificateurs d\u2019attaque \u00e0 distance s\u2019appliquent normalement.</p>\n<p>L\u2019aire d\u2019effet est d\u00e9finie par un Gabarit Moyen. Si le jet est rat\u00e9, l\u2019Explosion est d\u00e9vi\u00e9e de la m\u00eame mani\u00e8re qu\u2019un projectile. Tous ceux situ\u00e9s dans l\u2019aire d\u2019effet subissent 2d6 points de d\u00e9g\u00e2ts. Contrairement aux autres attaques, les Relances n\u2019ajoutent pas de d\u00e9g\u00e2ts suppl\u00e9mentaires aux attaques \u00e0 aire d\u2019effet.</p>\n<p>Effets additionnels : pour le double de Points de Pouvoir, Explosion inflige 3d6 points de d\u00e9g\u00e2ts ou affecte une aire d\u00e9finie par un Grand Gabarit. Pour le triple de points, Explosion fait les deux.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : une carte lanc\u00e9e qui explose en une boule d\u2019\u00e9nergie verte. Appel\u00e9 as dans le pot.</p>\n<p>Savant fou : un pistolet \u00e0 boule de feu.</p>\n<p>Maitre Chi : la version arts martiaux n\u2019a aucune port\u00e9e mais transforme le personnage en un tourbillon explosif de pieds et de poings. Centrez le gabarit sur lui. Tout ce qui s\u2019y trouve subit des d\u00e9g\u00e2ts. Appel\u00e9 la furie attise les flammes.</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "2",
                  "damage": "",
                  "range": "24 / 48 / 96",
                  "duration": "Instantan\u00e9e",
                  "classe_arcane": {
                      "chaman": false,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Rapidit\u00e9",
                  "description": "<p>Il n\u2019y a rien de plus rapide qu\u2019un flingueur sous l\u2019influence de ce stup\u00e9fiant pouvoir. Avec un succ\u00e8s, la cible peut faire deux actions par round au lieu d\u2019une, sans encourir le malus d\u2018Actions multiples. Avec une Relance, la cible obtient le m\u00eame avantage, et peut en outre, chaque round, d\u00e9fausser toute carte d\u2019initiative inf\u00e9rieure \u00e0 8.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : la l\u00e9g\u00e8re silhouette d\u2019un esprit loup. Appel\u00e9 vitesse du loup.</p>\n<p>\u00c9lu : aucun effet visible. Appel\u00e9 vitesse divine.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : une potion de rapidit\u00e9, un acc\u00e9l\u00e9rateur (ou un ralentisseur !) de temps.</p>\n<p>Maitre Chi : aucun effet visible.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "4",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (2 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Invisibilit\u00e9",
                  "description": "<p>\u00catre invisible constitue une aide consid\u00e9rable lors d\u2019un combat, et est particuli\u00e8rement utile pour espionner les filles du saloon aussi !</p>\n<p>Avec un succ\u00e8s, le personnage est transparent mais sa silhouette est visible. Il est possible de le d\u00e9tecter en ayant une raison de se douter de sa pr\u00e9sence et en r\u00e9ussissant un jet de Perception avec une p\u00e9nalit\u00e9 de -4. Une fois d\u00e9tect\u00e9, il peut attaquer son adversaire (avec un malus de -4 \u00e9galement) Avec une Relance, le personnage est totalement invisible, et la p\u00e9nalit\u00e9 passe \u00e0 -6.</p>\n<p>Dans les deux cas, le pouvoir affecte le personnage et les objets qu\u2019il transporte. Un objet saisi apr\u00e8s que le pouvoir ait \u00e9t\u00e9 lanc\u00e9 reste visible.</p>\n<p>Cibles suppl\u00e9mentaires : le personnage peut affecter jusqu\u2019\u00e0 5 cibles, \u00e0 condition de d\u00e9penser 5 PP par cible.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster se concentre simplement et dispara\u00eet.</p>\n<p>Savant fou : une ceinture ou une potion d\u2019invisibilit\u00e9.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "5",
                  "damage": "",
                  "range": "Personnelle",
                  "duration": "3 (1 / Round)"
              },
              {
                  "name": "Colifichet",
                  "description": "<p>Le huckster met la main dans une poche, une bourse ou un sac et en ressort un petit objet ordinaire.</p>\n<p>Le co\u00fbt en Point de Pouvoir d\u00e9pend de l\u2019objet que le personnage esp\u00e8re y trouver. Malheureusement, celui-ci est temporaire et ne dure qu\u2019un nombre de rounds \u00e9gal \u00e0 l\u2019Intellect du huckster.</p>\n<p>Co\u00fbt /&nbsp;&nbsp;Objet</p>\n<p>1 PP -&gt;&nbsp;&nbsp;Allumette, pi\u00e8ce de 1 \u00a2</p>\n<p>2 PP -&gt;&nbsp;Foulard, carte \u00e0 jouer quelconque, pi\u00e8ce de 5 \u00a2</p>\n<p>3 PP -&gt;&nbsp;Derringer, couteau, 25 \u00a2</p>\n<p>4 PP -&gt;&nbsp;&nbsp;Pistolet, pi\u00e8ce de 5 $, une carte \u00e0 jouer pr\u00e9cise</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster cherche dans un contenant quelconque.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "",
                  "damage": "",
                  "range": "Vue",
                  "duration": "1 (Concentration)"
              },
              {
                  "name": "Pressentiment",
                  "description": "<p>Les forces des t\u00e9n\u00e8bres d\u00e9testent vraiment ce sort. Il donne aux hucksters des visions du pass\u00e9 d\u2019une personne, d\u2019un lieu ou d\u2019une chose.</p>\n<p>En cas de r\u00e9ussite du jet d\u2019Arcane, il obtient une vision, un sentiment, une intuition, ou un pressentiment, \u00e0 propos d\u2019un \u00e9v\u00e9nement qui est survenu dans le pass\u00e9 de la personne ou de l\u2019objet cibl\u00e9. Les Relances donnent acc\u00e8s \u00e0 plus d\u2019information, au bon vouloir du Marshal.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster doit se donner une main d\u2019un paquet de cartes et les \u00e9tudier.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "3",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "Permanente"
              },
              {
                  "name": "Protection",
                  "description": "<p>Pour les cr\u00e9atures des t\u00e9n\u00e8bres, un \u00e9lu ou un chamane qui ne fait rien d\u2019autre que se concentrer sur sa foi est tr\u00e8s difficile \u00e0 affronter. Les arcanistes dont la religion utilise un symbole particulier (le crucifix, l\u2019\u00e9toile de David, etc.) b\u00e9n\u00e9ficient d\u2019un bonus de +2 \u00e0 leur jet d\u2019arcane lorsqu\u2019ils brandissent ce symbole.</p>\n<p>Le personnage ne doit ni bouger, ni agir quand il fait appel \u00e0 ce pouvoir. Une cr\u00e9ature surnaturelle qui veut l\u2019attaquer directement alors qu\u2019il est sous l\u2019influence de la protection doit avant tout remporter un jet d\u2019\u00c2me oppos\u00e9 \u00e0 sa Comp\u00e9tence d\u2019Arcane.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : des chants calmes et r\u00e9p\u00e9t\u00e9s.</p>\n<p>\u00c9lu : le symbole de sa foi.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "0",
                  "damage": "",
                  "range": "Personnelle",
                  "duration": "Concentration"
              },
              {
                  "name": "Inspiration",
                  "description": "<p>Les \u00e9lus utilisent ce puissant miracle pour enrayer les effets pernicieux de la peur sur la r\u00e9gion elle-m\u00eame.</p>\n<p>Lorsqu\u2019il est utilis\u00e9 en conjonction avec le r\u00e9cit d\u2019un conte h\u00e9ro\u00efque, ce pouvoir ajoute un bonus de +2 (+4 sur une Relance) sur le jet de Persuasion effectu\u00e9 afin de r\u00e9duire le Niveau de Peur d\u2019un lieu. Les \u00e9lus n\u2019ont pas besoin de raconter eux-m\u00eames l\u2019histoire, ils peuvent lancer le miracle sur un conteur plus aguerri.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : un bon vieux sermon enthousiaste du genre apocalyptique.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "5",
                  "damage": "",
                  "range": "Sp\u00e9cial",
                  "duration": "Instantan\u00e9e"
              },
              {
                  "name": "Marche Sauvage",
                  "description": "<p>Un arcaniste utilisant ce pouvoir peut se d\u00e9placer en ext\u00e9rieur sans faire de bruit ni laisser de trace. Les esprits de la nature \u00e9touffent le bruit de ses pas et conf\u00e8rent un bonus de +2 \u00e0 ses jets de Discr\u00e9tion. Ils brouillent \u00e9galement ses traces et rendent toute tentative de pistage impossible. Le miracle ne s\u2019applique cependant pas \u00e0 ses compagnons. Ce pouvoir ne peut s\u2019utiliser en int\u00e9rieur.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible. Ne peut \u00eatre utilis\u00e9 dans des zones civilis\u00e9es ou des campements.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : un objet recouvrant les traces, des chaussures \u00e0 balai, une machine \u00e0 vent.</p>\n<p>Maitre Chi : aucun effet visible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Personnelle",
                  "duration": "1 / heure",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Frappe",
                  "description": "<p>Ce pouvoir est lanc\u00e9 sur une arme. Si c\u2019est une arme \u00e0 distance, il affecte un chargeur entier, 20 carreaux, cartouches ou fl\u00e8ches, ou un \u00ab chargement \u00bb complet de munitions (le Marshal d\u00e9termine la quantit\u00e9 exacte pour les munitions inhabituelles). Lorsque le sort est actif, les d\u00e9g\u00e2ts inflig\u00e9s par l\u2019arme sont augment\u00e9s de +2, ou +4 avec une Relance.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible.</p>\n<p>\u00c9lu : une simple b\u00e9n\u00e9diction</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : une lame extr\u00eamement aff\u00fbt\u00e9e, un gel</p>\n<p>aiguiseur, un v\u00e9rin hydraulique.</p>\n<p>Maitre Chi : aucun effet visible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": false,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Terreur",
                  "description": "<p>Sous l\u2019influence de ce pouvoir, la cible est envahie par une terreur et une horreur indicibles. Toute cr\u00e9ature situ\u00e9e dans le Grand Gabarit doit faire un jet de Tripes, avec une p\u00e9nalit\u00e9 de -2 sur une Relance.</p>\n<p>Les Jokers qui ratent leur jet doivent effectuer un tirage sur la Table de Terreur, tandis que les Extras sont Paniqu\u00e9s (voir les r\u00e8gles dans Attention danger !).</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : la cible du chamane jette un coup d\u2019\u0153il bref et involontaire dans les Terres de chasse (dans son esprit).</p>\n<p>\u00c9lu : pr\u00eatre vaudou uniquement. Les victimes entendent le cri terrifiant des loas.</p>\n<p>Huckster : le huckster tire un joker de nulle part. L\u2019image de la carte s\u2019anime et crie, rit ou fait \u00ab Bouh ! \u00bb \u00e0 la victime.</p>\n<p>Savant fou : un manipulateur d\u2019\u00e9motion, un spray de frayeur, un g\u00e9n\u00e9rateur de terreur.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Intellect x 2",
                  "duration": "Instantan\u00e9e"
              },
              {
                  "name": "Grande gu\u00e9rison",
                  "description": "<p>Grande gu\u00e9rison permet de soigner des blessures vieilles de plus d\u2019une heure. L\u2019utilisation de ce pouvoir n\u00e9cessite 10 Points de Pouvoir et fonctionne exactement comme le pouvoir Gu\u00e9rison.</p>\n<p>Grande gu\u00e9rison peut \u00e9galement soigner les blessures permanentes et incapacitantes. Le jet d\u2019Arcane se fait alors \u00e0 -4 et le nombre de Points de Pouvoirs n\u00e9cessaires est de 20. Une seule tentative est possible pour une telle blessure. En cas d\u2019\u00e9chec de ce pouvoir, la blessure est d\u00e9finitivement permanente.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane danse autour du bless\u00e9 et demande au Grand esprit de l\u2019aider. Il passe ensuite 10 minutes \u00e0 pr\u00e9parer de malodorants cataplasmes et \u00e0 recouvrir de glyphes peintes le corps de son patient (bien que le bless\u00e9 soit imm\u00e9diatement stabilis\u00e9, si c\u2019est la question).</p>\n<p>\u00c9lu : imposition des mains et pri\u00e8re.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : une potion de soin, un rayon revigorant. Une proth\u00e8se est n\u00e9cessaire pour soigner une blessure invalidante.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "V\u00e9t\u00e9ran",
                  "pp": "10",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "Instantan\u00e9e"
              },
              {
                  "name": "Choc",
                  "description": "<p>Il faut parfois capturer l\u2019ennemi vivant, \u00e0 moins que le h\u00e9ros ne veuille pas tuer inutilement. Choc permet d\u2019\u00e9tourdir des cibles se trouvant dans un Gabarit Moyen gr\u00e2ce \u00e0 une force de concussion, un son, une \u00e9nergie magique ou une effet similaire.</p>\n<p>Si le jet d\u2019Arcane est un succ\u00e8s, les victimes potentielles doivent r\u00e9ussir un jet de Vigueur ou \u00eatre Secou\u00e9es. En cas de Relance, le jet de Vigueur se fait avec un malus de -2.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : disponible.</p>\n<p>\u00c9lu : un coup de tonnerre !</p>\n<p>Huckster : un gros boum.</p>\n<p>Savant fou : une grenade \u00e0 concussion, un synth\u00e9tiseur de vide.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "12 / 24 / 48",
                  "duration": "Sp\u00e9cial"
              },
              {
                  "name": "Armure",
                  "description": "<p>Armure cr\u00e9e un champ de protection magique autour du&nbsp;personnage qui le prot\u00e8ge des d\u00e9g\u00e2ts. Un succ\u00e8s ajoute +2 \u00e0&nbsp;sa R\u00e9sistance et une Relance +4. La PA de d\u00e9g\u00e2ts non-ma- giques n\u2019annulent pas ce bonus, contrairement \u00e0 la PA des&nbsp; d\u00e9g\u00e2ts magiques.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : une veste de guerre chatoyante.</p>\n<p>\u00c9lu : l\u2019attaque manque simplement sa cible.</p>\n<p>Huckster : l\u2019attaque manque simplement sa cible.</p>\n<p>Savant fou : une veste pare-balles, un durcisseur de peau en spray.</p>\n<p>Maitre Chi : le personnage esquive \u00ab aussi vite qu\u2019une balle \u00bb.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Secours",
                  "description": "<p>Secours permet de r\u00e9cup\u00e9rer un niveau de fatigue, deux avec une Relance. Il permet \u00e9galement de supprimer un \u00e9tat Secou\u00e9.</p>\n<p>Ce pouvoir peut \u00e9galement \u00eatre utilis\u00e9 pour rappeler \u00e0 la conscience un personnage dans un \u00e9tat critique li\u00e9 \u00e0 des blessures, bien que les blessures ne soient pas soign\u00e9es. Il ne stoppe pas non plus les h\u00e9morragies, pas plus qu\u2019il n\u2019em- p\u00eache les blessures de s\u2019aggraver.L\u2019arcaniste ne peut jamais utiliser ce pouvoir sur lui-m\u00eame.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : peindre des glyphes sur la cible.</p>\n<p>\u00c9lu : r\u00e9conforter d\u2019une mani\u00e8re ou d\u2019une autre.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : un stimulant \u00e9lectrique, un tonique restaurateur.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "Permanent"
              },
              {
                  "name": "Mal\u00e9diction",
                  "description": "<p>Certains arcanistes soignent leurs alli\u00e9s, d\u2019autres envoient</p>\n<p>des maladies \u00e0 leurs ennemis.</p>\n<p>Pour utiliser ce sort vicieux, le lanceur fait un jet de Comp\u00e9tence magique oppos\u00e9 \u00e0 l\u2019\u00c2me de sa cible. En cas de r\u00e9ussite, cette derni\u00e8re tombe malade et peut m\u00eame mourir. Elle subit un niveau de fatigue tout de suite, puis un autre chaque jour suivant. Une fois qu\u2019elle tombe en \u00c9tat critique, elle doit faire un jet de Vigueur par jour pour ne pas mourir. Une Relance sur un jet de Vigueur met un terme \u00e0 la mal\u00e9diction.</p>\n<p>La mal\u00e9diction peut \u00eatre lev\u00e9e par celui qui l\u2019a jet\u00e9e ou par un sort de dissipation. Les niveaux de fatigue se r\u00e9cup\u00e8rent au rythme de un par jour.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane demande aux esprits de la gu\u00e9rison d\u2019abandonner la cible.</p>\n<p>\u00c9lu : pr\u00eatres vaudou uniquement. Mal\u00e9diction requiert une poup\u00e9e et un objet personnel de la victime, au lieu d\u2019une ligne de vue.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : appel\u00e9 dim mak (Toucher de la Mort).</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "5",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "Permanent",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": false,
                      "savant_fou": false,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Exorcisme",
                  "description": "<p>Ce long rituel bannit les esprits mal\u00e9fiques poss\u00e9dant un corps de mortel. Durant huit heures \u00e9reintantes, la cible doit rester dans la port\u00e9e du pouvoir (1 m\u00e8tre). L\u2019arcaniste effectue \u00e0 la fin de son rituel un jet d\u2019Arcane oppos\u00e9 \u00e0 l\u2019\u00c2me du d\u00e9mon. S\u2019il l\u2019emporte, ce dernier est imm\u00e9diatement banni et pour toujours. S\u2019il \u00e9choue, le d\u00e9mon reste dans son h\u00f4te et l\u2019arcaniste ne pourra jamais l\u2019exorciser. Un D\u00e9terr\u00e9 exorcis\u00e9 reposera en paix pour l\u2019\u00e9ternit\u00e9.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : une danse longue et \u00e9puisante. Le chamane doit faire un jet de Vigueur pour chaque heure pass\u00e9e \u00e0 danser ou \u00eatre Fatigu\u00e9. Tomber en \u00c9tat critique met un terme au rituel, qui doit \u00eatre recommenc\u00e9 depuis le d\u00e9but.</p>\n<p>\u00c9lu : une lecture constante de la Bible (ou d\u2019un autre livre saint), de l\u2019eau b\u00e9nite, un chapelet de pri\u00e8res, etc.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "V\u00e9t\u00e9ran",
                  "pp": "15",
                  "damage": "",
                  "range": "1 m\u00e8tre",
                  "duration": "Permanente"
              },
              {
                  "name": "Vision",
                  "description": "<p>Dans sa supplique aux esprits, l\u2019arcaniste requiert une vision du futur. Il peut leur poser une seule question, qui d\u00e9termine le co\u00fbt et le temps n\u00e9cessaires \u00e0 lancer le sort. S\u2019ils sont correctement apais\u00e9s (apr\u00e8s un jet r\u00e9ussi de M\u00e9decine tribale), les esprits lui enverront la r\u00e9ponse la plus probable. Les futurs possibles sont cependant nombreux, la vision peut donc ne pas \u00eatre toujours correcte.</p>\n<p>Dur\u00e9e /&nbsp; &nbsp;Co\u00fbt /&nbsp;&nbsp;Information requise</p>\n<p>1 heure /&nbsp; 3 PP /&nbsp;&nbsp;Un fait d\u2019importance mineurecomme l\u2019abondance d\u2019une <span style=\"white-space: pre;\"> </span>r\u00e9colte, un mariage, <span style=\"white-space: pre;\"> </span>une naissance, etc.</p>\n<p>1 jour /&nbsp; 5PP /&nbsp;&nbsp;Un fait d\u2019importance, comme <span style=\"white-space: pre;\"> l</span>\u2019issue d\u2019une grande bataille.&nbsp;</p>\n<p>1d6 jours/&nbsp; 10 PP /&nbsp;&nbsp;Un fait d\u2019importance majeure, <span style=\"white-space: pre;\"> </span>comme l\u2019identit\u00e9 d\u2019un meurtrier <span style=\"white-space: pre;\"> </span>ou la faiblesse d\u2019une abomination.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane danse, m\u00e9dite, fait des tatouages, cr\u00e9e des peintures de sable ou conduit un autre rituel, selon le temps pass\u00e9 \u00e0 questionner les esprits.</p>\n<p>\u00c9lu : pr\u00eatre vaudou uniquement. Une transe profonde dans laquelle le hougan ou la mambo contacte les loas pour leur demander des conseils.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : non disponible.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "V\u00e9t\u00e9ran",
                  "pp": "0",
                  "damage": "",
                  "range": "Personnelle",
                  "duration": "Sp\u00e9cial"
              },
              {
                  "name": "Augmentation/Diminution de Trait",
                  "description": "<p>Ce pouvoir permet au personnage d\u2019augmenter un des Traits de sa cible d\u2019un type de d\u00e9 en cas de r\u00e9ussite, et de deux en cas de Relance. Le Trait affect\u00e9 ne peut d\u00e9passer d12. Chaque augmentation au-del\u00e0 octroie un bonus de +1 au Trait. Par exemple, une Relance obtenue sur une cible ayant d\u00e9j\u00e0 d12 dans le Trait affect\u00e9 lui conf\u00e8re un Trait \u00e0 d12+2 pour la dur\u00e9e du pouvoir.</p>\n<p>Le pouvoir peut \u00e9galement \u00eatre utilis\u00e9 pour r\u00e9duire le Trait d\u2019un adversaire. Il s\u2019agit alors d\u2019un jet d\u2019Arcane oppos\u00e9 \u00e0 l\u2019\u00c2me de la cible. En cas de succ\u00e8s, le Trait est r\u00e9duit d\u2019un d\u00e9, et de deux en cas de Relance. Un Trait ne peut \u00eatre r\u00e9duit en dessous de d4. Il est possible de cumuler les effets de ce pouvoir, mais l\u2019arcaniste devra noter s\u00e9par\u00e9ment les dur\u00e9es de chaque pouvoir.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : l\u2019esprit d\u2019un animal appropri\u00e9 (une chouette pour l\u2019Intellect, un ours pour la Force et ainsi de suite) est \u00e0 peine visible derri\u00e8re le chamane, et uniquement pour ceux poss\u00e9dant un Atout Arcanes. Appel\u00e9 esprit de l\u2019ours, du loup etc.</p>\n<p>\u00c9lu : une pri\u00e8re. Appel\u00e9 b\u00e9n\u00e9diction ou mal\u00e9diction.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : une potion, un manipulateur de sentiment, une machine revigorante.</p>\n<p>Maitre Chi : aucun effet visible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Temp\u00eate",
                  "description": "<p>Ce pouvoir conjure une tornade assez puissante pour arracher le manteau d\u2019un mort. La temp\u00eate, de la taille d\u2019un Gabarit Moyen, doit \u00eatre appel\u00e9e en ext\u00e9rieur. Tous ceux qui se trouvent pris dans le tourbillon sont automatiquement aveugl\u00e9s et doivent faire un jet de Vigueur \u00e0 chaque round. S\u2019ils le ratent, ils sont \u00e9galement Secou\u00e9s. Les attaques \u00e0 distance qui traversent la tornade subissent une p\u00e9nalit\u00e9 de -2.</p>\n<p>L\u2019arcaniste peut d\u00e9placer la temp\u00eate comme il le souhaite chaque round, \u00e0 une Allure \u00e9gale \u00e0 son d\u00e9 d\u2019Intellect. S\u2019il entreprend une action autre que celle de se concentrer sur le sort, il doit faire un jet d\u2019Intellect pour ne pas perdre le sort.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane invoque les esprits du vent et les poussent \u00e0 lui ob\u00e9ir.</p>\n<p>\u00c9lu : l\u2019\u00e9lu affirme le pouvoir de son dieu, agite les bras et pr\u00eache un sermon (ou ce qui est appropri\u00e9) alors que les vents divins commencent \u00e0 se lever.</p>\n<p>Huckster : le huckster lance en l\u2019air un jeu de cartes (qui est perdu dans l\u2019action). Elles se mettent \u00e0 tourbillonner et restent dans la tornade. Appel\u00e9 tornade du Texas.</p>\n<p>Savant fou : une machine \u00e0 fabriquer les ouragans.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "3",
                  "damage": "",
                  "range": "Vue",
                  "duration": "1 (Concentration)"
              },
              {
                  "name": "Rafale",
                  "description": "<p>Rafale d\u00e9clenche un d\u00e9luge d\u2019\u00e9nergie devant le personnage, provoquant des d\u00e9g\u00e2ts sur toutes les cibles pr\u00e9sentes dans la zone.</p>\n<p>Lorsque le pouvoir est lanc\u00e9, l\u2019arcaniste pose un Gabarit de C\u00f4ne sur le plateau de jeu avec comme origine la figurine de son personnage. Les cibles prises dans la zone ont droit \u00e0 un jet d\u2019Agilit\u00e9 oppos\u00e9 au jet d\u2019Arcanes pour en \u00e9viter les effets. En cas d\u2019\u00e9chec, elles subissent 2d10 points de d\u00e9g\u00e2ts (ce pouvoir est consid\u00e9r\u00e9 comme une arme lourde contre les cr\u00e9atures gigantesques).</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : une pluie de cartes \u00e0 jouer qui d\u00e9coupe les adversaires en tranches. Appel\u00e9 pioche 54 cartes.</p>\n<p>Savant fou : un lance-flammes, un pistolet \u00e0 grenaille, un rayon d\u2019\u00e9nergie.</p>\n<p>Maitre Chi : le personnage frappe le sol avec une grande fureur, arrosant tous ceux qui se trouvent dans l\u2019aire du C\u00f4ne de cailloux et autres d\u00e9bris. Ce pouvoir ne fonctionne qu\u2019en ext\u00e9rieur ou l\u00e0 o\u00f9 l\u2019on trouve ces d\u00e9bris. Cette attaque n\u2019inflige que 2d4 points de d\u00e9g\u00e2ts et n\u2019est jamais mortelle (les personnages peuvent \u00eatre bless\u00e9s normalement mais ils ne meurent pas). Appel\u00e9 douche de la terre.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Gabarit de C\u00f4ne",
                  "duration": "Instantan\u00e9e",
                  "classe_arcane": {
                      "chaman": false,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "D\u00e9flexion",
                  "description": "<p>Les pouvoirs de D\u00e9flexion fonctionnent de diff\u00e9rentes mani\u00e8res. Certains pouvoirs de D\u00e9flexion d\u00e9vient les attaques, d\u2019autres rendent la forme de la cible floue ou produisent des effets illusoires. Au final, le r\u00e9sultat est le m\u00eame : faire \u00e9chouer les attaques de m\u00eal\u00e9e et \u00e0 distance sur l\u2019utilisateur.</p>\n<p>Avec un succ\u00e8s, les attaquants re\u00e7oivent une p\u00e9nalit\u00e9 de -2 \u00e0 leurs jets de Combat, Tir et autres jets d\u2019attaque contre l\u2019utilisateur. Une Relance augmente cette p\u00e9nalit\u00e9 \u00e0 -4. Ce pouvoir fonctionne comme Armure contre les armes \u00e0 aire d\u2019effet.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible.</p>\n<p>\u00c9lu : aucun effet visible.</p>\n<p>Huckster : aucun effet visible. Appel\u00e9 rat\u00e9 !.</p>\n<p>Savant fou : une ceinture de champ de d\u00e9flexion.</p>\n<p>Maitre Chi : l\u2019attaque rate. Le personnage peut imm\u00e9diatement effectuer un jet d\u2019Agilit\u00e9 avec une p\u00e9nalit\u00e9 de -6 pour les balles et de -4 pour les projectiles. S\u2019il r\u00e9ussit, il retourne le projectile \u00e0 l\u2019envoyeur et inflige For+1d6 points de d\u00e9g\u00e2ts.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Vis\u00e9e",
                  "description": "<p>Vis\u00e9e am\u00e9liore la pr\u00e9cision du personnage lorsqu\u2019il effectue une attaque de Tir ou de Lancer. Les p\u00e9nalit\u00e9s pour une Attaque cibl\u00e9e sont r\u00e9duites de 1 pour un succ\u00e8s et de 2 pour une Relance.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : pas d\u2019effet visible. Appel\u00e9 vent qui guide.</p>\n<p>\u00c9lu : aucun effet visible.</p>\n<p>Huckster : petites \u00e9tincelles de lumi\u00e8re cr\u00e9pitantes autour de l\u2019arme, de la carte ou de l\u2019objet lanc\u00e9.</p>\n<p>Savant fou : une lunette de pr\u00e9cision ou une balle \u00e0 d\u00e9tection de chaleur.</p>\n<p>Maitre Chi : adopter une position de combat.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "3 (1 / Round)",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Zombi",
                  "description": "<p>Ce pouvoir est consid\u00e9r\u00e9 comme mal\u00e9fique par la plupart des gens. Un savant fou ou un hougan qui en fait usage a int\u00e9r\u00eat \u00e0 s\u2019assurer qu\u2019aucun Agent ou Ranger ne tra\u00eene dans les parages.</p>\n<p>Quand ce pouvoir est utilis\u00e9, il fait se lever un nombre de morts d\u00e9pendant du nombre de Points de Pouvoir investis. Les morts-vivants sont totalement sous contr\u00f4le, quoi qu\u2019un peu malicieux et limit\u00e9s dans l\u2019interpr\u00e9tation des ordres qui leur sont donn\u00e9s.</p>\n<p>Les cadavres ne sont pas conjur\u00e9s, donc un nombre de corps suffisant doit \u00eatre disponible pour que le pouvoir soit efficace. Malheureusement, ils ne sont pas difficiles \u00e0 trouver dans l\u2019Ouest \u00c9trange. Ils n\u2019ont pas \u00e0 \u00eatre en bon \u00e9tat : zombi peut faire se lever des serviteurs qui ont patiemment attendu pendant des si\u00e8cles. Les cimeti\u00e8res, les morgues et les champs de batailles constituent tous de bonnes sources de mati\u00e8re premi\u00e8re.</p>\n<p>Avec un succ\u00e8s, les morts se l\u00e8vent pour une heure, et pour 1d6 heures avec une Relance. Avec deux Relances, ils s\u2019animent pour une journ\u00e9e compl\u00e8te.</p>\n<p>Des n\u00e9cromants puissant peuvent disposer de versions plus \u00e9volu\u00e9es de ce pouvoir, moins co\u00fbteuses en Points de Pouvoir et capable de cr\u00e9er des morts-vivants de fa\u00e7on permanente.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : pr\u00eatres vaudous uniquement.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : des activateurs c\u00e9r\u00e9braux, un animateur \u00e9lectrique, un fluide revitalisant n\u00e9crotique.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "V\u00e9t\u00e9ran",
                  "pp": "3",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "Sp\u00e9ciale"
              },
              {
                  "name": "Lumi\u00e8re",
                  "description": "<p>La capacit\u00e9 de cr\u00e9er de la lumi\u00e8re est un pouvoir qui peut sembler simple, mais un groupe d\u2019aventuriers coinc\u00e9 dans les t\u00e9n\u00e8bres et entour\u00e9 de morts-vivants est toujours ravi d\u2019en disposer.</p>\n<p>Lumi\u00e8re doit \u00eatre lanc\u00e9 sur un objet inanim\u00e9 comme une pi\u00e8ce, une \u00e9p\u00e9e, un bouclier, ou m\u00eame les v\u00eatements d\u2019un personnage. Les arcanistes malins lancent souvent ce pouvoir sur les v\u00eatements ou l\u2019arme d\u2019un adversaire, le rendant plus facile \u00e0 attaquer : les p\u00e9nalit\u00e9s dues \u00e0 l\u2019obscurit\u00e9 sont ignor\u00e9es lors des attaques contre cette cible. Si l\u2019objet est une possession d\u2019un adversaire, le jet d\u2019Arcanes est oppos\u00e9 \u00e0 un jet d\u2019Agilit\u00e9 de la cible.</p>\n<p>La lumi\u00e8re cr\u00e9\u00e9e est aussi brillante qu\u2019une torche, et fournit un bon \u00e9clairage dans un Grand Gabarit.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : une douce lumi\u00e8re.</p>\n<p>Huckster : un \u00e9clair de lumi\u00e8re qui \u00ab colle \u00bb.</p>\n<p>Savant fou : de la peinture phosphorescente.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "30 minutes ( 1 / 10 minutes)"
              },
              {
                  "name": "D\u00e9tection/Dissimulation des Arcanes",
                  "description": "<p>D\u00e9tection / Dissimulation des Arcanes permet \u00e0 un per- sonnage de ressentir les personnages, les objets ou les effets surnaturels se trouvant dans sa ligne de vue. Sont inclus les cr\u00e9atures invisibles, les personnes et les objets enchant\u00e9s, les appareils de la Science \u00e9trange, les activit\u00e9s des hucks- ters et ainsi de suite.</p>\n<p>Ce pouvoir peut \u00e9galement \u00eatre invers\u00e9 pour dissimuler la nature surnaturelle d\u2019un objet, d\u2019une personne ou d\u2019un effet. Le co\u00fbt est le m\u00eame, mais la dur\u00e9e est bien plus \u00e9tendue : 1 heure, avec un co\u00fbt de maintien de 1 par heure suppl\u00e9mentaire. Lorsque ce pouvoir est ainsi utilis\u00e9, si une personne souhaite utiliser la D\u00e9tection des Arcanes sur un objet dont la magie est dissimul\u00e9e, son jet d\u2019Arcanes est oppos\u00e9 au jet d\u2019Arcanes de celui qui a lanc\u00e9 la dissimulation (\u00e0 chaque fois que le pouvoir D\u00e9tection des Arcanes est lanc\u00e9).</p>\n<p>En cas de succ\u00e8s, il parvient \u00e0 percer la dissimulation. En cas d\u2019\u00e9chec il faut r\u00e9utiliser \u00e0 nouveau le pouvoir D\u00e9tection d\u2019Arcanes pour avoir une chance de percer la ruse \u00e0 jour.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : D\u00e9tection des Arcanes uniquement. Un \u00ab d\u00e9tecteur de l\u2019\u00e2me \u00bb, des lunettes de roche fant\u00f4me.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "2",
                  "damage": "",
                  "range": "Vue",
                  "duration": "3 (1 / Round) ou 1 heure (1 / heure)"
              },
              {
                  "name": "T\u00e9l\u00e9portation",
                  "description": "<p>T\u00e9l\u00e9portation permet \u00e0 un personnage de disparaitre pour r\u00e9apparaitre imm\u00e9diatement jusqu\u2019\u00e0 10 cases pour chaque tranche de 3 Points de Pouvoir d\u00e9pens\u00e9, et 15 cases par tranche sur une Relance. Ce pouvoir compte pour le d\u00e9placement du round. Les adversaires adjacents au personnage n\u2019ont pas d\u2019attaque gratuite contre lui. Si l\u2019arcaniste souhaite se t\u00e9l\u00e9porter vers un endroit qu\u2019il ne peut pas voir, il doit r\u00e9ussir un jet d\u2019Intellect avec un malus de -2. S\u2019il s\u2019agit d\u2019un endroit qu\u2019il n\u2019a jamais vu, le malus passe \u00e0 -4. S\u2019il rate le jet d\u2019Arcanes ou le jet d\u2019Intellect, le pouvoir \u00e9choue, l\u2019arcaniste reste sur place et est Secou\u00e9. Un 1 sur le jet d\u2019Arcane (et ce quel que soit le r\u00e9sultat du d\u00e9 Joker) signifie un d\u00e9sastre plus grave. En plus d\u2019\u00eatre Secou\u00e9, le personnage subit 2d6 points de d\u00e9g\u00e2ts.</p>\n<p>Le personnage ne peut jamais se t\u00e9l\u00e9porter dans un espace solide. S\u2019il essaie, il reste sur place comme d\u00e9crit ci-dessus.</p>\n<p>Transporter des personnes : le personnage peut t\u00e9l\u00e9porter d\u2019autres personnes avec lui, mais toute personne suppl\u00e9mentaire provoque un niveau de fatigue \u00e0 l\u2019arriv\u00e9e. S\u2019il transporte plus de deux personnes, il tombe imm\u00e9diate-ment inconscient \u00e0 l\u2019arriv\u00e9e. Un niveau de fatigue peut \u00eatre r\u00e9cup\u00e9r\u00e9 avec une heure de repos complet.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane entre dans les Terres de chasse et en ressort \u00e0 un autre endroit. Appel\u00e9 marche de l\u2019esprit.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster doit entrer dans une zone d\u2019ombre de bonne taille et ressortir par une autre. Il ne peut se t\u00e9l\u00e9porter dans des endroits \u00e9clair\u00e9s mais peut le faire gratuitement dans l\u2019obscurit\u00e9. Appel\u00e9 passage dans les ombres.</p>\n<p>Savant fou : un disperseur / assembleur d\u2019atome.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Aguerri",
                  "pp": "3",
                  "damage": "",
                  "range": "Sp\u00e9cial",
                  "duration": "Instantan\u00e9e"
              },
              {
                  "name": "Marionnette",
                  "description": "<p>Il est parfois payant de persuader vos adversaires de combattre \u00e0 votre c\u00f4t\u00e9. Certains y arrivent en contr\u00f4lant l\u2019esprit de leur cible, d\u2019autres utilisent des illusions visuelles et auditives.</p>\n<p>Marionnette est un jet d\u2019Arcane oppos\u00e9 \u00e0 l\u2019\u00c2me de la cible. L\u2019arcaniste doit utiliser son pouvoir avec succ\u00e8s et battre le jet de cette derni\u00e8re. Dans ce cas, la victime attaquera ses alli\u00e9s et ira m\u00eame jusqu\u2019\u00e0 se donner la mort, bien qu\u2019un tel acte octroie un nouveau jet d\u2019\u00c2me pour \u00e9chapper \u00e0 l\u2019emprise.</p>\n<p>Les m\u00e9chants peuvent disposer de versions plus puissantes de ce pouvoir qui leur permettent de contr\u00f4ler leurs victimes pour des p\u00e9riodes plus longues (voire de fa\u00e7on permanente). De telles versions n\u00e9cessitent en g\u00e9n\u00e9ral une possession personnelle de la victime.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : pr\u00eatre vaudou uniquement. Poup\u00e9e vaudou.</p>\n<p>Huckster : le huckster met une carte dans la poche (ou ailleurs) de sa victime.</p>\n<p>Savant fou : un rayon de contr\u00f4le mental ou chimique.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "V\u00e9t\u00e9ran",
                  "pp": "3",
                  "damage": "",
                  "range": "Intellect",
                  "duration": "3 ( 1 / Round)"
              },
              {
                  "name": "Gu\u00e9rison",
                  "description": "<p>Le pouvoir de Gu\u00e9rison soigne les blessures r\u00e9centes. Il doit \u00eatre utilis\u00e9 durant \u00ab l\u2019heure en or \u00bb : il n\u2019a aucun effet sur des blessures vieilles de plus d\u2019une heure.</p>\n<p>Pour les Jokers, chaque utilisation de Gu\u00e9rison efface une blessure avec un succ\u00e8s, et deux avec une Relance. Le jet de d\u00e9 subit une p\u00e9nalit\u00e9 \u00e9gale au nombre de blessures de la victime (en plus de tout malus dont le lanceur de sort lui-m\u00eame serait affubl\u00e9).</p>\n<p>Pour les Extras, le Marshal doit d\u2019abord d\u00e9terminer si l\u2019alli\u00e9 est mort (voir la section Gu\u00e9rison du chapitre Envoyer des trucs en enfer). Si c\u2019est le cas, l\u2019utilisation du pouvoir de Gu\u00e9rison est impossible. Sinon, un jet r\u00e9ussi de la Comp\u00e9tence d\u2019Arcane appropri\u00e9e remet l\u2019alli\u00e9 dans un \u00e9tat Secou\u00e9.</p>\n<p>Le pouvoir de Gu\u00e9rison peut \u00e9galement servir \u00e0 gu\u00e9rir les poisons et les maladies, s\u2019il est lanc\u00e9 moins de 10 minutes apr\u00e8s l\u2019\u00e9v\u00e9nement d\u00e9clencheur.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane fait des v\u0153ux et des promesses aux esprits.</p>\n<p>\u00c9lu : imposition des mains.</p>\n<p>Huckster : non disponible.</p>\n<p>Savant fou : une potion de soin.</p>\n<p>Maitre Chi : acupuncture, massage.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "3",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "Instantan\u00e9e",
                  "classe_arcane": {
                      "chaman": true,
                      "elu": true,
                      "huckster": false,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              },
              {
                  "name": "Compr\u00e9hension des Langues",
                  "description": "<p>Ce pouvoir permet \u00e0 un personnage de parler, lire et \u00e9crire une langue qu\u2019il ne connait pas. Il doit s\u2019agir d\u2019une forme de langage \u00e9volu\u00e9 \u2013 pas de langage animal. Une Relance sur le jet d\u2019Arcane permet de maitriser un dialecte particulier.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : aucun effet visible.</p>\n<p>\u00c9lu : aucun effet visible. Appel\u00e9 langues.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : un traducteur.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "Toucher",
                  "duration": "10 minutes (1 / 10 minutes)"
              },
              {
                  "name": "Ma\u00eetre de l'esprit",
                  "description": "<p>Un personnage peut utiliser ce pouvoir pour entendre par le biais des sens d\u2019un autre s\u2019il r\u00e9ussit un jet d\u2019Arcane oppos\u00e9 \u00e0 l\u2019\u00c2me de sa cible.</p>\n<p>Si la victime l\u2019emporte, elle sait qu\u2019elle a \u00e9t\u00e9 vis\u00e9e par un sort (si elle sait que de telles choses existent) et qu\u2019il a \u00e9chou\u00e9 (mais les Points de Pouvoir sont perdus). Si le lanceur l\u2019emporte, il peut sentir tout ce que sa cible sent.</p>\n<p>Le personnage peut choisir une victime qu\u2019il ne voit pas s\u2019il poss\u00e8de un objet qu\u2019elle a touch\u00e9 durant la semaine pr\u00e9c\u00e9dente.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : le chamane se balance ou danse.</p>\n<p>\u00c9lu : pr\u00eatre vaudou seulement. Une profonde transe.</p>\n<p>Huckster : aucun effet visible.</p>\n<p>Savant fou : un minuscule transmetteur log\u00e9 dans la t\u00eate de la cible, un globe oculaire volant.</p>\n<p>Maitre Chi : non disponible.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "3",
                  "damage": "",
                  "range": "2 km x Comp\u00e9tences d'Arcanes",
                  "duration": "1 / minute"
              },
              {
                  "name": "Eclair",
                  "description": "<p>\u00c9clair projette un rayon d\u2019\u00e9nergie, un projectile ou un objet sur sa ou ses cibles. Leurs d\u00e9g\u00e2ts de base sont \u00e9gaux \u00e0 2d6 points.</p>\n<p>\u00c9clairs suppl\u00e9mentaires : le personnage peut lancer jusqu'\u00e0 3 \u00e9clairs au prix d\u2019un Point de Pouvoir par \u00e9clair. D\u00e9cide du nombre d'\u00c9clairs avant d'activer le pouvoir. Les \u00e9clairs peuvent \u00eatre r\u00e9partis sur des cibles diff\u00e9rentes au choix de l'arcaniste. Ce dernier fait un jet de Comp\u00e9tence d'Arcanes pour chaque \u00e9clair, qu'il oppose \u00e0 la Difficult\u00e9 pour toucher la cible. S'il est un Joker, il lance un seul d\u00e9 Joker, lequel peut remplacer n'importe lequel de ses d\u00e9s de Comp\u00e9tence d'Arcanes.</p>\n<p>D\u00e9g\u00e2ts suppl\u00e9mentaires : le personnage peut \u00e9galement porter les d\u00e9g\u00e2ts d\u2019un \u00e9clair \u00e0 3d6 en d\u00e9pensant 2 Points de Pouvoir. Il ne peut pas lancer d'\u00e9clairs suppl\u00e9mentaires lorsqu'il utilise cette option.</p>\n<p><strong>ASPECTS</strong></p>\n<p>Chaman : non disponible.</p>\n<p>\u00c9lu : non disponible.</p>\n<p>Huckster : le huckster tire une carte de sa manche et la lance avec une force d\u00e9vastatrice. Appel\u00e9 explosion de l\u2019\u00e2me.</p>\n<p>Savant fou : un pistolet \u00e0 rayon, un canon \u00e0 \u00e9clair.</p>\n<p>Maitre Chi : des cailloux ou de petits objets sont projet\u00e9s \u00e0 une vitesse incroyable. Appel\u00e9 les pierres s\u2019envolent de la main.</p>\n<p>&nbsp;</p>",
                  "rank": "Novice",
                  "pp": "1",
                  "damage": "",
                  "range": "12 / 24 / 48",
                  "duration": "Instantann\u00e9e",
                  "classe_arcane": {
                      "chaman": false,
                      "elu": false,
                      "huckster": true,
                      "savant_fou": true,
                      "maitre_chi": true
                  }
              }
          ]
};
export default table_pouvoirs;