export default class Controller {
    constructor (Factory) {
        'ngInject';

        this.store = Factory;
        this.store.getData();
    }

    onClick () {
        this.store.updateAnother();
    }

}
