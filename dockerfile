FROM adamsandersonaccess/tag-library-dev

WORKDIR /app

COPY src/ ./src

RUN npm run build.lib
RUN rm -rf node_modules
RUN npm install serve

EXPOSE 3366

CMD ["node", "server.js" ]