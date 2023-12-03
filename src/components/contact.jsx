//contact.jsx

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

import "../stylesheets/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://formspree.io/f/xaygqnny", formData);
      if (response.status === 200) {
        console.log("Mensaje enviado correctamente.");
        setShowAlert(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
      } else {
        console.log("Ocurrió un error al enviar el mensaje.");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  return (
    <div id='contactSection' className="contactContainer">
      <div className="textContainerx">
        <h1>¡Estamos en contacto!</h1>
      </div>
      <div className="formContainer">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
            />
          </Form.Group>
          <Button type="submit">Enviar</Button>
        </Form>
      </div>
      {showAlert && (
        <Alert variant="success" className="mt-3">
          <Alert.Heading>¡Mensaje enviado!</Alert.Heading>
          <p>Gracias por enviar tu mensaje.</p>
        </Alert>
      )}
    </div>
  );
}

export default Contact;
