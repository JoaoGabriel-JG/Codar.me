export const Card = () => {
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
        <span className="text-xs md: text-base text-gray-700 font-bold">7:00</span>

        <div className="flex space-x-4 justify-center items-center">

            <span className="uppercase">sui</span>
            <img src="/imgs/flags/sui.png"/>

            <input max={20} type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"/>
            <span className="text-red-500 font-bold">X</span>
            <input max={20} type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"/>

            <img src="/imgs/flags/cam.png"/>
            <span className="uppercase">cam</span>
        </div>
    </div> 
}