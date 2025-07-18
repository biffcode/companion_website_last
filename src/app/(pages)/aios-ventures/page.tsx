import type { Metadata } from "next";
import Link from "next/link";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Companion | Companion Ventures",
  description: "Learn about Companion Ventures, the parent company of Companion",
};

export default function CompanionVenturesPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-lg text-secondary mb-8">Companion Ventures</h1>
        
        <div className="bg-beige-50 rounded-xl p-8 border border-beige-200 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="heading-md text-secondary">About Our Parent Company</h2>
            <a 
              href="https://companionventures.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              Visit Website <FiExternalLink size={18} />
            </a>
          </div>
          
          <p className="text-lg text-secondary-light mb-6">
            Companion Ventures is a pioneering technology company focused on developing AI-powered solutions that enhance productivity and simplify complex tasks for individuals and businesses.
          </p>
          
          <p className="text-lg text-secondary-light mb-6">
            Founded in 2023, Companion Ventures is committed to creating AI applications that run locally, prioritize privacy, and deliver tangible value through automation and intelligent assistance.
          </p>
          
          <div className="bg-beige-100 p-6 rounded-lg border border-beige-200 mb-6">
            <h3 className="text-xl font-semibold text-secondary mb-3">Our Mission</h3>
            <p className="text-secondary-light">
              To empower people by creating AI tools that actually do the work—not just provide suggestions—while respecting privacy and maintaining data security.
            </p>
          </div>
          
          <div className="bg-beige-100 p-6 rounded-lg border border-beige-200">
            <h3 className="text-xl font-semibold text-secondary mb-3">Our Vision</h3>
            <p className="text-secondary-light">
              A world where AI handles routine tasks autonomously, giving people more time to focus on creative work, meaningful relationships, and activities they enjoy.
            </p>
          </div>
        </div>
        
        {/* Products Section */}
        <section className="mb-12">
          <h2 className="heading-md text-secondary mb-6">Our Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-beige-50 p-6 rounded-lg border border-beige-200">
              <h3 className="text-xl font-semibold text-secondary mb-3">Companion</h3>
              <p className="text-secondary-light mb-4">
                An AI assistant that actually does the work—saving you time with simple, no-code automation that runs locally on your machine.
              </p>
              <Link href="/" className="text-primary font-medium hover:underline flex items-center gap-1">
                Learn More <FiArrowRight size={16} />
              </Link>
            </div>
            
            <div className="bg-beige-50 p-6 rounded-lg border border-beige-200">
              <h3 className="text-xl font-semibold text-secondary mb-3">Companion Enterprise</h3>
              <p className="text-secondary-light mb-4">
                Tailored AI automation solutions for businesses, with enhanced security, team collaboration features, and custom integrations.
              </p>
              <a 
                href="https://companionventures.com/enterprise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline flex items-center gap-1"
              >
                Learn More <FiExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
        
        {/* Leadership Section */}
        <section className="mb-12">
          <h2 className="heading-md text-secondary mb-6">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-beige-50 p-6 rounded-lg border border-beige-200 text-center">
                <div className="w-24 h-24 rounded-full bg-beige-300 mx-auto mb-4 flex items-center justify-center text-primary">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.title}</p>
                <p className="text-secondary-light text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section>
          <h2 className="heading-md text-secondary mb-6">Contact Companion Ventures</h2>
          
          <div className="bg-beige-50 p-6 rounded-lg border border-beige-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Corporate Headquarters</h3>
                <p className="text-secondary-light mb-1">123 AI Innovation Way</p>
                <p className="text-secondary-light mb-1">Suite 500</p>
                <p className="text-secondary-light mb-1">San Francisco, CA 94105</p>
                <p className="text-secondary-light mb-4">United States</p>
                <p className="text-secondary-light">
                  <strong>Email:</strong> contact@aioscompanion.com
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Connect With Us</h3>
                <p className="text-secondary-light mb-4">
                  For business inquiries, partnership opportunities, or general questions, please visit our corporate website.
                </p>
                <a 
                  href="https://companionventures.com/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Contact Companion Ventures <FiExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const leadershipTeam = [
  {
    name: "Jane Smith",
    title: "Chief Executive Officer",
    initials: "JS",
    bio: "Jane has 15+ years of experience in AI and automation technologies, previously leading product teams at major tech companies."
  },
  {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    initials: "MC",
    bio: "Michael is an AI researcher with a PhD in Computer Science and multiple patents in machine learning and automation."
  },
  {
    name: "Sarah Johnson",
    title: "Chief Product Officer",
    initials: "SJ",
    bio: "Sarah specializes in creating intuitive user experiences and has led the development of several award-winning software products."
  }
]; 