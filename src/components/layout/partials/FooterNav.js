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
      <div className="footer-copyright"><a href="/build/оферта.pdf">Оферта</a> {" "} </div>

        <li>
          <a href="tel:+79252325524">+7 (925) 232-55-24</a>
        </li>
        <li>
          <a href="tg://resolve?domain=didexBot">Телеграм</a>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        {/* <li>
          <Link to="#0">Support</Link>
        </li> */}
        <li>
          <a href="https://wa.me/79252325524?text=Здравствуйте%2C+у+меня+есть+вопрос">What's App</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;