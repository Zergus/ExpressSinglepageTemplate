import testStrore from '../app/common/store.js';
import 'angular-mocks';

describe('Example', () => {

    // mocking subject
    beforeEach(() => {
        angular.mock.module(($provide) => {
            $provide.factory('TestFactory', testStrore);
        });
    });

    // storage for provided test subjects
    let factory;

    beforeEach(inject(function (_TestFactory_) {
        // linking to subject
        factory = _TestFactory_;
    }));

    it('should do anything', () => {
        // testing subject
        expect(factory.testThis()).toBe('okay');
    });
});

