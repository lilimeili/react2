import React,{Component} from "react";
import {withRouter} from 'react-router-dom';
import menuList from '../../config/menuConfig';
import { Modal, Button } from 'antd';
import LinkButton from '../linkButton/index'
import memoryUtil from '../../utils/memoryUtil';
import storageUtil from '../../utils/storageUtil';
import './index.less'
 class Header extends Component{
    gettitle = ()=>{
        //从当前的路由上获取，只要从父组件获取传给子组件的数据，都要用withRouter 包装一下
        const path = this.props.location.pathname
        let title = ""
        menuList.forEach(item=>{
            if(item.key === path){
                title = item.title
            }else if(item.children){
              const cItem = item.children.find(cItem=>cItem.key === path)
              if(cItem){
                title = cItem.title
              }
            }
        })
    }
    //当前组件卸载之前调用
    componentWillUnmount(){
        //清除定时器，天气实时


    }
    logout = () =>{
        //显示确认框
        Modal.confirm({
            title: '确定是否要推出登录',
            content: 'Some descriptions',
            //只能写成箭头函数，这样能获取到this,如果写成普通函数，不能获取到this，是undefind
            onOk:()=> {
              console.log('OK');
              console.log(this)
              //清除缓存，退出登录
              storageUtil.removeUser()
              memoryUtil.user = {}
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    //不会实时更新
    // componentWillMount(){
    //     this.title = this.this.gettitle()
    // }
    render(){
       const title = this.gettitle()
        return (
            <div className="header">
                <div className="header-top">
                    <div>欢迎,admin</div>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div>{title}</div>
                    <div>事件天气</div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)