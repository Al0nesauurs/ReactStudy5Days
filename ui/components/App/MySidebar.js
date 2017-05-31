import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import MaterialTitlePanel from './material_title_panel';
import MySidebar_Content from './MySidebar_Content';
import { Link } from 'react-router'

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const mql = window.matchMedia(`(min-width: 1800px)`);

export default class MySidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: false,
      open: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <MySidebar_Content />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
          <Link
            to={{ pathname: '/' }}
            className='brand' >
            AUTOMART KAPPA123
          </Link>
          <span className= 'menu'>
            <li className='menu__item'>
              <Link
                to={{ pathname: 'login' }}
                className='menu__link'>
                Login
              </Link>
            </li>
            <li className='menu__item'>
              <Link
                to={{ pathname: 'register' }}
                className='menu__link'>
                Register
              </Link>
            </li>
          </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>

        <MaterialTitlePanel title={contentHeader}>

        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}


