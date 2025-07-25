"use client";

import React from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import emailjs from "emailjs-com";


import {
  IconPhone,
  IconMail,

} from "@tabler/icons-react";

import { toast } from 'sonner';


const Contact = () => {
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ Guaranteed to be the form
    const formData = {
      to_name: "Oliver",
      from_name: form.firstname.value,
      sender_email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await emailjs.send(
        "service_tyg4472",
        "template_vhntmpt",
        formData,
        "5pKM4U-9MoeBsdJw-"
      );

      if (response.status === 200) {
        toast.success("Your message was sent successfully!", {
          duration: 4000,
        });
        form.reset(); // ✅ Safe now
      } else {
        toast.error("Failed to send message. Please try again.", {
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("A network error occurred. Please check your connection and try again.", {
        duration: 4000,
      });
    }
  };



  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  // Form submit handler (not necessary in this case)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Placeholder data for inputs
  const placeholdersFN = ["John", "Jane", "Peter", "Steve", "Sherlock", "Galileo", "Albert"];
  const placeholdersLN = ["Doe", "Doe", "Pan", "Jobs", "Holmes", "Galilei", "Einstein"];
  const placeholdersEmail = [
    "john.doe@example.com",
    "jane.doe@gmail.com",
    "peter.pan@yahoo.com",
    "steve.jobs@icloud.com",
    "sherlock.holmes@outlook.com",
    "galileo@hotmail.com",
    "einstein@protonmail.com"
  ];

  return (
    <section id="contact" className="bg-zinc-950 py-24">
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Contact</h2>

      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-zinc-950">
        
      
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-950">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-300">Contact Me</h2>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className="text-neutral-300">First name</Label>
                <PlaceholdersAndVanishInput
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholders={placeholdersFN}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className="text-neutral-300">Last name</Label>
                <PlaceholdersAndVanishInput
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholders={placeholdersLN}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4 text-neutral-300">
              <Label htmlFor="email">Email Address</Label>
              <PlaceholdersAndVanishInput
                id="email"
                name="email"
                type="email"
                placeholders={placeholdersEmail}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="message" className="text-neutral-300">Message</Label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className="resize-none p-2 border rounded-md bg-neutral-100 dark:bg-zinc-800 text-neutral-800 dark:text-neutral-300"
                rows={4}
                onChange={handleChange}
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            > 
              Send &rarr;
              <BottomGradient />  
            </button>


              <p className="text-sm py-3 text-neutral-300 ">
               Phone: <a href="tel:+61499577855" className="text-neutral-300 hover:underline hover:text-cyan-400">+61-499-577-855</a>
             </p>
             <p className="text-sm text-neutral-300">
               Email: <a href="mailto:oliver.sirota@gmail.com" className="text-neutral-300 hover:underline hover:text-cyan-400">oliver.sirota@gmail.com</a>
             </p>

          </form>
        </BackgroundGradient>
      </div>
    </section>
  );
};

// Gradient animation for button
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

// Label and input container for form fields
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;