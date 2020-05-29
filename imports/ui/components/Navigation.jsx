import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/signin">Se connecter</Link>
    <Link to="/signup">S'enregistrer</Link>
    <Link to="/random-joke">Blague aléatoire</Link>
    <Link to="/joke-form">Ajouter une blague</Link>
  </nav>
);

export default Navigation;