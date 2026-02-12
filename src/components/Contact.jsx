export default function Contact() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-12">
          <p className="font-bold text-yellow-400">Contact Us</p>
          <h2 className="mt-2 text-3xl font-extrabold text-dark md:text-4xl">
            Feel Free To Contact Us
          </h2>
<form className="mt-8  border-2 border-yellow-200 p-5 rounded-2xl grid grid-cols-1 gap-4 md:grid-cols-2">
  {/* Name (Required) */}
  <input
    className="h-[55px] rounded-md  px-4 bg-gray-200 focus:ring-2 outline-none focus:ring-yellow-400"
    placeholder="Your Name"
    required
  />

  {/* Phone Number (Required) */}
  <input
    className="h-[55px] rounded-md px-4 bg-gray-200 focus:ring-2 outline-none focus:ring-yellow-400"
    placeholder="Phone Number"
    required
  />

  {/* City / Area */}
  <input
    className="h-[55px] rounded-md px-4 bg-gray-200 focus:ring-2 outline-none focus:ring-yellow-400 md:col-span-2"
    placeholder="City / Area"
  />

  {/* Monthly Electricity Bill (Optional) */}
  <input
    className="h-[55px] rounded-md px-4 bg-gray-200 focus:ring-2 outline-none focus:ring-yellow-400 md:col-span-2"
    placeholder="Monthly Electricity Bill (Optional)"
  />

  {/* Message */}
  <textarea
    className="min-h-[120px] rounded-md px-4 py-3 bg-gray-200 focus:ring-2 outline-none focus:ring-yellow-400 md:col-span-2"
    placeholder="Message"
  />

  <button className="rounded-full bg-yellow-400 px-8 py-3 font-medium  text-white hover:opacity-90 md:col-span-2 w-fit">
    Send Message
  </button>
</form>

        </div>

        <div className="min-h-[400px]">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          />
        </div>
      </div>
    </section>
  );
}
