# FROM node:16.17.1-alpine3.16 as build
# WORKDIR /usr/app
# COPY . /usr/app
# RUN npm ci
# RUN npm run build

# FROM nginx:1.23.1-alpine
# EXPOSE 3000
# COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /usr/app/dist /usr/share/nginx/html







# # # Step 1: Build React App
# # FROM node:alpine3.18 as build
# # WORKDIR /app 
# # COPY package.json .
# # RUN npm install
# # COPY . .
# # RUN npm run build

# # # Nginx Stage
# # FROM nginx:latest

# # # Expose port 80
# # EXPOSE 80

# # # Copy the Nginx configuration file
# # COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# # # Copy built assets from the build stage
# # COPY --from=build /usr/src/client/dist /usr/share/nginx/html

# # CMD ["nginx", "-g", "daemon off;"]