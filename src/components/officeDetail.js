import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useParams } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const OfficeDetail = () => {

    const offices = useSelector((state) => state.offices.offices)

    const departmentParams = useParams().department

    const office= offices.find(office => office.department === departmentParams);
    console.log(office)
    const{department, description} = office;
   
    const[collapsed, setCollaped] = useState(false)
    const onCollapse = (collapsed) => {
        setCollaped(collapsed)

    }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div style={styles.logo} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{department} Department</Breadcrumb.Item>
                            <Breadcrumb.Item>{description}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {description}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Company name ©2018</Footer>
                </Layout>
            </Layout>
        )
    
}

const styles = {
    logo: {
        height: '32px',
        margin: '16px',
        background: 'rgba(255, 255, 255, 0.3)'
    }
}

// ownProps is the instance's props and where we can grab the parameter being pass to the route



export default OfficeDetail;