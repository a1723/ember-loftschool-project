import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AuthorController extends Controller {
  @inject dataService;
  queryParams = ['search'];
  @tracked isLoading;

  @tracked search = ''

  async loadData() {
    this.isLoading = true;
    const authors = await this.dataService.readAuthors(this.search);
    this.model = authors;
    this.isLoading = false;
  }
}
