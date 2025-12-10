import React from 'react';
import { Sun, Instagram, Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import contactData from '../src/content/contact.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-neutral-900 text-white p-1.5 rounded-lg">
                <Sun size={16} fill="currentColor" />
              </div>
              <span className="text-lg font-bold tracking-tight text-neutral-900">Doon Infrapower</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              M/s Doon Infrapower Projects Pvt. Ltd.<br />
              Solar EPC | Transformer Manufacturing | Electrical Infrastructure
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>{contactData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${contactData.email}`} className="hover:text-neutral-900">{contactData.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" />
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="hover:text-neutral-900">{contactData.phone}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Solar EPC Projects</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Transformer Manufacturing</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Infrastructure Works</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">PM Surya Ghar Scheme</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4 text-sm">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">{contactData.copyright}</p>
          <div className="flex gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1">Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;