#!/bin/bash

cp -r /usr/src/build/node_modules/ /usr/src/app

exec npm run start:dev
