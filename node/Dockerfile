from node:latest

workdir /usr/src/app

copy package.json /usr/src/app/
run npm install
copy * /usr/src/app/

cmd node index.js