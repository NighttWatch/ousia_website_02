import "./Footer.scss";

import Link from "next/link";


export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer__left heading-footer--main-italic">
                &copy;Ousia 2024. All Rights reserved.
            </div>
            <div className="footer__right">
                <Link href="/terms" className="footer__term heading-footer--main">Terms of Services</Link>
                <Link href="/privacy" className="footer__privacy heading-footer--main">Privacy Policy</Link>
            </div>
        </div>
    )
}