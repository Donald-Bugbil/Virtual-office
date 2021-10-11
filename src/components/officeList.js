import React from 'react';
import { Row, Col } from 'antd';
import {connect} from 'react-redux'; //connect function to help connect to redux store 
import OfficeCard from './officeCard';

class OfficeList extends React.Component {
    constructor(props) {
        super(props)
        var{offices} = this.props
        this.offices = offices
        
    }

    render() {
        
        return (
                
                    <Row style={styles.Rowcontainer} gutter={[20,20]}>
                        {
                            this.offices.length === 0  ? <p> There are no available Officess</p> :                         
                            this.offices.map(
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
}
const styles = {
    Rowcontainer: {
        marginTop: '50px', 
        marginBottom: '100px',
        marginLeft: '167px',
        marginRight: '20vh',

    }
}

//mapStateToProps to help components read from state 
const mapStateToProps = (state) => {
    return {
        offices: state.offices
    }
}

export default connect(mapStateToProps)(OfficeList);


