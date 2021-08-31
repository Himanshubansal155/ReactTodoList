import { todoListtype } from "../TodoListModel";

export const dataChangeArr = (dataArr: todoListtype[], indexValue?: number) => {
  const arr: number[] = [];
  dataArr.map((e, index) => {
    if (indexValue) {
      if (e[indexValue] === true) {
        arr.push(index);
      }
    } else {
      arr.push(index);
    }
    return index;
  });
  return arr;
};
