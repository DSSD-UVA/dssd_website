export interface ProjectOutcome {
  value: string
  label: string
}

export interface ProjectMember {
  name: string
  role: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'Sustainability' | 'Social Equity' | 'Education' | 'Public Health'
  status: 'Active' | 'Completed'
  tags: string[]
  icon: string
  /** Optional hero image — used on featured cards and the project detail page */
  imageUrl?: string
  // detail-page fields (all optional)
  longDescription?: string
  methodology?: string[]
  outcomes?: ProjectOutcome[]
  team?: ProjectMember[]
  partner?: string
  timeline?: string
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
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    longDescription: "This project addresses Virginia's rural energy gap by building an open-access geospatial tool that county planners and policymakers can use to prioritize micro-grid solar investments. Partnering with the Virginia Department of Energy, we translate raw satellite and census data into an interactive suitability map that ranks every rural census tract by solar potential. The goal is to move infrastructure decisions from intuition to evidence.",
    methodology: [
      "We aggregated satellite imagery, county energy consumption records, and topographical data to build a composite suitability score for each census tract.",
      "A gradient boosting model (XGBoost) was trained on known solar farm locations to validate the scoring system. Visualizations were built in Tableau and embedded in a public-facing dashboard accessible to county planners.",
    ],
    outcomes: [
      { value: '12', label: 'Counties Mapped' },
      { value: '340+', label: 'Optimal Sites Identified' },
    ],
    team: [
      { name: 'Alex Chen', role: 'Project Lead' },
      { name: 'Maya Patel', role: 'GIS Analyst' },
      { name: 'Jordan Rivera', role: 'Data Engineer' },
    ],
    partner: 'VA Dept of Energy',
    timeline: 'Aug 2025 – Present',
  },
  {
    id: 'food-desert',
    title: 'Food Desert Analytics',
    description: 'Analyzing transit patterns and grocery store accessibility to propose mobile market routes for underserved Charlottesville neighborhoods.',
    category: 'Social Equity',
    status: 'Completed',
    tags: ['R', 'SQL', 'Leaflet'],
    icon: '🍽️',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    longDescription: "Charlottesville's food access landscape is shaped by gaps between transit coverage and grocery store locations that disproportionately affect low-income residents. This project quantifies those gaps using city transit APIs and USDA food desert designations, then proposes concrete mobile market routes that city planners can act on. Our analysis gives the City of Charlottesville an evidence base for allocating mobile food resources where they will have the highest impact.",
    methodology: [
      "We combined GTFS transit data with grocery store locations and demographic data from the American Community Survey to compute accessibility scores per census block.",
      "Route optimization was performed using the OR-Tools library to suggest three viable mobile market corridors minimizing total travel time.",
    ],
    outcomes: [
      { value: '8', label: 'Neighborhoods Analyzed' },
      { value: '3', label: 'Routes Proposed' },
    ],
    team: [
      { name: 'Priya Nair', role: 'Project Lead' },
      { name: 'Sam Torres', role: 'Geospatial Analyst' },
    ],
    partner: 'City of Charlottesville',
    timeline: 'Jan 2025 – Aug 2025',
  },
  {
    id: 'project-placeholder-1',
    title: 'Project Coming Soon',
    description: 'A new sustainability project is currently in the planning phase. Check back soon for details on this upcoming initiative.',
    category: 'Education',
    status: 'Active',
    tags: ['TBD'],
    icon: '🔜',
  },
  {
    id: 'project-placeholder-2',
    title: 'Project Coming Soon',
    description: 'Another exciting project is being scoped with a community partner. More details will be shared once the partnership is finalized.',
    category: 'Public Health',
    status: 'Active',
    tags: ['TBD'],
    icon: '🔜',
  },
  {
    id: 'project-placeholder-3',
    title: 'Project Coming Soon',
    description: 'We are actively seeking new partnerships for this project slot. Interested organizations can reach out through our Partner page.',
    category: 'Social Equity',
    status: 'Active',
    tags: ['TBD'],
    icon: '🔜',
  },
]

export const featuredProjects = projects.slice(0, 3)

export const categories = ['All Projects', 'Sustainability', 'Social Equity', 'Education', 'Public Health'] as const
