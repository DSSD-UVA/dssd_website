export interface TeamMember {
  name: string
  role: string
  tag: string
  tagVariant: 'dark' | 'accent'
  linkedinUrl?: string
}

export const executiveBoard: TeamMember[] = [
  { name: 'Vinith Jayamani', role: 'President', tag: 'Leadership', tagVariant: 'accent', linkedinUrl: 'https://www.linkedin.com/in/vinith-jayamani/' },
  { name: 'Winston Shek', role: 'President of Technology', tag: 'Technology', tagVariant: 'dark', linkedinUrl: 'https://www.linkedin.com/in/winston-shek/' },
  { name: 'Dhruv Sarang', role: 'President of Business Development', tag: 'Business', tagVariant: 'dark', linkedinUrl: 'https://www.linkedin.com/in/dhruv-sarang/' },
  { name: 'Siddharth Laks', role: 'VP of Business Development', tag: 'Business', tagVariant: 'dark', linkedinUrl: 'https://www.linkedin.com/in/siddharth-laks/' },
]

export const corePillars = [
  {
    number: '01',
    title: 'Academic Excellence',
    description: 'We maintain high-level research standards and rigorous data validation across all projects to ensure credible, peer-reviewable insights.',
  },
  {
    number: '02',
    title: 'Sustainable Solutions',
    description: 'Focusing on long-term ecological and social outcomes, our data models prioritize the health of our planet and local communities.',
  },
  {
    number: '03',
    title: 'Collaborative Innovation',
    description: 'We believe that the best data science happens in teams. We break down silos between engineers, policy experts, and environmental scientists to build holistic tools.',
  },
]
