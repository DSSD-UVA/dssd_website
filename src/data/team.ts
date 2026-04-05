export interface TeamMember {
  name: string
  role: string
  tag: string
  tagVariant: 'dark' | 'accent'
  /** Path or URL to headshot image, e.g. '/headshots/jane-doe.jpg' */
  imageUrl?: string
  /** CSS background-position value, e.g. 'center 20%'. Defaults to 'center top'. */
  imagePosition?: string
  linkedinUrl?: string
}

export const executiveBoard: TeamMember[] = [
  { name: 'Vinith Jayamani', role: 'President', tag: 'Leadership', tagVariant: 'accent', linkedinUrl: 'https://www.linkedin.com/in/vinith-jayamani/'},
  { name: 'Winston Shek', role: 'President of Technology', tag: 'Technology', tagVariant: 'dark', linkedinUrl: 'https://www.linkedin.com/in/winston-shek/', imageUrl: '/headshots/winston-shek.jpeg', imagePosition: 'center 0%' },
  { name: 'Dhruv Sarang', role: 'President of Business Development', tag: 'Business', tagVariant: 'dark', linkedinUrl: 'https://www.linkedin.com/in/dhruv-sarang/', imageUrl: '/headshots/dhruv-sarang.jpeg', imagePosition: 'center 30%' },
  { name: 'Ava Lawless', role: 'President of Data Science', tag: 'Data', tagVariant: 'dark', imageUrl: '/headshots/ava-lawless.jpeg', imagePosition: 'center 10%', linkedinUrl: 'https://www.linkedin.com/in/ava-lawless-b2513935a/' },
  { name: 'Siddharth Laks', role: 'VP of Business Development', tag: 'Business', tagVariant: 'dark', linkedinUrl: 'https://www.linkedin.com/in/siddharth-laks/' },
  { name: 'Meneja Gautam', role: 'Project Lead', tag: 'Projects', tagVariant: 'dark', imageUrl: '/headshots/meneja-gautam.jpeg', imagePosition: 'center 30%', linkedinUrl: 'https://www.linkedin.com/in/meneja-gautam-53064a194/'},
  { name: 'Sahvir Bhaskaruni', role: 'Project Lead', tag: 'Projects', tagVariant: 'dark', imageUrl: '/headshots/sahvir-bhaskaruni.heic', imagePosition: 'center 10%', linkedinUrl: 'https://www.linkedin.com/in/sahvir-bhaskaruni/' },
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
