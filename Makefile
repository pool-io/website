.PHONY: build run

build:
	CGO_ENABLED=0 go build -o "bin/website" .

run:
	go run main.go

clean:
	rm -rf bin

.PHONY: build-docker run-docker push-docker

build-docker:
	docker build \
		--tag website:latest \
		.

run-docker: build-docker
	docker run \
		--detach \
		-p 8080:8080 \
		website

push-docker: build-docker
	docker tag website:latest sbkim99/poolet:latest
	docker push sbkim99/poolet:latest