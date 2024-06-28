import React from 'react';
import styles from '../../styles/Registreishn.module.css';
import {Form, Input, Button} from 'antd';
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

const {TextArea} = Input;

const Register = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className={styles.containerRegistreishn}>
            <div className={styles.registreishnForm}>
            {/*    <div className={styles.contact}>*/}
            {/*        <div className={styles.text}>*/}
            {/*            <p>CONTACT US</p>*/}
            {/*            <h1>Get 100% Free Course Contact With Us!</h1>*/}
            {/*            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit*/}
            {/*                massa mi. Aliquam hendrerit urna pellentesque*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className={styles.icon}>*/}
            {/*            <ul>*/}
            {/*                <li><FacebookOutlined /></li>*/}
            {/*                <li><YoutubeOutlined /></li>*/}
            {/*                <li><InstagramOutlined /></li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}



                <div className={styles.formGroup}>
                    <h2>Հետադարձ կապ մեզ հետ</h2>
                    <div>
                        <Form
                            form={form}
                            name="contact"
                            onFinish={onFinish}
                            layout="vertical"
                            style={{ maxWidth: 600, margin: '0 auto' }}
                        >
                            <Form.Item
                                name="name"
                                label="Անուն"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Հեռախոսահամար"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Էլեկտրոնային հասցե"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Հաղորդագրություն"
                                rules={[{ required: true, message: 'Please input your message!' }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Գրանցվել
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;