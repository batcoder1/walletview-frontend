#!/bin/bash

 # If the environment is development, ng server is fired
if [ "$CMS_ENV" == "development" ]; then
  npm run start:dev
# If the environment is production, ng build --prod is fired    
elif [ "$CMS_ENV" == "staging" ]; then
  npm run serve-staging-ngsw

elif [ "$CMS_ENV" == "production" ]; then
  npm run serve-prod-ngsw
fi 