import { arr, num, obj, str, bool, noReturn } from './type.js'

const arrayList = [
  {
    name: 'Array.from()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from',
    returnType: arr,
    isChangeValue: false,
    parameter: 'arrayLike, mapFn, thisArg',
  },
  {
    name: 'Array.isArray()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray',
    returnType: bool,
    isChangeValue: false,
    parameter: 'obj',
  },
  {
    name: 'Array.of()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/of',
    returnType: arr,
    isChangeValue: false,
    parameter: 'el1, el2, ...eln',
  },
]

export default arrayList
