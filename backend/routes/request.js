const express=require("express")
const { userauth}=require("../middlewair/auth")

const {allrequests}=require("../controller/allrequests")
const {connections}=require("../controller/connections")
const {requestreveiwer}=require("../controller/requestreveiwed")
const {sendRequest}=require("../controller/requestsend")

const requestRouter=express.Router()
requestRouter.use(express.json())


requestRouter.post("/requests/reveiws/:byuser/:status",userauth,requestreveiwer);
requestRouter.get("/requests/connections",userauth,connections);
requestRouter.get("/requests/pending",userauth,allrequests);
requestRouter.post("/requests/send/:touser/:status",userauth,sendRequest);


module.exports={
    requestRouter:requestRouter
}