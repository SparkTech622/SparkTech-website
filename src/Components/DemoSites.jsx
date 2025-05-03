

 import projects from '../assets/Projects';


const DemoSites = () => {
 


  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            Some of Our Projects 
          </h1>
        </header>

        <section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="projects gallery"
        >
          {projects.map((project) => (
            <article 
              key={project.id}
              className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure className="w-full h-48 bg-gradient-to-br from-secondary to-tertiary rounded-xl mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </figure>
              <header>
                <h2 className="text-xl font-semibold text-center text-quaternary mb-2">
                  {project.title}
                </h2>
              </header>
              <p className="text-quinary text-center mb-4">
                {project.description}
              </p>
              <ul 
                className="flex justify-center space-x-2 mb-4 flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {project.skills.map((skill, index) => (
                  <li 
                    key={index} 
                    className="bg-quaternary text-primary px-2 py-1 rounded-full text-lg text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <footer className="text-center">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-quaternary hover:underline inline-block"
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                </a>
              </footer>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default DemoSites;