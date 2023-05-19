import React,{Component} from "react";
// import ReactDOM from 'react-dom/client';
import './login.less';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {reglogin} from '../../api'
import memoryUtil from '../../utils/memoryUtil'
import storageUtil from "../../utils/storageUtil";
// const FormItem = Form.Item;
 class Login extends Component {
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            //调用登录接口
            const {userName,password} = values
            reglogin({userName,password}).then(res=>{
                //成功后，跳转到管理页面,不需要回退回来，用replace,需要回退回来用push
                this.props.history.replace('/')
                 memoryUtil.user = res //保存到内存中
                 storageUtil.saveUser(memoryUtil.user) //保存到local中
                
            }).catch(err=>{})
          }
        }); 
    }
    render(){
       //得到表单实例
        const form = this.props.form;
        //获取校验对象
        const { getFieldDecorator } = form;
        //控制表单的占列
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 18 },
            },
          };
        return(
           <div className="imgBox">
             <header className="login-header">后台管理系统</header>
             <section className="login-content">
                <div className="loginBox">
                    <div className="tit">用户登录</div>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item label="账号">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请填写账号' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username" className="inputstyle"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请填写密码' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password" className="inputstyle"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                            <div className="checkstyle"><Checkbox>记住我</Checkbox></div>
                        </Form.Item>
                        <Form.Item className="buttonitme">
                            <div className="butstyle">
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                                </Button>
                            </div>
                        {/* Or <a href="">注册</a> */}
                        </Form.Item>
                    </Form>
                </div>
             </section>
           </div>
        )
    }
}
//包装表单，实例化之后，上面获取父组件传给子组件的对象才能拿到
  const LoginForm = Form.create()(Login);
 export default LoginForm
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
