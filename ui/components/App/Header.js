import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <Link
            to={{ pathname: '/' }}
            className='brand' >
            AUTOMART KAPPA123
          </Link>
          <ul className= 'menu'>
            <li className='menu__item'>
              <Link
                to={{ pathname: '/pages' }}
                className='menu__link'>
                All pages
              </Link>
            </li>
            <li className='menu__item'>
              <a
                href='#'
                className='menu__link'>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}