import React from 'react';
import { Award, ShoppingBasket as Basketball, Facebook, Instagram, Mail, MapPin, Phone, Shield, Star, Twitter, CheckCircle, Users, Zap, BookOpen, Code, Target } from 'lucide-react';
import { SplineScene } from './components/SplineScene';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#271043] to-[#1a0b2e]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f1a] backdrop-blur-sm bg-opacity-80 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 group">
              <Basketball className="h-8 w-8 text-[#c470f2] transform group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-xl font-bold text-white group-hover:text-[#c470f2] transition-colors duration-300">EliteHoops</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['About', 'Features', 'Usecases', 'Pricing', 'Blog'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-[#c470f2] transition-colors duration-200 font-medium relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c470f2] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <button className="bg-[#c470f2] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#b35deb] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c470f2]/20">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <SplineScene />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-[#c470f2] to-[#9141ac] animate-gradient">
                Crafted for Champions
              </h1>
              <p className="text-gray-300 text-lg mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Experience professional-grade basketballs engineered for superior performance and unmatched durability.
              </p>
              <button className="bg-gradient-to-r from-[#c470f2] to-[#9141ac] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c470f2]/20 animate-fade-in" style={{ animationDelay: '400ms' }}>
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 animate-float">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#c470f2] opacity-30 blur-3xl rounded-full animate-pulse"></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 group">
              <h2 className="text-3xl font-bold mb-6 text-white group-hover:text-[#c470f2] transition-colors duration-300">About EliteHoops</h2>
              <p className="text-gray-300 mb-6">
                Since 1985, EliteHoops has been at the forefront of basketball innovation. Our commitment to quality and performance has made us the preferred choice for professional athletes and enthusiasts alike.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#271043] p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#c470f2]/20">
                  <h3 className="text-2xl font-bold text-[#c470f2] mb-2 animate-count">35+</h3>
                  <p className="text-gray-300">Years of Excellence</p>
                </div>
                <div className="bg-[#271043] p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#c470f2]/20">
                  <h3 className="text-2xl font-bold text-[#c470f2] mb-2 animate-count">1M+</h3>
                  <p className="text-gray-300">Balls Sold</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-[#c470f2]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxMmE2IDYgMCAwIDEgMCAxMiA2IDYgMCAwIDEgMC0xMnptMCAyYTQgNCAwIDAgMCAwIDggNCA0IDAgMCAwIDAtOHoiIGZpbGw9IiNjNDcwZjIiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20 animate-pulse"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description: "Crafted with genuine leather and advanced grip technology"
              },
              {
                icon: Award,
                title: "Pro Certified",
                description: "Official size and weight, approved for professional play"
              },
              {
                icon: Star,
                title: "2-Year Warranty",
                description: "Guaranteed durability with our comprehensive warranty"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#c470f2] to-[#9141ac] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-[#1a0b2e] p-8 rounded-lg border border-[#c470f2] border-opacity-20 group-hover:border-opacity-100 transition-all duration-300">
                  <div className="inline-block p-4 bg-gradient-to-r from-[#c470f2] to-[#9141ac] rounded-lg mb-4 bg-opacity-10 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-[#c470f2] group-hover:animate-spin-slow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#c470f2] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-16 bg-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Perfect for Every Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Professional Leagues",
                description: "Trusted by professional leagues worldwide"
              },
              {
                icon: Target,
                title: "Training Programs",
                description: "Ideal for skill development and practice"
              },
              {
                icon: Zap,
                title: "Street Basketball",
                description: "Durable design for outdoor play"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-[#271043] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#c470f2]/20 group" style={{ animationDelay: `${index * 200}ms` }}>
                <useCase.icon className="h-12 w-12 text-[#c470f2] mb-4 group-hover:animate-bounce transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#c470f2] transition-colors duration-300">{useCase.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gradient-to-b from-[#1a0b2e] via-[#271043] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Choose Your Ball</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "29",
                features: ["Standard rubber material", "Indoor use", "Basic grip pattern", "6-month warranty"]
              },
              {
                name: "Pro",
                price: "59",
                features: ["Premium composite leather", "Indoor/Outdoor use", "Advanced grip technology", "1-year warranty"],
                popular: true
              },
              {
                name: "Elite",
                price: "99",
                features: ["Genuine leather", "Professional grade", "Maximum grip control", "2-year warranty"]
              }
            ].map((plan, index) => (
              <div key={index} className={`relative transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'scale-105' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#c470f2] text-white px-4 py-1 rounded-tr-lg rounded-bl-lg animate-pulse">
                    Popular
                  </div>
                )}
                <div className={`bg-[#271043] rounded-lg p-8 ${plan.popular ? 'border-2 border-[#c470f2]' : 'border border-gray-700'} hover:border-[#c470f2] transition-colors duration-300`}>
                  <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4 text-white group-hover:text-[#c470f2] transition-colors duration-300">${plan.price}</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300 group">
                        <CheckCircle className="h-5 w-5 text-[#c470f2] mr-2 group-hover:animate-bounce" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-[#c470f2] text-white hover:bg-[#b35deb] hover:shadow-lg hover:shadow-[#c470f2]/20' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Evolution of Basketball Technology",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
                category: "Technology",
                date: "Mar 15, 2024"
              },
              {
                title: "Choosing the Right Basketball for Your Game",
                image: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=800&q=80",
                category: "Guide",
                date: "Mar 12, 2024"
              },
              {
                title: "Pro Tips: Maintaining Your Basketball",
                image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=800&q=80",
                category: "Tips",
                date: "Mar 10, 2024"
              }
            ].map((post, index) => (
              <div key={index} className="bg-[#271043] rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#c470f2]/20" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-[#c470f2] text-sm">{post.category}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#c470f2] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <a href="#" className="inline-flex items-center text-[#c470f2] hover:text-[#b35deb] transition-colors duration-300">
                    Read More
                    <BookOpen className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f1a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group">
                <Basketball className="h-6 w-6 text-[#c470f2] group-hover:rotate-180 transition-transform duration-700" />
                <span className="text-lg font-bold group-hover:text-[#c470f2] transition-colors duration-300">EliteHoops</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 group hover:translate-x-2 transition-transform duration-300">
                <MapPin className="h-4 w-4 text-gray-400 group-hover:text-[#c470f2]" />
                <span className="text-gray-300 group-hover:text-white">123 Sports Ave, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 group hover:translate-x-2 transition-transform duration-300">
                <Phone className="h-4 w-4 text-gray-400 group-hover:text-[#c470f2]" />
                <span className="text-gray-300 group-hover:text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 group hover:translate-x-2 transition-transform duration-300">
                <Mail className="h-4 w-4 text-gray-400 group-hover:text-[#c470f2]" />
                <span className="text-gray-300 group-hover:text-white">info@elitehoops.com</span>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-[#c470f2] focus:ring focus:ring-[#c470f2]/20 transition-all duration-300"
                />
                <button className="bg-[#c470f2] px-6 py-2 rounded-lg hover:bg-[#b35deb] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c470f2]/20">
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-400 hover:text-[#c470f2] transform hover:scale-125 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 EliteHoops. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;