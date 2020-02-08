import React, { Component } from 'react'
import { Layout, Menu, Icon, Input, message } from 'antd';
import 'antd/dist/antd.css'
import './home.css'
import Dele from '../component/dele';
import Finish from '../component/Finish'
import Pendding from '../component/pendding'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AddToPendding } from '../redux/TodoAction'
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
 class Home extends Component {
    state = {
        collapsed: false,
      };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
     }
     
     handleTodoADD = (item) => {
         let state = {
             checked: false,
             content: item,
             current:'pendding'
         }
         
        this.props.AddPendding(state)
     }
     render() {
          if(this.props.state.status === 'success'){
             message.success('添加成功')
         } else if (this.props.state.status === 'error') {
          message.error('重复添加')             
        }
        return (
            <Layout className="box">
                <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">Todoist</div>
                    <Menu  theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Icon type="pushpin" />
                            <span><Link style={{color:"white"}} to="/">进行中</Link></span>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Icon type="smile" />
                            <span><Link style={{color:"white"}} to="/Finish">已完成</Link></span>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Icon type="delete" />
                            <span><Link style={{color:"white"}} to="/Dele">已删除</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    <div className="handleTitle">
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                            />
                        <Search
                        className="handleTitle_inp"
                        placeholder="请输入您的待办事项"
                        enterButton="添加"
                        size="large"
                        onSearch={value =>this.handleTodoADD(value)}
                        />    
                    </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <Switch>
                            <Route path="/Dele" component={Dele}/>
                            <Route path="/Finish" component={Finish}/>
                            <Route path="/" component={Pendding}/>
                        </Switch>
                    </Content>
                    <Footer>张赐永 ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}


function mapStateToProps(routerReducer) {
    return {
        state:routerReducer.Todoist
    }
}
function mapActionToProps(dispatch) {
    return {
        AddPendding:(value)=>dispatch(AddToPendding(value))
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home)