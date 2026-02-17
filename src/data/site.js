// ============================================================
//  PROJECT ATLAS — Site Configuration
//  Edit this file to update content across the whole site.
// ============================================================

export const site = {
  name: 'Project Atlas',
  tagline: 'Engineering the Future.',
  description:
    'Six engineering teams. One coalition. Advancing student engagement in TCUSD STEM and entrepreneurship.',
  district: 'Temple City Unified School District',
  districtShort: 'TCUSD',
  location: 'Temple City, California',

  // Year Atlas was founded — appears on teams page and about section
  foundedYear: '2026',

  // Student count shown in stats bar on home page
  studentsRepresented: 150,

  // Nav + footer links to external TCUSD resources
  links: {
    tcusdWebsite: 'https://www.tcusd.net/',
    enrollment: '#',     // REPLACE: actual enrollment link
    calendars: '#',      // REPLACE: actual calendars link
    news: '#',           // REPLACE: news/updates link
  },

  // Social media — set to null to hide a link entirely
  social: {
    instagram: null,  // REPLACE: 'https://instagram.com/projectatlas'
    linkedin: null,   // REPLACE: 'https://linkedin.com/company/projectatlas'
    youtube: null,    // REPLACE: 'https://youtube.com/@projectatlas'
  },

  // Contact form: set action to a Formspree/Netlify endpoint to activate email delivery
  // See README for instructions. Leave null to keep the simulated form.
  formAction: null,
};
