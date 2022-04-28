
const command = require("nodemon/lib/config/command");

module.exports = function(server){

    var controller = require("./controller/getController");

    //Lấy DS tất cả quần áo
    server.get("/QuanAo",controller.getAllQuanAo);

    //Lấy DS 3 quần áo mới nhất
    server.get("/QuanAoMoi",controller.getNewQuanAo);

    //Lấy danh sách quần áo theo tìm kiếm...
    server.get("/TimKiem/:search",controller.TimKiem);

    //Lấy danh sách quần áo thuộc ID Loại...
    server.get("/QuanAoTheoLoai/:idLoai",controller.GetTheoLoai);

    //--------------------------------------------------------------------

    var con = require("./controller/postController");

    //Thêm mới quần áo...
    server.post("/ThemQuanAo",con.ThemQuanAo);


    //----------------------------------------------------------------------

    var control = require("./controller/putController");
    

    //Sửa quần áo

    server.put("/SuaQuanAo/:idQuanAo",control.SuaQuanAo);

    //-------------------------------------------------------------


    //Xoá quần áo

    var co = require("./controller/deleteController");
    server.delete("/XoaQuanAo/:idQuanAo",co.XoaQuanAo);
}