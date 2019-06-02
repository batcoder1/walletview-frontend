FROM node:8.11.4

# set our node environment, either development or production
# defaults to production, compose overrides this to local on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Angular app path
ENV ANGULARPATH /opt/app

# Set npm in not production mode
RUN npm config set -g production false

# Name of user & group who runs node app
ENV FRONTEND_USER frontend

# Create non privilege user as well as its group
RUN groupadd -r $FRONTEND_USER && useradd -m -r -g $FRONTEND_USER $FRONTEND_USER

# default to port 80 for node, and 5858 or 9229 for debug and 4200 for angular cli
ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT 5858 9229 8000

# Create angular app path
RUN mkdir -p $ANGULARPATH

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR $ANGULARPATH

# Copy all content to container from host
COPY . .

# Install angular/cli package as global in order to call ng command for instance
RUN npm i -g @angular/cli

# Install all dependencies from package.json
RUN yarn

# Change owner & group for angular app path to akima user
RUN chown -R $FRONTEND_USER:$FRONTEND_USER $ANGULARPATH

# Set user name for running the image in order to not to use root because of
# security
USER $FRONTEND_USER

# Add node_modules binaries in the path env
ENV PATH $ANGULARPATH/node_modules/.bin:$PATH

# Set executable permissions to the cmd run script
#RUN chmod +x ./docker/containers/akima-cms/cmd.sh

# Run script for checking environment and running angular cli
#CMD [ "./docker/containers/akima-cms/cmd.sh" ]
CMD [ "npm", "run", "serve-prod" ]

