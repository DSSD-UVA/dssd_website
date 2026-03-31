import Chip from '../components/Chip'
import Button from '../components/Button'
import InputField from '../components/InputField'
import TextArea from '../components/TextArea'
import AccordionItem from '../components/AccordionItem'
import { faqItems } from '../data/stats'
import './Join.css'

export default function Join() {
  return (
    <div className="page-join">
      {/* Hero */}
      <section className="join-hero">
        <div className="join-hero__inner container">
          <Chip label="Applications Open: Spring 2024" variant="accent" />
          <h1 className="join-hero__title">
            Join the<br />
            <span className="join-hero__accent">Movement</span>
          </h1>
          <p className="join-hero__subtitle">
            DSSD at UVA empowers students to tackle real-world sustainability
            challenges through data-driven research. Apply to join our
            interdisciplinary teams and make a tangible impact.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="join-content container">
        <div className="join-form-wrapper">
          <div className="join-form">
            <h2 className="join-form__heading">
              <span>&#x270f;&#xfe0f;</span> Candidate Information
            </h2>
            <div className="join-form__row">
              <InputField label="Full Name" placeholder="Thomas Jefferson" />
              <InputField label="Computing ID" placeholder="abc1def" />
            </div>
            <InputField label="Major / Field of Study" placeholder="Data Science, Environmental Science, etc." />
            <TextArea
              label="Why do you want to join DSSD?"
              placeholder="Tell us about your interest in sustainable development and data..."
              rows={5}
            />
            <Button>Submit Application &nbsp;&#x27A4;</Button>
          </div>
        </div>

        <div className="join-sidebar">
          {/* Process */}
          <div className="join-process">
            <h3 className="join-process__title">Application Process</h3>
            <ol className="join-process__steps">
              <li className="join-process__step">
                <span className="join-process__num">1</span>
                <div>
                  <strong>Online Application</strong>
                  <p>Submit this form before the February 15th deadline.</p>
                </div>
              </li>
              <li className="join-process__step">
                <span className="join-process__num">2</span>
                <div>
                  <strong>Interview Phase</strong>
                  <p>Short 15-minute coffee chats with project leads.</p>
                </div>
              </li>
              <li className="join-process__step">
                <span className="join-process__num">3</span>
                <div>
                  <strong>Team Placement</strong>
                  <p>Matching your skills with active sustainability projects.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* FAQ */}
          <div className="join-faq">
            <h3 className="join-faq__title">
              <span>&#x1f4cb;</span> Common Questions
            </h3>
            {faqItems.map(item => (
              <AccordionItem key={item.question} {...item} />
            ))}
          </div>

          {/* Image */}
          <div className="join-image">
            <Chip label="Student Driven" variant="accent" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter__inner container">
          <h2 className="newsletter__title">
            <em>Not ready to apply yet?</em>
          </h2>
          <p className="newsletter__text">
            Stay informed about our public workshops and open data events.
          </p>
          <div className="newsletter__form">
            <input
              className="newsletter__input"
              type="email"
              placeholder="Email Address"
            />
            <button className="newsletter__btn label">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
