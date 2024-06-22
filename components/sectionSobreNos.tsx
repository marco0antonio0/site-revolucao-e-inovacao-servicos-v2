import { useState } from "react"

const text = `
A Revolução e Inovação é a parceira ideal para empresas e eventos que buscam soluções personalizadas de portaria, limpeza e administração. Nossa equipe altamente qualificada e experiente está comprometida em fornecer um serviço excepcional que supera as expectativas dos nossos clientes. `
const text1 = `
Utilizamos tecnologias avançadas e as melhores práticas do setor para garantir qualidade e eficiência em cada projeto. Se você procura uma empresa confiável e de alta qualidade, a Revolução e Inovação é a escolha certa. Entre em contato conosco hoje mesmo para saber como podemos ajudar a alcançar seus objetivos empresariais.`

export default function SectionSobreNos() {
    const [state, SetState] = useState(true)
    function handleAction() {
        SetState((e) => e ? false : true)
    }
    return <>
        <div className="flex flex-row m-auto py-16 rounded-3xl    px-20 w-[80%] xxl:p-0 bg-white relative  mt-44 mb-20 xxl:mt-32 lg:mt-14 md:mt-10 md:mb-10 z-10">
            <div className="w-[50%] xl:w-[100%] fle flex-col  z-10 m-auto mt-0">
                <div className="w-[100%]"><h1 className="text-4xl md:text-2xl font-bold text-[#FF6934]">Sobre nos</h1></div>
                <p className="text-2xl mt-5 text-justify lg:text-lg md:text-sm">
                    A Revolução e Inovação é a parceira ideal para empresas e eventos que buscam soluções personalizadas de portaria, limpeza e administração. Com mais de 5 anos de atuação no mercado, nossa empresa se destaca pela qualidade e eficiência dos serviços prestados.
                </p>
                {state ? <></> : <p className="text-2xl mt-5 text-justify lg:text-lg md:text-sm">
                    Nossa fundadora, com mais de 20 anos de experiência em administração, lidera uma equipe altamente qualificada e comprometida em fornecer um serviço excepcional que supera as expectativas dos nossos clientes. Utilizamos tecnologias avançadas e as melhores práticas do setor para garantir resultados excelentes em cada projeto.
                </p>}
                {state ? <></> : <p className="text-2xl mt-5 text-justify lg:text-lg md:text-sm">
                    Se você procura uma empresa confiável e de alta qualidade, a Revolução e Inovação é a escolha certa. Entre em contato conosco hoje mesmo para saber como podemos ajudar a alcançar seus objetivos empresariais.
                </p>}
                <div
                    onClick={() => handleAction()}
                    className={`${!state ? "bg-[#FF6934] text-white" : "text-[#FF6934]"} flex flex-row m-auto  w-[150px] border-2 border-[#FF6934] rounded-lg  opacity-80
                cursor-pointer scale-[1.5] mt-14 ml-10 lg:scale-[1.3] lg:ml-5 md:scale-[1] md:ml-0 md:mt-5 shadow-sm`}><span className="m-auto py-3 select-none">
                        {!state ? "ver menos" : "ver mais"}</span></div>
            </div>
            <div className="w-[50%] m-auto xl:hidden">
                <img src="/images/image_representative_v2.svg" alt="" className="m-auto mr-0 scale-[1.2] xxl:scale-[1.1] " />
            </div>
        </div>
        <div className="hidden xl:flex w-[100%] h-auto">
            <img src="/images/image_representative_v22.svg" alt="" className="m-auto w-[100%]" />
        </div>
    </>
}