import table_atouts_background from './table-atouts-background.js';
import table_terreurs from './table-terreurs.js';
import table_pouvoirs from './table-pouvoirs.js';
import table_bestiaire from './table-bestiaire.js'
import table_diverses from './table-diverses.js'
import Alpine from './alpine3.esm.js';


const appData = () => ({
  isMenuOpen: false,
  accessCode: '',
  accessCode_verified: false,
  selectedMenuItem: '',
  selectedTable: '',
  selectedTableData: null,
  searchTerm: '',
  selectedArcane : '',
  selectedDetailBestiaire :'',
  table_bestiaire : table_bestiaire,
  table_pouvoirs : table_pouvoirs,
  //tables_jetons: table_diverses.tables_jetons, // Utilisation correcte de table_diverses.tables_jetons
  tables: {
    table_actions : table_diverses.table_actions,
    table_jets: table_diverses.table_jets,
    table_etats: table_diverses.table_etats,
    table_jetons: table_diverses.table_jetons,
    table_terreurs,
    table_atouts_background
  },
      // Nouvelle méthode pour vérifier le code d'accès et initialiser accessCode_verified
      init() {
          if (localStorage.getItem('accessCode') === 'mj123') {
              this.accessCode_verified = true;
          }
      },
    // Computed property to filter the table items based on the search term
    get filteredTableItems() {
      if (this.selectedTableData) {
        const searchTerm = this.searchTerm.toLowerCase();
        const filteredItems= this.selectedTableData.items.filter(item => {
          const itemName = item.name.toLowerCase();
          const itemDescription = item.description.toLowerCase();
          return itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
        });


        // Triez les éléments filtrés par le nom de l'élément
        const sortedItems = filteredItems.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return filteredItems;

      } else {
        return [];
      }
    },
    // Computed property to filter the table items based on the search term
    get filteredTableBestiaire() {
        const searchTerm = this.searchTerm.toLowerCase();
        return this.table_bestiaire.items.filter(item => {
          const itemName = item.name.toLowerCase();
          const itemDescription = item.description.toLowerCase();
          return itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
        });
    },
    // Computed property to filter the table items based on the search term
    get filteredTablePouvoirs() {
        const searchTerm = this.searchTerm.toLowerCase();
        const filteredItems = this.table_pouvoirs.items.filter(item => {
            const itemName = item.name.toLowerCase();
            const itemDescription = item.description.toLowerCase();
            const isMatchingSearchTerm = itemName.includes(searchTerm) || itemDescription.includes(searchTerm);

            // Filtrer en fonction de la classe d'arcane sélectionnée
            const isMatchingArcane = !this.selectedArcane || (item.classe_arcane && item.classe_arcane[this.selectedArcane]);

            return isMatchingSearchTerm && isMatchingArcane;

        });



        // Triez les éléments filtrés par le nom de l'élément
        const sortedItems = filteredItems.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

        return sortedItems;
    },
   // Nouvelle méthode pour afficher le détail de l'élément sélectionné
    showDetailBestiaire(item) {
        this.selectedDetailBestiaire = item;
        this.selectedMenuItem = 'menu-detail-bestiaire';
    },
    checkAccessCode() {
        if (this.accessCode === 'mj123') {
            this.accessCode_verified = true;
            localStorage.setItem('accessCode', 'mj123');
        } else {
            // Affichez un message d'erreur si le code est incorrect
            alert('Code d\'accès incorrect');
        }
    },

  });


appData().init();
Alpine.data('appData', appData);
Alpine.start();
