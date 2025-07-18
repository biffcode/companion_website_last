'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';



const IntegrationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="integrations" className="section bg-neutral-50 py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-500 mb-4">Works With Your Favorite Tools</h2>
          <p className="text-xl text-secondary-400 max-w-4xl mx-auto">
          Companion seamlessly integrates with 2,700+ applications<br className="md:hidden" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg p-3 sm:p-4 flex items-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden">
                  <Image 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    width={40} 
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-secondary-500 font-medium text-sm sm:text-base truncate">{tool.name}</p>
              </motion.div>
            ))}
            
            {/* Integration count box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tools.length * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-primary-50 rounded-lg p-4 flex items-center justify-center col-span-full"
                  >
                    <div className="text-center w-full">
                <p className="text-primary-500 font-bold text-base sm:text-lg">2,700+ Controllable applications</p>
                      </div>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

const tools = [
  { name: 'Chrome', logo: '/app-logos/chrome.png' },
  { name: 'Gmail', logo: '/app-logos/Gmail.png' },
  { name: 'Word', logo: '/app-logos/word.png' },
  { name: 'Teams', logo: '/app-logos/teams.webp' },
  { name: 'Slack', logo: '/app-logos/slack.png' },
  { name: 'WhatsApp', logo: '/app-logos/whatsapp.png' },
  { name: 'Notion', logo: '/app-logos/notion.png' },
  { name: 'Trello', logo: '/app-logos/trello.png' },
  { name: 'Calendar', logo: '/app-logos/calendar.png' },
  { name: 'Drive', logo: '/app-logos/Drive.png' },
  { name: 'Sheets', logo: '/app-logos/Sheets.png' },
  { name: 'Forms', logo: '/app-logos/Forms.png' },
  { name: 'Shopify', logo: '/app-logos/SHopify.png' },
  { name: 'Spotify', logo: '/app-logos/Sportify.png' },
  { name: 'YouTube', logo: '/app-logos/Youtube.png' },
  { name: 'Discord', logo: '/app-logos/discord.jpg' },
  { name: 'GitHub', logo: '/app-logos/Github.png' },
  { name: 'Calendly', logo: '/app-logos/Calendly.png' },
  { name: 'Odoo', logo: '/app-logos/odoo.png' },
  { name: 'Telegram', logo: '/app-logos/Telegram.png' }
];

export default IntegrationsSection; 