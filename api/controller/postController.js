require("dotenv").config();

module.exports = {

    ThemQuanAo: (req,res) => {

        var data = req.body;

        require("mongodb").MongoClient.connect(process.env.URL_DB,function(err, db){
            if (err) throw err;

            var dbo = db.db(process.env.DB_NAME);
            dbo.collection("QuanAo").insertOne(data, function(err, result){
                if (err) throw err;

                res.json({result : true, message : "Thêm thành công !"});
                db.close();
            })
        })
    }
}