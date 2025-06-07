import { Button, Checkbox, Form, Input } from 'antd';
import styles from './contact-form.module.scss';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm(); 
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    setPhoneNumber(onlyNums.slice(0, 9));
  };

  const onFinish = (values) => {
    const data = {
      ...values,
      phone: `+56${values.phone}`,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
       if (result.status === 200) {
        toast.success('¡Mensaje enviado con éxito!');
        form.resetFields();
        setPhoneNumber('')
      } else {
        toast.error('Hubo un error al enviar el mensaje');
      }
    }, (error) => {
      toast.error('Hubo un error al enviar el mensaje, por favor intenta nuevamente');
      console.log('error', error)
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        name="basic"
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 700 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
        >
          <Input className={styles.input}/>
        </Form.Item>
        <Form.Item
          name="email"
          label="Correo"
          rules={[
            {
              type: 'email',
              message: 'Por favor ingresa un correo válido',
            },
            {
              required: true,
              message: 'El correo es requerido',
            },
          ]}
        >
          <Input className={styles.input}/>
        </Form.Item>
        <Form.Item
          label="Número de celular"
          name="phone"
           rules={[
            {
              validator: () => {
                return phoneNumber.length === 9
                  ? Promise.resolve()
                  : Promise.reject('Ingresa 9 dígitos numéricos');
              },
            },
            {
              required: true,
              message: 'El número de celular es requerido',
            },
          ]}
        >
          <Input
            addonBefore="+569"
            className={styles.input}
            placeholder="912345678"
            maxLength={9}
            value={phoneNumber}
            onChange={handlePhoneChange}
            inputMode="numeric"
          />
        </Form.Item>
        <Form.Item
          label="Mensaje"
          name="message"
          rules={[{ required: true, message: 'Por favor ingresa un mensaje' }]}
        >
          <TextArea
            placeholder="Escribe tu mensaje..."
            autoSize={{ minRows: 3, maxRows: 5 }}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item 
          name="acceptTerms"
          valuePropName="checked" 
          label={null}
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los términos y condiciones')),
            },
          ]}
        >
          <Checkbox>He leído y acepto los <Link to='/terms-and-conditions' className={styles.link}>Términos y condiciones</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item label={null} className={styles.button_item}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ContactForm
