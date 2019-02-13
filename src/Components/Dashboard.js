import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Switch, Route } from 'react-router-dom';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Preview from './Preview';
import Editor from './Editor';
import styles from './styles';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      source: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleInput(newSource) {
    this.setState({ source: newSource });
  }

  handleDrawerOpen() {
    this.setState({ drawerOpen: true });
  }

  handleDrawerClose() {
    this.setState({ drawerOpen: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Topbar open={this.state.drawerOpen} handleDrawerOpen={this.handleDrawerOpen} />
        <Sidebar open={this.state.drawerOpen} handleDrawerClose={this.handleDrawerClose} />
        <main className={classes.main}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path='/' render={() =>
              <Editor handleInput={this.handleInput} source={this.state.source} />
            } />
            <Route path='/preview' render={() =>
              <Preview source={this.state.source} />
            } />
          </Switch>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);