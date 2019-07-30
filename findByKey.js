/**
 * 根据 key 值找到对象中对应的 value
 * @param {object} params.obj
 * @param {string} params.key
 */

function findByKey(obj, key) {
  if(typeof obj !== 'object' || !key) return
  if(obj.hasOwnProperty(key)) {
    return obj[key]
  } else {
    for(const item in obj) {
      if(typeof obj[item] === 'object') {
        return findByKey(obj[item], key)
      }
    }
  }
}
