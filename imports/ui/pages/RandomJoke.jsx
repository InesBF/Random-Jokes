import { JokesCollection } from '../../api/jokes';

import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

class RandomJoke extends Component {
    state = {
        jokes: [],
        joke: { content: "" }
    }

    componentDidMount() {
      const jokes = useTracker(() => {
        return JokesCollection.find().fetch();
      });
      this.setState({ jokes });
    }

    handleRandomClick = (event) => {
        event.preventDefault();
        this.setState({ joke: this.state.jokes[Math.floor(Math.random() * this.state.jokes.length)] })
    }

    render() {
        return (
            <Container>
               <p>{ this.state.joke.content }</p>
               <Button onClick={this.handleRandomClick}>Obtenir une nouvelle blague aleatoire</Button>
            </Container>
        )
    }
}