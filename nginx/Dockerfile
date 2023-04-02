FROM node:17-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build app
COPY . .
RUN yarn build && yarn export

FROM nginx:1.21-alpine

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]