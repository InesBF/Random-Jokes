import { Mongo } from 'meteor/mongo';


export const JokesCollection = new Mongo.Collection('jokes');

export function insertJokes(content) {
  JokesCollection.insert({ content });
}