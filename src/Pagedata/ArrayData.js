import { arr, num, obj, str, bool, noReturn } from './type.js'

const arrayList = [
  {
    name: 'Array.from()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
    explanation: '從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。',
    returnType: arr,
    isChangeValue: false,
    parameter: 'arrayLike, *mapFn, *thisArg',
  },
  {
    name: 'Array.isArray()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
    explanation: '函式會檢查傳入的值是否為一個 Array。',
    returnType: bool,
    isChangeValue: false,
    parameter: 'obj',
  },
  {
    name: 'Array.of()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
    explanation: '由引數（arguments）的數量來建立一個新的 Array 實體，而不管引數的數量或類型為何。',
    returnType: arr,
    isChangeValue: false,
    parameter: 'el1, el2, ...elN',
  },
  {
    name: 'Array.prototype.concat()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    explanation: '用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。',
    returnType: arr,
    isChangeValue: false,
    parameter: 'val1, val2, ...valN',
  },
  {
    name: 'Array.prototype.copyWithin()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
    explanation: '對陣列的一部分進行淺拷貝至同一陣列的另一位置並回傳此陣列，而不修改其大小。',
    returnType: arr,
    isChangeValue: true,
    parameter: 'target, *start, *end',
  },
]

export default arrayList
