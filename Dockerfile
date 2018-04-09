FROM stefanscherer/node-windows:4

ADD . C:/app
WORKDIR 'C:/app'
RUN npm.cmd install