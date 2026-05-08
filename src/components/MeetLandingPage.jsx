import meetLogo from '../assets/logo.svg';
import footerDesktop from '../assets/desktop/image-footer.jpg';
import heroDesktopLeft from '../assets/desktop/image-hero-left.png';
import heroDesktopRight from '../assets/desktop/image-hero-right.png';
import galleryMan from '../assets/desktop/image-man-texting.jpg';
import galleryMen from '../assets/desktop/image-men-in-meeting.jpg';
import galleryWoman from '../assets/desktop/image-woman-in-videocall.jpg';
import galleryWomen from '../assets/desktop/image-women-videochatting.jpg';
import heroTabletMobile from '../assets/tablet/image-hero.png';
import footerTablet from '../assets/tablet/image-footer.jpg';
import footerMobile from '../assets/mobile/image-footer.jpg';

function MeetLandingPage() {
  return (
    <div>
      <header>
        <a href="#">
          <img
            src={meetLogo}
            alt="Meet - Home"
            className="mx-auto mt-[48px] cursor-pointer"
          />
        </a>
      </header>

      <main className="flex flex-col items-center justify-center text-center">
        <section className="mx-400 mt-800 mb-400">
          <picture>
            <source srcSet={heroDesktopLeft} media="(min-width: 1200px)" />
            <source srcSet={heroDesktopRight} media="(min-width: 1024px)" />
            <img
              src={heroTabletMobile}
              alt="Illustration showing a diverse group of people connecting through online video meetings"
              className="mb-[48px] h-[160px]"
            />
          </picture>
          <div className="flex flex-col gap-300">
            <h1 className="text-preset-1">Group Chat for Everyone</h1>
            <p className="text-preset-4">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="flex flex-col items-center gap-200">
              <a
                href="#"
                className="w-fit rounded-[29px] bg-cyan-600 px-500 py-200 text-preset-5 text-white"
              >
                Download <span className="text-cyan-300">v1.3</span>
              </a>
              <a
                href="#"
                className="w-fit rounded-[29px] bg-purple-600 px-500 py-200 text-preset-5 text-white"
              >
                What is it?
              </a>
            </div>
          </div>
        </section>

        <section>
          <p
            aria-hidden="true"
            className="flex h-700 w-700 flex-col justify-center rounded-full border border-slate-300 text-preset-5"
          >
            01
          </p>
          <figure className="grid grid-cols-2 gap-200">
            <img
              src={galleryWoman}
              className="rounded-lg"
              alt="A woman wearing a headset smiling during a high-quality video call"
            />
            <img
              src={galleryWomen}
              className="rounded-lg"
              alt="Two women laughing and interacting through a tablet during a video chat"
            />
            <img
              src={galleryMen}
              className="rounded-lg"
              alt="A group of professional men collaborating in a remote video conference"
            />
            <img
              src={galleryMan}
              className="rounded-lg"
              alt="A man staying connected by texting on his smartphone while at his workspace"
            />
            <figcaption className="hidden">
              Visuals of our community in action
            </figcaption>
          </figure>
        </section>

        <section>
          <h2 className="text-preset-3">Built for modern use</h2>
          <h3 className="text-preset-2">Smarter meetings, all in one place</h3>
          <p className="text-preset-4">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
          <p
            aria-hidden="true"
            className="rounded-full border border-slate-300 text-preset-5"
          >
            02
          </p>
        </section>
        <footer className="bg-purple-600">
          <picture>
            <source srcSet={footerDesktop} media="(min-width: 1024px)" />
            <source srcSet={footerTablet} media="(min-width: 768px)" />
            <img
              src={footerMobile}
              alt="A woman smiling and enjoying a group video session, representing human connection"
            />
          </picture>
          <section>
            <h2 className="text-preset-2 text-white">
              Experience more together
            </h2>
            <p className="text-preset-4 text-white">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <a
              href="#"
              className="rounded-[29px] bg-purple-600 text-preset-5 text-white"
            >
              Download <span className="text-purple-300">v1.3</span>
            </a>
          </section>
        </footer>
      </main>
    </div>
  );
}

export default MeetLandingPage;
