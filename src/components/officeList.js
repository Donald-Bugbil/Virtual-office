import React from 'react';
import { Row, Col } from 'antd';
import OfficeCard from './officeCard';
import {useState} from 'react';
import {useSelector} from 'react-redux';


const OfficeList = () => {
        
        const offices = useSelector((state) => state.offices.offices)
        console.log(offices)
        return ( 
                    <Row style={styles.Rowcontainer} gutter={[20,20]}>
                        {
                            offices.length === 0  ? <p> There are no available Officess</p> :                         
                            offices.map(
                                ({ department, description, image }) =>
                                    <Col span={8}>
                                        <OfficeCard
                                            department={department}
                                            description={description}
                                            image={image}
                                        />
                                    </Col>
                            
                            )
                            
                            }  
                    </Row>
                
        )
    
}
const styles = {
    Rowcontainer: {
        marginTop: '50px', 
        marginBottom: '100px',
        marginLeft: '167px',
        marginRight: '20vh',

    }
}


export default OfficeList;


