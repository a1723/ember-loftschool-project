import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class AuthorCreateController extends Controller {
    @inject dataService;

    @action
    async saveAuthor(e) {
      e.preventDefault();

      await this.dataService.createAuthor(this.model);
      this.transitionToRoute('author');
    }

    @action
    changeFirstName(firstName) {
      this.model.firstName = firstName;
    }
}
