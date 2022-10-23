import Route from '@ember/routing/route';
import { inject } from '@ember/service'

export default class AuthorDetailRoute extends Route {
    @inject dataService;

    model(params) {
        return this.dataService.readAuthor(params.id);
    }
}
