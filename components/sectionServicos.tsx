import { useRouter } from "next/router"

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dolor at nulla lacinia dapibus vitae eu neque.`
const numero = "91984837847"

export default function SectionServicos() {
    const r = useRouter()
    var itens = [
        {
            title: "Administrativo",
            desc: "Nosso serviço administrativo é projetado para atender tanto condomínios quanto empresas, oferecendo soluções eficazes e personalizadas para a gestão.",
            image: "/images/images_Itens/adm.png",
            link: ""
        },
        {
            title: "Limpeza comercial",
            desc: "Nosso serviço de limpeza comercial é especializado em atender eventos e condomínios, garantindo um ambiente limpo, seguro e agradável para todos os participantes e residentes.",
            image: "/images/images_Itens/limpeza.png",
            link: ""
        },
        {
            title: "Portaria e segurança",
            desc: "Nosso serviço de portaria e segurança é projetado para atender as necessidades específicas de eventos e condomínios, garantindo um ambiente seguro e bem controlado para todos.",
            image: "/images/images_Itens/sec.png",
            link: ""
        },
    ]
    return <>
        <div className="w-[100%] flex flex-col m-auto mt-5 mb-16 px-[50px]">
            <h1 className=" text-4xl m-auto mt-4 font-medium  md:text-2xl ">Serviços</h1>
            <div className="flex flex-row gap-14 m-auto mt-12 max-w-[1500px] md:mt-8 xl:flex-col xl:gap-9">
                {itens.map((e, i) => {
                    return <>
                        <div className="w-[100%] h-auto flex flex-row max-w-[450px] " >
                            <Item title={e.title} desc={e.desc} image={e.image} link={e.link} key={i} />
                        </div>
                    </>
                })}

            </div>
            <div
                onClick={() => { r.push("/nossos-servicos") }}
                className={`${!true ? "bg-[#FF6934] text-white" : "text-[#FF6934]"} flex flex-row m-auto  w-[150px] border-2 border-[#FF6934] rounded-lg  opacity-80
                cursor-pointer scale-[1.5] mt-28 lg:scale-[1.3] lg:mt-10 md:scale-[1] md:mt-8 shadow-sm`}><span className="m-auto py-3 select-none">
                    {!true ? "ver menos" : "ver mais"}</span></div>

        </div >

    </>
}


function Item({ title, desc, image, link }: { title: string, desc: string, image: string, link: string }) {
    const r = useRouter()

    return <>
        <div className="flex flex-col w-auto h-[450px]  md:h-auto md:max-h-[450px] mb-16 md:mb-0">
            <img src={image} alt="" />
            <h1 className="font-normal text-3xl m-auto ml-0 mt-10  mb-3 md:mt-5 md:text-xl">{title}</h1>
            <p className=" text-2xl text-justify lg:text-lg md:text-sm  md:mb-5">{desc}</p>
            <p
                onClick={() => { r.push(`https://wa.me/${numero}?text=Quero saber mais sobre os serviços de ${title}`) }}
                className="text-2xl text-justify lg:text-lg md:text-sm  mt-5 md:mt-[-10px] 
                     text-blue-800 underline">Clique aqui e saiba mais</p>

        </div>
    </>
}