import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import EarthCanvas from "./canvas/Earth";
import { slideIn } from "../utils/motion";
import toast from "react-hot-toast";

//template_ncc9gxe

//rwY9KxRieYyA2jDYQ

//service_8tc8653

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_8tc8653",
        "template_ncc9gxe",
        {
          from_name: form.name,
          to_name: "Gyanaranjan Sendha",
          from_email: form.email,
          to_email: "grsendha11@gmail.com",
          message: form.message,
        },
        "rwY9KxRieYyA2jDYQ"
      )
      .then(
        (response) => {
          setLoading(false);
          toast("Message sent successfully! I'll get back to you soon.", {
            duration: 6000,
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error);
          toast.error("Failed to send message ");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1]  p-8 "
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex-flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col mt-2">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col mt-2">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none
              border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 mt-5 outline-none w-full text-white font-medium rounded-xl shadow-md "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
