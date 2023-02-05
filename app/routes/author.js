import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class AuthorRoute extends Route {
  @inject dataService;
  queryParams = {
    search: {
      refreshModel: true
    }
  }

  async model(params) {
    return this.dataService.readAuthors(params.search);
  }

  @action
  loading() {
    return false;
  }
}
