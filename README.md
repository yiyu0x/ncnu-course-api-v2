# ncnu-course-api-v2

## run server

- 每學期更新 API : `npm run update_api` 

`json-server --ro api_data/108_2.json`

## run in docker

`docker run -d -p 8088:80 -v $PWD/api_data/108_2.json:/data/db.json yiyu0x/ncnu-course-api:v2`

## docs

以下為 API 資料格式：
```
{
	"course_ncnu":{
	    "item":[
		{
		    "faculty":"人文學院",
		    "year":"108",
		    "semester":"2",
		    "department":"中文系",
		    "edepartment":"Chinese Language and Literature",
		    "course_id":"010044",
		    "class":"0",
		    "course_cname":"中國文學史(二)",
		    "course_ename":"History of Chinese Literature (Ⅱ)",
		    "time":"2ef",
		    "location":"人107",
		    "teacher":"曾守仁",
		    "eteacher":"Shou-Jen  Tseng",
		    "division":"學士班",
		    "edivision":"Bachelor",
		    "course_credit":"2.0"
		},
	      ...,
	      ...
	    ]
	}
}
```

需要查詢特定資料可以使用以下規則：

- 全部資料：`127.0.0.1:8088/item`
- 查詢特定教師相關課程：`127.0.0.1:8088/item?teacher=張克寧`
	- 所有欄位皆可查詢	
- 需要模糊搜尋可以在欄位名稱前面後面加上 `_like`
	- 搜尋姓名有張的老師相關課程：`127.0.0.1:8088/item?teacher_like=張`
- 搜尋特定課號：`127.0.0.1:8088/item?course_id=135121`
- 多重條件：`127.0.0.1:8088/item?course_id_like=1351&teacher_like=練`

更多搜尋條件請見 [json-server](https://github.com/typicode/json-server.git)
