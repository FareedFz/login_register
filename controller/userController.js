var data ={
    getData:function(req,res){
        let getSumValues = data.sumValue(5);
        //console.log(getSumValues)
        res.send("succes")
    },
    sumValue:function(a){
        let b = a+a;
        return b;
    }
}
module.exports = data
