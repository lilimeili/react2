import axios from "axios";
import {message} from "antd";
export default function ajax(url,data={},type="GET"){
    return new Promise((resolve,reject)=>{ //增加这一步，是为了统一处理错误
        let promise
        if(type === "GET"){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
        promise.then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
            message.error('发生错误')
        })
    })
   
    
}
//请求登录接口
