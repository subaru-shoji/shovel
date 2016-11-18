const NAROU_ROOT_URL = 'http://ncode.syosetu.com';
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

const GENRE_LIST = {
  '101': '異世界',
  '102': '現実世界',
  '201': 'ハイファンタジー',
  '202': 'ローファンタジー',
  '301': '純文学',
  '302': 'ヒューマンドラマ',
  '303': '歴史',
  '304': '推理',
  '305': 'ホラー',
  '306': 'アクション',
  '307': 'コメディー',
  '401': 'VRゲーム',
  '402': '宇宙',
  '403': '空想科学',
  '404': 'パニック',
  '9901': '童話',
  '9902': '詩',
  '9903': 'エッセイ',
  '9904': 'リプレイ',
  '9999': 'その他',
  '9801': 'ノンジャンル'
};

const SHOW_PER_SEARCH = 20;
const SEARCH_LIMIT = 2000;


export {
  ORDER_LIST,
  GENRE_LIST,
  NAROU_ROOT_URL,
  SHOW_PER_SEARCH,
  SEARCH_LIMIT
};