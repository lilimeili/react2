import React,{Component} from 'react';
import { Card , Button,Icon,Table,Modal } from 'antd';
import LinkButton from '../../component/linkButton/index'
import AddEditForm from './addEdit'
export default class CateGory extends Component{
   
     formRef = React.createRef()
    //定义变量不能带关键字的
   state = {
    visible:false,
   }
   //定义函数的区域
    bindEdit = (category) =>{
        // console.log('222',this)
        // console.log('333',record)
        // console.log(this.state)
        this.setState({
            visible: true,
          });
        // console.log('9098',this.formRef)
        // this.state.visible = true
        //获取到当前的详情，用于传给子组件
        this.form = {
            id:9,
            categroyName:'水果',
            parentId:0,
        }
    }
    handleOk = () =>{
        this.setState({
            visible: false,
          });
    }
    handleCancel = () =>{
        this.setState({
            visible: false,
          });
    }
    handleSubmit = () =>{

    }
    render(){
    //定义变量的区域
    // const data = this.state
    // console.log(this.props)
    //  const { getFieldDecorator } = this.props.form;
    console.log(this.form)
    const title = '一级分类列表'
    const extra = (
        <Button type="primary">
            <Icon type="plus"></Icon>
            添加</Button>
    )
    const dataSource = [
        {
          parentId:0,
          name:'分类1',
          id:'98540584645',
        },
        {
            parentId:0,
            name:'分类2',
            id:'98111112222',
        },
        {
            parentId:0,
            name:'分类3',
            id:'955768812222',
        },
    ]
  
    const columns = [
        {
          title:'分类名称',
          dataIndex:'name',
          key:'name',
        //   colSpan: 12,
        },
        {
            title:'操作',
            key:'action',
            // colSpan: 4,
            render:(category)=>(
            <div>
                <LinkButton onClick={()=>{this.bindEdit(category)}}>修改子分类</LinkButton>
                <LinkButton>查看子分类</LinkButton>
            </div>
            )
              
        },
        // {
        //     title:'住址',
        //     dataIndex:'address',
        //     key:'address'
        // },
    ]
   
        return(
            <div>
                <Card title={title} extra={extra}>
                <Table columns={columns} dataSource={dataSource} bordered rowKey='id'/>
                </Card>
                <Modal
                title="新增"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                > 
                {/* ref={this.formRef} */}
                <AddEditForm categoryName={''}></AddEditForm>
                {/* <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('categoryName', {
                    rules: [{ required: true, message: '请输入分类名称' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="categoryName"
                    />,
                  )}
                </Form.Item>
                
              </Form> */}
                 
                </Modal>
                
            </div>
        )
    }
}
