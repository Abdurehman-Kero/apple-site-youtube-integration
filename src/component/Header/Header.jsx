import logo from "../../assets/images/icons/logo-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png"; 
import styles from "./Header.module.css";
import "../../assets/css/styles.css";

const Header = () => {
  return (
    <>
      <div className={`${styles["nav-wrapper"]} fixed-top`}>
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className={`${styles["navbar-toggler"]} navbar-toggler navbar-toggler-right`}
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul
                className={`${styles["navbar-nav"]} ${styles["nav-justified"]} ${styles["nav-fill"]} navbar-nav nav-justified w-100 nav-fill`}
              >
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    iphone
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    ipad
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    watch
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    tv
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    Music
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    Support
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
