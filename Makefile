.PHONY: run

run:
	yarn run dev

.PHONY: clean-docker build-docker run-docker push-docker

clean-docker:
	docker container prune -f
	docker image prune -f
	docker volume prune -f

build-docker:
	docker build \
		--tag website:latest \
		.

run-docker: build-docker
	docker run \
		--detach \
		--env API_SERVICE_URL="http://localhost:8080" \
		-p 3000:3000 \
		website

push-docker: build-docker
	docker tag website:latest sbkim99/poolet:latest
	docker push sbkim99/poolet:latest