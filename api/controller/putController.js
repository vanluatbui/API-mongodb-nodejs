require("dotenv").config();

module.exports = {

    SuaQuanAo: (req, res) => {
        var idQuanAo = new require("mongodb").ObjectId(req.params.idQuanAo);

        var data = req.body;

        require("mongodb").MongoClient.connect(process.env.URL_DB,function(err, db){
                if (err) throw err;

                var dbo = db.db(process.env.DB_NAME);
                dbo.collection("QuanAo").updateOne({"_id" : idQuanAo}, {$set : data},function(err, result){
                    if (err) throw err;

                    res.json({result : true, message :"Sửa thành công !"});
                    db.close();
                })

        })
    }
}