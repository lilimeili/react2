//接口请求函数
//每个函数的函数的返回值是promise
import ajax from './ajax'
export const reglogin = (userName,password) => ajax('./login',{userName,password},'POST')
//添加用户
 // eslint-disable-next-line
export const regUser = (user) =>('/manage/user/add',user,'POST')