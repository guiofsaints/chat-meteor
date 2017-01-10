/**
 * Componente para a troca de mensagens dos usuarios
 */
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Message } from '../../api/Message.js';

import './message.html';
import './message.css';

/**
 * Helpers
 */
Template.message.helpers({

  /**
   * Retorna todas as mensagens cadastradas
   */
  messages: () => {
    return Message.find();
  }
});

/**
 * Helper para formatar data da mensagem
 * @returns {String}
 */
Template.registerHelper('shortDate', (date) => {
  return moment(date).format('- HH:mm');
});

/**
 * Helper para retornar classe das mensagens
 * enviadas pelo proprio usuario
 *
 * @returns {String}
 */
Template.registerHelper('myMessage', (id) => {
  return id == Session.get('auth').id ? 'my-message' : '';
});

/**
 * OnRendered
 * Adiciona evento ao renderizar componente para fazer scroll
 * automatico quando uma mensagem for enviada
 */
Template.message.onRendered(() => {
  $('#list-messages').bind('DOMNodeInserted', () => {
    $("html, body").animate({ scrollTop: $(document).height() }, 'fast');
  }).trigger('DOMNodeInserted');
});

/**
 * Events
 */
Template.message.events({

  /**
   * Cadastra mensagem ao fazer submit do formulario
   * @param event
   */
  'submit .form-message': (event) => {
    event.preventDefault();
    const text = event.target.text.value;

    if (text.length > 0) {

      // salva mensagem do usuario na collection
      Message.insert({
        createdAt: new Date(),
        text,
        author: Session.get('auth').name,
        id: Session.get('auth').id
      });

      event.target.text.value = '';
    }
  }
});