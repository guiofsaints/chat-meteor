import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import '../imports/ui/header/header.js';
import '../imports/ui/login/login.js';
import '../imports/ui/message/message.js';

/**
 * Helpers
 */
Template.body.helpers({

  /**
   * Verifica se o usuario esta conectado
   *
   * @returns {boolean}
   */
  auth: () => {
    return Session.get('auth') !== undefined;
  }
});
