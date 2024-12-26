"use client";

import React from "react";

import { Label } from "./ui/label";
import { cn } from "@/lib/utils";


import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const placeholdersFN = [
    "John",
    "Jane",
    "Tyler",
    "Peter",
    "Elon",
  ];

  const placeholdersLN = [
    "Doe",
    "Doe",
    "Durden",
    "Pan",
    "Musk",
  ];

  const placeholdersEmail = [
    "john.doe@gmail.com",
    "jane.doe@yahoo.com",
    "tyler.durden@hotmail.com",
    "peter.pan@example.com",
    "elon.musk@email.com",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section id="contact" >

    
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-300">
        Contact Me
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-300">First name</Label>
            <PlaceholdersAndVanishInput
              placeholders={placeholdersFN}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-300">Last name</Label>
            <PlaceholdersAndVanishInput
              placeholders={placeholdersLN}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4 text-neutral-300">
          <Label htmlFor="email">Email Address</Label>
          <PlaceholdersAndVanishInput
            placeholders={placeholdersEmail}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message" className="text-neutral-300">Message</Label>
          <textarea
            id="message"
            placeholder="Your message here..."
            className="resize-none p-2 border rounded-md bg-neutral-100 dark:bg-zinc-800 text-neutral-800 dark:text-neutral-300"
            rows={4}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

      </form>
      </BackgroundGradient>
    </div>
    </section>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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


// const Contact = () => {
//     return (
//         <section id="contact" className="py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
//           <p className="text-lg text-gray-700 mb-6">
//             Feel free to reach out for collaborations, inquiries, or just a chat!
//           </p>
//           <div className="space-y-4">

//             <p className="text-lg">
//               <strong>Phone:</strong> <a href="tel:+61499577855" className="text-blue-500 hover:underline">+61-499-577-855</a>
//             </p>
//             <p className="text-lg">
//               <strong>Email:</strong> <a href="mailto:oliver.sirota@gmail.com" className="text-blue-500 hover:underline">oliver.sirota@gmail.com</a>
//             </p>
//             <p className="text-lg">
//               <strong>LinkedIn:</strong> 
//               <a href="https://linkedin.com/in/oliver-sirota" target="_blank" className="text-blue-500 hover:underline">linkedin.com/in/oliver-sirota</a>
//             </p>
//           </div>
//         </div>
//       </section>
//   );
// };

export default Contact;