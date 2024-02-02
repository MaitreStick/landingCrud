import adminApi from '@/api/adminApi';

export const loadEntries = async ({ commit }) => {
    const { data } = await adminApi.get('/entries.json');

    if (!data) {
        commit('setEntries', []);
        return;
    }

    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        });
    }

    commit('setEntries', entries);
};

export const updateEntry = async ({ commit }, updatedEntry) => {
    const { id, ...data } = updatedEntry;
    try {
        await adminApi.put(`/entries/${id}.json`, data);
        commit('updateEntry', updatedEntry);
    } catch (error) {
        console.error('Error al actualizar la entrada:', error);
        throw error;
    }
};


export const createEntry = async ({ commit }, entryData) => {
    try {
        const { data } = await adminApi.post('/entries.json', entryData);
        const newEntry = { id: data.name, ...entryData };

        commit('addEntry', newEntry);

        return data.name;
    } catch (error) {
        console.error('Error al crear la entrada:', error);
        throw error;
    }
};

export const deleteEntry = async ({ commit }, id) => {
    try {
        await adminApi.delete(`/entries/${id}.json`);
        commit('removeEntry', id);
    } catch (error) {
        console.error('Error al eliminar la entrada:', error);
        throw error;
    }
};




