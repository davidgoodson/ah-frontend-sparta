import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { Dashboard } from '../index';
import { data } from '../../../reducers/tests/fixtures/moxios_mock';

describe('Dashboard Component', () => {
  const initialState = {
    articles: data.articles.article.results,
  };
  const pageState = { next: null, prev: null };

  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const props = {
    getArticles: jest.fn(),
    fetchNext: jest.fn(),
    fetchOriginal: jest.fn(),
    firstarticles: [],
    paginatearticles: [],
    pageState: { next: null, prev: null },
  };
  let instance;
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Dashboard {...props} />
      </Provider>,
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Dashboard should get data', () => {
    const wrapper2 = shallow(<Dashboard {...props} />);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper2.instance().fetchData(event);
  });

  it('Dashboard should get next', () => {
    const wrapper2 = shallow(<Dashboard {...props} />);
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper2.instance().fetchPrevious(event);
  });
});
