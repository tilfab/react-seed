import styles from './_App.scss';

import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/creators';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
  constructor() {
    super();
    this.addItemCallback = this.addItemCallback.bind(this);
  }

  addItemCallback(text) {
    this.props.dispatch(addItem(text));
  }

  render() {
    return (
      <div className={styles.app}>
        <Body items={this.props.items} />
        <Footer />
      </div>
    );
  }
}

function select(state) {
  return {
    items: state.items;
  }
}

export default connect(select)(App);
