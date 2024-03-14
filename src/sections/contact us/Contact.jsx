import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className=" w-full bg-primary text-black">
      <section className="mx-auto h-full w-4/5   md:max-w-2xl lg:max-w-4xl">
        <div className="mx-auto flex h-full w-full flex-col items-start gap-2 py-6 text-lg font-medium tracking-widest md:flex-row md:items-center md:justify-between md:font-semibold lg:w-4/5">
          <div>
            <h3 className="flex items-center gap-2">
              <BsTelephone />
              <a href="tel:+910123456789">0123456789</a>
            </h3>
            <h3 className="flex items-center gap-2">
              <TfiEmail />
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </h3>
          </div>
          <div>
            <address>
              opp. Rythu bazar,
              <br />
              Shivaji Nagar, Siddipet,
              <br />
              Telangana 502103
            </address>
          </div>
          <div>
            <p>Copyright &#169; {year}</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
