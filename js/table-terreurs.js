const table_terreurs = {
      title: 'Terreurs (jet d20)',
      items: [
  { "name": '04-6', "description": '<b>Distrait:</b> Le personnage est Distrait jusqu\'à la fin de son prochain tour.' },
  { "name": '07-9', "description": '<b>Vulnérable:</b> Le personnage est Vulnérable jusque la fin de son prochain tour.' },
  { "name": '10-12', "description": '<b>Secoué:</b> Le personnage est Secoué.' },
  { "name": '13', "description": '<b>Marqué par la terreur:</b> Le personnage est Sonné et souffre d\'une altération physique purement cosmétique - une mèche de cheveux blancs, les yeux clignant constamment ou autre manifestation physique mineure.' },
  { "name": '14-15', "description": '<b>Effrayé:</b> Le personnage subit le Handicap Hésitant pour le reste de la rencontre. Il devient Paniqué s\'il est déjà Hésitant.' },
  { "name": '16-17', "description": '<b>Paniqué:</b> Le personnage s\'enfuit immédiatement du danger de son Allure complète et du dé de course. Il est Secoué.' },
  { "name": '18-19', "description": '<b>Phobie mineure:</b> Le personnage gagne un Handicap Phobie mineure lié au trauma.' },
  { "name": '20-21', "description": '<b>Phobie majeure:</b> Le personnage gagne un Handicap Phobie majeure lié au trauma.' },
  { "name": '22+', "description": '<b>Crise cardiaque:</b> Le personnage est submergé par la terreur. Son cœur palpite. Il doit faire immédiatement un jet de Viqueur à -2. En cas de Succès, il est Sonne. En cas d\'Échec, il est Incapacité et décède en 2d6 rounds. En ce cas, un jet de Soins à -4 peut lui sauver la vie, il demeure alors Incapacité et est traité normalement par la suite.' }
      ]
};

export default table_terreurs;