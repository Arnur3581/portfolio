import { Particles } from "../../components/Particles/particles";
import { Header } from "../../components/Header/Header";
import { Form } from "./Form/Form";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Particles />
      <Header />
      <div className="centering flex flex-wrap justify-between mt-20 gap-10">
        <div className="w-full lg:flex-1">
          <h2 className="marked-line text-5xl">contact</h2>
          <div className="mt-10">
            <p>
              Email: someone@gmail.com <br />
              Phone: 123-456-7890 <br />
            </p>
            <div className="flex gap-5 mt-5 text-2xl">
              <a href="/" className="hover:scale-110 ease-out duration-300">
                <FaInstagram />
              </a>
              <a href="/" className="hover:scale-110 ease-out duration-300">
                <FaTwitter />
              </a>
              <a href="/" className="hover:scale-110 ease-out duration-300">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export { Contact };
