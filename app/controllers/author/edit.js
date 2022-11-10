import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class AuthorEditController extends Controller {
  @inject dataService;

  @action
  async saveAuthor(e) {
    e.preventDefault();

    await this.dataService.changeAuthor(this.model);
    this.transitionToRoute('author');
  }

  @action
  changeFirstName(firstName) {
    this.model.firstName = firstName;
  }

  @action
  changeLastName(lastName) {
    this.model.lastName = lastName;
  }
}
