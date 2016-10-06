import naroujs from 'naroujs';

export function searchNovelAsync(params) {
  return function (dispatch) {
    return naroujs(params).then((result) => dispatch(updateNovelList(result.items)));
  };
}

function updateNovelList(novels) {
  return {
    type: 'UPDATE_NOVEL_LIST',
    novels
  }
}
