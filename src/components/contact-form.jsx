import { Button, Checkbox, Form, Input } from 'antd';
import styles from './contact-form.module.scss';

const { TextArea } = Input;

const ContactForm = () => {
  // const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 700 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        label="Mensaje"
        name="message"
        rules={[{ required: true, message: 'Por favor ingresa un mensaje' }]}
      >
        <TextArea
          placeholder="Escribe tu mensaje"
          autoSize={{ minRows: 3, maxRows: 5 }}
          className={styles.input}
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ContactForm
