// SVPM Engineering Branch Recommender
// Eligibility is ALWAYS checked before interest matching.

// SVPM Malegaon — 2025 MHT-CET / TFWS cutoff values shown in the
// Collegedunia cutoff table supplied for this project.
export const CUTOFF_MHTCET_PERCENTILE = {
  'Computer Engineering': 85.62,
  'Information Technology': 85.10,
  'Artificial Intelligence & Machine Learning': 84.11,
  'Electronics & Telecom Engineering': 83.34,
  'Electrical Engineering': 76.93,
  'Civil Engineering': 74.01,
}

export const CUTOFF_JEEMAIN_RANK = {
  'Computer Engineering': 460000,
  'Information Technology': 520000,
  'Artificial Intelligence & Machine Learning': 520000,
  'Electronics & Telecom Engineering': 530000,
  'Electrical Engineering': 730000,
  'Mechanical Engineering': 850000,
  'Civil Engineering': 920000,
  'Mechatronics Engineering': 800000,
}

export const CUTOFF_MAHAJEE_RANK = {
  'Computer Engineering': 38000,
  'Information Technology': 43000,
  'Artificial Intelligence & Machine Learning': 43000,
  'Electronics & Telecom Engineering': 44000,
  'Electrical Engineering': 58000,
  'Mechanical Engineering': 67000,
  'Civil Engineering': 72000,
  'Mechatronics Engineering': 67000,
}

// Approximate full-course fee shown in the recommendation UI.
// Update this single value if the college publishes a new official fee.
export const FEE_STRUCTURE = {
  default: {
    total: '₹3.62 lakh approximately',
    duration: '4 years',
    note: 'Fee can vary by year, category, quota and applicable college/university charges. Verify the latest official fee before admission.',
  },
}

export const BRANCH_INTERESTS = {
  'Computer Engineering': ['coding', 'software', 'programming', 'algorithms', 'web', 'apps', 'AI'],
  'Information Technology': ['software', 'IT', 'networking', 'web', 'apps', 'databases'],
  'Artificial Intelligence & Machine Learning': ['AI', 'machine learning', 'data science', 'math', 'statistics', 'research'],
  'Electronics & Telecom Engineering': ['electronics', 'hardware', 'circuits', 'communication', 'signals', 'embedded'],
  'Electrical Engineering': ['power', 'electrical', 'machines', 'energy', 'grid', 'hardware'],
  'Mechatronics Engineering': ['robotics', 'automation', 'mechanical', 'electronics', 'control', 'embedded'],
  'Civil Engineering': ['construction', 'structures', 'design', 'infrastructure', 'materials', 'surveying'],
  'Mechanical Engineering': ['mechanical', 'machines', 'design', 'manufacturing', 'thermodynamics', 'automobile'],
}

export const FUTURE_SCOPE = {
  'Computer Engineering': 'Computer engineers work in software development, cloud computing, cybersecurity, and system design. With the growth of AI, data, and digital services, their role is critical in almost every industry.',
  'Information Technology': 'IT engineers manage networks, databases, cloud platforms, and enterprise systems. Every organization needs IT infrastructure, so demand remains strong across sectors.',
  'Artificial Intelligence & Machine Learning': 'AI/ML engineers build intelligent systems for healthcare, finance, automation, and more. This field is rapidly growing and central to future technology.',
  'Electronics & Telecom Engineering': 'ENTC engineers work in communication systems, embedded devices, IoT, and consumer electronics. 5G, IoT, and smart devices keep this field very relevant.',
  'Electrical Engineering': 'Electrical engineers work in power generation, transmission, renewable energy, and industrial systems. Energy and electrification are crucial for societal development.',
  'Mechatronics Engineering': 'Mechatronics combines mechanical, electronics, and control for robotics and automation. It is key for smart manufacturing, Industry 4.0, and advanced systems.',
  'Civil Engineering': 'Civil engineers design and build infrastructure: roads, bridges, buildings, and water systems. They directly shape the physical development of society.',
  'Mechanical Engineering': 'Mechanical engineers design machines, vehicles, and industrial systems. They are essential in manufacturing, energy, automotive, and aerospace sectors.',
}

export const BRANCH_PROFILES = {
  'Computer Engineering': {
    requiredSkills: ['Programming Fundamentals', 'Data Structures', 'Database', 'Algorithms', 'Web Development'],
    skillGaps: [
      { skill: 'Programming', level: 90, status: '✓' },
      { skill: 'Mathematics', level: 80, status: '✓' },
      { skill: 'Database', level: 55, status: '⚠' },
      { skill: 'Data Structures', level: 45, status: '⚠' },
      { skill: 'AI/ML', level: 35, status: '⚠' },
    ],
    careerOpportunities: ['Software Developer', 'Cloud Engineer', 'Cybersecurity Specialist', 'Systems Engineer'],
    recommendedProjects: ['Build a full-stack web app', 'Create an algorithm dashboard', 'Develop a mini operating system project'],
    learningRoadmap: {
      'Year 1': ['Programming Fundamentals'],
      'Year 2': ['Data Structures + Database'],
      'Year 3': ['Web Development + Advanced Programming'],
      'Year 4': ['Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'Strong programming interest and mathematics match make this branch a high-confidence path for software, systems, and data-driven careers.',
    futureScopeScore: 94,
  },
  'Information Technology': {
    requiredSkills: ['Programming', 'Networking', 'Database', 'Cloud Basics', 'Cybersecurity'],
    skillGaps: [
      { skill: 'Programming', level: 88, status: '✓' },
      { skill: 'Networking', level: 70, status: '✓' },
      { skill: 'Database', level: 62, status: '✓' },
      { skill: 'Cloud & Cybersecurity', level: 40, status: '⚠' },
    ],
    careerOpportunities: ['IT Analyst', 'Network Administrator', 'Database Administrator', 'Cloud Support Engineer'],
    recommendedProjects: ['Enterprise portal mockup', 'Network design case study', 'Database management mini project'],
    learningRoadmap: {
      'Year 1': ['Programming Fundamentals + Computer Networks'],
      'Year 2': ['Database Systems + Operating Systems'],
      'Year 3': ['Cloud Platforms + Cybersecurity Basics'],
      'Year 4': ['Enterprise Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'Your interest pattern suggests enterprise software, databases, networks, and application services are a good fit.',
    futureScopeScore: 86,
  },
  'Artificial Intelligence & Machine Learning': {
    requiredSkills: ['Python', 'Statistics', 'Linear Algebra', 'Machine Learning', 'Data Structures'],
    skillGaps: [
      { skill: 'Python', level: 89, status: '✓' },
      { skill: 'Statistics', level: 76, status: '✓' },
      { skill: 'Data Structures', level: 46, status: '⚠' },
      { skill: 'Machine Learning', level: 35, status: '⚠' },
      { skill: 'AI/ML', level: 34, status: '⚠' },
    ],
    careerOpportunities: ['AI Engineer', 'Data Scientist', 'ML Engineer', 'Research Analyst'],
    recommendedProjects: ['Predictive model project', 'Computer vision mini project', 'Recommendation system prototype'],
    learningRoadmap: {
      'Year 1': ['Python + Statistics + Mathematics'],
      'Year 2': ['Data Structures + Machine Learning Foundations'],
      'Year 3': ['AI/ML Models + Data Science Tools'],
      'Year 4': ['Research Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'Your interest profile has a strong AI or data-oriented signal and fits future AI-driven roles.',
    futureScopeScore: 95,
  },
  'Electronics & Telecom Engineering': {
    requiredSkills: ['Circuit Theory', 'Signals', 'Embedded Systems', 'Electronics', 'Communication Systems'],
    skillGaps: [
      { skill: 'Electronics', level: 78, status: '✓' },
      { skill: 'Circuit Theory', level: 58, status: '✓' },
      { skill: 'Embedded Systems', level: 45, status: '⚠' },
      { skill: 'Signals', level: 43, status: '⚠' },
    ],
    careerOpportunities: ['Embedded Engineer', 'Telecom Engineer', 'IoT Developer', 'Signal Processing Engineer'],
    recommendedProjects: ['Smart home sensor circuit', 'Digital communication simulation', 'Bluetooth based embedded prototype'],
    learningRoadmap: {
      'Year 1': ['Circuit Theory + Basic Electronics'],
      'Year 2': ['Signals + Analog/Digital Systems'],
      'Year 3': ['Communication Systems + Embedded Systems'],
      'Year 4': ['IoT Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'The interests indicate hardware, devices, signals, and communication systems which align with this branch.',
    futureScopeScore: 87,
  },
  'Electrical Engineering': {
    requiredSkills: ['Electrical Circuits', 'Power Systems', 'Machines', 'Control Systems', 'Renewable Energy'],
    skillGaps: [
      { skill: 'Electrical Circuits', level: 78, status: '✓' },
      { skill: 'Machines', level: 70, status: '✓' },
      { skill: 'Power Systems', level: 52, status: '⚠' },
      { skill: 'Renewable Energy', level: 45, status: '⚠' },
    ],
    careerOpportunities: ['Power Engineer', 'Grid Engineer', 'Renewable Energy Specialist', 'Control & Automation Engineer'],
    recommendedProjects: ['Smart grid simulation', 'Solar power model', 'Mini motor control project'],
    learningRoadmap: {
      'Year 1': ['Electrical Circuits + Machines'],
      'Year 2': ['Power Systems + Control Systems'],
      'Year 3': ['Renewable Energy + Industrial Automation'],
      'Year 4': ['Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'Your profile supports power, energy, and machine-oriented problem solving with clear industrial applications.',
    futureScopeScore: 84,
  },
  'Mechatronics Engineering': {
    requiredSkills: ['Mechanical Design', 'Electronics', 'Control Systems', 'Embedded Systems', 'Automation'],
    skillGaps: [
      { skill: 'Mechanical Design', level: 75, status: '✓' },
      { skill: 'Electronics', level: 63, status: '✓' },
      { skill: 'Automation', level: 50, status: '⚠' },
      { skill: 'Control Systems', level: 43, status: '⚠' },
    ],
    careerOpportunities: ['Automation Engineer', 'Robotics Specialist', 'Manufacturing Engineer', 'Mechatronics Designer'],
    recommendedProjects: ['Line follower robot', 'PLC simulation', 'Robotics kit design'],
    learningRoadmap: {
      'Year 1': ['Mechanical Basics + Electronics'],
      'Year 2': ['Control Systems + Automation'],
      'Year 3': ['Robotics + Embedded Systems'],
      'Year 4': ['Industrial Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'The combination of mechanics, electronics, automation, and robotics suggests a sensible fit for this branch.',
    futureScopeScore: 87,
  },
  'Civil Engineering': {
    requiredSkills: ['Engineering Drawing', 'Structures', 'Surveying', 'Construction Materials', 'CAD'],
    skillGaps: [
      { skill: 'Engineering Drawing', level: 77, status: '✓' },
      { skill: 'Structures', level: 70, status: '✓' },
      { skill: 'CAD', level: 50, status: '⚠' },
      { skill: 'Surveying', level: 48, status: '⚠' },
    ],
    careerOpportunities: ['Site Engineer', 'Structural Engineer', 'Infrastructure Planner', 'Quantity Surveyor'],
    recommendedProjects: ['Urban road design prototype', 'Residential structure model', 'Water supply planning project'],
    learningRoadmap: {
      'Year 1': ['Engineering Drawing + Surveying'],
      'Year 2': ['Structures + Construction Materials'],
      'Year 3': ['Highway & Water Resources + CAD'],
      'Year 4': ['Site Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'The profile supports infrastructure, planning, design, and construction-focused engineering work.',
    futureScopeScore: 83,
  },
  'Mechanical Engineering': {
    requiredSkills: ['Engineering Graphics', 'Thermodynamics', 'Manufacturing', 'Design', 'CAD'],
    skillGaps: [
      { skill: 'Engineering Graphics', level: 76, status: '✓' },
      { skill: 'Design', level: 72, status: '✓' },
      { skill: 'Manufacturing', level: 56, status: '⚠' },
      { skill: 'Thermodynamics', level: 44, status: '⚠' },
    ],
    careerOpportunities: ['Manufacturing Engineer', 'Automotive Engineer', 'Design Engineer', 'Thermal Engineer'],
    recommendedProjects: ['Heat engine model', 'Machine design case study', 'Automotive component prototype'],
    learningRoadmap: {
      'Year 1': ['Engineering Graphics + Mechanical Basics'],
      'Year 2': ['Thermodynamics + Manufacturing'],
      'Year 3': ['Design + Automation Systems'],
      'Year 4': ['Projects + Internship + Placement Preparation'],
    },
    whyRecommended: 'The profile points toward product design, thermal systems, manufacturing, and machine-focused engineering.',
    futureScopeScore: 82,
  },
}

export const EXAM_LABELS = {
  MHTCET: 'MHT-CET',
  JEEMAIN: 'JEE Main (AI quota)',
  MAHAJEE: 'Maharashtra JEE Main',
}

export function getCutoffMap(exam) {
  if (exam === 'MHTCET') return CUTOFF_MHTCET_PERCENTILE
  if (exam === 'JEEMAIN') return CUTOFF_JEEMAIN_RANK
  return CUTOFF_MAHAJEE_RANK
}

export function getCutoff(exam, branch) {
  return getCutoffMap(exam)[branch]
}

// IMPORTANT: percentile uses score >= cutoff; JEE ranks use rank <= cutoff.
export function isEligible(exam, value, branch) {
  const cutoff = getCutoff(exam, branch)
  if (cutoff === undefined) return false
  return exam === 'MHTCET' ? value >= cutoff : value <= cutoff
}

export function getEligibleBranches(exam, value) {
  return Object.keys(getCutoffMap(exam)).filter((branch) => isEligible(exam, value, branch))
}

export function recommendBranch(eligible, interests) {
  if (!eligible.length) return null

  const interestsLower = interests.map((interest) => interest.toLowerCase().trim())
  let bestBranch = eligible[0]
  let bestScore = -1

  for (const branch of eligible) {
    const keywords = BRANCH_INTERESTS[branch].map((keyword) => keyword.toLowerCase())
    const score = interestsLower.reduce(
      (total, interest) => total + (keywords.some((keyword) => interest.includes(keyword) || keyword.includes(interest)) ? 1 : 0),
      0,
    )

    if (score > bestScore) {
      bestScore = score
      bestBranch = branch
    }
  }

  return bestBranch
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-IN').format(value)
}

function normalizeInterestList(interests = []) {
  return interests.map((item) => item.toLowerCase().trim()).filter(Boolean)
}

function getBranchKeywords(branch) {
  return BRANCH_INTERESTS[branch] || []
}

function calculateInterestMatch(branch, interests) {
  const branchKeywords = getBranchKeywords(branch).map((keyword) => keyword.toLowerCase())
  if (!interests.length || !branchKeywords.length) return 0

  const interestSet = new Set(normalizeInterestList(interests))
  const keywordSet = new Set(branchKeywords)
  let matched = 0
  for (const interest of interestSet) {
    for (const keyword of keywordSet) {
      if (interest.includes(keyword) || keyword.includes(interest)) {
        matched += 1
        break
      }
    }
  }

  const normalized = Math.round((Math.min(matched, branchKeywords.length) / Math.max(branchKeywords.length, 1)) * 100)
  return Math.min(100, Math.max(0, normalized))
}

function calculateAcademicMatch(exam, value, branch) {
  const cutoff = getCutoff(exam, branch)
  if (exam === 'MHTCET') {
    if (value >= cutoff) {
      const spread = Math.max(100 - cutoff, 1)
      return Math.round(50 + ((value - cutoff) / spread) * 50)
    }
    return 0
  }

  if (value <= cutoff) {
    const spread = Math.max(cutoff, 1)
    return Math.round(50 + ((cutoff - value) / spread) * 50)
  }

  return 0
}

function calculateSkillMatch(branch, interests) {
  const branchSkills = BRANCH_PROFILES[branch]?.requiredSkills || []
  const interestKeywords = normalizeInterestList(interests)
  if (!branchSkills.length || !interestKeywords.length) return 50

  let matched = 0
  for (const skill of branchSkills) {
    const label = skill.toLowerCase()
    if (interestKeywords.some((interest) => label.includes(interest) || interest.includes(label))) {
      matched += 1
    }
  }

  return Math.round((matched / Math.max(branchSkills.length, 1)) * 100)
}

function calculateCareerMatch(branch, interests) {
  const branchKeywords = getBranchKeywords(branch).map((keyword) => keyword.toLowerCase())
  const interestSet = normalizeInterestList(interests)
  if (!branchKeywords.length || !interestSet.length) return 50

  let overlap = 0
  for (const interest of interestSet) {
    if (branchKeywords.some((keyword) => interest.includes(keyword) || keyword.includes(interest))) {
      overlap += 1
    }
  }

  return Math.round((Math.min(overlap, branchKeywords.length) / Math.max(branchKeywords.length, 1)) * 100)
}

export function generateTopRecommendations(exam, value, interests, eligibleBranches = []) {
  const interestList = normalizeInterestList(interests)
  const validEligible = eligibleBranches.length ? eligibleBranches : getEligibleBranches(exam, value)

  const recommendations = validEligible.map((branch) => {
    const interestMatch = calculateInterestMatch(branch, interestList)
    const academicMatch = calculateAcademicMatch(exam, value, branch)
    const skillMatch = calculateSkillMatch(branch, interestList)
    const careerMatch = calculateCareerMatch(branch, interestList)
    const eligibility = 100
    const futureScope = BRANCH_PROFILES[branch]?.futureScopeScore || 80

    const finalScore = Math.round(
      (interestMatch * 30) / 100 +
      (academicMatch * 20) / 100 +
      (skillMatch * 15) / 100 +
      (careerMatch * 15) / 100 +
      (eligibility * 15) / 100 +
      (futureScope * 5) / 100,
    )

    const branchProfile = BRANCH_PROFILES[branch] || {}
    return {
      branch,
      match: Math.min(100, Math.max(0, finalScore)),
      interestMatch,
      academicMatch,
      skillMatch,
      careerMatch,
      eligibility,
      futureScope,
      requiredSkills: branchProfile.requiredSkills || [],
      skillGaps: branchProfile.skillGaps || [],
      careerOpportunities: branchProfile.careerOpportunities || [],
      recommendedProjects: branchProfile.recommendedProjects || [],
      learningRoadmap: branchProfile.learningRoadmap || {},
      whyRecommended: branchProfile.whyRecommended || FUTURE_SCOPE[branch] || 'Strong fit with the available eligibility and student interest profile.',
    }
  })

  return recommendations.sort((a, b) => b.match - a.match).slice(0, 3)
}
