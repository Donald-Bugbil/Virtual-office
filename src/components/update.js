import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {updatePost} from '../features/officeSlice';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Form, Input, Button} from 'antd';







const UpdatePage =() =>{

    const history = useHistory()
    const departmentParam = useParams().department;
    const offices = useSelector((state) => state.offices.offices)
    const dispatch = useDispatch()

    const office = offices.find(office => office.department === departmentParam)

    const onFinish = (values) =>{
        values.params = departmentParam
        values.image = office.image
        const payload = values
        console.log(payload.params)
        dispatch(updatePost(payload))
        return history.push("/")
    }
    return (
                <Form 
                    onFinish={onFinish}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={styles.mainContainer}
                >
                    <Form.Item
                        label="Department"
                        name="department"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
    )
}

const styles = {
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20%",

    },
}

export default UpdatePage;