import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <tel>+7 (925) 232-55-24</tel>
        </li>
        <li>
          <Link to="tg://resolve?domain=didexBot">Написать в Телеграм</Link>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        {/* <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;