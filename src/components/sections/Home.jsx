const Home=()=>{
    return (
        <section id="Home" className="min-h-screen flex items-center justify-center relative sm:pt-0 pt-20">
            <div className=" z-10 px-4 text-center ">
                <h1 className="text-5xl md:text-7xl font-bold mb-5 bg-gradient-to-r from-blue-500 via-violet-600 to-pink-400 bg-clip-text text-transparent leading-right">Hii I m Jatin Yadav</h1>
                <p className="text-gray-200 max-w-lg text-lg mx-auto mb-8 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio commodi, placeat beatae perspiciatis magnam tenetur minima ea obcaecati ipsam accusamus blanditiis sunt atque impedit mollitia!</p>
                <div className="flex justify-center space-x-5">
                <a href="#Projects" className="bg-blue-500 rounded-full px-4 py-2 text-black font-medium transition duration-500 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-400 overflow-hidden  ">Projects</a>
                <a href="#Projects" className="border-2 border-blue-500 rounded-full px-4 py-2 text-blue font-medium transition duration-500 hover:-translate-y-1 hover:border-violet-500 overflow-hidden  ">Contact</a>
            </div>
            </div>
            
        </section>
    );
}
export default Home;