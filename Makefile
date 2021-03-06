#                                 __                 __
#    __  ______  ____ ___  ____ _/ /____  ____  ____/ /
#   / / / / __ \/ __ `__ \/ __ `/ __/ _ \/ __ \/ __  /
#  / /_/ / /_/ / / / / / / /_/ / /_/  __/ /_/ / /_/ /
#  \__, /\____/_/ /_/ /_/\__,_/\__/\___/\____/\__,_/
# /____                     matthewdavis.io, holla!
#
include .make/Makefile.inc

NS		?= default
VERSION ?= $(shell git rev-parse HEAD)
APP     ?= stackmentor-platform-ui
IMAGE   ?= registry.gitlab.com/stackmentor/platform-services/$(APP):$(VERSION)
PORT    ?= 80

.PHONY: build

all:    kubeme build push
deploy:	kubeme build push install

build: 		; docker build -t $(IMAGE) .
run: 		; docker run -p 81:80 $(IMAGE)
push:		; docker push $(IMAGE)

kubeme:

	kubectl config use-context gke_streaming-platform-production_us-central1-a_cluster-1

changelog:

	git changelog --all --tag ${VERSION} -p && cp History.md src/assets/

version:

	envsubst < src/environments/environment.ts.tmp > src/environments/environment.ts
	envsubst < src/environments/environment.prod.ts.tmp > src/environments/environment.prod.ts
