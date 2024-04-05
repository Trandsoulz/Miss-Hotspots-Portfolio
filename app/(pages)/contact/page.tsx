"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const OnSubmit = async () => {
    setIsSending(true);

    try {
      const response = await axios.post("https://postmail.invotes.com/send", {
        access_token: "xjbss9ndehxzipirdi4jaf69",
        reply_to: email,
        subject,
        text: message,
      });

      if (response.status === 200) {
        // console.log(response);
        // setSuccessMessage("Your email has been sent")

        toast.success("Your email has been sent", {
          style: {
            border: "1px solid #D79ABC",
            padding: "16px",
            color: "#D79ABC",
          },
          iconTheme: {
            primary: "#D79ABC",
            secondary: "#FFFAEE",
          },
        });
      } else {
        // console.log(response);

        toast.error("An error occured. Try again later", {
          style: {
            border: "1px solid #D79ABC",
            padding: "16px",
            color: "#D79ABC",
          },
          iconTheme: {
            primary: "#D79ABC",
            secondary: "#FFFAEE",
          },
        });

        // setIsError(true);
        // setErrorMessage("An error occured");
      }
    } catch (error) {
      // console.log(error);

      toast.error("An error occured. Try again later", {
        style: {
          border: "1px solid #D79ABC",
          padding: "16px",
          color: "#D79ABC",
        },
        iconTheme: {
          primary: "#D79ABC",
          secondary: "#FFFAEE",
        },
      });
      // setIsError(true);
      // setErrorMessage("An error occured");
    }

    setIsSending(false);
    return false;
  };

  return (
    <main className="bg-primaryColor">
      <Navbar color="bg-secondaryColor" />

      <h1
        className="text-black pt-36 max-w-7xl pl-8 text-2xl md:text-4xl tracking-normal font-semibold mx-auto"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Contact Us
      </h1>
      <section className="pt-6 md:pt-12 px-8 mx-auto w-full flex flex-col md:flex-row gap-10 max-w-7xl"  data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300">
        <div
          className="w-full md:w-1/2"
         
        >
          <Image
            className="rounded"
            src="/misshotspots/workwithus.png"
            alt="miss-hotspot"
            width={450}
            height={450}
          />
        </div>
        <div
          className="text-black w-full md:w-1/2"
        
        >
          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-7"
          >
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" w-full md:w-[70%] mx-auto px-2 py-3 border-2 border-secondaryColor rounded"
            />
            <br />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className=" w-full md:w-[70%] mx-auto px-2 py-3 border-2 border-secondaryColor rounded"
            />
            <br />
            <textarea
              name="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="h-[150px] w-full md:w-[70%] mx-auto px-2 py-3 border-2 border-secondaryColor rounded"
            ></textarea>
            <br />
            <button
              type="submit"
              onClick={OnSubmit}
              disabled={isSending}
              className="w-full md:w-[20%] px-4 py-2 rounded text-white bg-secondaryColor"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
            {/* {isError ? <p className="">{errorMessage}</p> : <p>{successMessage}</p>} */}
            <p className="pb-3 md:text-left text-center">
              Powered by{" "}
              <Link
                href="https://postmail.invotes.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostMail
              </Link>
            </p>
          </form>
        </div>
      </section>

      <footer
        className="md:p-4"
        // data-aos="fade-up"
        // data-aos-duration="500"
        // data-aos-delay="300"
      >
        <Footer Link1="Home" Link2="About" Link3="/" Link4="/about" />
      </footer>
    </main>
  );
};

export default Contact;
