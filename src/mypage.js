import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const MyPage = () => {
  const [visible, setVisible] = useState(false);

  const handleEditProfile = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    setVisible(false);
  };

  return (
    <div>
      <h1>마이페이지</h1>
      <Button onClick={handleEditProfile}>회원정보 수정</Button>

      <Modal
        title="회원정보 수정"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="editProfileForm"
          onFinish={onFinish}
          initialValues={{ department: '학과 선택' }}
        >
          <Form.Item
            label="이름"
            name="name"
            rules={[{ required: true, message: '이름을 입력하세요!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="학번"
            name="studentID"
            rules={[{ required: true, message: '학번을 입력하세요!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="학과"
            name="department"
            rules={[{ required: true, message: '학과를 선택하세요!' }]}
          >
            <Select>
              <Option value="컴퓨터공학과">컴퓨터공학부</Option>
              <Option value="경영학과">경영학과</Option>
              <Option value="전자공학과">전자공학과</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              확인
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyPage;
