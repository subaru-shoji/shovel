const NAROU_ROOT_URL = 'http://ncode.syosetu.com/';
const ORDER_LIST = {
  favnovelcnt: 'ブックマーク数の多い順',
  reviewcnt: 'レビュー数の多い順',
  hyoka: '総合評価の高い順',
  hyokaasc: '総合評価の低い順',
  impressioncnt: '感想の多い順',
  hyokacnt: '評価者数の多い順',
  hyokacntasc: '評価者数の少ない順',
  weekly: '週間ユニークユーザの多い順',
  lengthdesc: '小説本文の文字数が多い順',
  lengthasc: '小説本文の文字数が少ない順',
  ncodedesc: 'Nコードが新しい順',
  old: '古い順'
};

const SHOW_PER_SEARCH = 500;


export {
  ORDER_LIST,
  NAROU_ROOT_URL,
  SHOW_PER_SEARCH
};