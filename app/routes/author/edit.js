import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class AuthorEditRoute extends Route {
  @inject dataService;

  model(params) {
    return this.dataService.readAuthor(params.id);
  }
}
