import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Online } from '../../api/Online.js';

import './login.html';


Template.login.helpers({
  error: () => {
    return Session.get("error");
  }
});

/**
 * Eventos
 */
Template.login.events({

  /**
   * Login do usuario ao clicar entrar
   *
   * @param event
   */
  'submit .form': (event) => {
    event.preventDefault();

    const target = event.target;
    const username = target.username.value;

    if (username.length > 0) {
      const user = {
        id: Date.now(),
        name: username
      };
      Session.set("auth", user);
      Online.insert(user);
    } else {
      Session.set("error", "Preencha seu nome!");
    }

    target.username.value = '';
  }
});