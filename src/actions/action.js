export const updateNarouList = (narou) => {
  return {
    type: 'UPDATE_NAROU_LIST',
    narou
  };
};

export const updateSearchQuery = (query) => {
  return {
    type: 'UPDATE_SEARCH_QUERY',
    query
  };
};