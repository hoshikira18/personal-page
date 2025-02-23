import Pan from "@/components/animation/Pan";
import { Facebook, LinkedIn, Mail, X } from "@/components/icons";
import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Hoshikira | Contact",
  icons: {
    icon: "/favicon.png",
  },
};

const Contact = () => {
  return (
    <Pan className="">
      <div className="flex w-full flex-col md:flex-row">
        <div className="relative h-screen w-full overflow-hidden transition-all duration-700 md:w-1/2">
          <Image
            width={500}
            height={500}
            src="/static/contact/my-image.webp"
            alt="my-image"
            className="fade-out h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
          <div className="absolute bottom-20 left-0 right-0 ">
            <h1 className="px-10 py-10 text-center text-3xl font-bold text-white md:text-5xl">
              Ready to discuss your project?
            </h1>
            <div className="px-20 md:px-10"></div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-10 py-5 transition-all duration-700 md:py-10 lg:py-20">
          <div className="space-y-2 px-5 md:px-12">
            <div className=" text-4xl font-bold text-gray-300 ">
              Get in touch
            </div>
            <div className=" text-4xl font-bold text-primary ">
              Let&apos;s talk about your project
            </div>
          </div>
          <div className="px-5 text-lg text-gray-300 md:pl-12 md:pr-20">
            <p>
              Thinking about a new project, a problem to solve, or just want to
              connect? Let&apos;s do it!
            </p>
          </div>
          <div className="flex flex-col space-y-3 px-5 text-gray-300 md:px-12">
            <div className="flex items-center space-x-2">
              <Mail className="h-8 w-8 text-gray-500" />
              <p>Email:</p>
              <a
                href="mailto:khuyen.dev183@gmail.com"
                target="_blank"
                className="block border-b border-primary transition-all hover:border-b-2"
              >
                khuyen.dev183@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Facebook className="h-8 w-8 text-gray-500" />
              <p>Facebook:</p>
              <a
                href="https://www.facebook.com/hoshikira18"
                target="_blank"
                className="block border-b border-primary transition-all hover:border-b-2"
              >
                Trần Văn Khuyến
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LinkedIn className="h-8 w-8 text-gray-500" />
              <p>Linkedin:</p>
              <a
                href="https://www.linkedin.com/in/hoshikira/"
                target="_blank"
                className="block border-b border-primary transition-all hover:border-b-2"
              >
                Trần Văn Khuyến
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <X className="h-8 w-8 text-gray-500" />
              <p>Twitter:</p>
              <a
                href="https://twitter.com/khuyen_van24041"
                target="_blank"
                className="block border-b border-primary transition-all hover:border-b-2"
              >
                Trần Văn Khuyến
              </a>
            </div>
          </div>
        </div>
      </div>
    </Pan>
  );
};

export default Contact;
