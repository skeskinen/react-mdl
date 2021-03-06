/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import Icon from '../Icon';

describe('Icon', () => {
    it('should be a <i>', () => {
        const output = render(<Icon name="add" />);

        expect(output.type).toBe('i');
        expect(output.props.children).toBe('add');
    });

    it('should have material-icons css class', () => {
        const output = render(<Icon name="add" />);

        expect(output.props.className).toInclude('material-icons');
    });

    it('should allow custom css classes', () => {
        const output = render(<Icon name="mood" className="myCustomClass" />);

        expect(output.props.className)
            .toInclude('myCustomClass');
    });
});
