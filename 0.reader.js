const fs = require('fs')
const path = require('path')

const title = '### 🚀✈️🚄 js 碎片化知识'
const baseUrl = 'https://github.com/Fe-Icy/charming-javascript/blob/master/'

const readFiles = p => {
	const files = fs.readdirSync(p)
	const fileUrls = files.filter(item => {
		return !isNaN(item.slice(0, 1)) && Number(item.slice(0, 1)) !== 0
	}).map(file => `[${file}](${baseUrl + file})\n`)
	return fileUrls
}

const writeFile = (filename, data, filepath = __dirname) => {
	data = data + '\n'
	const lastPath = path.join(filepath, filename)
  fs.writeFileSync(lastPath, data, function(err) {
    if(err) {
      debug(`Error: some error occured, the status is ${err.status}`)
    }
  })
}
const allFiles = readFiles(__dirname)

const fileContent = title + '\n' + '\n' + allFiles.join('')

writeFile('README.md', fileContent)
