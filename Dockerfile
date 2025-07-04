FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN mkdir uploads
EXPOSE 3000
CMD ["node", "index.js"]
