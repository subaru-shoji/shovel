import naroujs from 'naroujs';
import { SHOW_PER_SEARCH } from '../constants/constant';

export function searchNovelAsync(params, page = 1) {
  const _params = Object.assign({}, params, {
    st: page * SHOW_PER_SEARCH,
    lim: SHOW_PER_SEARCH
  })

  return function (dispatch) {
    return naroujs(_params).then((result) => dispatch(updateNovelList(result.items)));
  };
}

function updateNovelList(novels) {
  return {
    type: 'UPDATE_NOVEL_LIST',
    novels
  }
}

export function updateSearchParams(params) {
  return {
    type: 'UPDATE_SEARCH_PARAMS',
    params
  }
}

export function incrementCurrentPage(page) {
  return updateCurrentPage(page + 1);
}

function updateCurrentPage(page) {
  return {
    type: 'UPDATE_CURRENT_PAGE',
    page
  }
}

