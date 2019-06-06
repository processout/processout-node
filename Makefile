.PHONY: test
test:
	docker build -t fountain-node .
	docker run -ti --rm fountain-node ./node_modules/mocha/bin/mocha

