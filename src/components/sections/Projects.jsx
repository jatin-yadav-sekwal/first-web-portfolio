const Projects =()=>{
    return (
        <section id="Projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-xl border border-white/10 hover:scale-104 duration-500 ease-out transition-all">
                        <h3 className="font-mono font-semibold text-xl">Cloud Computing</h3>
                        <p className="text-gray-400 mb-4">scalable cloud infrastructure management with realtime monotoring and autimated scaling</p>
                        <div className="flex flex-wrap gap-2">
                            {['react','nodejs', 'aws', 'azure'].map((skills) => <span className="text-blue-500 border-1 border-blue-500 rounded-3xl px-2 ">{skills}</span>)}
                        </div>
                        <div className="my-3 flex justify-between items-center">
                            <a href="#" className="text-md text-blue-500">View Projects →</a>
                        </div>
                    </div>
                    <div className="p-8 rounded-xl border border-white/10 hover:scale-104 duration-500 ease-out transition-all">
                        <h3 className="font-mono font-semibold text-xl">Workout Planner and Tracker</h3>
                        <p className="text-gray-400 mb-4">An app to plan, schedule, and track workouts, offering personalized exercise routines and progress tracking with visual charts</p>
                        <div className="flex flex-wrap gap-2">
                            {['React Native',' Redux', 'SQLite', 'Tailwind CSS', 'React Navigation'].map((skills) => <span className="text-blue-500 border-1 border-blue-500 rounded-3xl px-2 ">{skills}</span>)}
                        </div>
                        <div className="my-3 flex justify-between items-center">
                            <a href="#" className="text-md text-blue-500">View Projects →</a>
                        </div>
                    </div>
                    <div className="p-8 rounded-xl border border-white/10 hover:scale-104 duration-500 ease-out transition-all">
                        <h3 className="font-mono font-semibold text-xl">Personal Finance Tracker</h3>
                        <p className="text-gray-400 mb-4">A web application to help users track their income, expenses, and savings, providing detailed reports and insights into their financial habits.</p>
                        <div className="flex flex-wrap gap-2">
                            {['react','nodejs', 'Express', 'MongoDB', 'tailwindcss'].map((skills) => <span className="text-blue-500 border-1 border-blue-500 rounded-3xl px-2 ">{skills}</span>)}
                        </div>
                        <div className="my-3 flex justify-between items-center">
                            <a href="#" className="text-md text-blue-500">View Projects →</a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
    );
}
export default Projects;