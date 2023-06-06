function App() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <div className="relative h-[95vh] bg-red-600">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source
            src="/assets/HOSANNA ESTATE  ABUJA.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50">
          <div className="h-full space-y-44">
            <div className="py-6 bg-black/40">
              <nav className="container flex items-center justify-between mx-auto">
                <div>
                  <img src="/assets/copen logo.png" alt="" />
                </div>
                <ul className="flex items-center gap-8 text-white capitalize text-[15px] font-medium">
                  <li className="transition-all ease-in-out delay-75 cursor-pointer hover:text-red-600">
                    home
                  </li>
                  <li className="transition-all ease-in-out delay-75 cursor-pointer hover:text-red-600">
                    about
                  </li>
                  <li className="transition-all ease-in-out delay-75 cursor-pointer hover:text-red-600">
                    what we do
                  </li>
                  <li className="transition-all ease-in-out delay-75 cursor-pointer hover:text-red-600">
                    projects
                  </li>
                  <li className="transition-all ease-in-out delay-75 cursor-pointer hover:text-red-600">
                    contact
                  </li>
                  <li className="transition-all ease-in-out delay-75 cursor-pointer hover:text-red-600">
                    blog
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 text-white">
              <p className="text-[#ff3800] capitalize font-medium text-2xl">
                # building lives & structures
              </p>
              <h1 className="font-extrabold capitalize text-7xl">
                we build your dream
              </h1>
              <p className="max-w-4xl text-center">
                Ever since our first major project – The development of the
                Enugu State Primary Education Board (SPEB) Complex in
                (1997-1999) which was commissioned on the 12th of May, 1999 by
                the then Head of State and Commander-in-Chief of the Armed
                Forces, Federal Republic of Nigeria His Excellency General
                Abubakar A.A. DSS MNI, we have not stopped working.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#ff3800] py-4 hover:bg-red-800 hover:border-red-800 hover:no-underline underline underline-offset-4 transition-all delay-75 ease-in border font-extrabold capitalize px-10 rounded-full border-transparent flex items-center gap-3">
                  our services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <button className="flex items-center gap-3 px-10 py-4 text-sm font-extrabold underline capitalize transition-all ease-in delay-100 bg-transparent border rounded-full hover:bg-red-800 hover:border-red-800 hover:no-underline underline-offset-4">
                  contact us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Boxes Section --> */}
      <div className="container m-0 mx-auto space-y-4">
        <div className="grid grid-cols-3">
          <div className="py-20 2xl:py-[4rem] flex flex-col items-center gap-6 px-16 bg-white -mt-16 rounded-s-md 2xl:-mt-44 z-[9999]">
            <img src="/assets/iconOne.png" alt="" />
            <h3 className="text-lg font-extrabold capitalize">
              real estate development
            </h3>
            <p className="text-sm text-[#565656 ] text-center leading-7">
              For all Real Estate construction ranging from residential,
              commercial, industrial, agricultural, raw land, and special use,
              when you choose us, there’s no substitute for genuine
              craftmanship.
            </p>
          </div>
          <div className="py-28 flex flex-col items-center gap-6 px-16 bg-white -mt-24 rounded-md 2xl:-mt-56 z-[9999]">
            <img src="/assets/iconThree.png" alt="" />
            <h3 className="text-lg font-extrabold capitalize">construction</h3>
            <p className="text-sm text-[#565656 ] text-center leading-7">
              With every project, we push the front edge of what is possible in
              construction. Our vision is to evolve the construction industry
              and inspire the world through buildings that elevate society.
            </p>
          </div>
          <div className="py-20 2xl:py-[4rem] flex flex-col items-center gap-6 px-16 bg-white -mt-16 rounded-e-md 2xl:-mt-44 z-[9999]">
            <img src="/assets/iconTwo.png" alt="" />
            <h3 className="text-lg font-extrabold capitalize">consultancy</h3>
            <p className="text-sm text-[#565656 ] text-center leading-7">
              We provide valuable advice, direction, and guidance to our
              clients. We know the building process is a scary thing, our top
              priority is taking the scary out of repurposing space for our
              commercial construction clients
            </p>
          </div>
        </div>
        {/* <!-- Experience Section --> */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="space-y-4">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/6TSgVn_Q9v0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <button className="flex items-center gap-3 px-10 py-4 font-extrabold text-white underline capitalize transition-all ease-in delay-75 bg-red-600 border border-transparent rounded-full hover:bg-red-800 hover:border-red-800 hover:no-underline underline-offset-4">
                about us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#ff3800] text-lg font-semibold capitalize">
              our proud
            </p>
            <h2 className="mb-10 text-3xl font-extrabold capitalize">
              27 years of experience
            </h2>
            <p className="font-medium leading-7 max-w-lg text-[15px] mb-24">
              We don’t cut corners or compromise on the standards as only strong
              and durable materials will be used during the construction. Every
              detail matters and we’ll work hard to show you why so many in have
              chosen us for their new home.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="text-3xl font-bold text-[#ff3800]">350 +</span>
                <p className="font-medium">Successfully Finished Projects</p>
              </div>
              <div className="space-y-4">
                <span className="text-3xl font-bold text-[#ff3800]">950 +</span>
                <p className="font-medium">Runing Projects</p>
              </div>
              <div className="space-y-4">
                <span className="text-3xl font-bold text-[#ff3800]">
                  1200 +
                </span>
                <p className="font-medium">
                  Residential & Commercial <br />
                  Houses Delivered
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-3xl font-bold text-[#ff3800]">
                  550,000 +
                </span>
                <p className="font-medium">SQM of Land Developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Banner Section --> */}
      <div className="my-24 banner">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-transparent to-orange-400/70">
          <div className="container grid grid-cols-2 gap-10 py-24 mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-10 text-white">
                From Concept to Final Solution We Offer Superior Services
              </h2>
              <p className="font-medium text-orange-400">
                We have a mission to accomplish and a mandate to operate in the
                true spirit of EXCELLENCE
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button className="flex items-center gap-3 px-10 py-4 text-sm font-extrabold text-white underline capitalize transition-all ease-in delay-100 bg-transparent border rounded-full hover:bg-red-800 hover:border-red-800 hover:no-underline underline-offset-4">
                GET IN TOUCH
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- What We Do Section --> */}
      <div className="weDo">
        <div className="w-full h-full py-10 bg-white">
          <div className="container flex flex-col gap-16 mx-auto">
            <h2 className="text-3xl text-center font-extrabold capitalize underline underline-offset-8 decoration-[#ff3800]">
              what we do
            </h2>
            <p className="text-center">
              We are committed to excellent service delivery with God helping
              us.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    construction
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    consultancy
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    real estate development
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    general contract
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    training
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    geo-informatics & survey
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    agriculture
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    banking
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/src/assets/iconOne.png" alt="" />
                <div className="w-full pt-6 -mt-4 rounded-md shadow-md bg-white/70 pb-14">
                  <h3 className="text-lg font-extrabold text-center capitalize">
                    facility management
                  </h3>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-3 px-10 py-4 mx-auto font-extrabold text-white underline capitalize transition-all ease-in delay-75 bg-red-600 border border-transparent rounded-full hover:bg-red-800 hover:border-red-800 hover:no-underline underline-offset-4">
              our services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Lastest Projects Section --> */}
      <div className="py-24 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <img
              className="object-cover object-left w-full h-full"
              src="/assets/const_1.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between text-center">
              <h2 className="text-3xl text-center font-extrabold capitalize underline underline-offset-8 decoration-[#ff3800]">
                latest projects
              </h2>
              <p>
                Our Integrity and honesty, determination, and hard work coupled
                with the fact that we were able to learn from our mistakes while
                working for others in the past and our total dependence on God,
                is the secret behind our resourcefulness and efficiency - hence
                our success. Some of the latest projects are ongoing across the
                country
              </p>
              <button className="flex items-center gap-3 px-10 py-4 mx-auto font-extrabold text-white underline capitalize transition-all ease-in delay-75 bg-red-600 border border-transparent rounded-full hover:bg-red-800 hover:border-red-800 hover:no-underline underline-offset-4">
                our projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <img
              className="object-cover object-left w-full h-full"
              src="/assets/const_2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <!-- calculator view --> */}
      <div className="jedidiah">
        <div className="py-24 bg-[#ff3800]/90">
          <div className="container grid grid-cols-2 gap-4 mx-auto">
            <div className="flex flex-col items-end justify-center">
              <p className="text-lg font-medium text-orange-400 capitalize">
                Easily Calculate our Mortgage
              </p>
              <h2 className="text-5xl font-extrabold text-white">
                Mortgage Calculator
              </h2>
            </div>
            <div className="bg-white round h-[40rem]"></div>
          </div>
        </div>
      </div>

      {/* <!-- Team Section --> */}
      <div className="container grid grid-cols-2 gap-4 py-24 mx-auto">
        <div className="flex flex-col justify-center gap-14">
          <h2 className="text-3xl text-center font-extrabold capitalize underline underline-offset-8 decoration-[#ff3800]">
            meet the team
          </h2>
          <p className="text-center">
            Our area of specialization includes; Surveying, Architecture,
            Engineering, Project Management, e.t.c. Take a look at our
            experienced experts and professionals ready to give you their best
          </p>
          <button className="flex items-center gap-3 px-10 py-4 mx-auto font-extrabold text-white underline capitalize transition-all ease-in delay-75 bg-red-600 border border-transparent rounded-full hover:bg-red-800 hover:border-red-800 hover:no-underline underline-offset-4">
            our team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="transition-all ease-in delay-75 shadow-md hover:shadow-md">
            <img
              className="w-full"
              src="/assets/Ugochukwu-Chime-fnis-fniob-JP-Group-Managing-Director-e1657156728255.jpg"
              alt=""
            />
            <div className="p-8 space-y-4 text-center bg-white">
              <h4 className="font-bold hover:text-red-600">
                Ugochukwu Chime, fnis, fniob, JP
              </h4>
              <p className="text-[#747373] text-sm font-semibold">
                Group Managing Director
              </p>
            </div>
          </div>
          <div className="transition-all ease-in delay-75 shadow-md hover:shadow-md">
            <img className="w-full" src="/assets/madam.jpg" alt="" />
            <div className="p-8 space-y-4 text-center bg-white">
              <h4 className="font-bold hover:text-red-600">Chinelo Chime</h4>
              <p className="text-[#747373] text-sm font-semibold">
                Deputy Managing Director
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Partenrs Section --> */}
      <div className="bg-gray-100">
        <div className="container flex items-center gap-16 py-16 mx-auto divide-x-2">
          <h2 className="text-3xl font-extrabold text-center capitalize">
            our partners
          </h2>
          <div className="flex items-center justify-between flex-1 px-4">
            <img src="/assets/site-logo.png" alt="" />
            <img src="/assets/fed-logo.png" alt="" />
            <img src="/assets/Mor-logo.png" alt="" />
            <img src="/assets/c-stemp-logo.png" alt="" />
          </div>
        </div>
      </div>

      {/* <!-- footer section --> */}
      <footer className="bg-black text-[#9b9b9b]">
        <div className="container py-16 mx-auto space-y-20">
          <div className="grid grid-cols-5 gap-16">
            <div className="col-span-2 space-y-8">
              <h5 className="text-xl text-[#ff3800] capitalize">about us</h5>
              <img src="/src/assets/FOOTER-LOGO.png" alt="" />
              <p className="max-w-xs text-sm leading-7">
                We are a consortium of God fearing professionals with a keen
                drive to deliver on the full range of physical development
                consultancy, construction, Real Estate development,
                infrastructural development, agriculture, manufacturing,
                training and banking.
              </p>
            </div>
            <div className="space-y-8">
              <h5 className="text-xl text-[#ff3800] capitalize">quick links</h5>
              <ul className="space-y-2 capitalize">
                <li className="underline cursor-pointer">home</li>
                <li className="underline cursor-pointer">about</li>
                <li className="underline cursor-pointer">what we do</li>
                <li className="underline cursor-pointer">projects</li>
                <li className="underline cursor-pointer">contact</li>
                <li className="underline cursor-pointer">blog</li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="text-xl text-[#ff3800] capitalize">
                our services
              </h5>
              <ul className="space-y-2 capitalize">
                <li className="underline cursor-pointer">consultancy</li>
                <li className="underline cursor-pointer">construction</li>
                <li className="underline cursor-pointer">
                  facility management
                </li>
                <li className="underline cursor-pointer">
                  geo-information & surveying
                </li>
                <li className="underline cursor-pointer">
                  real estate development
                </li>
                <li className="underline cursor-pointer">training</li>
                <li className="underline cursor-pointer">gallery</li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="text-xl text-[#ff3800] capitalize">
                ongoing projects
              </h5>
              <ul className="space-y-2 capitalize">
                <li className="underline cursor-pointer">
                  adonai garden - enugu
                </li>
                <li className="underline cursor-pointer">
                  foretold market - enugu
                </li>
                <li className="underline cursor-pointer">
                  foretold garden - abakiliki
                </li>
                <li className="underline cursor-pointer">
                  sandview estate - enugu
                </li>
                <li className="underline cursor-pointer">
                  hossana estate - abuja
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-sm text-center">
              Copyright © 2023 COPENGROUP | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
