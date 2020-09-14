FROM node:alpine
WORKDIR /usr/src/app
COPY front/ ./front/
RUN cd front && npm install && npm run build

FROM node:alpine
WORKDIR /root/
COPY --from=ui-build /usr/src/app/front/build ./front/build
COPY back/package*.json ./back/
RUN cd back && npm install
COPY back/src/shared/infra/http/server.js ./back/

EXPOSE 3080

CMD ["node", "./back/server.js"]