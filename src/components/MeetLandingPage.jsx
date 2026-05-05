import meetLogo from '../assets/logo.svg';

import footerDesktop from '../assets/desktop/image-footer.jpg';
import heroLeft from '../assets/desktop/image-hero-left.png';
import heroRight from '../assets/desktop/image-hero-right.png';
import manTexting from '../assets/desktop/image-man-texting.jpg';
import menMeeting from '../assets/desktop/image-men-in-meeting.jpg';
import womanVideocall from '../assets/desktop/image-woman-in-videocall.jpg';
import womenVideochatting from '../assets/desktop/image-women-videochatting.jpg';

import peopleImage from '../assets/tablet/image-hero.png';
import footerImage from '../assets/tablet/image-footer.jpg';

function MeetLandingPage() {
  return (
    <div>
      <header>
        <a href="#">
          <img src={meetLogo} alt="Meet - Home" />
        </a>
      </header>

      <main>
        <section>
          <picture>
            <source srcSet={heroLeft} media="" />
            <source srcSet={heroRight} media="" />
            <img
              src={peopleImage}
              alt="A diverse group of people connecting through videocalls"
            />
          </picture>
          <h1>Group Chat for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <a href="#">Download v1.3</a>
          <a href="#">What is it?</a>
          <p aria-hidden="true">01</p>
        </section>

        <section>
          <figure>
            <img
              src={womanVideocall}
              alt="Woman smiling during a crystal clear video call"
            />
            <img
              src={womenVideochatting}
              alt="Two women laughing while video chatting on a tablet"
            />
            <img
              src={menMeeting}
              alt="Group of men collaborating in a professional remote meeting"
            />
            <img
              src={manTexting}
              alt="Man texting and staying connected while working"
            />
            <figcaption>Visuals of our community in action</figcaption>
          </figure>
        </section>

        <section>
          <h2>Built for modern use</h2>
          <h3>Smarter meetings, all in one place</h3>
          <p>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
          <p aria-hidden="true">02</p>
        </section>
      </main>

      <footer>
        <picture>
          <source srcSet={footerDesktop} media="(min-width: 1024px)" />
          <source srcSet={footerImage} />
          <img
            src={footerImage}
            alt="Smiling woman enjoying a group video session"
          />
        </picture>
        <section>
          <h2>Experience more together</h2>
          <p>
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <a href="#" className="button">
            Download <span>v1.3</span>
          </a>
        </section>
      </footer>
    </div>
  );
}

export default MeetLandingPage;
