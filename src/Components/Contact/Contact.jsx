import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    // service_45pebx4
    const formData = new FormData(event.target);
    console.log(formData)
    // const response = await fetch("https://formspree.io/f/mbllpkaz", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });

    // if (response.ok) {
    //   setStatus("Message sent successfully!");
    //   event.target.reset();
    // } else {
    //   setStatus("Error sending message. Please try again.");
    // }
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
            <p className="text-gray-400">Here are my details for easy communication.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-400 p-3 rounded-full">
              <MdEmail></MdEmail>
            </span>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>
                <a href="mailto:sabbirhasannahid6175@gmail.com" className="text-blue-400 hover:underline">
                sabbirhasannahid6175@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.25V4.5a2.25 2.25 0 00-2.25-2.25h-12A2.25 2.25 0 003.75 4.5v15a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-3.75" />
              </svg>
            </span>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>
                <a href="tel:+00801310101661" className="text-blue-400 hover:underline">
                +00801310101661
                </a>
              </p>
            </div>
          </div>
         
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Your Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-red-400 text-white py-3 rounded-md  focus:outline-none focus:ring-2 ">Send Message</button>
          </form>
          {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
