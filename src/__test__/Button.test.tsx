import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Button from '../Button';

it('Button that renders with a text: "hello!"', () => {
  const checkbox = TestUtils.renderIntoDocument(
    <Button>hello!</Button>,
  );

  const checkboxNode = ReactDOM.findDOMNode(checkbox as React.ReactInstance);

  expect(checkboxNode!.textContent).toEqual('hello!');
});
