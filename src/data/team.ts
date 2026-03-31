export interface TeamMember {
  name: string
  role: string
  tag: string
  tagVariant: 'dark' | 'accent'
}

export const executiveBoard: TeamMember[] = [
  { name: 'Ethan Carter', role: 'Director of Technology', tag: 'Leadership', tagVariant: 'accent' },
  { name: 'Maya Rodriguez', role: 'Project Coordinator', tag: 'Operations', tagVariant: 'dark' },
  { name: 'Julian Smith', role: 'Head of Data Ethics', tag: 'Research', tagVariant: 'dark' },
  { name: 'Sarah Chen', role: 'Outreach Director', tag: 'Community', tagVariant: 'dark' },
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
