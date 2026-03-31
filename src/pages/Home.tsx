import Chip from '../components/Chip'
import Button from '../components/Button'
import StatCard from '../components/StatCard'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import { homeStats } from '../data/stats'
import { featuredProjects } from '../data/projects'
import './Home.css'

export default function Home() {
  return (
    <div className="page-home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__inner container">
          <Chip label="Est. at UVA" variant="accent" />
          <h1 className="hero__title">
            Data Science for<br />
            <span className="hero__accent">Social Impact.</span>
          </h1>
          <p className="hero__subtitle">
            We're a student-run club at UVA that uses data science to tackle
            real-world sustainability challenges. Our members collaborate on
            projects with local organizations, non-profits, and government
            agencies.
          </p>
          <div className="hero__actions">
            <Button to="/projects">Explore Our Projects</Button>
            <Button to="/join" variant="outline">Apply to Join</Button>
          </div>
          <div className="hero__partner">
            <span className="label">Partnered with</span>
            <span className="hero__partner-name">University of Virginia</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats__inner container">
          <div className="stats__text">
            <h2 className="stats__heading">
              Driving change through<br />
              <span className="stats__heading-accent">quantifiable evidence.</span>
            </h2>
            <p className="stats__desc">
              Our members work with NGOs, government agencies, and local
              non-profits to turn raw data into actionable insights for
              sustainable growth and community development.
            </p>
          </div>
          <div className="stats__grid">
            {homeStats.map(stat => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Impact */}
      <section className="featured container">
        <SectionHeader
          title="Featured Impact"
          subtitle="Highlighting our most recent collaborations in sustainability and data ethics."
          linkText="View All Projects"
          linkTo="/projects"
        />
        <div className="featured__grid">
          {featuredProjects.map(project => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta__inner container">
          <h2 className="home-cta__title">Interested in Joining?</h2>
          <p className="home-cta__text">
            We are always looking for passionate data scientists, developers, and
            designers to join our club at UVA.
          </p>
          <Button to="/join" variant="secondary">Join the Team</Button>
        </div>
      </section>
    </div>
  )
}
