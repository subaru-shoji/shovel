import { Record, List } from 'immutable';
import R from 'ramda';


const BasicNovelRecords = Record({
  list: List()
});

class NovelRecords extends BasicNovelRecords {
   addRecords(resultList, dbList) {
    // fetch ncode list.
    const ncodeList = R.intersectionWith(R.eqBy(R.prop('ncode')), resultList, dbList)
                        .map((el)=>el.ncode);

    // fetch db object.
    const readList = R.filter((n) => ncodeList.includes(n.ncode), dbList);
    const merged = resultList.map((el) => {
      const data = (readList.find((elm) => el.ncode === elm.ncode) || {});
      return R.merge(el, data);
    });

    return this.set('list', this.list.concat(List(merged)));
  }


  updateRecordBy (data) {
    const index = this.list.findIndex((el) => el.ncode === data.ncode);
    const merged = R.merge(this.list.get(index), data);

    return this.set('list', this.list.update(index, ()=> merged));
  }
}

export default NovelRecords;