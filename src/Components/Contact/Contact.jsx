import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { BiLogoMessenger, BiLogoWhatsappSquare, BiPhone } from "react-icons/bi";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45pebx4", // আপনার Service ID
        "template_94ncuff", // আপনার Template ID
        form.current,
        "EO0xLcYxtpls1zmPi" // আপনার Public Key
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again.",
          });
        }
      );
  };

 

  return (
    <section id="contact" className="px-5 py-10 text-black bg-white md:px-20 lg:px-40">
      <div className="text-center">
        <h2 className="mb-4 text-2xl md:text-4xl font-bold">Contact Me</h2>
        <p className="mb-10 text-base">
          Feel free to contact me through email, phone, or WhatsApp. I would
          love to hear from you!
        </p>
      </div>

      <div
      
        className="grid items-center justify-between grid-cols-1 gap-10 py-3 rounded-md container mx-auto  border px-3 lg:px-10 md:grid-cols-2"
      >
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Contact Info</h3>
            <p>Here are my details for easy communication.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-green-200 rounded-full">
              <MdEmail></MdEmail>
            </span>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>
                <a
                  href="mailto:sabbirhasannahid6175@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded 2"
                >
                  Going to gmail
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-green-200 rounded-full">
              <BiPhone></BiPhone>
            </span>
            <div>
              <h4 className="mb-3 font-bold">Phone</h4>
              <p>
                <a href="tel:+8801310101661" className="px-3 py-2 rounded-sm shadow-sm">
                  01310101661
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-green-200 rounded-full">
              <BiLogoMessenger></BiLogoMessenger>
            </span>
            <div>
              <h4 className="mb-3 font-bold">Messenger</h4>
              <p>
                <a
                  href="https://m.me/sabbirhasan075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-sm shadow-sm"
                >
                  Send a Message
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-3 bg-green-200 rounded-full">
              <BiLogoWhatsappSquare></BiLogoWhatsappSquare>
            </span>
            <div>
              <h4 className="mb-3 font-bold">WhatsApp</h4>
              <p>
                <a
                  href="https://wa.me/8801310101661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-sm shadow-sm"
                >
                  Send a Message
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 ">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 text-white transition duration-200 bg-green-500 rounded-md hover:bg-green-600 "
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;