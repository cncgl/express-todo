# build with build-args. like
# docker build --build-arg DB_CONNECTION_STRING="<YOUR_DATABASE_CONNCTION_STRING>" -t <image_name> .
FROM ubuntu:16.04
ARG DB_CONNECTION_STRING
RUN apt update && apt -y upgrade
RUN apt -y install build-essential git curl wget nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node
# RUN apt -y install zlib1g-dev libsqlite3-dev libreadline6-dev libgdbm-dev libbz2-dev sqlite3 tk-dev zip libssl-dev
WORKDIR /root/git
ENV NODE_ENV production
ENV DB_CONNECTION_STRING ${DB_CONNECTION_STRING}
# RUN git clone https://github.com/riywo/anyenv ~/.anyenv
# RUN echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> /root/.profile
# RUN echo 'eval "$(anyenv init -)"' >> /root/.profile
# RUN exec $SHELL -l
# RUN anyenv install ndenv
# RUN anyenv install pyenv
# RUN pyenv install 2.7.10
# RUN pyenv global 2.7.10
# RUN ndenv install 5.11.0
# RUN ndenv global 5.11.0
WORKDIR /root/git/express_todo
COPY . /root/git/express_todo
RUN npm i
RUN npm run migrate
EXPOSE 3000
CMD ["npm", "start"]
