#!/bin/bash

set -exo pipefail
shopt -s nullglob

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
cd ${SCRIPT_DIR}

source ${ENVFILE:-.env}

cd dist/
http-server -p ${PORT} .
