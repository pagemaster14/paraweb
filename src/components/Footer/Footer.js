/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import logo from "../../images/Logowhite.svg"
import telegram from "../../images/telegram.svg"
import vk from "../../images/vk.svg"
import twitter from "../../images/twitter.svg"
import h from "../../images/h.svg"

function Footer(props) {
    return (
        <footer className="footer">
            <img src={logo} alt="Логотип" className="footer__logo" />
            <div className="footer__social">
                <img src={telegram} alt="Логотип telegram" className="footer__social-logo" />
                <img src={vk} alt="Логотип vk" className="footer__social-logo" />
                <img src={twitter} alt="Логотип twitter" className="footer__social-logo" />
                <img src={h} alt="Логотип h" className="footer__social-logo" />
            </div>
            <div className="footer__links">
            <a className="footer__links-text" href="#">Решения</a>
            <a className="footer__links-text" href="#">Оборудование</a>
            <a className="footer__links-text" href="#">О компании</a>
            <a className="footer__links-text" href="#">Блог</a>
            </div>
            <p className="footer__copywrite">© ООО «Лого», 2008—2022</p>
            <p className="footer__license">Лицензия на телематические услуги № 176267</p>
        </footer>
    );
}

export default Footer;