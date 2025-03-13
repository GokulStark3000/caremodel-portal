
import { cn } from '@/lib/utils';
import { MicroscopeIcon, GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import React from 'react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Demo', href: '#demo' },
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Research', href: '#' },
      { name: 'Datasets', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-healthcare-50 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <MicroscopeIcon className="h-6 w-6 text-healthcare-600" />
              <span className="text-xl font-semibold">MedML</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming healthcare with machine learning models that provide accurate diagnostics and personalized treatment recommendations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-healthcare-600 transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-healthcare-600 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-healthcare-600 transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-healthcare-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-healthcare-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MedML. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-healthcare-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-healthcare-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-healthcare-600 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
