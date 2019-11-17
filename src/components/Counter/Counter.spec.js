import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedCounter, {Counter} from './index';
import {inc, dec} from '../../actions';
import reducer, {initialState} from '../../reducer';
import {createStore} from 'redux';

describe('<Counter />', () => {
    let wrapper;
    const count = 0;

    beforeEach(() => {
        wrapper = shallow(<Counter count={count} />);
    });

    it('should containt count property', () => {
        expect(wrapper.find('h2').prop('children')).toEqual(count);
    });

    it('should contains button with id="inc-btn"', () => {
        expect(wrapper.find('#inc-btn').type()).toEqual('button');
    });
      
    it('should contains button with id="dec-btn"', () => {
        expect(wrapper.find('#dec-btn').type()).toEqual('button');
    });
});

describe('Connected <Counter /> with mockStore', () => {
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <ConnectedCounter />
            </Provider>
        );
    });

    it('should assign containing of tag<h2> and initial state ', () => {
        expect(wrapper.find('h2').prop('children')).toEqual(initialState);
    });

    it('should assign count property and initial state', () => {
        expect(wrapper.find(Counter).prop('count')).toEqual(initialState);
    });

    it('should dispatch an increment action', () => {
        store.dispatch(inc());
        expect(store.getActions()[0]).toEqual({type: 'INC'});
    });

    it('should dispatch an decrement action', () => {
        store.dispatch(dec());
        expect(store.getActions()[0]).toEqual({type: 'DEC'});
    });
});

describe('Connected <Counter> with actual store + reducer', () => {
    let store, wrapper;

    beforeEach(() => {
        store = createStore(reducer);
        wrapper = mount(
            <Provider store={store}>
                <ConnectedCounter />
            </Provider>
        );
    });

    it('should dispatch an increment action', () => {
        wrapper.find('#inc-btn').simulate('click');
        expect(wrapper.find(Counter).prop('count')).toEqual(initialState + 1);
    });

    it('should dispatch an decrement action', () => {
        wrapper.find('#dec-btn').simulate('click');
        expect(wrapper.find(Counter).prop('count')).toEqual(initialState - 1);
    });
});