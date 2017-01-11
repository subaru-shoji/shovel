export const commitRecord = (payload) => {
  return {
    type: 'COMMIT_RECORD',
    payload
  };
};

export const initializeDbListWith = (payload) => {
  return {
    type: 'INITIALIZE_DB_LIST_WITH',
    payload
  };
};
