/**
 * Componente para exibir usuarios online
 */
import { Template } from 'meteor/templating';
import { Online } from '../../api/Online.js';

import './header.html';

/**
 * Helpers
 */
Template.header.helpers({

  /**
   * Retorna total de usuarios online
   *
   * @returns {int}
   */
  countUsers: () => {
    return Online.find().count();
  },

  /**
   * Retorna lista de usuarios online
   */
  users: () => {
    return Online.find();
  }
});


/**
 * Events
 */
Template.header.events({

  /**
   * Ao clicar no botao com o numero de usuarios online
   * exibe modal com lista de usuarios
   *
   * @param event
   */
  'click .online': (event) => {
    $('.modal').modal('show');
  }
});
