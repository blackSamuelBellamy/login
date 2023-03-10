import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CrearOfertaValor() {
  const [text, setText] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleImageUpload = (event) => {
    const inputURL = event.target.value;
    setImageURL(inputURL);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, imageURL);
    // Your code to handle form submission goes here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFreeText">
        <Form.Label>Agrega tu oferta de valor, un resumen de lo que te destaca </Form.Label>
        <Form.Control as="textarea" rows={3} maxLength={500} value={text} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formImageURL">
        <Form.Label>Sube una URL con una imagen para tu perfil</Form.Label>
        <Form.Control type="text" placeholder="https://example.com/image.jpg" value={imageURL} onChange={handleImageUpload} />
      </Form.Group>

      <Button variant="primary" type="submit" className="consolas-font" >
        Guardar Oferta de Valor
      </Button>
    </Form>
  );
}