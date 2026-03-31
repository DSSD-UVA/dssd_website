export interface Project {
  id: string
  title: string
  description: string
  category: 'Sustainability' | 'Social Equity' | 'Education' | 'Public Health'
  status: 'Active' | 'Completed'
  tags: string[]
  icon: string
}

export const projects: Project[] = [
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Mapping',
    description: "Developing a geospatial dashboard to identify optimal locations for micro-grid solar installations across Virginia's rural counties.",
    category: 'Sustainability',
    status: 'Active',
    tags: ['Python', 'GIS', 'Tableau'],
    icon: '⚡',
  },
  {
    id: 'food-desert',
    title: 'Food Desert Analytics',
    description: 'Analyzing transit patterns and grocery store accessibility to propose mobile market routes for underserved Charlottesville neighborhoods.',
    category: 'Social Equity',
    status: 'Completed',
    tags: ['R', 'SQL', 'Leaflet'],
    icon: '🍽️',
  },
  {
    id: 'enrollment-ai',
    title: 'Predictive Enrollment AI',
    description: 'Using machine learning to predict dropout risks and resource needs for local K-12 public schools based on historical socio-economic data.',
    category: 'Education',
    status: 'Active',
    tags: ['Python', 'scikit-learn', 'Pandas'],
    icon: '🎓',
  },
  {
    id: 'water-quality',
    title: 'Water Quality Sensors',
    description: 'An automated pipeline for cleaning and visualizing real-time sensor data from local river basins to track pollutant spikes.',
    category: 'Public Health',
    status: 'Completed',
    tags: ['Python', 'PostgreSQL', 'D3.js'],
    icon: '💧',
  },
  {
    id: 'equitable-zoning',
    title: 'Equitable Zoning Study',
    description: 'Modeling the impact of proposed zoning changes on housing affordability and demographic displacement in university towns.',
    category: 'Social Equity',
    status: 'Active',
    tags: ['R', 'Census API', 'ggplot2'],
    icon: '🏗️',
  },
]

export const featuredProjects = projects.slice(0, 3)

export const categories = ['All Projects', 'Sustainability', 'Social Equity', 'Education', 'Public Health'] as const
