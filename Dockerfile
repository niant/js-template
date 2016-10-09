FROM node:6.7

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/js-template/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/js-template
run npm install
