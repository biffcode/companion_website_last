import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiDownload, FiFileText, FiCode, FiSettings } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Companion | Documentation",
  description: "Complete documentation and guides for using Companion",
};

export default function DocumentationPage() {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-secondary-500 mb-6">Documentation</h1>
          <p className="text-xl text-secondary-400 mb-8">
            Everything you need to know about Companion - from installation to advanced features.
          </p>
        </div>
        
        <div className="apple-card mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-secondary-500 mb-6">Getting Started with Companion</h2>
          <p className="text-lg text-secondary-400 mb-10">
            Welcome to the Companion documentation. Here you'll find comprehensive guides to help you start working with Companion as quickly as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-apple border border-gray-100 transition-all duration-300 hover:shadow-apple-md">
              <FiFileText className="text-primary-500 mb-4" size={28} />
              <h3 className="text-xl font-medium text-secondary-500 mb-3">Installation Guide</h3>
              <p className="text-secondary-400 mb-4">
                Learn how to install and set up Companion on your system.
              </p>
              <Link href="#installation" className="text-primary-500 font-medium hover:text-primary-600 flex items-center">
                Read Guide <FiArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-apple border border-gray-100 transition-all duration-300 hover:shadow-apple-md">
              <FiSettings className="text-primary-500 mb-4" size={28} />
              <h3 className="text-xl font-medium text-secondary-500 mb-3">User Manual</h3>
              <p className="text-secondary-400 mb-4">
                Detailed instructions on how to use all features of Companion.
              </p>
              <Link href="#user-manual" className="text-primary-500 font-medium hover:text-primary-600 flex items-center">
                Read Manual <FiArrowRight className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-apple border border-gray-100 transition-all duration-300 hover:shadow-apple-md">
              <FiCode className="text-primary-500 mb-4" size={28} />
              <h3 className="text-xl font-medium text-secondary-500 mb-3">API Reference</h3>
              <p className="text-secondary-400 mb-4">
                Technical documentation for developers integrating with Companion.
              </p>
              <Link href="#api-reference" className="text-primary-500 font-medium hover:text-primary-600 flex items-center">
                View API Docs <FiArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Installation Section */}
        <section id="installation" className="mb-20">
          <div className="border-l-4 border-primary-500 pl-6 mb-8">
            <h2 className="text-3xl font-medium text-secondary-500 mb-3">Installation Guide</h2>
            <p className="text-lg text-secondary-400">Get up and running quickly with our step-by-step installation guide.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-medium text-secondary-500 mb-6">System Requirements</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-secondary-500 mb-2">Windows</h4>
                  <ul className="text-secondary-400 text-sm space-y-1">
                    <li>• Windows 10 or later (64-bit)</li>
                    <li>• 4 GB RAM minimum, 8 GB recommended</li>
                    <li>• 2 GB free disk space</li>
                    <li>• Internet connection for initial setup</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-secondary-500 mb-2">macOS</h4>
                  <ul className="text-secondary-400 text-sm space-y-1">
                    <li>• macOS 10.15 Catalina or later</li>
                    <li>• 4 GB RAM minimum, 8 GB recommended</li>
                    <li>• 2 GB free disk space</li>
                    <li>• Internet connection for initial setup</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-secondary-500 mb-2">Linux</h4>
                  <ul className="text-secondary-400 text-sm space-y-1">
                    <li>• Ubuntu 18.04+ or equivalent</li>
                    <li>• 4 GB RAM minimum, 8 GB recommended</li>
                    <li>• 2 GB free disk space</li>
                    <li>• Internet connection for initial setup</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-medium text-secondary-500 mb-6">Download Companion</h3>
              <p className="text-secondary-400 mb-4">
                Download the latest version of Companion for your operating system from our download page.
              </p>
              <Link href="/download" className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                <FiDownload className="mr-2" /> Download Companion
              </Link>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium text-secondary-500 mb-6">Installation Steps</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-medium text-secondary-500 mb-2">Run the Installer</h4>
                    <p className="text-secondary-400 text-sm">
                      Double-click the downloaded file and follow the on-screen instructions to install Companion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-medium text-secondary-500 mb-2">Grant Permissions</h4>
                    <p className="text-secondary-400 text-sm">
                      During installation, you'll be prompted to grant necessary permissions for automation features.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-medium text-secondary-500 mb-2">Sign In</h4>
                    <p className="text-secondary-400 text-sm">
                      After installation, launch Companion and sign in with your account credentials. If you don't have an account yet, you can create one during the setup process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-medium text-secondary-500 mb-2">Complete Setup</h4>
                    <p className="text-secondary-400 text-sm">
                      Follow the setup wizard to configure your preferences and permissions. Companion will guide you through setting up your first automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* User Manual Section */}
        <section id="user-manual" className="mb-20">
          <div className="border-l-4 border-primary-500 pl-6 mb-8">
            <h2 className="text-3xl font-medium text-secondary-500 mb-3">User Manual</h2>
            <p className="text-lg text-secondary-400">Learn how to use all features and capabilities of Companion.</p>
          </div>
          
          <div className="space-y-8">
            {manualSections.map((section, index) => (
              <div key={index} className="apple-card">
                <div className="flex items-start gap-6">
                  <Image 
                    src={section.icon} 
                    alt={section.title} 
                    width={60} 
                    height={60} 
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-medium text-secondary-500 mb-3">{section.title}</h3>
                    <p className="text-secondary-400 mb-4">{section.description}</p>
                    <Link href={section.link} className="text-primary-500 font-medium hover:text-primary-600 flex items-center">
                      Read More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* API Reference Section */}
        <section id="api-reference" className="mb-20">
          <div className="border-l-4 border-primary-500 pl-6 mb-8">
            <h2 className="text-3xl font-medium text-secondary-500 mb-3">API Reference</h2>
            <p className="text-lg text-secondary-400">Technical documentation for developers and advanced users.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-medium text-secondary-500 mb-4">Introduction to Companion API</h3>
              <p className="text-secondary-400 mb-4">
                Companion provides a REST API that allows developers to integrate with and extend the functionality of the application.
              </p>
              <p className="text-secondary-400 mb-4">
                To use the API, you'll need to generate an API key from your Companion settings.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-apple border border-gray-100">
                <h4 className="text-xl font-medium text-secondary-500 mb-4">Authentication</h4>
                <p className="text-secondary-400 mb-4">
                  All API requests require authentication using an API key. Include your API key in the request header:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium text-secondary-500 mb-6">Available Endpoints</h3>
              
              <div className="space-y-6">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : 
                        endpoint.method === 'PUT' ? 'bg-amber-100 text-amber-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="bg-gray-100 px-3 py-1 rounded-lg text-secondary-500 font-mono">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-secondary-400 mb-3">{endpoint.description}</p>
                    <Link href={`#${endpoint.method.toLowerCase()}-${endpoint.path.replace(/\//g, '-').replace(/[{}]/g, '')}`} className="text-primary-500 text-sm font-medium hover:text-primary-600">
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-secondary-500 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="apple-card">
                <h3 className="text-xl font-medium text-secondary-500 mb-4">{faq.question}</h3>
                <p className="text-secondary-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Support Section */}
        <section id="support">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-secondary-500 mb-8">Need More Help?</h2>
          
          <div className="apple-card">
            <h3 className="text-2xl font-medium text-secondary-500 mb-6">Contact Support</h3>
            <p className="text-secondary-400 mb-8">
              If you can't find the information you need in our documentation, our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-apple border border-gray-100">
                <h4 className="text-xl font-medium text-secondary-500 mb-3">Email Support</h4>
                <p className="text-secondary-400 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:support@aioscompanion.com" className="text-primary-500 font-medium hover:text-primary-600">
                  support@aioscompanion.com
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-apple border border-gray-100">
                <h4 className="text-xl font-medium text-secondary-500 mb-3">Community Forum</h4>
                <p className="text-secondary-400 mb-4">
                  Join our community forum to connect with other users and get help.
                </p>
                <Link href="/support" className="text-primary-500 font-medium hover:text-primary-600 flex items-center">
                  Visit Forum <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const manualSections = [
  {
    title: "File Management Automation",
    description: "Learn how to set up automated file organization, renaming, and processing workflows that save you hours of manual work.",
    icon: "/file.svg",
    link: "#file-management"
  },
  {
    title: "Email Automation",
    description: "Discover how to automate email responses, scheduling, and organization to keep your inbox under control.",
    icon: "/video/Email Automation.mp4",
    link: "#email-automation"
  },
  {
    title: "Data Processing",
    description: "Extract, transform, and load data from various sources automatically with powerful data processing capabilities.",
    icon: "/video/Data Processing.mp4",
    link: "#data-processing"
  },
  {
    title: "Document Conversion",
    description: "Convert documents between different formats automatically with just a few clicks or based on custom rules.",
    icon: "/video/Document Conversion.mp4",
    link: "#document-conversion"
  },
  {
    title: "Advanced Automation Rules",
    description: "Create complex conditional workflows with multiple triggers and actions to handle sophisticated business processes.",
    icon: "/globe.svg",
    link: "#advanced-rules"
  }
];

const apiEndpoints = [
  {
    method: "GET",
    path: "/api/v1/automations",
    description: "List all automations available to the authenticated user."
  },
  {
    method: "POST",
    path: "/api/v1/automations",
    description: "Create a new automation with specified triggers and actions."
  },
  {
    method: "GET",
    path: "/api/v1/automations/{id}",
    description: "Retrieve details about a specific automation."
  },
  {
    method: "PUT",
    path: "/api/v1/automations/{id}",
    description: "Update an existing automation's configuration."
  },
  {
    method: "DELETE",
    path: "/api/v1/automations/{id}",
    description: "Delete an automation."
  },
  {
    method: "GET",
    path: "/api/v1/logs",
    description: "Retrieve logs of automation executions."
  }
];

const faqs = [
  {
    question: "How do I upgrade my Companion subscription?",
    answer: "You can upgrade your subscription at any time by going to Settings > Account > Subscription in the Companion app. From there, you can select a new plan and complete the payment process."
  },
  {
    question: "Can I use Companion on multiple devices?",
    answer: "Yes, your Companion subscription allows you to install and use the software on up to 3 devices simultaneously. Simply download and install the app on your devices and sign in with your account."
  },
  {
    question: "Is my data secure with Companion?",
    answer: "Yes, we take data security very seriously. Companion processes your data locally on your device whenever possible. When cloud processing is required, we use end-to-end encryption to ensure your data remains secure and private."
  },
  {
    question: "How do I create custom automation workflows?",
    answer: "To create a custom automation workflow, open Companion and click on the '+' button in the Automations tab. From there, you can select triggers, conditions, and actions to build your workflow. Check our User Manual for detailed instructions."
  },
  {
    question: "Does Companion work offline?",
    answer: "Many of Companion's features work offline, but some advanced AI features require an internet connection. The app will automatically sync your data when you're back online."
  }
]; 