import { setObject ,undef,bool, arrIterator} from './type.js'

const setList = [
  {
    name: 'Set.prototype.add()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/add',
    explanation: '一個 Set 物件的尾端加上一個指定 value 的新元素。',
    returnType: setObject,
    isChangeValue: true,
    parameter: 'value',
  },
  {
    name: 'Set.prototype.clear()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/clear',
    explanation: '從一個 Set 物件中移除其所有元素。',
    returnType: undef,
    isChangeValue: true,
    parameter: '',
  },
  {
    name: 'Set.prototype.delete()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/delete',
    explanation: '從一個 Set 物件中移除指定元素。',
    returnType: bool,
    isChangeValue: true,
    parameter: 'value',
  },
  {
    name: 'Set.prototype.entries()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/entries',
    explanation: '回傳一個 Iterator 物件，其包含著一個由插入順序排序，Set 物件中每個元素的 [value, value] 陣列。儘管對 Set 物件來說沒有像 Map 一樣的 key 概念，為了確保這個 API 運作的與 Map 相似，每個 entry 都有同樣的值同時作為其 key 和 value ，因此回傳的是一個[value, value] 的陣列。',
    returnType: arrIterator,
    isChangeValue: false,
    parameter: '',
  },
  {
    name: 'Set.prototype.forEach()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach',
    explanation: '根據集合中元素的插入順序，依次執行提供的回調函數。',
    returnType: undef,
    isChangeValue: false,
    parameter: 'callback(*currentValue, *currentKey, *set), *thisArg',
  },
  {
    name: 'Set.prototype.has()',
    mdnLink: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set/has',
    explanation: '對一個指定值元素在 Set 物件中的存在與否回傳一個布林值。',
    returnType: bool,
    isChangeValue: false,
    parameter: 'value',
  },
]

export default setList
