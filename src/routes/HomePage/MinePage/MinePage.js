import React,{Component} from 'react'
import {connect} from 'react-redux'//连接仓库redux（example）
import style from './MinePage.css'
class MinePage extends Component{
    componentDidMount(){
        console.log(this.props);//可获取store的值及dispacth方法
        this.props.dispatch({//修改store里name的值
            type:'example/save',//使用example里save的方法（自定义的方法）
            payload:'jing'//把name修改成lin
        })
    }
    
    render(){
       
        return(
            <div>
                <div>我的</div>
                <h3 className={style.shop}>产品</h3>
            </div>
        )
    }
}
export default connect((state=>{
    return state
}))(MinePage)