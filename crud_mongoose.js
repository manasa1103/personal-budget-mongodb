const mongoose = require("mongoose");

const nameModel = require("./models/budget_schema")

let url = 'mongodb://127.0.0.1:27017/pbmongodb';

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected");
            nameModel.find({})
                .then((data) => {
                    console.log(data);
                    mongoose.connection.close();

                })
                .catch((connectionError) => {
                    console.log(connectionError)
                })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })