import table_atouts_background from './table-atouts-background.js';
import table_terreurs from './table-terreurs.js';
import table_pouvoirs from './table-pouvoirs.js';
import Alpine from './alpine3.esm.js';


const appData = () => ({
  isMenuOpen: false,
  selectedMenuItem: '',
  selectedTable: '',
  selectedTableData: null,
  searchTerm: '',
  selectedArcane : '',
  selectedDetailBestiaire :'',
  table_bestiaire : [
    {
      "name": "Simple Soldat",
      "type": "humain",
      "page": "WW p154",
      "description": "Trouffion de base",
      "agi" : "d6",
      "ame" : "d6",
      "for" : "d6",
      "int" : "d4",
      "vig" : "d6"
    }
  ],
  table_pouvoirs : table_pouvoirs,
  tables: {
    table_terreurs,
    table_atouts_background
  },
    // Computed property to filter the table items based on the search term
    get filteredTableItems() {
      if (this.selectedTableData) {
        const searchTerm = this.searchTerm.toLowerCase();
        return this.selectedTableData.items.filter(item => {
          const itemName = item.name.toLowerCase();
          const itemDescription = item.description.toLowerCase();
          return itemName.includes(searchTerm) || itemDescription.includes(searchTerm);
        });
      } else {
        return [];
      }
    },
    // Computed property to filter the table items based on the search term
    get filteredTableBestiaire() {
        const searchTerm = this.searchTerm.toLowerCase();
        return this.table_bestiaire.filter(item => {
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
        this.selectedItem = 'menu-detail-bestiaire';
    }

  });

Alpine.data('appData', appData)
Alpine.start()
