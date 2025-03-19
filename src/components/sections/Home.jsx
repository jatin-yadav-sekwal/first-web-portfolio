import { RevealOnScroll } from "../RevealOnScroll.jsx";

const Home = () => {
  return (
    <section
      id="Home"
      className="bg-gradient-to-b from-black-500 via-blue-700 to-black-500 rounded-2xl   min-h-screen flex items-center justify-center relative sm:pt-0 pt-20"
    ><RevealOnScroll>
      <div className="  z-10 px-4 text-center ">
        <h1 className="inline text-5xl md:text-7xl font-bold mb-5 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent leading-right text-center">
          Hii I m Jatin Yadav
        </h1>
        <p className="text-gray-200 max-w-lg text-lg mx-auto mb-8 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          commodi, placeat beatae perspiciatis magnam tenetur minima ea
          obcaecati ipsam accusamus blanditiis sunt atque impedit mollitia!
        </p>
        <div className="flex justify-center space-x-5">
          <a
            href="#Projects"
            className=" rounded-4xl px-4 py-2 text-black font-medium transition duration-500 hover:-translate-y-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 "
          >
            Projects
          </a>
          <a
            href="#Projects"
            className="border-2 border-blue-500 rounded-full px-4 py-2 text-blue font-medium transition duration-500 hover:-translate-y-1 hover:border-violet-500 overflow-hidden  "
          >
            Contact
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
export default Home;
