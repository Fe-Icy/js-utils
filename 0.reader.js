const fs = require('fs')
const path = require('path')
const rm = require('rimraf')

const fileName = 'README.md'
const staticContent = [
	'### 🚀✈️🚄 js 碎片化知识\n\n'
]
const baseUrl = 'https://github.com/Fe-Icy/charming-javascript/blob/master/'

const readFiles = p => {
	const files = fs.readdirSync(p)
	const fileUrls = files.filter(item => {
		return !isNaN(item.slice(0, 1)) && Number(item.slice(0, 1)) !== 0
	}).map(file => `[${file}](${baseUrl + encodeURIComponent(file)})`)
	return fileUrls
}

const writeFile = (filename, data, filepath = __dirname) => {
	const lastData = data + '\r'
	console.log(lastData)
	const lastPath = path.join(filepath, filename)
  fs.appendFileSync(lastPath, lastData, function(err) {
    if(err) {
      debug(`Error: some error occured, the status is ${err.status}`)
    }
  })
}


// 删除旧的 README.md
rm(path.join(__dirname, fileName), () => {
	const allFiles = readFiles(__dirname)
	const allContent = [].concat(staticContent, allFiles)
	allContent.forEach(file => {
		writeFile(fileName, file)
	})
})

