import React,{Component} from 'react'
import {connect} from 'react-redux'

class SettingPage extends Component{
    componentDidMount(){
        console.log(this.props);
        this.props.dispatch({//修改store里name的值
            type:'example/save',//使用example里save的方法（自定义的方法）
            payload:'lin'//把name修改成lin
        })
    }
    render(){
        
        return(
            <div>设置</div>
        )
    }
}
export default connect((state=>{
     return state
}))(SettingPage)
