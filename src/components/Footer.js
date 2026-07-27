import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  
  return (
    <footer className="bg-white py-[40px] px-[20px] lg:pt-[60px] lg:pb-[30px] xl:px-0 border-t-2 border-slate-200">
      <div className="container mx-auto">
        <div className="wrapper flex flex-col justify-center items-center gap-[20px]">
          <Image 
            src="/images/logo.png"
            width="200"
            height="202"
            alt="Smart Wing Chun Logo"
            className="max-w-full w-auto h-[60px]"
          />
          <h3 className="font-heading text-ink-black text-[20px] text-center">Smart Wing Chun</h3>
          <p className="text-[12px] text-ink-black text-center">Copyright © {new Date().getFullYear()} Smart Wing Chun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
