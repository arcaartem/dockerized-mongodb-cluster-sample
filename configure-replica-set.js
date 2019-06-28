config = {
    "_id" : "rs0",
    "members" : [
        {
            "_id" : 0,
            "host" : "mongo-node-1:27017"
        },
        {
            "_id" : 1,
            "host" : "mongo-node-2:27018"
        },
        {
            "_id" : 2,
            "host" : "mongo-node-3:27019"
        },
        {
            "_id" : 3,
            "host" : "mongo-node-4:27020"
        },
        {
            "_id" : 4,
            "host" : "mongo-node-5:27021"
        }
    ]
};
rs.initiate(config);
