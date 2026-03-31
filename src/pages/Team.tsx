import Chip from '../components/Chip'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import TeamCard from '../components/TeamCard'
import { executiveBoard, corePillars } from '../data/team'
import './Team.css'

export default function Team() {
  return (
    <div className="page-team">
      <section className="team-hero page-hero--dots">
        <div className="team-hero__inner container">
          <div className="team-hero__text">
            <Reveal variant="slide-right" delayMs={40}>
              <Chip label="Who We Are" variant="accent" />
            </Reveal>
            <Reveal variant="rise-blur" slow delayMs={100}>
              <h1 className="team-hero__title">
                The Team Behind<br />
                <span className="team-hero__accent">the Data</span>
              </h1>
            </Reveal>
            <Reveal variant="slide-left" delayMs={200}>
              <p className="team-hero__subtitle">
                We are a multidisciplinary collective of students dedicated to
                using data science as a tool for humanitarian impact and
                sustainable development.
              </p>
            </Reveal>
          </div>
          <Reveal variant="swing-in-right" slow delayMs={160}>
            <div className="team-hero__image" />
          </Reveal>
        </div>
      </section>

      <section className="board container">
        <Reveal variant="skew-up">
          <div className="board__header">
            <h2 className="board__title">Executive Board</h2>
            <span className="board__year label">2025 – 2026</span>
          </div>
        </Reveal>
        <div className="board__grid">
          {executiveBoard.map((member, i) => (
            <Reveal key={member.name} variant="zoom-pop" delayMs={60 + i * 90}>
              <TeamCard {...member} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pillars">
        <div className="pillars__inner container">
          <Reveal variant="slide-right">
            <div className="pillars__intro">
              <h2 className="pillars__title">Our Core<br />Pillars</h2>
              <p className="pillars__desc">
                Guided by the principles of ethical data science and sustainable
                progress.
              </p>
              <div className="pillars__bar" />
            </div>
          </Reveal>
          <div className="pillars__grid">
            {corePillars.map((pillar, i) => (
              <Reveal
                key={pillar.number}
                variant={i % 2 === 0 ? 'slide-left' : 'slide-right'}
                delayMs={80 + i * 140}
              >
                <div className="pillar-card">
                  <span className="pillar-card__number label">{pillar.number}.</span>
                  <h3 className="pillar-card__title">{pillar.title}</h3>
                  <p className="pillar-card__desc">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="container">
          <Reveal variant="zoom-pop" slow>
            <div className="team-cta__card">
              <h2 className="team-cta__title">Ready to make an impact?</h2>
              <p className="team-cta__text">
                We are always looking for passionate students to join our research
                pods and development cycles.
              </p>
              <div className="team-cta__actions">
                <Button to="/projects">View Open Projects</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
