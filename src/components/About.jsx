import { ShieldCheck, Calendar, UserCheck } from "lucide-react";

import aboutImages from '../assets/images/about/about.jpg'

export default function About() {
  return (
    <section className="bg-light my-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="min-h-[400px]">
          <img
            src={aboutImages}
            alt="About"
            className="h-full w-full object-cover p-6 md:p-8 "
          />
        </div>


        <div className="px-6 py-12 lg:py-16">
          <p className="font-bold text-2xl text-green-400">About Us</p>
          <h2 className="mt-2 text-3xl font-extrabold text-dark md:text-5xl">
            We provide end-to-end rooftop solar solutions for homes and businesses.
          </h2>
          <p className="mt-4 text-2xl ">
            From site survey to installation and subsidy support, we manage everything.
          </p>

          <div className="flex flex-col gap-2 my-5">
            <div className="inline-flex items-center gap-2 text-xl font-semibold px-3 py-1 rounded-full ">
              <ShieldCheck  className="text-green-500" size={40} /> Government subsidy assistance
            </div>

            <div className="inline-flex items-center gap-2 text-xl font-semibold px-3 py-1 rounded-full ">
              <Calendar className="text-green-500"  size={40} /> 25-year panel warranty
            </div>

            <div className="inline-flex items-center gap-2 text-xl font-semibold px-3 py-1 rounded-full ">
              <UserCheck className="text-green-500"  size={40}/> Local installation team
            </div>
          </div>


          <a href="#" className="mt-7 inline-flex rounded-full bg-primary px-8 py-3 font-medium text-white hover:opacity-90">
            Explore More
          </a>
        </div>
      </div>

      <div className="my-10" />
    </section>
  );
}
