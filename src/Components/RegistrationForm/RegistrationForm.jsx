import React from 'react'
import './RegistrationForm.css'
import { Steps, Form, Input, Button, Upload } from 'antd'
import { CheckCircleOutlined, ProfileOutlined, UploadOutlined, ProfileFilled, CloudUploadOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import TextArea from 'antd/es/input/TextArea';
function RegistrationForm() {
  const [current, setCurrent] = useState(0)
  const [ProfileDetails, SetProfileDetails] = useState(null)
  const [addressDetails, setAddressDetails] = useState(null)
  const [uploadDetails, setUploadDetials] = useState(null)

  const onFinishProfileForm = (values) => {
    SetProfileDetails(values)
    setCurrent(1)
  }
  const onFinishAddressForm = (values) => {
    setAddressDetails(values)
    setCurrent(2)
  }
  const onFinishUploadForm = (values) => {
    setUploadDetials(values)
    setCurrent(3)
  }
  const forms = [
    <ProfileForm onFinish={onFinishProfileForm} initialValues={ProfileDetails} />,
    <AddressForm onFinish={onFinishAddressForm} initialValues={addressDetails} />,
    <UploadFrom onFinish={onFinishUploadForm} initialValues={uploadDetails} />,
    <Finish />
  ]
  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false
    }
    if (stepNumber === 1) {
      return ProfileDetails === null
    }
    if (stepNumber === 2) {
      return ProfileDetails === null || addressDetails === null
    }
    if (stepNumber === 3) {
      return ProfileDetails === null || addressDetails === null || uploadDetails === null
    }

  }
  return (
    <div className='container steps'>

      <Steps style={{ padding: '30px 16px' }}
        onChange={setCurrent}
        current={current}>
        <Steps.Step disabled={isStepDisabled(0)} title='PersonalInfo' icon={<ProfileOutlined />} />
        <Steps.Step disabled={isStepDisabled(1)} title='Address' icon={<ProfileFilled />} />
        <Steps.Step disabled={isStepDisabled(2)} title='Upload' icon={<UploadOutlined />} />
        <Steps.Step disabled={isStepDisabled(3)} title='Finshed' icon={<CheckCircleOutlined />} />
      </Steps>
      {forms[current]}

    </div>
  );
}

function ProfileForm({ onFinish, initialValues }) {
  return (
    <div className='container formStyle'>
      <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          label='First Name'
          name={'FirstName'}
          rules={[{
            required: true,
            message: 'please enter your First Name'
          }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Last Name'
          name={'LastName'}
          rules={[{
            required: true,
            message: 'please enter your Last Name'
          }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input type='number' className='quantity' />
        </Form.Item>

        <Button type='primary' className='btnn' htmlType='submit'>Next</Button>
      </Form>

    </div>)
}
function AddressForm({ onFinish, initialValues }) {
  return (
    <div className='container formStyle'>
      <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          label='Address'
          name={'Address'}
          rules={[{
            required: true,
            message: 'please enter your Address'
          }]}>
          <TextArea />
        </Form.Item>
        <Form.Item
          name="AlternativeNumber"
          label="Alternative Number"
          rules={[{ required: true, message: 'Please input your Alternative Number!' }]}
        >
          <Input type='number' className='quantity' />
        </Form.Item>

        <Form.Item
          name="Aadhaar"
          label="Aadhaar"
          rules={[{ required: true, message: 'Please input your Aadhaar number!' }]}
        >
          <Input type='number' className='quantity' />
        </Form.Item>

        <Button type='primary' className='btnn' htmlType='submit'>Next</Button>
      </Form>

    </div>)
}

function UploadFrom({ onFinish, initialValues }) {
  return (
    <div className='container formStyle'>
      <Form onFinish={onFinish} initialValues={initialValues}>

        <Form.Item
          label='ID Proof'
          name={'IdProof'}
          rules={[{
            required: true,
            message: 'please enter Id Proof'
          }]}>
          <Upload >
            <Button icon={<CloudUploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label='Police Clearance Certificate'
          name={'IdProof'}
          rules={[{
            required: true,
            message: 'please enter Police Clearance Certificate'
          }]}>
          <Upload >
            <Button icon={<CloudUploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Button type='primary' className='btnn' htmlType='submit'>Next</Button>
      </Form>
    </div>)
}

function Finish() {
  const navigate = useNavigate()
  return <>
    <div className='container formStyle'>

      <h1>You are all set!</h1>
      <Button type='primary' className='btnn' onClick={() => navigate('/')}>Finish</Button>
    </div>
  </>
}


export default RegistrationForm
