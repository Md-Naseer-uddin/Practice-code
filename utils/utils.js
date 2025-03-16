const resObjGenerator=(status,message,data)=>{
    let resObj={}
    resObj.status=status
    resObj.message=message||(status?"Successfull":"Failed")
    if(data){
        resObj.data=data
    }
    return resObj
}

module.exports={
    resObjGenerator
}