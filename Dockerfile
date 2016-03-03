FROM docker.infra.tstllc.net/base/ui-base-docker:latest

ENV NODE_ENV=production

# Install Dependencies
WORKDIR /ui

# Copy over the App
COPY . /ui/

# Run the image
EXPOSE 1337
CMD [ "node", "index" ]