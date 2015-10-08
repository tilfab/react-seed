import styles from './_App.scss';

import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default class App extends React.Component {

  state = {
    items: []
  }

  render() {
    return (
      <div className={styles.app}>
        <Body items={this.state.items} />
        <Footer />
      </div>
    );
  }
}
