import service1 from '../assets/images/services/service1.jpg'
import service2 from '../assets/images/services/service-2.jpg'
import service3 from '../assets/images/services/service-3.jpg'
import service4 from '../assets/images/services/service-3.webp'
import service5 from '../assets/images/services/service-4.jpg'

import { PanelsTopLeft, Building2, PlugZap, FileCheck2, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      img: service1,
      icon: <PanelsTopLeft size={40} />,
      title: "Residential Rooftop Solar Installation",
      description: "Get expert residential rooftop solar installation with high-efficiency panels, neat wiring, and safe mounting. Cut electricity bills, increase energy savings, and enjoy clean solar power for your home."
    },
    {
      img: service2,
      icon: <Building2  size={40} />,
      title: "Commercial Solar Systems",
      description: "Power your business with scalable commercial solar systems designed for offices, factories, and warehouses. Reduce operational costs, improve sustainability, and get reliable performance with professional installation and support."
    },
    {
      img: service4,
      icon: <PlugZap size={40} />,
      title: "On-grid / Off-grid / Hybrid Solar",
      description: "Choose the right solar setup: on-grid for maximum savings, off-grid for complete independence, or hybrid for the best of both with battery backup. We design and install solar systems that match your load and budget.",
    },
    {
      img: service3,
      icon: <FileCheck2 size={40} />,
      title: "Government Subsidy & Net Metering Support",
      description: "We provide complete government solar subsidy assistance and net metering support, including documentation, application guidance, and coordination. Make your solar installation smoother and start earning credits from excess power generation."
    },
    {
      img: service5,
      icon: <Wrench  size={40}/>,
      title: "Maintenance & Support",
      description: "Keep your system running at peak performance with solar maintenance and support services, including cleaning, inspections, troubleshooting, and monitoring. Ensure long-term efficiency, safety, and maximum ROI from your solar investment."
    },

  ];



  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-bold text-green-400 text-2xl">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold text-dark md:text-4xl">
            We Are Pioneers In The World Of Renewable Energy
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-white shadow-soft shadow-sm shadow-green-600 hover:shadow-md">
              <img
                src={s.img}
                alt={s.title}
                className="h-52 w-full object-cover"
              />

              <div className="relative p-6 pt-0  flex flex-col h-full">

                <div
                  className="-mt-12 mb-5 grid h-24 w-24 place-items-center rounded-full
          bg-white text-4xl text-green-400 shadow-soft transition hover:bg-green-400
          hover:text-white"
                >
                  {s.icon}
                </div>

                <h3 className="text-xl font-bold text-dark">{s.title}</h3>

                <p className="mt-2 text-slate-600 flex-grow text-lg">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
