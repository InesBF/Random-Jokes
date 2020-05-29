import { Meteor } from 'meteor/meteor';
import { JokesCollection, insertJokes } from '/imports/api/jokes';


Meteor.startup(() => {
  if (JokesCollection.find().count() === 0) {
    insertJokes("Où va le chien de traîneau pour ses vacances ? Il va husky");
    insertJokes("c’est un putois qui rencontre un autre putois et qui lui dit : « Tu pues toi »");
    insertJokes("Monsieur et madame Diohétafon ont une fille. Comment s’appelle-t-elle ? Lara");
  }
});