#!/bin/bash

 # If the environment is development, ng server is fired
if [ "$ENV" == "development" ]; then
  npm run start:dev

elif [ "$ENV" == "production" ]; then
  npm run serve-prod
fi 