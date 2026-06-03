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
            className="mx-auto mt-12 cursor-pointer"
          />
        </a>
      </header>

      <main className="flex flex-col items-center justify-center text-center">
        {/* 1 */}
        <div className="flex flex-col items-center justify-center text-center xl:grid xl:grid-cols-[1fr,auto,1fr] xl:grid-rows-1">
          <div className="mt-800 mb-400 grid w-full grid-cols-1 items-center justify-items-center gap-6 md:mt-900 md:mb-800 xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-8">
            <picture className="hidden w-full xl:block">
              <source srcSet={heroDesktopLeft} media="(min-width:1280px)" />
              <img
                src={heroDesktopLeft}
                alt="Decorative left"
                className="h-auto w-full object-cover"
              />
            </picture>

            <div className="flex w-full flex-col items-center text-center">
              <picture className="block w-full md:max-w-[768px] xl:hidden">
                <img
                  src={heroTabletMobile}
                  alt="Illustration showing a diverse group of people connecting through online video meetings"
                  className="h-auto w-full object-cover"
                />
              </picture>

              <div className="mx-400 mt-12 flex max-w-[448px] flex-col gap-300">
                <h1 className="text-preset-1">Group Chat for Everyone</h1>
                <p className="text-preset-4">
                  Meet makes it easy to connect with others face-to-face
                  virtually and collaborate across any device.
                </p>
                <div className="flex flex-col items-center gap-200 md:flex-row md:justify-center">
                  <a
                    href="#"
                    className="w-fit rounded-[29px] bg-cyan-600 px-500 py-200 text-preset-5 text-white transition-colors duration-200 hover:bg-[#71C0D4]"
                  >
                    Download <span className="text-cyan-300">v1.3</span>
                  </a>
                  <a
                    href="#"
                    className="w-fit rounded-[29px] bg-purple-600 px-500 py-200 text-preset-5 text-white transition-colors duration-200 hover:bg-[#B18BDD]"
                  >
                    What is it?
                  </a>
                </div>
              </div>
            </div>

            <picture className="hidden w-full xl:block">
              <source srcSet={heroDesktopRight} media="(min-width:1280px)" />
              <img
                src={heroDesktopRight}
                alt="Decorative right"
                className="h-auto w-full object-cover"
              />
            </picture>
          </div>
        </div>

        {/* Number 1 */}
        <div className="mt-400 flex flex-col items-center md:mt-700 lg:mt-700">
          <div className="h-1000 w-px bg-slate-300"></div>
          <p
            aria-hidden="true"
            className="flex h-700 w-700 flex-col justify-center rounded-full border border-slate-300 text-preset-5"
          >
            01
          </p>
        </div>

        {/* 3 */}
        <section className="mx-400 mt-800 lg:max-w-[1120px]">
          <figure className="grid grid-cols-2 gap-200 md:grid-cols-4 md:gap-300">
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

        {/* 4 */}
        <section className="mx-400 mt-800 mb-400 flex max-w-[504px] flex-col items-center lg:mt-800">
          <h2 className="mb-200 text-preset-3 uppercase">
            Built for modern use
          </h2>
          <h3 className="mb-400 max-w-[445px] text-preset-2">
            Smarter meetings, all in one place
          </h3>
          <p className="text-preset-4">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </section>

        {/* Number 2 */}
        <div className="relative z-20 flex translate-y-7 flex-col items-center md:mt-400 lg:mt-0">
          <div className="h-1000 w-px bg-slate-300"></div>
          <p
            aria-hidden="true"
            className="flex h-700 w-700 flex-col justify-center rounded-full border border-slate-300 bg-white text-preset-5"
          >
            02
          </p>
        </div>

        {/* 6 */}
        <footer className="relative flex w-full flex-col items-center overflow-hidden bg-cyan-600/90 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <picture className="absolute inset-0 -z-10 w-full">
            <source srcSet={footerDesktop} media="(min-width: 1024px)" />
            <source srcSet={footerTablet} media="(min-width: 768px)" />
            <img
              src={footerMobile}
              alt="A woman smiling and enjoying a group video session, representing human connection"
              className="h-full w-full object-cover lg:flex-1"
            />
          </picture>
          <section className="relative z-10 mx-400 my-800 flex max-w-[504px] flex-col gap-300 lg:max-w-none lg:flex-row lg:items-center lg:gap-8">
            <h2 className="text-preset-2 text-white">
              Experience more together
            </h2>
            <p className="text-preset-4 text-white">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="w-fit rounded-[29px] bg-purple-600 px-500 py-200 text-preset-5 text-white transition-colors duration-200 hover:bg-[#B18BDD]"
              >
                Download <span className="text-purple-300">v1.3</span>
              </a>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
}

export default MeetLandingPage;
