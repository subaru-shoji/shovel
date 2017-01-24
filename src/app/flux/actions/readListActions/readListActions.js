export const commitRecord = (payload) => {
  return {
    type: 'COMMIT_RECORD',
    payload
  };
};

export const initializeReadListWith = (payload) => {
  return {
    type: 'INITIALIZE_READ_LIST_WITH',
    payload
  };
};
