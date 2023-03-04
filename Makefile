up-service:
	docker-compose build --no-cache $(service) &&\
	docker-compose up -d --force-recreate $(service)

up-db:
	make up-service service=postgres &&\
	make up-service service=migration

up-application:
	make up-service service=api &&\
	make up-service service=web

up-all:
	make up-db &&\
	make up-application