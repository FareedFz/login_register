var data ={
    getData:function(req,res){
        let getSumValues = data.sumValue(5);
        res.send("succes")
    },
    sumValue:function(a){
        let b = a+a;
        return b;
    }
}
module.exports = data