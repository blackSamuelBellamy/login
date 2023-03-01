import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CrearPortafolio() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setText(inputText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    // Your code to handle form submission goes here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFreeText">
        <Form.Label>Agrega tu reseña al portafolio (BIO)</Form.Label>
        <Form.Control as="textarea" rows={3} maxLength={500} value={text} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit" className="consolas-font" >
        Guardar Reseña
      </Button>
    </Form>
  );
}