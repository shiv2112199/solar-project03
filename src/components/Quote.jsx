import quoteImage from '../assets/images/quote/image.avif'

export default function Quote() {
  return (
    <section className="bg-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="min-h-[400px]">
          <img src={quoteImage} alt="Quote" className="h-full w-full object-cover rounded-sm" />
        </div>

        <div className="px-6 py-12 lg:py-16">
          <p className="font-bold text-green-400">Free Quote</p>
          <h2 className="mt-2 text-3xl font-extrabold text-dark md:text-4xl">
            Get A Free Quote
          </h2>

          <p className="mt-4 text-slate-700">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="h-[55px] rounded-md bg-white px-4 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your Name" />
            <input className="h-[55px] rounded-md bg-white px-4 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your Email" />
            <input className="h-[55px] rounded-md bg-white px-4 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your Mobile" />

            <select className="h-[55px] rounded-md bg-white px-4 outline-none focus:ring-2 focus:ring-primary/30">
              <option className='bg-green-300'>Select A Service</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>

            <textarea className="min-h-[120px] rounded-md bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 sm:col-span-2" placeholder="Special Note" />

            <button className="rounded-full bg-green-400 px-8 py-3 font-medium text-white hover:opacity-90 sm:col-span-2 w-fit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="my-10" />
    </section>
  );
}
