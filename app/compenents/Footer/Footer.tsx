import "./Footer.scss";

import Link from "next/link";

import DiscordIcon from "@/public/icon/media/DiscordIcon";
import XIcon from "@/public/icon/media/XIcon";

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer__left heading-footer--main-italic">
                &copy;Ousia 2024. All Rights reserved.
            </div>
            <div className="footer__right">
                <Link href="https://twitter.com/OusiaProtocol" className="footer__term heading-footer--main">X (formerly Twitter)</Link>
                <Link href="https://discord.gg/V2kKS7jh" className="footer__privacy heading-footer--main">Discord</Link>
            </div>
        </div>
    )
}