import Service from '@ember/service';
// import ENV from 'ember-loftschool-project/config/environment.js';

import { getOwner } from '@ember/application';

export default class DataServiceService extends Service {
  async readAuthors() {
    // то же самое только через getOwner
    let url = getOwner(this).application;
    let response = await fetch(`${url.backEndURL}/authors`);
    return response.json();
  }

  async readAuthor(id) {
    // то же самое только через getOwner
    let url = getOwner(this).application;
    let response = await fetch(`${url.backEndURL}/authors/${id}`);

    return response.json();
    // return (await fetch(`${ENV.backEndURL}/authors`)).json();
  }

  createAuthor(author) {
    let url = getOwner(this).application;
    return fetch(`${url.backEndURL}/authors`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', // header нужен т.к. работает с json-server
      },
      body: JSON.stringify(author),
    });
  }

  changeAuthor(author) {
    let url = getOwner(this).application;
    return fetch(`${url.backEndURL}/authors/${author.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', // header нужен т.к. работает с json-server
      },
      body: JSON.stringify(author),
    });
  }
}
