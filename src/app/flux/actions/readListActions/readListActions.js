export const update = (payload) => {
  return {
    type: 'READ_LIST.UPDATE',
    payload
  };
};

export const commit = (payload) => {
  return {
    type: 'READ_LIST.COMMIT',
    payload
  };
};

