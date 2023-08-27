const table_diverses = {
    table_jetons : {
        title: 'Utilisation Jetons',
        items:[
             {
             "name": "ANNULER UN ÉTAT SECOUÉ",
             "description": "Cette utilisation est instantanée et peut être effectuée à tout moment, y compris en interrompant l’action de quelqu’un d’autre"
             },
             {
             "name": "ENCAISSER",
             "description":"les Jetons peuvent également être utilisés pour encaisser des Blessures "
             },
             { "name": "INFLUENCER L’HISTOIRE",
             	"description": "cette utilisation reste à l’appréciation du MJ, qui peut autoriser un joueur à utiliser un Jeton pour que son personnage découvre un indice dans une situation où le groupe est bloqué, se souvienne qu’il dispose d’un objet basique très utile dans la situation présente, ou même pour rendre un PNJ un peu plus aimable."
             },
             {
            "name": "PIOCHER UNE NOUVELLE CARTE D’ACTION",
            "description": "lorsque le jeu est cadencé en rounds, un personnage peut utiliser un Jeton pour piocher une nouvelle carte d’action  Toutes les cartes auront été distribuées et tous les Atouts et Handicaps comme Vif, Tête froide ou Hésitant, auront été résolus."
            },
            {
            "name": "RECHARGER DES POINTS DE POUVOIR",
            "description": "un personnage arcaniste peut utiliser un Jeton pour recharger 5 PP "
            },
            { "name": "RELANCER JET TRAITS",
              "description":"Relancer n’importe quel jet de Trait et conserver le meilleur jet. Le risque est qu’un Échec critique  ne peut jamais être Relancé et compte comme résultat final."
             },
             {
             "name": "RELANCER LES DÉGÂTS",
             "description":" vous pouvez utiliser un Jeton pour relancer les dégâts d’une attaque, y compris d’éventuels dés supplémentaires que vous auriez pu obtenir"
             }

        ]
       },
       table_etats : {
           title: 'Etats / Conditions',
           items:[
               {
                   "name": "Blessé",
                   "description": "-1 à l'allure et aux jets (par blessure). 3 blessures max"
               },
               {
                   "name": "Distrait",
                   "description": "-2 aux jets de traits jusqu'au prochain tour"
               },
               {
                   "name": "Fatigué",
                   "description": "-1 à l'allure et aux jets (par niveau de fatigue), devient épuisé"
               },
               {
                   "name": "Epuisé",
                   "description": "-2 à l'allure et aux jets (par niveau de fatigue), devient incapacité"
               },
               {
                   "name": "Entravé",
                   "description": "pas de déplacement + distrait"
               },
               {
                   "name": "Immobilisé",
                   "description": "pas de déplacement + distrait + vulnérable"
               },
               {
                   "name": "Incapacité",
                   "description": "Ne peut plus faire d'action, peut être inconscient"
               },
               {
                   "name": "Secoué",
                   "description": "ne peut faire que des actions libres, au début du tour, jet d'âme gratuit ou utiliser un jeton"
               },
               {
                   "name": "Vulnérable",
                   "description": "Les actions à l'encontre du personnage bénéficient d'un bonus de +2 jusqu'à la fin du tour"
               }
            ]
       },
       table_jets : {
          title: 'Jets',
          items:
            [
                {
                    "name": "Attaque Mélée",
                    "description": "Dé de <b>Combat</b> + dé Joker (prendre le plus haut) >= Parade Cible"
                },
                {
                    "name": "Dégats Mélée",
                    "description": "Dé de <b>Force</b> + Dé de dégat de l'arme. <br/>Si Relance : dégat +1d6. <br/>Si dégats > résistance (avec armure) Cible : Secoué et une blessure par tranche de 4 degats supplémentaires"
                },
                {
                    "name": "Attaque Tir",
                    "description": "Dé de <b>Tir</b> + dé Joker (prendre le plus haut) + modificateurs >= 4. <br/>-2 si la cible est couverte.<br/> -2 a distance moyenne / -4 à distance longue"
                },
                {
                    "name": "Dégats Tir",
                    "description": "Dégat de l'arme - (Armure Cible + Pénétration Armure)"
                },
                {
                    "name": "Pouvoir",
                    "description": "Dé de la <b>compétence Arcane</b> + dé Joker. <ul> <li>4 ou + : Succès : dépenser les PP et activer les effets du pouvoir. </li> <li>2,3 : Echec : perte d'un PP. </li> <li>double 1 : echec critique : Perte d'un PP + Fatigue + pouvoirs actifs se terminent</li>"
                }
            ]
       },
      table_actions : {
         title: 'Actions',
         items:
            [
                {
                    "name": "Mouvement",
                    "description": "Une fois par tour (gratuit), le personnage peut se déplacer d'un nombre de cases égale à son allure. Chaque case parcourue en escaladant, rampant, nageant compte pour deux cases."
                },
                {
                    "name": "Courir",
                    "description": "Une fois par tour (gratuit), ajout du dé de course à son allure (en général d6), toutes les autres actions subiront un malus de -2."
                },
                {
                    "name": "Actions gratuites",
                    "description": "Déclamer une phrase ou 2, se jeter à terre, lâcher un objet, dégainer son arme."
                },
                {
                    "name": "Viser",
                    "description": "Utiliser un tour complet pour viser pour avoir un bonus de +2 au tour suivant."
                },
                {
                    "name": "Recharger son arme",
                    "description": "Encocher une flèche : action gratuite, recharger une arme à feu prend un tour complet."
                },
                {
                    "name": "Attaquer",
                    "description": "Voir jet attaque mêlée ou à distance."
                },
                {
                    "name": "Désarmer",
                    "description": "Faire un jet d'attaque ciblée, si réussite : jet de force du défenseur égal au jet au dégât de l'attaque ou lâcher l'objet."
                },
                {
                    "name": "Empoignade",
                    "description": "(Mêlée) Jet opposé d'athlétisme, si l'attaquant l'emporte la cible est entravée, (immobilisé en cas de prouesse)."
                },
                {
                    "name": "Defense totale",
                    "description": "(Mêlée) Augmenter la parade de 4 jusqu'à son prochain tour (pas d'actions multiples possibles)."
                },
                {
                    "name": "Rompre la mêlée",
                    "description": "Les adversaires bénéficient immédiatement d'une attaque gratuite."
                },
                {
                    "name": "Soutien",
                    "description": "Aider un allié, jet de compétence et si réussite, bonus de +1 à l'allié durant son jet de compétence. Si échec : malus de -2."
                }
            ]
           }

      };
export default table_diverses;

