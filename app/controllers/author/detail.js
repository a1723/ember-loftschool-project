import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class AuthorDetailController extends Controller {
    @inject dataService;

    @action
    async deleteAuthor() {
        await this.dataService.deleteAuthor(this.model.id);

        this.transitionToRoute('author');
    }
}
