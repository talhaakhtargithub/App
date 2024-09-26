# Use nginx as the base image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY index.html /usr/share/nginx/html/index.html
COPY script.js /usr/share/nginx/html/script.js
COPY styles.css /usr/share/nginx/html/styles.css

EXPOSE 80
