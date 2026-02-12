import teamImage from '../assets/images/team/team-1.avif'
export default function Team() {
  const team = [teamImage, teamImage, teamImage];

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-bold text-yellow-400">Team Member</p>
          <h2 className="mt-2 text-3xl font-extrabold text-dark md:text-4xl">
            Experienced Team Members
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-white shadow-soft">
              <div className="flex">
                <img src={img} alt="" className="w-3/4 rounded-tr-[60px] object-cover" />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-dark">Full Name</h3>
                <p className="text-slate-600">Designation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
