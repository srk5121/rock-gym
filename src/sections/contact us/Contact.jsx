import { BsTelephone } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className=" w-full bg-primary text-black">
      <section className="mx-auto h-full w-4/5   md:max-w-2xl lg:max-w-4xl">
        <div className="mx-auto flex h-full w-full flex-col items-start gap-2 py-6 text-lg font-medium tracking-widest md:flex-row md:items-center md:justify-between md:font-semibold lg:w-4/5">
          <div>
            <h3 className="flex items-center gap-2">
              <BsTelephone />
              <a href="tel:+918328118425">8328118425</a>
            </h3>
            <h3 className="flex items-center gap-2">
              <FaFacebookSquare />
              <a
                href="https://m.facebook.com/people/Rock-gymfitness-studio/100064187468074/?locale=hi_IN"
                target="_blank"
              >
                Rock Gym | Facebook
              </a>
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
      <hr className="mx-auto w-3/4 border-black" />
      <div className="mx-auto w-4/5 py-4 md:max-w-2xl lg:max-w-4xl">
        <p className="flex flex-col items-center justify-center text-lg font-medium tracking-widest sm:flex-row sm:gap-1 md:font-semibold">
          <span>Designed & Developed by</span>
          <span className="italic">Srikanth Raj K</span>
        </p>
      </div>
    </footer>
  );
};

export default Contact;
