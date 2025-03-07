export const About = () => {
  let frontendSkills = ["react", "angular", "vue", "tailwindcss", "javascript"];
  let backendSkills = ["nodejs", "express", "mongodb", "python", "php"];
  return (
    <section
      id="#about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center">
          About Me
        </h2>
        <div className="p-8 rounded-xl border border-white/10 hover:scale-104 duration-500 ease-out transition-all">
          <p className="text-gray-400 text-lg mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            minima, ducimus sapiente iusto rem est laudantium aliquid debitis
            nobis aperiam praesentium dolorem officia eum corrupti nisi deleniti
            eligendi quasi unde.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h2 className="font-bold text-white mb-3">Frontend </h2>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skills) => (
                  <span
                    className="text-blue-500 border-1  border-blue-500 rounded-3xl px-2 py-1
                            "
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h2 className="font-bold text-white mb-3">Backend </h2>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skills) => (
                  <span
                    className="text-blue-500 border-1  border-blue-500 rounded-3xl px-2 py-1
                            "
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-8 rounded-xl border border-white/10 hover:scale-104 duration-500 ease-out transition-all" >
                <h2 className="text-lg font-bold mb-4">🏫 Education</h2>
                <ul className="text-gray-400 list-disc space-y-2"> 
                    <li>
                        <strong>Btech in computer science and engineering</strong>, Central University of Haryana 
                    </li>
                    <li>
                        data Structures
                    </li>
                    <li>
                        Algorithm
                    </li>
                    <li>
                        web development
                    </li>
                    <li>
                        machine learning
                    </li>
                </ul>
            </div>
            <div  className="p-8 rounded-xl border border-white/10 hover:scale-104 duration-500 ease-out transition-all">
                <h2 className="text-lg font-bold mb-4">🏢 work experience</h2>
            </div>

        </div>
      </div>
    </section>
  );
};
