import React from 'react';
import {shallow} from 'enzyme';
import {Counter} from './index';
import { italic } from 'ansi-colors';

describe('<Counter />', () => {
    it('should containt count property', () => {
        const wrapper = shallow(<Counter count="test" />);
        expect(wrapper.length).toEqual(1)
        expect(wrapper.find('h2').prop('children')).toEqual('test');
    });
})