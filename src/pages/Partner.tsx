import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { partnerLifecycle, partnerOffers, partnerPathways } from '../data/partner'
import './Partner.css'

const HERO_IMG =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80'

export default function Partner() {
  return (
    <div className="page-partner">
      <section className="partner-hero page-hero--dots">
        <div className="partner-hero__inner container">
          <div className="partner-hero__text">
            <Reveal variant="slide-right" delayMs={40}>
              <span className="partner-hero__chip label">Collaborate for Change</span>
            </Reveal>
            <Reveal variant="rise-blur" slow delayMs={120}>
              <h1 className="partner-hero__title">Partner for Impact</h1>
            </Reveal>
            <Reveal variant="slide-left" delayMs={220}>
              <p className="partner-hero__lede">
                We connect passionate student data scientists with organizations driving
                social and environmental change. Let&apos;s build the tools you need to
                make a measurable difference.
              </p>
            </Reveal>
            <Reveal variant="zoom-pop" delayMs={340}>
              <div className="partner-hero__actions">
                <Link to="/join" className="partner-hero__cta">
                  Partner With Us
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal variant="swing-in-right" slow delayMs={180}>
            <div className="partner-hero__media">
              <img
                className="partner-hero__img"
                src={HERO_IMG}
                alt=""
              />
              <div className="partner-hero__media-overlay" aria-hidden />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="partner-pathways">
        <div className="partner-pathways__inner container">
          <Reveal variant="skew-up">
            <h2 className="partner-section-title">Partnership Pathways</h2>
          </Reveal>
          <div className="partner-pathways__grid">
            {partnerPathways.map((path, i) => (
              <Reveal
                key={path.id}
                variant={i % 2 === 0 ? 'slide-left' : 'slide-right'}
                delayMs={i * 140}
              >
                <div className="partner-pathway-card">
                  <div className="partner-pathway-card__top">
                    <span className="partner-pathway-card__icon-wrap">
                      <span className="material-symbols-outlined" aria-hidden>
                        {path.icon}
                      </span>
                    </span>
                    <span className="partner-pathway-card__tag label">{path.tag}</span>
                  </div>
                  <h3 className="partner-pathway-card__title">{path.title}</h3>
                  <p className="partner-pathway-card__desc">{path.description}</p>
                  <ul className="partner-pathway-card__list">
                    {path.bullets.map((item, bi) => (
                      <li key={item} className="partner-pathway-card__item">
                        <Reveal variant="fade-up" delayMs={bi * 100} className="partner-pathway-card__item-reveal">
                          <span className="material-symbols-outlined partner-pathway-card__check" aria-hidden>
                            check_circle
                          </span>
                          <span className="partner-pathway-card__item-text">{item}</span>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                  <Reveal variant="zoom-pop" delayMs={380} className="partner-pathway-card__btn-reveal">
                    <button type="button" className="partner-pathway-card__btn label">
                      Get Started
                    </button>
                  </Reveal>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-offer">
        <div className="partner-offer__inner container">
          <Reveal variant="zoom-pop" slow>
            <div className="partner-offer__header">
              <h2 className="partner-offer__title">What We Offer</h2>
              <p className="partner-offer__subtitle">
                Specialized technical capabilities tailored for the social sector.
              </p>
            </div>
          </Reveal>
          <div className="partner-offer__grid">
            {partnerOffers.map((offer, i) => (
              <Reveal
                key={offer.title}
                variant={i % 2 === 0 ? 'slide-left' : 'slide-right'}
                delayMs={80 + i * 110}
              >
                <div className="partner-offer-card">
                  <span className="material-symbols-outlined partner-offer-card__icon" aria-hidden>
                    {offer.icon}
                  </span>
                  <h4 className="partner-offer-card__title">{offer.title}</h4>
                  <p className="partner-offer-card__desc">{offer.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-lifecycle">
        <div className="partner-lifecycle__inner container">
          <Reveal variant="slide-right">
            <h2 className="partner-section-title">Engagement Lifecycle</h2>
          </Reveal>
          <div className="partner-lifecycle__wrap">
            <div className="partner-lifecycle__line" aria-hidden />
            <div className="partner-lifecycle__grid">
              {partnerLifecycle.map((item, i) => (
                <Reveal
                  key={item.step}
                  variant={i % 2 === 0 ? 'swing-in-left' : 'swing-in-right'}
                  delayMs={100 + i * 150}
                >
                  <div className="partner-lifecycle-card">
                    <span className="partner-lifecycle-card__step">{item.step}</span>
                    <h4 className="partner-lifecycle-card__title">{item.title}</h4>
                    <p className="partner-lifecycle-card__desc">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="partner-bottom-cta">
        <div className="partner-bottom-cta__inner container">
          <Reveal variant="rise-blur" slow>
            <h2 className="partner-bottom-cta__title">Ready to partner with us?</h2>
          </Reveal>
          <div className="partner-bottom-cta__actions">
            <Reveal variant="swing-in-left" delayMs={120} className="partner-bottom-cta__btn-reveal">
              <Link to="/join" className="partner-bottom-cta__btn partner-bottom-cta__btn--primary label">
                Start a Conversation
              </Link>
            </Reveal>
          </div>
          <Reveal variant="fade-up" delayMs={480}>
            <p className="partner-bottom-cta__note label">
              Typical response time: 2-3 Business Days
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
