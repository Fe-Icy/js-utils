/**
 * 计算字符串的字节长度
 * @param {string} params.str
 */
function calcByteLength(str) {
  return str ? str.split('').map(s => s.charCodeAt() > 255 ? 2 : 1).reduce((t, n) => t + n, 0) : 0
}

function calcByteLength2(str) {
  let size = 0
  for(const t of str) {
    size += t.charCodeAt() > 255 ? 2 : 1
  }
  return size
}

/**
 * 按照指定字节长度截取字符串
 * @param {string} params.str
 * @param {number} params.size
 */
function cutStrBySize(str, size) {
  if(typeof str !== 'string') return
  if(typeof size !== 'number' || size <= 0) return ''
  let currentSize = 0
  for(let i = 0; i < str.length; i++) {
    currentSize += str[i].charCodeAt() > 255 ? 2 : 1
    if(currentSize > size) {
      return str.slice(0, i)
    }
  }
  return str
}

module.exports = {
  calcByteLength,
  calcByteLength2,
  cutStrBySize
}
