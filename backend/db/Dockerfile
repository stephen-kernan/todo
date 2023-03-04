FROM python:3.9-slim-buster
ENV LANG=en_US.UTF-8

RUN apt-get update && \
  apt-get install -y python3-setuptools gcc libpq-dev

COPY requirements.txt .

RUN pip3 install -r requirements.txt

WORKDIR /

COPY . .

CMD ["alembic", "upgrade", "head"]