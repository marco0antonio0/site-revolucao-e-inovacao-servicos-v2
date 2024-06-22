import { Inter } from "next/font/google";
import SectionSobreNos from "@/components/sectionSobreNos";
import Background from "@/components/background";
import Topbar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import SectionServicos from "@/components/sectionServicos";
import SectionContato from "@/components/sectionContato";
import SectionServicosBuild from "@/components/sectionServicosBuild";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {


  return (
    <main
      className={`flex min-h-screen flex-col  ${inter.className}`}
    >
      <Background />
      <Topbar selected={[false, true, false]} />
      <Carrosel />
      <div className="mt-52 xxl:mt-16 lg:mt-5 md:mt-0"></div>
      <SectionServicosBuild />
      {/* <SectionContato /> */}
      <div className="w-[100%] h-[180px] mt-10 bg-black flex flex-row xxl:h-[120px] lg:h-[100px]"> <span className="text-white opacity-50 m-auto lg:text-sm">Revolução e inovação serviços</span></div>
    </main>
  );
}


