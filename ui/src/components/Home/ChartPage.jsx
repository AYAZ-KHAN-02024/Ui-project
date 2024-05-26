
function ChartPage() {
    return (
        <>
            <div className="h-[1px] bg-slate-800" />

            <div className=" mt-8 text-center">

                <h1 className=" m-auto w-fit bg-sky-700 text-white rounded-full font-normal p-2 text-xs sm:text-base">Features</h1>
                <h1 className="mt-4 m-auto w-fit font-semibold text-xl sm:text-4xl">Excellent Features. Excellent Results</h1>
                <h1 className="mb-2 m-auto w-fit font-semibold text-slate-600 text-xs sm:text-lg">Start working with <span className=" text-pink-500 font-semibold">Unfluke</span> to manage all your strategies</h1>


                <div className="mt-10 w-screen flex flex-col justify-center  items-center">
                    

                    <div className="border-slate-200 border-2 md:w-[70%] w-[95%] mb-8 shadow-lg bg-transparent bg-gradient-to-r to-green-100 from-pink-100 p-5 rounded-xl flex flex-col justify-center items-start gap-4">
                        <h1 className="font-bold text-xl md:text-2xl text-slate-800 self-center">HISTORICAL INTRADAY CHARTS</h1>
                        <div className="h-[1px] bg-slate-600 w-full" />
                        <h2 className="font-semibold  text-slate-700 text-base md:text-xl">📝Different Segments Charts</h2>
                        <p className=" text-start text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, soluta. Assumenda, facilis illo. Accusamus porro totam at praesentium numquam placeat? Ad iusto ratione vel! Neque minima sit aut suscipit vitae.</p>
                        <div className="h-[1px] bg-slate-600 w-full" />
                        <h2 className="text-base md:text-xl font-semibold text-slate-700 ">💹 Data since 2024</h2>
                    </div>
                    <img src="https://www.unfluke.in/static/media/f1.e33baefd.jpg" alt="img" className="mb-8 md:w-[70%] w-[95%]  border-2 border-slate-300 rounded-xl shadow-lg" />

                    <div className="h-[1px] w-[80%] bg-slate-300" />


                    <div className="mt-10 w-screen flex flex-col justify-center  items-center">

                        <div className="border-slate-200 border-2 md:w-[70%] w-[95%] mb-4 shadow-lg bg-transparent bg-gradient-to-r to-green-50 from-blue-50 p-5 rounded-xl flex flex-col justify-center items-start ">
                            <h1 className="font-bold text-xl md:text-3xl text-black self-center">BACKTEST STRATEGIES</h1>
                        </div>

                        <img src="https://www.unfluke.in/static/media/f5.f9f7e727.jpg" alt="img" className="mb-8 md:w-[70%] w-[95%]  border-2 border-slate-300 rounded-xl shadow-lg" />

                    </div>

                </div>
            </div>
        </>


    )
}

export default ChartPage
