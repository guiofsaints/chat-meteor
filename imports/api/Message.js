/**
 * Collection para armazenar mensagens dos usuarios
 */
import { Mongo } from 'meteor/mongo';

export const Message = new Mongo.Collection('messages');