import { LS_INBOX } from "../actions/action.constants";
import { todoListtype } from "../TodoListModel";

export const dataChangeArr = (dataArr: todoListtype[], indexValue?: number) => {
  const arr: number[] = [];
  dataArr.map((e, index) => {
    if (indexValue) {
      if (e[indexValue] === true) {
        arr.push(index);
      }
    } else {
      if (e[5] === false) {
        arr.push(index);
      }
    }
    return index;
  });
  return arr;
};

export const dataValueChange = (
  id: number,
  indexNumber: number,
  dataArray: todoListtype[]
) => {
  const dataAtt = JSON.parse(
    JSON.stringify(
      dataArray.map((e, index) => {
        if (index === id) {
          e[indexNumber] = !e[indexNumber];
        }
        return e;
      })
    )
  );
  localStorage.setItem(LS_INBOX, JSON.stringify(dataAtt));
  return dataAtt;
};
