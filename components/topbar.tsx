import { useRouter } from "next/router";
import { useState } from "react";

const numero = "91986227378";
export default function Topbar({ selected = [true, false, false] }) {
    // const [selected, setSelected] = useState([true, false, false]);
    var op = ["Inicio", "Nossos Serviços", "Chame no zap"];
    const r = useRouter();
    const handleSelection = (index: number) => {
        switch (index) {
            // inicio
            case 0:
                r.push(`/`);
                break;
            // nossos serviços
            case 1:
                r.push(`/nossos-servicos`);
                break;
            // chame no zap
            case 2:
                const text = "Ola quero saber mais sobre os serviços da revolução e inovação serviços";
                r.push(`https://wa.me/${numero}?text=${text}`);
                break;
            default:
                break;
        }

        // const newSelected = selected.map((item, i) => i === index);
        // setSelected(newSelected);
    };
    return (
        <>
            <div className="xxl:hidden w-full h-auto mb-0">
                <Layout_desktop op={op} handleSelection={handleSelection} selected={selected} />
            </div>
            <div className="hidden md:hidden xxl:flex w-full h-auto mb-0">
                <Layout_tablet op={op} handleSelection={handleSelection} selected={selected} />
            </div>
            <div className="hidden md:flex w-full h-auto mb-0">
                <Layout_phone op={op} handleSelection={handleSelection} selected={selected} />
            </div>
        </>
    );
}

function Layout_desktop({ op, handleSelection, selected }: any) {
    return (
        <div className="w-[100%] h-[100px] relative flex flex-row mb-0">
            <div className="w-[25%]">
                <img src="/images/logo_rev_inove.svg" alt="" className="m-auto mr-20 mt-8 " />
            </div>
            <div className="w-[50%] flex flex-row gap-[90px] m-auto mb-0 align-middle items-center text-white font-semibold text-[15pt]">
                {/* ==============================*/}
                {/* space necessary */}
                <div className="m-auto"></div>
                {/* ==============================*/}
                {op.map((e: any, i: number) => (
                    <h2
                        onClick={() => handleSelection(i)}
                        className={`${selected[i] ? "text-[#FF6934]" : ""} cursor-pointer hover:scale-[1.05] select-none`}
                        key={i}
                    >
                        {e}
                    </h2>
                ))}
                {/* ==============================*/}
                {/* space necessary */}
                <div className="m-auto mb-0"></div>
                {/* ==============================*/}
            </div>
            {/* margin left */}
            <div className="w-[25%] mb-0"></div>
        </div>
    );
}

function Layout_tablet({ op, handleSelection, selected }: any) {
    return (
        <div className="w-[100%] h-[100px] relative flex flex-row mb-0">
            <div className="w-[400px]">
                <img src="/images/logo_rev_inove.svg" alt="" className="m-auto mr-0 mt-8 " />
            </div>
            <div className="w-[100%] flex flex-row gap-[90px] lgv:gap-[50px] m-auto mb-0 align-middle items-center text-white font-semibold text-[15pt]">
                {/* ==============================*/}
                {/* space necessary */}
                <div className="m-auto"></div>
                {/* ==============================*/}
                {op.map((e: any, i: number) => (
                    <h2
                        onClick={() => handleSelection(i)}
                        className={`${selected[i] ? "text-[#FF6934]" : ""} cursor-pointer hover:scale-[1.05] select-none`}
                        key={i}
                    >
                        {e}
                    </h2>
                ))}
                {/* ==============================*/}
                {/* space necessary */}
                <div className="m-auto mb-0"></div>
                {/* ==============================*/}
            </div>
        </div>
    );
}

function Layout_phone({ op, handleSelection, selected }: any) {
    const r = useRouter();

    return (
        <div className="w-[85%] h-[100px] relative flex flex-row m-auto mb-0">
            <img src="/images/logo_rev_inove.svg" alt="" className="w-[100px] h-[70px] m-auto ml-0 mt-8 " />
            <div className="w-[100%] flex flex-row gap-[90px] m-auto mb-0 align-middle items-center text-white font-semibold text-[15pt] shadow-xl">
                <div
                    onClick={() => {
                        const text = "Ola quero saber mais sobre os serviços da revolução e inovação serviços";
                        r.push(`https://wa.me/${numero}?text=${text}`);
                    }}
                    className="w-[140px] rounded-lg border-2 border-white flex flex-row align-middle content-center items-center m-auto mr-0 active:scale-[1.05] cursor-pointer"
                >
                    <h4 className="font-normal m-auto text-sm my-5 mx-5 select-none">chame no zap</h4>
                </div>
                {/* ==============================*/}
            </div>
        </div>
    );
}
