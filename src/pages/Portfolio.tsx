
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
      image: "/placeholder.svg",
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
      image: "/placeholder.svg",
      links: {
        live: "#",
        github: "#",
        figma: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects showcasing my UI/UX design skills and problem-solving approach
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-3">
                          {project.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>
                      
                      {project.problem && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem</h3>
                          <p className="text-gray-600">{project.problem}</p>
                        </div>
                      )}
                      
                      {project.solution && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                          <p className="text-gray-600">{project.solution}</p>
                        </div>
                      )}
                      
                      {project.purpose && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Purpose</h3>
                          <p className="text-gray-600">{project.purpose}</p>
                        </div>
                      )}
                      
                      {project.targetUsers && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Users</h3>
                          <p className="text-gray-600">{project.targetUsers}</p>
                        </div>
                      )}
                      
                      {project.targetAudience && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Audience</h3>
                          <p className="text-gray-600">{project.targetAudience}</p>
                        </div>
                      )}
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.links.figma && (
                          <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                            <Figma className="w-4 h-4 mr-2" />
                            View Design
                          </Button>
                        )}
                        {project.links.live && (
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.links.github && (
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center p-8">
                    <div className="text-center text-purple-600">
                      <div className="w-32 h-32 bg-white/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">🎨</span>
                      </div>
                      <p className="font-medium">Project Mockup</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
