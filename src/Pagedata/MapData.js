import { num, undef, bool, iterator, any, mapObject } from './type.js'

const mapList = [
  {
    name: 'Map.prototype.size',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/size',
    explanation: '返回 一個Map物件的成員數量。',
    returnType: num,
    isChangeValue: false,
    parameter: '',
  },
  {
    name: 'Map.prototype.clear()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/clear',
    explanation: '移除Map物件中的所有元素。',
    returnType: undef,
    isChangeValue: true,
    parameter: '',
  },
  {
    name: 'Map.prototype.delete()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/delete',
    explanation: '移除Map物件中指定的元素。',
    returnType: bool,
    isChangeValue: true,
    parameter: 'key',
  },
  {
    name: 'Map.prototype.entries()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/entries',
    explanation: '返回一個新的包含 [key, value] 對的 Iterator 物件，返回的迭代器的迭代顺序與 Map 物件的插入順序相同。',
    returnType: iterator,
    isChangeValue: false,
    parameter: '',
  },
  {
    name: 'Map.prototype.forEach()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/forEach',
    explanation: '會以插入順序對 Map 物件中的每一個鍵值對執行一次參數中提供的回調函數。',
    returnType: undef,
    isChangeValue: false,
    parameter: 'callback(), *thisArg',
  },
  {
    name: 'Map.prototype.get()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/get',
    explanation: '返回某個 Map 物件中的一個指定元素。',
    returnType: any,
    isChangeValue: false,
    parameter: 'key',
  },
  {
    name: 'Map.prototype.has()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/has',
    explanation: '返回一個bool值，用來表明Map中是否存在指定元素。',
    returnType: bool,
    isChangeValue: false,
    parameter: 'key',
  },
  {
    name: 'Map.prototype.keys()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/keys',
    explanation: '返回一個新的Iterator物件。它包含按順序插入的Map物件中每個元素的鍵值。',
    returnType: iterator,
    isChangeValue: false,
    parameter: '',
  },
  {
    name: 'Map.prototype.set()',
    mdnLink: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/set',
    explanation: '為Map物件添加或更新一個指定了鍵（key）和值（value）的（新）鍵值對。',
    returnType: mapObject,
    isChangeValue: false,
    parameter: 'key, value',
  },
]

export default mapList
