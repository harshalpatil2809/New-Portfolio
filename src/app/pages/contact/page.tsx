"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData(event.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY!
    );

    const response = await axios.post(
      "https://api.web3forms.com/submit",
      formData
    );

    const data = response.data;

    if (data.success) {
      toast.success("Message sent successfully 🖤");
      event.currentTarget.reset();

    } else {
      toast.error(data.message || "Something went wrong ⚠️");
    }
  } catch (error) {
    console.error(error);
    toast.error("Network error 😢");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="min-h-screen bg-linear-to-r from-[#2a2a2a] to-black text-zinc-100 flex items-center justify-center px-3 lg:py-30 py-10"
    >
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let&apos;s create <br /> something amazing.
          </h2>

          <p className="text-zinc-400 text-lg">
            Got an idea, project, or just want to say hi? I&apos;m always open
            to meaningful conversations and cool collaborations.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-zinc-300">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:harshalpatil2809@gmail.com"
                className="text-white hover:underline"
              >
                harshalpatil2809@gmail.com
              </a>
            </p>
            <p>
              📱 Phone:{" "}
              <a
                href="tel:+91-7720803593"
                className="text-white hover:underline"
              >
                +91 77208 03593
              </a>
            </p>
          </div>

          {/* Motivational line */}
          <p className="text-zinc-500 italic">
            “Great things start with a simple message.”
          </p>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full bg-[#111] border border-zinc-800 rounded-2xl shadow-2xl py-10 px-3 backdrop-blur">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl font-bold tracking-wide">Get In Touch</h2>
              <p className="text-zinc-400 mt-3">
                Let&apos;s build something cool together.
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-6">
              
                <motion.div
                  
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + 0.1 }}
                >
                  <label className="block mb-2 text-sm text-zinc-400 capitalize">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    required
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    placeholder={`Your Name`}
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
                  />
                </motion.div>

                <motion.div
                  
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + 0.1 }}
                >
                  <label className="block mb-2 text-sm text-zinc-400 capitalize">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder={`Your Email`}
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
                  />
                </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block mb-2 text-sm text-zinc-400">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition resize-none"
                />
              </motion.div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-lg transition duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center text-zinc-500 text-sm mt-6"
            >
              I usually reply within 24 hours ⚡
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
