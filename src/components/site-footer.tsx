import Image from "next/image";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { ASSETS } from "@/data/assets";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__sheen" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__row">
          <div className="footer__brand">
            <Image
              className="footer__logo"
              src={ASSETS.logos.jnrSolidBlack}
              alt="JNR"
              width={40}
              height={40}
            />
            <div className="footer__brand-title">JNR Stone Works Trading Inc.</div>
          </div>

          <div className="footer__contacts" aria-label="Contact details">
            <p>
              <PhoneIcon width={15} height={15} /> +63 917 190 1474
            </p>
            <p>
              <MailIcon width={15} height={15} /> sales@jnrstoneworks.com
            </p>
            <p>
              <MapPinIcon width={15} height={15} /> 7F Victoria Sports Tower, 799 EDSA Brgy.
              South Triangle, Quezon City 1103
            </p>
            <p>
              <FacebookIcon width={15} height={15} />
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
