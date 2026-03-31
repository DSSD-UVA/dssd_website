import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import './FeaturedCard.css'

function badgeVariantForCategory(category: Project['category']): 'primary' | 'accent' | 'dark' {
  if (category === 'Sustainability') return 'primary'
  if (category === 'Social Equity') return 'accent'
  return 'dark'
}

interface FeaturedCardProps {
  project: Project
  stagger?: boolean
}

export default function FeaturedCard({ project, stagger }: FeaturedCardProps) {
  const badge = badgeVariantForCategory(project.category)
  const src =
    project.imageUrl ??
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`featured-card${stagger ? ' featured-card--stagger' : ''}`}
    >
      <div className="featured-card__media">
        <img
          className="featured-card__img"
          src={src}
          alt=""
        />
        <span className={`featured-card__badge featured-card__badge--${badge} label`}>
          {project.category}
        </span>
      </div>
      <div className="featured-card__body">
        <h3 className="featured-card__title">{project.title}</h3>
        <p className="featured-card__desc">{project.description}</p>
        {project.tags.length > 0 && (
          <div className="featured-card__tags">
            {project.tags.map(tag => (
              <span key={tag} className="featured-card__tag label">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
