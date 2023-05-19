import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './index.less'
import logo from '../../assets/logo.jpeg'
import menuList from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
class LeftNav extends Component{
    //左侧菜单根据数据返回结构
   
    getmenuNodes = (menuList)=>{
        const path = this.props.location.pathname
        return menuList.map(item=>{
          if(!item.children){
              return(
                  <Menu.Item key={item.key} >
                      <Link to={item.key}>
                          <Icon type="pie-chart" />
                          <span>{item.title}</span>
                      </Link>
                  </Menu.Item> 
              )
          }else{
           
           const cItem = item.children.find(cItem=>cItem.key === path)
           //this指的是组件对象
           if(cItem){
           
            this.openkey = item.key
            console.log(this.openkey)
           }
          
              return(
                  <SubMenu
                  key={item.key}
                  title={
                  <span>
                      <Icon type="mail" />
                      <span>{item.title}</span>
                  </span>
                  }
              >
                 {this.getmenuNodes(item.children)}
              </SubMenu>
              )
          }
        })
      }
      //在第一次执行render之前执行一次，为render 准备同步数据
      //这个生命周期执行一次
      componentWillMount(){
        this.menuNodes =  this.getmenuNodes(menuList)
      }
    render(){
        // const logoImg = '@/assets/images/5.jpeg'
        //左侧menu 处理的菜单路由
        //通过更改url的路由，定位到左侧菜单上
        //路由，location,history，form 等等需要数据的时候从this.props获取
        //这里会报错，可能获取不到，需要用WithRouter包装一下
        //还有一个问题，如果是根路径/,并没有选中首页，因为打印console.log('render()') 会是/,再是/home
        //所以可以使用selectedkeys 动态修改
       //存入this组件对象，结构获取的时候也要加上this.menuNodes 获取
        // this.menuNodes =  this.getmenuNodes(menuList)
        // console.log( this.menuNodes)
        const path = this.props.location.pathname
        const openKey = this.openkey
        return (
            <div className="left-nav">
                <header className="left-nav-header">
                    <img className="logoImg" src={logo} alt='logo'/>
                    <div className="leftNav-tit">管理后台</div>
                </header>
                <div>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                    >
                        {this.menuNodes}
                    {/* <Menu.Item key="/home" v-for="item in menuList" >
                        <Link to="/home">
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                 
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="mail" />
                            <span>商品</span>
                        </span>
                        }
                    >
                        <Menu.Item key="/cateGory">
                            <Link to='/cateGory'>商品分类</Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                        <Link to='/product'>商品管理</Link>
                        </Menu.Item>
                    </SubMenu> */}
                 </Menu>
                </div>
            </div>
        )
    }
}
//WithRouter 是一个高阶组件，高阶组件可以包装非路由组件，返回一个新的组件，新的组件会向非路由组件传递3个属性，history,match,location

export default withRouter(LeftNav)