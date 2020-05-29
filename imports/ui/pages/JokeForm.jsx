import { Meteor } from 'meteor/meteor';
import { insertJokes } from '../../api/jokes';

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
        if(Meteor.user()) {
          insertJokes(this.state.joke);
        } else {
          toast.error("Vous devez être connecté pour ajouter une blague");
          return;
        }
    }

    handleChange = (event) => {
        this.setState({ joke: event.target.value });
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