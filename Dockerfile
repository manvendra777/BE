# Stage 1
#FROM node:8 as react-build
#WORKDIR /app
#COPY . ./
#RUN yarn
#RUN yarn build

# Stage 2 - the production environment
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=react-build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

#build docker

FROM node:12.18.3 as build-env

WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

# execution docker
FROM node:12.18.3

WORKDIR /app

COPY --from=build-env /app/build ./

# install server
RUN npm install -g serve

CMD ["/bin/bash", "-c", "serve -s /app"]



