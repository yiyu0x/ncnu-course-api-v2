FROM node:12
RUN npm install -g json-server
WORKDIR /data
EXPOSE 80
ENTRYPOINT ["bash", "-c", "json-server db.json --read-only --host 0.0.0.0 -p 80"]