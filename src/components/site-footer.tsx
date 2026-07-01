import Image from "next/image";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import jnrLogo from "../../jnrlogonobg.png";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image className="footer__logo" src={jnrLogo} alt="JNR Stone Works Trading Inc." />
            <span>Official LX Hausys distributor</span>
            <p className="muted">
              Premium HIMACS solid surface countertops for kitchens, vanities, and
              commercial environments across Metro Manila.
            </p>
          </div>

          <div className="footer__contacts" aria-label="Contact details">
            <p>
              <PhoneIcon width={18} height={18} /> +63 917 190 1474
            </p>
            <p>
              <MailIcon width={18} height={18} /> jnrstoneworksinc@gmail.com
            </p>
            <p>
              <MapPinIcon width={18} height={18} /> 7F Victoria Sports Tower, 799 EDSA Brgy. South Triangle,
              Quezon City 1103
            </p>
            <p>
              <FacebookIcon width={18} height={18} />
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                JNR Stone Works Trading Inc.
              </a>
            </p>
          </div>
        </div>

        <div className="footer__bar">Premium Materials • Expert Craftsmanship • Seamless Results</div>
      </div>
    </footer>
  );
}