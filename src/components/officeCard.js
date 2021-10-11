import React from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';

class OfficeCard extends React.Component{
    constructor(props){
        super(props)
        var{department, description, image} = this.props;
        this.department = department;
        this.description = description;
        this.image = image;
        this.Card = Card;
        var{Meta} = this.Card;
        this.Meta = Meta

    }

  
    
    render(){
        const Meta = this.Meta;
        return (
            <>
                <Card
                    hoverable={false}
                    style={{ width: 240 }}
                    cover={<img alt="example" src={this.image} style={{height: "200px"}}/>}
                    size="small"
                    bordered={false}
                >
                    <Meta title={this.department} description={this.description} />
                    <Button type="link"  Component={Link} href={`/${this.department}`}>Join</Button>
                </Card>
            </>
           
        )
    }
}

export default OfficeCard;