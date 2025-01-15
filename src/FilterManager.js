sap.ui.define([], function () {
  "use strict";

  class FilterManager {
      constructor(options = {}) {
          this.storageKey = options.storageKey || "filters"; // Clé pour stocker les filtres
          this.defaultFilters = options.defaultFilters || {}; // Filtres par défaut
          this.filters = { ...this.defaultFilters }; // Initialisation des filtres
          this._loadFromStorage(); // Charger les filtres sauvegardés si existants
      }

      // Charger les filtres depuis le localStorage
      _loadFromStorage() {
          if (typeof localStorage !== "undefined") {
              const savedFilters = localStorage.getItem(this.storageKey);
              if (savedFilters) {
                  this.filters = JSON.parse(savedFilters);
              }
          }
      }

      // Sauvegarder les filtres dans le localStorage
      save(filters) {
          this.filters = { ...filters };
          if (typeof localStorage !== "undefined") {
              localStorage.setItem(this.storageKey, JSON.stringify(this.filters));
          }
      }

      // Charger les filtres sauvegardés
      load() {
          this._loadFromStorage();
          return { ...this.filters };
      }

      // Réinitialiser les filtres aux valeurs par défaut
      reset() {
          this.filters = { ...this.defaultFilters };
          this.save(this.filters);
          return { ...this.filters };
      }

      // Mettre à jour un filtre spécifique
      update(key, value) {
          this.filters[key] = value;
          this.save(this.filters);
      }

      // Récupérer un filtre spécifique
      get(key) {
          return this.filters[key];
      }

      // Récupérer tous les filtres
      getAll() {
          return { ...this.filters };
      }
  }

  return FilterManager;
});
