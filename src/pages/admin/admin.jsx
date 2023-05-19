import React,{Component} from "react";
import {Redirect,Route,Switch} from "react-router-dom";
// import memoryUtils from '../../utils/memoryUtil'
import { Layout } from 'antd';
import LeftNav from '../../component/leftNav/leftNav';
import Header from '../../component/header/header';
import CateGory from '../../pages/cateGory/cateGory';
import Home from '../../pages/home/index';
import Product from '../../pages/product/product';
import Role from '../../pages/role/role';
import Bars from '../../pages/echarts/bars';
import Cirle from '../../pages/echarts/cirle'

const {  Footer, Sider, Content } = Layout;
//引入所有的左侧菜单那路由
export default class Admin extends Component {
    render(){
        //const user = memoryUtils.user
        // if(!user || user.id){
        //     //自动跳转到登录
        //     return <Redirect to="/login"></Redirect>
        // }
        return(
            <div style={{height:'100%'}}>
                
                    <Layout style={{height:'100%'}}>
                    <Sider><LeftNav/></Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content style={{background:'#fff'}}>
                       
                            <Switch>
                               <Route path='/home' component={Home}></Route>
                                <Route path='/cateGory' component={CateGory}></Route>
                                <Route path='/product' component={Product}></Route>
                                <Route path='/role' component={Role}></Route>
                                <Route path='/bars' component={Bars}></Route>
                                <Route path='/cirle' component={Cirle}></Route>
                                <Redirect to="/home"></Redirect>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign:'center'}}>推荐使用谷歌浏览器,页面使用更佳</Footer>
                    </Layout>
                    </Layout>
            </div>
        )
    }
}