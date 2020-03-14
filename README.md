# ncnu-course-api-v2

## run server

`json-server --ro api_data/108_2.json`

## run in docker

`docker run -d -p 8088:80 -v $PWD/api_data/108_2.json:/data/db.json yiyu0x/ncnu-course-api:v2`
