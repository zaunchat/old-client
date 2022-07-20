import { h } from 'preact';
import App from '../src/app'
import { shallow } from 'enzyme';

describe('Initial Test of the App', () => {
    test('First Test', () => {
        const context = shallow(<App />);
        expect(context.find("div").text()).toBe('Hello gamers!');
    });
});
