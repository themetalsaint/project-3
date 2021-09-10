const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
import Note from './models/notes';

export const resolvers = {
  Query : {
    async getNote(root, {_id}){
        return await Note.findById(_id);
    },
    async allNotes(){
        return await Note.find();
     }
 },
 Mutation: {
     async createNote(root, {input}){
        return await Note.create(input);
     },
     async updateNote(root, {_id, input}){
         return await Note.findOneAndUpdate({_id},input,{new: true})
     },
     async deleteNote(root, {_id}){
         return await Note.findOneAndRemove({_id});
     }
 }
};
module.exports = resolvers;