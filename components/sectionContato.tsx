import { useRouter } from "next/router";

const text = `
Na busca por segurança, limpeza e eficiência administrativa, a escolha certa faz toda a diferença. Imagine contar com uma equipe dedicada que entende suas necessidades e está pronta para oferecer soluções personalizadas, garantindo a tranquilidade e o bem-estar de todos. Entre em contato e veja todos nossos serviços sob medida e personalizado para você`


export default function SectionContato() {
    const r = useRouter()
    const numero = "91986227378"
    return <>
        <div className="flex flex-col w-[100%] min-h-[300px] h-auto  border-y-2 mb-10">
            <h1 className=" text-4xl m-auto mb-0 mt-8 font-medium  md:text-2xl ">Contato</h1>
            <p className="m-auto max-w-[1200px] text-2xl mt-5 text-justify lg:text-lg md:text-sm xl:w-[80%]">{text}</p>
            <div className="my-10 flex flex-row">
                <img
                    onClick={() => {
                        const text = "Ola quero saber mais sobre os serviços da revolução e inovação serviços";
                        r.push(`https://wa.me/55${numero}?text=${text}`);
                    }
                    }
                    src="/images/contatoWhatsapp.png" alt="" className="w-[100px] h-auto m-auto mr-5 cursor-pointer select-none active:scale-[1.05] lg:mr-2  lg:w-[90px] md:w-[70px]" />
                <img
                    onClick={() => {
                        const text = "Ola quero saber mais sobre os serviços da revolução e inovação serviços";
                        r.push(`tel:+55${numero}`);
                    }}
                    src="/images/contatoTelefonee.png.png" alt="" className="w-[100px] h-auto  m-auto ml-5 cursor-pointer select-none active:scale-[1.05] lg:ml-2  lg:w-[95px] md:w-[75px]" />
            </div>

        </div>
    </>
}