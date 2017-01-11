import { Record, List } from 'immutable';
import R from 'ramda';


const SearchResultRecord = Record({
  list: List()
});

class SearchResult extends SearchResultRecord{
  pushResultToList (resultList, dbList) {
    // fetch ncode list.
    const ncodeList = R.intersectionWith(R.eqBy(R.prop('ncode')), resultList, this.db.toArray())
                        .map((el)=>el.ncode);

    // fetch db object.
    const readList = R.filter((n) => ncodeList.includes(n.ncode), this.db.toArray());
    const merged = resultList.map((el) => {
      const data = (readList.find((elm) => el.ncode === elm.ncode) || {});
      return R.merge(el, data);
    });

    return this.set('list', this.list.concat(List(merged)));
  }


  updateList (data) {
    const index = this.list.findIndex((el) => el.ncode === data.ncode);
    const merged = R.merge(this.list[index], data);

    return this.set('list', this.list.update(index, ()=> merged));
  }
}

export default SearchResult;