import Service from '@ember/service';
import config from 'ember-loftschool-project/config/environment';

export default class DataServiceService extends Service {
  async readAuthors(searchValue) {
    let searchSegm = searchValue ? `?q=${searchValue}` : '';
    let response = await fetch(`${config.APP.backEndURL}/authors${searchSegm}`);
    return response.json();
  }

  async readAuthor(id) {
    let response = await fetch(`${config.APP.backEndURL}/authors/${id}`);

    return response.json();
  }

  createAuthor(author) {
    return fetch(`${config.APP.backEndURL}/authors`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', // header нужен т.к. работает с json-server
      },
      body: JSON.stringify(author),
    });
  }

  deleteAuthor(id) {
    return fetch(`${config.APP.backEndURL}/authors/${id}`, {
      method: 'DELETE',
    });
  }

  changeAuthor(author) {
    return fetch(`${config.APP.backEndURL}/authors/${author.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', // header нужен т.к. работает с json-server
      },
      body: JSON.stringify(author),
    });
  }
}
