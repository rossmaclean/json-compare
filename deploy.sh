#!/bin/bash

set -e

docker build -t rossmaclean/json-compare:latest .
docker push rossmaclean/json-compare:latest
cloudron update --server my.rossmac.co.uk --app json-compare.rossmac.co.uk --image rossmaclean/json-compare:latest