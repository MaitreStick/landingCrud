export const setEntries = (state, entries) => {
    state.entries = entries;
};

export const selectEntry = (state, entryId) => {
    state.selectedEntry = state.entries.find(entry => entry.id === entryId) || null;
};

export const updateEntry = (state, updatedEntry) => {
    const index = state.entries.findIndex(entry => entry.id === updatedEntry.id);
    if (index !== -1) {
        state.entries.splice(index, 1, updatedEntry);
    }
};

export const addEntry = (state, newEntry) => {
    state.entries.push(newEntry);
};

export const removeEntry = (state, id) => {
    const index = state.entries.findIndex(entry => entry.id === id);
    if (index !== -1) {
        state.entries.splice(index, 1);
    }
};

