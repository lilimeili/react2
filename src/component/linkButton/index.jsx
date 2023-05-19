import React,{Component} from 'react';
import {Button} from 'antd'
import './index.less';
export default function LinkButton(props){
    return <Button {...props} className="linkbutton"></Button>
}