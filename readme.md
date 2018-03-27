# TAG Library

## Get started.

### Recommended development practice

The recommended development process for development is to use docker. This will produce 2 containers that will host the demo site (http://localhost:3333) and serve the tag-library itself (http://localhost:3366).

Docker-compose is used to mount the source files into the containers to be built.

### Windows setup/prerequisites

Install [Docker for windows](https://www.docker.com/docker-windows)

For windows https://github.com/dzek69/docker-windows-notifier/releases will also need to be downloaded and add to your path to notify the container when files change. (This is required because of a known issue in containers running on a windows host)

### To start

On windows run the PowerShell script `windows-startup` this file will run the docker compose file downloading the assets and building the image for you.
`
