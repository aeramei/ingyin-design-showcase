
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-purple-600">Ingyin Khine</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Final-year Computer Science student based in Yangon with a passion for 
                  <span className="text-purple-600 font-semibold"> UI/UX design</span> and 
                  <span className="text-purple-600 font-semibold"> data analysis</span>.
                </p>
              </div>
              
              <p className="text-lg text-gray-600 max-w-lg">
                I create intuitive digital experiences through thoughtful design and data-driven insights. 
                Currently building my career in UI/UX design with a focus on user-centered solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link to="/portfolio">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 absolute -top-4 -left-4"></div>
                <img 
                  src="https://i.postimg.cc/MHkXCTjt/viber-image-2025-03-21-11-28-49-629.jpg" 
                  alt="Ingyin Khine Profile Picture"
                  className="w-72 h-72 rounded-full object-cover relative shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Preview */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specializing in user experience design and data analysis with a focus on creating 
              meaningful digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating intuitive and engaging user interfaces with tools like Figma, focusing on 
                user-centered design principles.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analysis</h3>
              <p className="text-gray-600">
                Transforming complex data into actionable insights through visualization and 
                analytical thinking.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white shadow-sm border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">
                Building responsive web applications using HTML, CSS, and modern frameworks 
                with attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Let's create something amazing together. I'm always excited to take on new challenges.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
