import { useRef } from "react";
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
      // .then(res =>{
      //   toast.success('Message sent successfully')
      // })
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
          console.error("EmailJS Error:", error); // Better error logging
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-10 px-5 md:px-20 lg:px-40"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-10">
          Feel free to contact me through email, phone, or WhatsApp. I would
          love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400">
              Here are my details for easy communication.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-400 p-3 rounded-full">
              <MdEmail></MdEmail>
            </span>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>
                <a
                  href="mailto:sabbirhasannahid6175@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-block 2  rounded text-white"
                >
                  sabbirhasannahid6175@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-500 p-3 rounded-full">
              <BiPhone></BiPhone>
            </span>
            <div>
              <h4 className="font-bold mb-3">Phone</h4>
              <p>
                <a
                  href="tel:+8801310101661"
                 
                  className=" px-3 py-2 bg-gradient-to-r from-green-400 to-red-400 rounded-sm "
                >
                  01310101661
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-500 p-3 rounded-full">
              <BiLogoMessenger></BiLogoMessenger>
            </span>
            <div>
              <h4 className="font-bold mb-3">Messenger</h4>
              <p>
                <a
                  href="https://m.me/sabbirhasan075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" px-3 py-2 bg-gradient-to-r from-green-400 to-red-400 rounded-sm "
                >
                  Send a Message
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-green-500 p-3 rounded-full">
              <BiLogoWhatsappSquare></BiLogoWhatsappSquare>
            </span>
            <div>
              <h4 className="font-bold mb-3">WhatsApp</h4>
              <p>
                <a
                  href="https://wa.me/8801310101661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" px-3 py-2 bg-gradient-to-r from-green-400 to-red-400 rounded-sm "
                >
                  Send a Message
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-red-400 text-white py-3 rounded-md  focus:outline-none focus:ring-2 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
