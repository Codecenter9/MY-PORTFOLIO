import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import send from "../../assets/Send.svg";
import Linkedin from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Telegram from "../../assets/telegram.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Email from "../../assets/email.svg";
import Phone from "../../assets/phone.svg";
import Location from "../../assets/location.svg";
import styles from "../../style";
import "../../components/css/styles.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const sociallinks = [
    {
      icon: Telegram,
      link: "https://t.me/abderrehim",
    },
    {
      icon: Facebook,
      link: "#",
    },
    {
      icon: Linkedin,
      link: "#",
    },
    {
      icon: Twitter,
      link: "#",
    },
    {
      icon: Instagram,
      link: "#",
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    setStatusMessage({ type: "", text: "" });

    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const result = await emailjs.send(
        "service_jga3m8r",
        "template_uxmdw6u",
        templateParams,
        "K5KsraPJAIHuF0n6c"
      );

      if (result.status === 200) {
        setStatusMessage({
          type: "success",
          text: "✅ Message sent successfully, thanks for your visit!",
        });
        reset();
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage({
        type: "error",
        text: "❌ Failed to send email. Try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const BubbleBackground = () => (
    <svg
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#99e6ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#66ccff" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {[...Array(10)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 800}
          cy={Math.random() * 600}
          r={30 + Math.random() * 80}
          stroke="url(#bubbleGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
          style={{
            animation: `float${i % 3} 20s ease-in-out infinite`,
          }}
        />
      ))}
    </svg>
  );

  return (
    <section
      id="contact"
      className={`flex md:flex-row flex-col contact_section justify-between items-center w-full ${styles.paddingY} ${styles.paddingX}`}
    >
      <BubbleBackground />

      {/* Left: Contact Form */}
      <div className="left_section flex flex-col justify-between w-full md:w-1/2 flex-1 gap-6 relative z-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-[80%]"
        >
          <div data-aos="fade-right">
            <h3 className="h5_headding_gradient">CONTACT</h3>
            <h2 className="text-3xl font-bold mb-2 h1_headding_gradient">
              Get In Touch Now
            </h2>
          </div>

          {[
            { name: "name", placeholder: "Your name", required: true },
            {
              name: "email",
              placeholder: "Email",
              type: "email",
              required: true,
            },
            { name: "subject", placeholder: "Subject" },
            {
              name: "message",
              placeholder: "Message",
              required: true,
              textarea: true,
            },
          ].map(({ name, placeholder, required = false, textarea = false }) => (
            <Controller
              key={name}
              control={control}
              name={name}
              rules={required ? { required: true } : {}}
              render={({ field }) =>
                textarea ? (
                  <textarea
                    {...field}
                    rows={5}
                    placeholder={placeholder}
                    className="p-3 rounded bg-[#1a1a1a] border border-[#333] focus:border-pink-500 focus:ring-0 outline-none text-white placeholder-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                ) : (
                  <input
                    {...field}
                    placeholder={placeholder}
                    className="p-3 rounded bg-[#1a1a1a] border border-[#333] focus:border-pink-500 focus:ring-0 outline-none text-white placeholder-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                )
              }
            />
          ))}

          {errors.firstName && (
            <p className="text-red-500">First name is required.</p>
          )}

          <button
            type="submit"
            className="mt-2 flex items-center text-center gap-3 bg-pink-600 hover:bg-pink-700 text-white py-2 px-5 rounded shadow transition sm:w-[50%] disabled:opacity-60"
            data-aos="fade-up"
            data-aos-delay="100"
            disabled={isSending}
          >
            <img src={send} alt="Send Icon" className="w-5 h-5" />
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {statusMessage.text && (
            <p
              className={`mt-2 ${
                statusMessage.type === "success"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {statusMessage.text}
            </p>
          )}
        </form>
      </div>

      {/* Right: Address & Social Icons */}
      <div className="right_section flex flex-col justify-center items-start text-white flex-1 w-full md:w-1/2 mt-10 md:mt-0 px-4 relative z-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">Address</h3>
        <ul className="space-y-6 w-full">
          {[
            { icon: Location, text: "Hawassa, Ethiopia", title: "Address" },
            {
              icon: Email,
              text: "juharendrishu@gmail.com",
              title: "Email Address",
            },
            { icon: Phone, text: "+982648798", title: "Phone Address" },
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt="social-icon"
                  className="adress_icons"
                />
              </div>
              <div className="detail flex flex-col">
                <h5 className="text-sm font-medium h5_heading_gradient">
                  {item.title}
                </h5>
                <h2 className="text-xl font-medium h3_heading_gradient">
                  {item.text}
                </h2>
              </div>
            </li>
          ))}
        </ul>

        <div className="social_icons flex md:flex-row gap-4 mt-8">
          {sociallinks.map((sociallink, idx) => (
            <a
              key={idx}
              href={sociallink.link}
              target={sociallink.icon == Telegram ? "_blank" : ""}
              className="hover:scale-110 transition-transform"
            >
              <img
                loading="lazy"
                src={sociallink.icon}
                alt="social-icon"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
