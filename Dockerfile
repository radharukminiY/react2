FROM node
WORKDIR '/app'
COPY package.json
RUN npm install
COPY . .
EXPOSE 8990  //port number
CMD ["npm" ,"start"]
