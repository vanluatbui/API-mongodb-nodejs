require("dotenv").config();

module.exports = {

    getAllQuanAo : (req, res) =>{
        require("mongodb").MongoClient.connect(process.env.URL_DB,function(err, db){
            if (err) throw err;

            console.log(process.env.URL_DB + process.env.DB_NAME);

            var dbo = db.db(process.env.DB_NAME);

            dbo.collection("QuanAo").find().toArray(function(err, data){
                if (err) throw err;

                res.json({result : true, data : data});
                db.close();
            })
        })
    },

    getNewQuanAo : (req, res) => {

        require("mongodb").MongoClient.connect(process.env.URL_DB,function(err,db){
            if (err) throw err;

            var dbo = db.db(process.env.DB_NAME);
            dbo.collection("QuanAo").find().sort("_id",-1).limit(3).toArray(function(err, data){

                if(err) throw err;

                res.json({result:true, data : data});
                db.close();
            })
        })
    },

    TimKiem: (req,res) => {
         var search = req.params.search;

         require("mongodb").MongoClient.connect(process.env.URL_DB,function(err, db){
             if(err) throw err;

             var dbo = db.db(process.env.DB_NAME);

             dbo.collection("QuanAo").find({"TenQuanAo" : new RegExp(search, "i")}).toArray(function(err,data){
                 if (err) throw err;

                 res.json({result : true, data : data});
                 db.close();
             })
         })
    },

    GetTheoLoai: (req,res) => {

        var idLoai = new require("mongodb").ObjectId(req.params.idLoai);
        require("mongodb").MongoClient.connect(process.env.URL_DB,function(err, db){
            if (err) throw err;

            var dbo = db.db(process.env.DB_NAME);
            dbo.collection("QuanAo").find({"Loai": idLoai}).toArray(function(err, data){

                if (err) throw err;

                res.json({result : true, data : data});
                db.close();
            })
        })
    }
}










