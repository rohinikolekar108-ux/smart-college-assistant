const categories = {
  Admission: ['admission', 'eligibility', 'documents', 'cap round', 'entrance exam', 'apply'],
  Courses: ['course', 'courses', 'branch', 'branches', 'engineering', 'diploma', 'postgraduate', 'ai', 'ml'],
  Departments: ['department', 'laboratory', 'computer engineering', 'hod', 'head'],
  Academics: ['subject', 'first year', 'academic', 'workshop', 'technical event'],
  'Campus Navigation': ['where', 'location', 'entrance', 'office', 'library', 'hall', 'classroom', 'canteen'],
  'Student Facilities': ['hostel', 'transportation', 'bus', 'wifi', 'sports', 'gym', 'medical', 'help desk'],
  Fees: ['fee', 'fees', 'tuition', 'loan'],
  Scholarships: ['scholarship'],
  Placement: ['placement', 'internship', 'company', 'package'],
  'General Information': ['contact', 'extracurricular', 'activities'],
}

export function detectCategory(question = '') {
  const normalized = question.toLowerCase()
  let best = 'General Information'
  let bestScore = 0
  Object.entries(categories).forEach(([category, keywords]) => {
    const score = keywords.reduce((total, keyword) => total + (normalized.includes(keyword) ? 1 : 0), 0)
    if (score > bestScore) {
      best = category
      bestScore = score
    }
  })
  return best
}
