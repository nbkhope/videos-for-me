import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should include a SearchBar component', () => {
    expect(component.find('SearchBar').length).toBe(1);
  });

  it('should include a VideoDetail component', () => {
    expect(component.find('SearchBar').length).toBe(1);
  });

  it('should include a VideoList component', () => {
    expect(component.find('SearchBar').length).toBe(1);
  });
});
