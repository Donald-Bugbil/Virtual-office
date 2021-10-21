import React from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deletePost} from '../features/officeSlice';


const OfficeCard = ({image, department ,description }) =>{

        const{Meta} = Card
        const dispatch = useDispatch()
        
        return (
            <>
                <Card
                    hoverable={false}
                    style={{ width: 240 }}
                    cover={<img alt="example" src={image} style={{height: "200px"}}/>}
                    size="small"
                    bordered={false}
                >
                    <Meta title={department} description={description} />
                    <Button type="link"  Component={Link} href={`/${department}`}>Join</Button>
                    <Button type="link" onClick={() => dispatch(deletePost(department))}>Delete</Button>
                    <Button type="link"  Component={Link} href={`/update/${department}`}>Update</Button>
                </Card>
            </>
           
        )
    
}



export default OfficeCard;