
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences through design and data
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm currently in my final year of Computer Science studies, based in the vibrant city of Yangon. 
                    My journey into design began with a curiosity about how technology can better serve people's needs 
                    and create meaningful experiences.
                  </p>
                  <p>
                    What started as an interest in problem-solving through code has evolved into a passion for 
                    user-centered design and data-driven decision making. I believe that great design isn't just 
                    about aesthetics—it's about understanding users, solving real problems, and creating solutions 
                    that make a difference.
                  </p>
                  <p>
                    Through my academic journey and personal projects, I've developed a unique perspective that 
                    combines technical knowledge with design thinking, allowing me to bridge the gap between 
                    what's possible and what's meaningful.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Philosophy</h2>
                <p className="text-gray-600 leading-relaxed">
                  I approach every project with empathy and curiosity. Good design should be invisible—it should 
                  feel natural and intuitive to users while solving their problems effectively. I believe in the 
                  power of research, iteration, and user feedback to create solutions that truly resonate with 
                  people's needs and goals.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Bachelor of Computer Science</h4>
                  <p className="text-purple-600">Final Year Student</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Focus on software development, data structures, and human-computer interaction
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Skills</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">UI/UX Design</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-20"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Figma</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-22"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">User Research</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-18"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Data Analysis</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-16"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">HTML/CSS</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Sketch", "HTML", "CSS", "JavaScript", "Python", "SQL"].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
