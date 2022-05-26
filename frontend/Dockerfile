# base image
FROM node:17-alpine as build

# set working directory
WORKDIR /HEKA-FRONTEND

# add app
COPY . /HEKA-FRONTEND/

RUN npm install --silent && npm install react-scripts@3.3.0 -g --silent

# start and/or build app
RUN npm run build


FROM nginx:1.21.6-alpine

# Copies static resources from builder stage
COPY --from=build /HEKA-FRONTEND/build /usr/share/nginx/html

# Remove default nginx static resources
RUN rm /etc/nginx/conf.d/default.conf
#copies React to the container directory

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# Containers run nginx with global directives and daemon off  
ENTRYPOINT ["nginx","-g", "daemon off;"]