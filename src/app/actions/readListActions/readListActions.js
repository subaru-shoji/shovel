export const pushRecord = (payload) => {
  return {
    type: 'PUSH_RECORD',
    payload
  };
};

export const initializeDbListWith = (payload) => {
  return {
    type: 'INITIALIZE_DB_LIST_WITH',
    payload
  };
};
