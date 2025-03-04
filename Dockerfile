# Use the official MariaDB image as a base image
FROM mariadb:latest

# Set environment variables for MariaDB
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=rootpassword