import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import menus from '../HpmePageData'
const { SubMenu } = Menu;
const {Content, Sider } = Layout;
export default class MainPage extends Component {
    render(){
        return(
            <Layout>
    <Sider width={200} style={{ background: '#fff' }}>
        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            {menus.map((item) => {
                return (
                    <SubMenu key={item.key} title={item.title}
                    >
                        {item.options.map((k) => {
                            return (
                                <Menu.Item key={k.key}>{k.title}</Menu.Item>
                            )
                        })}
                    </SubMenu>
                )
            })}
        </Menu>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
        }}>
            Content
        </Content>
    </Layout>
</Layout>
        )
    }
    
}