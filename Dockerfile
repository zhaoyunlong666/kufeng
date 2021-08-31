
# docker build -t node_jiaxiao:15 .
# docker run -idt -p 1000:1000 --name node_jiaxiao node_jiaxiao:15

FROM  alpine:latest


RUN echo -e 'https://mirrors.aliyun.com/alpine/v3.6/main/\nhttps://mirrors.aliyun.com/alpine/v3.6/community/' > /etc/apk/repositories
RUN apk update
RUN apk upgrade
RUN apk add --no-cache nodejs-npm
RUN npm install -g pm2@latest
# RUN pm2 install pm2-webshell
# RUN pm2 conf pm2-webshell:username waterchestnut
# RUN pm2 conf pm2-webshell:password waterchestnut

VOLUME ["/jiaxiao"]
WORKDIR /jiaxiao
COPY . /jiaxiao
RUN chmod 755 /jiaxiao
RUN apk add yarn
RUN yarn

EXPOSE 1000

ENTRYPOINT [ "node" ]

#CMD ["server.js"]
CMD ["pm2","start server.js --no-daemon"] # --name pm2app
#CMD ["forever -c 'node --harmony' app.js"]


