import React,{Component} from 'react';
import { Form, Icon, Input} from 'antd';
import PropTypes from 'prop-types'
class AddEdit extends Component{
//    static PropTypes = {
//     categroyName:PropTypes.string.isRequired()
//    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            //调用登录接口
            // const {userName,password} = values
            // reglogin({userName,password}).then(res=>{
            //     //成功后，跳转到管理页面,不需要回退回来，用replace,需要回退回来用push
            //     this.props.history.replace('/')
            //      memoryUtil.user = res //保存到内存中
            //      storageUtil.saveUser(memoryUtil.user) //保存到local中
                
            // }).catch(err=>{})
          }
        }); 
    }
    componentDidMount() {
        // console.log('父组件的传值',this.props.comment)
        // console.log(this.props.categoryName)
    }    
    render(){
        // const form = this.props.formdata
        //  console.log(form)
        // console.log('formdata',this.props.formdata)
        const { getFieldDecorator } = this.props.form;
        const {categroyName} = this.props
        // console.log(this.props.getformData)
        // let {categoryName} = this.props
        // let categroyname = this.props.categroyName
        console.log('25',this.props)
        return(
           <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item    label="分类名称" >
                {getFieldDecorator('categroyName', {initialValue:categroyName},{
                    rules: [{ required: true, message: '请填写分类名称' }],
                } )(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="categoryName" 
                    />,
                )}
                </Form.Item>
         </Form>
           </div> 
        )
    }
}
const AddEditForm = Form.create()(AddEdit);
export default AddEditForm