import Topbar from "./topbar";

export default function Background() {
    return (<>
        <div
            className=" w-[100%] max-h-[1000px] h-auto lg:h-[500px] z-0 absolute sm:h-[460px] "
        >
            <img src="/images/background.png" alt="" className="max-h-[1000px] w-full h-auto  object-cover lg:h-[500px] sm:h-[460px]" />
        </div>
    </>)
}