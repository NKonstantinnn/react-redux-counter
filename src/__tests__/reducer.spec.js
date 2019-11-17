import reducer, {initialState} from '../reducer';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle inrement counter', () => {
        expect(reducer(undefined, {type: 'INC'})).toEqual(1);
        expect(reducer(10, {type: 'INC'})).toEqual(11);
        expect(reducer(-10, {type: 'INC'})).toEqual(-9);
    });

    it('should handle decrement counter', () => {
        expect(reducer(undefined, {type: 'DEC'})).toEqual(-1);
        expect(reducer(10, {type: 'DEC'})).toEqual(9);
        expect(reducer(-10, {type: 'DEC'})).toEqual(-11);
    });
})