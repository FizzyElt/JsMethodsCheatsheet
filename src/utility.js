export const getSelectList = arr => {
  const set = new Set()
  const newArr = ['None']

  arr.forEach(o => {
    if (!set.has(o.returnType)) {
      set.add(o.returnType)
      newArr.push(o.returnType)
    }
  })
  return newArr
}
