import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  async model() {
    return (await fetch('http://localhost:3000/authors')).json();
  }
}
