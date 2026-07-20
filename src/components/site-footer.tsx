import Image from "next/image";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { ASSETS } from "@/data/assets";
import { CONTACT_EMAIL, CONTACT_PHONES } from "@/data/site";

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
            {CONTACT_PHONES.map((phone) => (
              <p key={phone}>
                <PhoneIcon width={15} height={15} />{" "}
                <a href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
              </p>
            ))}
            <p>
              <MailIcon width={15} height={15} /> {CONTACT_EMAIL}
            </p>
            <p>
              <MapPinIcon width={15} height={15} /> 7F Victoria Sports Tower, 799 EDSA Brgy.
              South Triangle, Quezon City 1103
            </p>
            <p>
              <FacebookIcon width={15} height={15} />
              <a href="https://www.facebook.com/jnrstoneworkstradinginc" target="_blank" rel="noreferrer">
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
