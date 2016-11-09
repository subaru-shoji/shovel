export const updateSearchQuery = (query) => {
  return {
    type: 'UPDATE_SEARCH_QUERY',
    query
  };
};

export const readNovel = (novel) => {
  return {
    type: 'READ_NOVEL',
    novel
  };
};

export const initializeNarouList = () => {
  return {
    type: 'INITIALIZE_NAROU_LIST'
  }
};


export const addNarouList = () => {
  return {
    type: 'ADD_NAROU_LIST'
  }
};

export const updateNarouList = (narou) => {
  return {
    type: 'UPDATE_NAROU_LIST',
    narou
  };
};
