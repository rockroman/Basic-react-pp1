import { appFooterLinks } from "../data";
const FooterLinks = () => {
  return (
    <div className="social-media">
      {appFooterLinks.map((link) => {
        const { id, address, linkLabel, icon } = link;
        return (
          <a key={id} href={address} target="_blank" aria-label={linkLabel}>
            {icon}
          </a>
        );
      })}
    </div>
  );
};
export default FooterLinks;
