// ============================================================
//  PROJECT ATLAS — Team Data
//  Add, remove, or edit teams here. The Teams page and the
//  home page preview grid both pull from this file.
// ============================================================

export const teams = [
  {
    number: '01',
    name: 'Team 1 Name',             // REPLACE
    program: 'Competition / Program', // REPLACE: e.g. "FIRST Robotics Competition"
    description:
      'Replace this with the team\'s description — what they build, their competition history, and what makes them stand out.',  // REPLACE
    tags: ['Tag 1', 'Tag 2'],         // REPLACE: e.g. ['Robotics', 'FRC', 'Regional Champions']
    awards: ['Award'],                // REPLACE: e.g. ['2024 Regional Champions']
    advisor: 'Advisor Name',          // REPLACE
    accentColor: 'navy',             // 'navy' | 'crimson' | 'green'
    // photo: '/assets/images/teams/team1.jpg',  // Uncomment and update when you have a photo
  },
  {
    number: '02',
    name: 'Team 2 Name',
    program: 'Competition / Program',
    description:
      'Replace with team description. Highlight achievements, competition results, and team culture.',
    tags: ['Tag 1', 'Tag 2'],
    awards: ['Award'],
    advisor: 'Advisor Name',
    accentColor: 'crimson',
  },
  {
    number: '03',
    name: 'Team 3 Name',
    program: 'Competition / Program',
    description:
      'Replace with team description. Highlight achievements, competition results, and team culture.',
    tags: ['Tag 1'],
    awards: ['Award'],
    advisor: 'Advisor Name',
    accentColor: 'green',
  },
  {
    number: '04',
    name: 'Team 4 Name',
    program: 'Competition / Program',
    description:
      'Replace with team description. Highlight achievements, competition results, and team culture.',
    tags: ['Tag 1', 'Tag 2'],
    awards: ['Award'],
    advisor: 'Advisor Name',
    accentColor: 'navy',
  },
  {
    number: '05',
    name: 'Team 5 Name',
    program: 'Competition / Program',
    description:
      'Replace with team description. Highlight achievements, competition results, and team culture.',
    tags: ['Tag 1', 'Tag 2'],
    awards: ['Award'],
    advisor: 'Advisor Name',
    accentColor: 'crimson',
  },
  {
    number: '06',
    name: 'Team 6 Name',
    program: 'Competition / Program',
    description:
      'Replace with team description. Highlight achievements, competition results, and team culture.',
    tags: ['Tag 1', 'Tag 2'],
    awards: [],
    advisor: 'Advisor Name',
    accentColor: 'green',
  },
];

// SVG icon paths keyed by accentColor — used in TeamCard component
export const teamIcons = {
  navy: `<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>`,
  crimson: `<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,
  green: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
};
