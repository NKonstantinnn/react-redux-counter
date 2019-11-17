import {inc, dec} from '../actions';

describe('actions', () => {
    it('should create an action to increment counter', () => {
        expect(inc()).toEqual({type: 'INC'});
    });

    it('should create an action to decrement counter', () => {
        expect(dec()).toEqual({type: 'DEC'});
    });
});