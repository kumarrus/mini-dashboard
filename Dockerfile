FROM node:14-alpine

ENV REACT_APP_MEILI_SERVER_ADDRESS http://octo.com:7700
ENV REACT_APP_FLASK_SERVER_ADDRESS http://octo.com:5000

# Copy the app files
WORKDIR /dashboard
COPY ./ ./

# Build
RUN npm i

# Run
CMD ["npm", "run", "start"]