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
  districtShort: 'TCUSD', // sometimes this is not used. monitor for changes.
  location: 'Temple City, California',

  // Year Atlas was founded — appears on teams page and about section
  foundedYear: '2026',

  // Student count shown in stats bar on home page
  studentsRepresented: 150,

  // Nav + footer links to external TCUSD resources
  links: {
    tcusdWebsite: 'https://www.tcusd.net/',
    enrollment: 'https://www.tcusd.net/enroll/',
    calendars: 'https://www.tcusd.net/63418', // May change. Idk why it's just numbers
    news: '#',           // REPLACE: news/updates link. Not in use currently
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
