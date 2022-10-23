import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class AuthorRoute extends Route {
  // однотипно через декоратор
  @inject dataService;
  // dataService = inject('data-service');

  async model() {
    return this.dataService.readAuthors();
    // return (await fetch('http://localhost:3000/authors')).json();
  }
}
