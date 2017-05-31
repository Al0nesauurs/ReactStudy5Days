import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import { Link } from 'react-router'


const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const MySidebar_Content = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Link {ind}</a>);
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
          <Link  to={{ pathname: '/' }}
            style={styles.sidebarLink}>
            AUTOMART KAPPA123
          </Link>
   
          <div style={styles.divider} />
          <Link  to={{ pathname: '/history' }}
            style={styles.sidebarLink}>
            History
          </Link>     
          <Link  to={{ pathname: '/payment' }}
            style={styles.sidebarLink}>
            Payment
          </Link> 
         <Link  to={{ pathname: '/notification' }}
            style={styles.sidebarLink}>
            Notification
          </Link> 
          <Link  to={{ pathname: '/settings' }}
            style={styles.sidebarLink}>
            Settings 
          </Link> 

      </div>
    </MaterialTitlePanel>
  );
};

MySidebar_Content.propTypes = {
  style: PropTypes.object,
};

export default MySidebar_Content;
