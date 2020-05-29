import { Accounts } from 'meteor/accounts-base';

import React, { Component } from 'react';
import { toast } from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class JokeForm extends Component {
    state = {
        joke: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Control
                        type="text"
                        name="joke"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="Ajouter une blague"
                    />
                    <Button variant="primary" type="submit">Ajouter</Button>
                </Form>
            </Container>
        )
    }
}

export default JokeForm;