# FilterManager

## Functions

### **_loadFromStorage()**
- **Parameters:** None.  
- **Description:** Loads the filters from `localStorage` if they exist, otherwise uses the default filters.  
- **Returns:** None.  

---

### **save(filters)**
- **Parameters:**  
  - `filters` (*Object*): An object containing the filters to be saved.  
    Example: `{ StartDate: "2025-01-01", EndDate: "2025-12-31" }`.  
- **Description:** Saves the given filters to `localStorage`.  
- **Returns:** None.  

---

### **load()**
- **Parameters:** None.  
- **Description:** Loads the filters from `localStorage` or returns the default filters if no saved filters are found.  
- **Returns:**  
  - (*Object*): The saved filters or the default filters.  
    Example: `{ StartDate: "2025-01-01", EndDate: "2025-12-31" }`.

---

### **reset()**
- **Parameters:** None.  
- **Description:** Resets the filters to the default values defined during initialization.  
- **Returns:**  
  - (*Object*): The reset filters.  
    Example: `{ StartDate: null, EndDate: null, Category: [] }`.

---

### **update(key, value)**
- **Parameters:**  
  - `key` (*String*): The name of the filter to update.  
    Example: `"Category"`.  
  - `value` (*Any*): The new value for the filter.  
    Example: `["Electronics", "Books"]`.  
- **Description:** Updates or adds a specific filter.  
- **Returns:** None.  

---

### **get(key)**
- **Parameters:**  
  - `key` (*String*): The name of the filter to retrieve.  
    Example: `"StartDate"`.  
- **Description:** Retrieves the value of a specific filter.  
- **Returns:**  
  - (*Any*): The value of the requested filter.  
    Example: `"2025-01-01"`.

---

### **getAll()**
- **Parameters:** None.  
- **Description:** Retrieves all currently loaded filters.  
- **Returns:**  
  - (*Object*): All current filters.  
    Example: `{ StartDate: "2025-01-01", EndDate: "2025-12-31", Category: ["Electronics", "Books"] }`.

---

## Example Usage

```javascript
const { FilterManager } = require("frontend-utils");

const filterManager = new FilterManager({
  storageKey: "myAppFilters",
  defaultFilters: { StartDate: null, EndDate: null, Category: [] },
});

// Save filters
filterManager.save({ StartDate: "2025-01-01", EndDate: "2025-12-31" });

// Load filters
console.log(filterManager.load());

// Reset filters
console.log(filterManager.reset());

// Update a specific filter
filterManager.update("Category", ["Books", "Movies"]);
console.log(filterManager.get("Category"));

// Get all filters
console.log(filterManager.getAll());
