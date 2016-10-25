import naroujs from 'naroujs';

export function searchNovelAsync(params) {
  return function (dispatch) {
    return naroujs(params).then((result) => dispatch(updateSearchResult(result.items, params)));
  };
}

export function updateSearchResult (novels, params) {
  return {
    type: 'UPDATE_SEARCH_RESULT',
    novels,
    params
  };
}