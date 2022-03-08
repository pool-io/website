.PHONY: build-docker run-docker push-docker

build-docker:
	docker build \
		--tag website:latest \
		.

run-docker: build-docker
	docker run \
		--detach \
		-p 3000:3000 \
		website

push-docker: build-docker
	docker tag website:latest sbkim99/poolet:latest
	docker push sbkim99/poolet:latest