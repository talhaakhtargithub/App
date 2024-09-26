# Use nginx as the base image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the frontend files to the Nginx container
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80
