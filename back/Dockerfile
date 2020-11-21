FROM mhart/alpine-node

ENV HOME=/home/app
WORKDIR $HOME

COPY ./package.json .
RUN npm install
COPY . /home/app

ENTRYPOINT [ "npm", "start" ]