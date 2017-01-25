import { List } from 'immutable';
import R from 'ramda';

class ReadListService {
   addRecords(list, resultArray, currentReadList) {
    // fetch ncode list.
    const ncodeList = R.intersectionWith(R.eqBy(R.prop('ncode')), resultArray, currentReadList.toArray())
                        .map((el)=>el.ncode);

    // fetch db object.
    const readList = R.filter((n) => ncodeList.includes(n.ncode), currentReadList.toArray());
    const merged = resultArray.map((el) => {
      const data = (readList.find((elm) => el.ncode === elm.ncode) || {});
      return R.merge(el, data);
    });

    return list.concat(List(merged));
  }


  updateRecordBy (list, record) {
    const index = list.findIndex((el) => el.ncode === record.ncode);
    const merged = R.merge(list.get(index), record);

    return list.update(index, ()=> merged);
  }
}

export default ReadListService;
