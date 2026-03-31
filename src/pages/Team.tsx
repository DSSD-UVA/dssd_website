import Chip from '../components/Chip'
import Button from '../components/Button'
import TeamCard from '../components/TeamCard'
import { executiveBoard, corePillars } from '../data/team'
import './Team.css'

export default function Team() {
  return (
    <div className="page-team">
      {/* Hero */}
      <section className="team-hero">
        <div className="team-hero__inner container">
          <div className="team-hero__text">
            <Chip label="Who We Are" variant="accent" />
            <h1 className="team-hero__title">
              The Team Behind<br />
              <span className="team-hero__accent">the Data</span>
            </h1>
            <p className="team-hero__subtitle">
              We are a multidisciplinary collective of UVA students dedicated to
              using data science as a tool for humanitarian impact and
              sustainable development.
            </p>
          </div>
          <div className="team-hero__image" />
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="partnership">
        <div className="partnership__inner container">
          <div className="partnership__badge">
            <span>&#x1f393;</span>
            <span className="label">Official Partnership</span>
          </div>
          <p className="partnership__quote">
            "Bridging the gap between academic rigor and global sustainability in
            partnership with the <strong>UVA School of Data Science.</strong>"
          </p>
        </div>
      </section>

      {/* Executive Board */}
      <section className="board container">
        <div className="board__header">
          <h2 className="board__title">Executive Board</h2>
          <span className="board__year label">2023 - 2024</span>
        </div>
        <div className="board__grid">
          {executiveBoard.map(member => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      {/* Core Pillars */}
      <section className="pillars container">
        <div className="pillars__inner">
          <div className="pillars__intro">
            <h2 className="pillars__title">Our Core<br />Pillars</h2>
            <p className="pillars__desc">
              Guided by the principles of ethical data science and sustainable
              progress.
            </p>
            <div className="pillars__bar" />
          </div>
          <div className="pillars__grid">
            {corePillars.map(pillar => (
              <div key={pillar.number} className="pillar-card">
                <span className="pillar-card__number label">{pillar.number}.</span>
                <h3 className="pillar-card__title">{pillar.title}</h3>
                <p className="pillar-card__desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="team-cta container">
        <div className="team-cta__card">
          <h2 className="team-cta__title">Ready to make an impact?</h2>
          <p className="team-cta__text">
            We are always looking for passionate students to join our research
            pods and development cycles.
          </p>
          <div className="team-cta__actions">
            <Button to="/join">Apply to Join</Button>
            <Button to="/projects" variant="outline">View Open Projects</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
