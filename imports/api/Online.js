/**
 * Collection para armazenar usuarios online
 */
import { Mongo } from 'meteor/mongo';

export const Online = new Mongo.Collection('onlines');