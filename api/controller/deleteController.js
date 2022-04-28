require("dotenv").config();

module.exports = {

    XoaQuanAo: (req,res) => {

        var idQuanAo = require("mongodb").ObjectId(req.params.idQuanAo);
        require("mongodb").MongoClient.connect(process.env.URL_DB, function(err, db){
            if (err) throw err;

            var dbo = db.db(process.env.DB_NAME);
            dbo.collection("QuanAo").deleteOne({"_id" : idQuanAo}, function(err, result){
                if (err) throw err;

                res.json({result : true, message : "Xoá thành công !"});
            })
        })
    }
}