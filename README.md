# Dockerised MongoDB cluster - DO NOT USE FOR PRODUCTION

## Requirements

* Docker
* Docker Compose

## Setup

* Update your device's hosts file with the following entries pointing to 127.0.0.1:
    * 127.0.0.1 mongo-node-1
    * 127.0.0.1 mongo-node-2
    * 127.0.0.1 mongo-node-3
    * 127.0.0.1 mongo-node-4
    * 127.0.0.1 mongo-node-5

* From a terminal, run `./start.sh`. This will spin up 6 docker containers, 5 mongodb nodes and a mongo-express instance.
* You should be able to connect to the cluster with the connection string `mongodb://mongo-node-1:27017,mongo-node-2:27018,mongo-node-3:27019,mongo-node-4:27020,mongo-node-5:27021/?replicaSet=rs0`
* As an example, `$ mongo mongodb://mongo-node-1:27017,mongo-node-2:27018,mongo-node-3:27019,mongo-node-4:27020,mongo-node-5:27021/?replicaSet=rs0`
