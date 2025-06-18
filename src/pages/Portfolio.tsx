
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "3Things To-Do List Application",
      category: "UI/UX Design",
      description: "A minimalist task management application designed to help users focus on their three most important daily tasks.",
      problem: "Many to-do list apps overwhelm users with features, leading to decision paralysis and decreased productivity.",
      solution: "Created a clean, focused interface that limits users to three daily tasks, promoting better prioritization and completion rates.",
      targetUsers: "Busy professionals, students, and anyone looking to improve their daily productivity without complexity.",
      keyFeatures: [
        "Minimalist three-task interface",
        "Progress tracking and completion animations",
        "Daily task reset functionality",
        "Clean, distraction-free design"
      ],
      tools: ["Figma", "User Research", "Prototyping"],
      gradient: "from-purple-500 to-indigo-600",
      links: {
        figma: "#",
        prototype: "#"
      }
    },
    {
      title: "Home Haven Project",
      category: "Web Design & UX",
      description: "A comprehensive real estate platform designed to simplify the home buying and renting process for users in Myanmar.",
      purpose: "To create an intuitive platform that connects property seekers with their ideal homes while providing comprehensive property information.",
      targetAudience: "Home buyers, renters, real estate agents, and property developers in Myanmar.",
      keyFeatures: [
        "Advanced location-based property search",
        "Smart filtering system (price, location, type, amenities)",
        "Favorite properties save functionality",
        "Direct call integration for instant contact",
        "Interactive property image galleries",
        "Detailed property information and virtual tours"
      ],
      tools: ["Figma", "HTML", "CSS", "JavaScript", "User Testing"],
      gradient: "from-purple-600 to-pink-500",
      links: {
        live: "#",
        github: "#",
        figma: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-6">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold">
                  My Work
                </span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of UI/UX design projects that showcase my approach to solving real-world problems 
              through thoughtful design and user research.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.title} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="space-y-8">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm font-semibold">
                              {project.category}
                            </span>
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm text-gray-500">0{index + 1}</span>
                          </div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                            {project.title}
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {project.problem && (
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                              <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                                Problem
                              </h3>
                              <p className="text-red-700 text-sm leading-relaxed">{project.problem}</p>
                            </div>
                          )}
                          
                          {project.solution && (
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                              <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                Solution
                              </h3>
                              <p className="text-green-700 text-sm leading-relaxed">{project.solution}</p>
                            </div>
                          )}
                        </div>
                        
                        {project.purpose && (
                          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                            <h3 className="text-lg font-bold text-purple-800 mb-3">Purpose</h3>
                            <p className="text-purple-700">{project.purpose}</p>
                          </div>
                        )}
                        
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {project.keyFeatures.map((feature, idx) => (
                              <div key={idx} className="flex items-start bg-gray-50 p-3 rounded-xl">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-gray-100">
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3">Tools Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool) => (
                                <span key={tool} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm font-medium">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            {project.links.figma && (
                              <Button variant="outline" size="sm" className="border-purple-300 text-purple-700 hover:bg-purple-50 transition-all">
                                <Figma className="w-4 h-4 mr-2" />
                                Design
                              </Button>
                            )}
                            {project.links.live && (
                              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            )}
                            {project.links.github && (
                              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mockup Section */}
                    <div className={`bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8 lg:p-12 min-h-[500px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center text-white relative">
                        <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                        <div className="relative z-10">
                          <div className="w-40 h-40 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                            <span className="text-6xl">🎨</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">Project Mockup</h3>
                          <p className="text-white/80 text-sm mb-4">Interactive prototype coming soon</p>
                          <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
                <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
                  I'm always excited to take on new design challenges and create meaningful user experiences.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
