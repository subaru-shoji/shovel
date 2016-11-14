export const updateSearchQuery = (query) => {
  return {
    type: 'UPDATE_SEARCH_QUERY',
    query
  };
};

export const initializeNarouList = () => {
  return {
    type: 'INITIALIZE_NAROU_LIST'
  }
};


export const addNarouList = (payload) => {
  return {
    type: 'ADD_NAROU_LIST',
    payload
  }
};

export const readNovel = (payload) => {
  return {
    type: 'READ_NOVEL',
    payload
  };
};

export const initializeDbListWith = (payload) => {
  return {
    type: 'INITIALIZE_DB_LIST_WITH',
    payload
  };
};