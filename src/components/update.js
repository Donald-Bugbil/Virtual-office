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

    const{department, description} = offices.find(office => office.department === departmentParam)

    const[update, setUpdate] = useState({})

    const onChangeHandler = (event) =>{

        const{name, value} = event.target
        setUpdate({
            [name]: value
        })
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault()
        const payload = {
            department: update.department,
            description: update.description
        }
        dispatch(updatePost(payload, departmentParam))
        return history.push("/")

    }
    const onFinish = (values) =>{
        console.log(values)
    }
    return (
                <Form 
                    onSubmit={()=> onSubmitHandler()}
                    labelCol={{ span: 8 }}
                    initialValues={{department: department, description: description}}
                    wrapperCol={{ span: 16 }}
                    style={styles.mainContainer}
                >
                    <Form.Item
                        label="Department"
                        name="department"
                    >
                        <Input onChange={onChangeHandler}/>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <Input.TextArea onChange={onChangeHandler}/>
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