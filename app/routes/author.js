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

  async model() {
    return {
      isLoading: true
    };
  }

  @action
  loading() {
    return false;
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.loadData();
  }
}
