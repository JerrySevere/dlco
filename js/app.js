import table_atouts_background from './table-atouts-background.js';
import table_terreurs from './table-terreurs.js';
import Alpine from './alpine3.esm.js';

const appData = () => ({
  isMenuOpen: false,
  selectedItem: '',
  selectedTable: '',
  selectedTableData: null,
  tables: {
    table_terreurs,
    table_atouts_background
  }
});

Alpine.data('appData', appData)
Alpine.start()
