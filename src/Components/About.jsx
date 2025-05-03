import { Users, Rocket, Target, Award } from 'lucide-react';
import Member from '../assets/images/myprofile.png';
import projects from '../assets/Projects';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" aria-hidden="true" />, number: "5+", label: "Clients" },
    { icon: <Rocket className="w-6 h-6" aria-hidden="true" />, number: "15+", label: "Projects" },
    { icon: <Target className="w-6 h-6" aria-hidden="true" />, number: "1+", label: "Years" },
    { icon: <Award className="w-6 h-6" aria-hidden="true" />, number: "1+", label: "Awards" }
  ];

  const teamMembers = [
    {name: 'PETER KINYANJUI', role: '', image: Member, id: 1},
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-start" aria-labelledby="vision-heading">
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 id="vision-heading" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                About Our Vision
              </h1>
              <p className="text-primary text-lg leading-relaxed">
                We&apos;re on a mission to transform the digital landscape through innovative solutions 
                and cutting-edge technology. Our passion drives us to create exceptional experiences 
                that make a difference.
              </p>
            </header>

            {/* Stats Section */}
            <section aria-label="Company Statistics" className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <article 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary mb-2" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <dl>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="text-2xl font-bold text-tertiary">{stat.number}</span>
                      <span className="block text-secondary">{stat.label}</span>
                    </dd>
                  </dl>
                </article>
              ))}
            </section>
          </div>

          {/* Projects Section */}
          <section className="space-y-8" aria-labelledby="projects-heading">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article 
                  key={project.id}
                  className="bg-secondary p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <figure className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project screenshot`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <h2 className="text-xl font-semibold text-center text-primary">
                    {project.title}
                  </h2>
                  <p className="text-quaternary text-center">{project.description}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        {/* Team Section */}
        <section className="mt-24" aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <article 
                key={member.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <figure className="w-32 h-32 bg-gradient-to-br from-secondary to-tertiary rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <h3 className="text-xl font-semibold text-center text-gray-800">
                  {member.name}
                </h3>
                <p className="text-tertiary text-center">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-24 text-center max-w-3xl mx-auto" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="prose prose-lg text-secondary">
            <p className="mb-6">
              We believe in pushing boundaries, fostering innovation, and creating meaningful 
              connections. Our commitment to excellence drives everything we do, from the smallest 
              details to the biggest challenges.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;