/* eslint-disable */
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';

// import supabase from '../services/supabaseClient';
import NavBarDesktop from '../components/navigationComponents/NavbarDesktop';
import NavbarMobile from '../components/navigationComponents/NavbarMobile';

const AboutUs = () => {
  return (
    <div className=" flex h-screen overflow-hidden rounded-lg">
      <NavbarMobile />
      <div className="hidden sm:block">
        <NavBarDesktop />
      </div>
      <div className="flex flex-col flex-1 w-0 lg:overflow-hidden bg-gray-100">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-8">
            <UserWelcomemsg />

            <div className="container flex w-full p-5 m-auto">
              <div className="flex flex-col m-auto bg-white shadow-2xl rounded-xl">
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                    About this project{' '}
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-300 leading-relax">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas perspiciatis ab eum voluptates eligendi aperiam,
                    eos odit nam. Eius aperiam nemo, voluptatem ea delectus
                    dolores? Adipisci dolor ipsa delectus minima.Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptas
                    perspiciatis ab eum voluptates eligendi aperiam, eos odit
                    nam. Eius aperiam nemo, voluptatem ea delectus dolores?
                    Adipisci dolor ipsa delectus minima.
                  </p>
                </div>
              </div>
            </div>

            <div className="container p-5 mx-auto max-w-7xl">
              <div className="flex flex-wrap mx-auto md:flex-nowrap">
                <div className="flex w-full">
                  <div className="relative flex flex-col m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-4">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Camille Hautois
                      </h4>
                      <a href="https://github.com/Camille1993">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/camille-hautois-075633146/">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-8 m-auto">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        François Chatelier
                      </h4>
                      <a href="https://github.com/Francois-Chatelier">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/francois-chatelier">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-8 m-auto">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Robin Beaudru
                      </h4>
                      <a href="https://github.com/robinbdru">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/robinbeaudru/">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-8 m-auto">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Kévin Marais
                      </h4>
                      <a href="https://github.com/KvnMrs">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500">
              <a
                href="http://127.0.0.1:5500/src/components/Terms/TermsAndConditions.html"
                target="blank"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
