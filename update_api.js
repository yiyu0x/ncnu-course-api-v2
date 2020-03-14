const requests = require('request')
const fs = require('fs')
const YEAR = '108'
const SEMESTER = '2'
const NCNU_API = `https://api.ncnu.edu.tw/API/get.aspx?json=course_ncnu&
								year=${YEAR}&semester=${YEAR}&unitId=all`

requests(NCNU_API, (error, response, body) => {
	const file_name = `${YEAR}_${SEMESTER}.json`
	const jsonstr = JSON.stringify(JSON.parse(body)['course_ncnu'])
	fs.writeFile(`api_data/${file_name}`, jsonstr, (err) => {
		if (err) throw err
		console.log(`Update [${file_name}] Successed.`)
	})
})