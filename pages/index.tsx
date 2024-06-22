import { Inter } from "next/font/google";
import SectionSobreNos from "@/components/sectionSobreNos";
import Background from "@/components/background";
import Topbar from "@/components/topbar";
import Carrosel from "@/components/carrosel";
import SectionServicos from "@/components/sectionServicos";
import SectionContato from "@/components/sectionContato";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {


  return (
    <main
      className={`flex min-h-screen flex-col  ${inter.className}`}
    >
      <Background />
      <Topbar selected={[true, false, false]} />
      <Carrosel />
      <SectionSobreNos />
      <SectionServicos />
      <SectionContato />
      <div className="w-[100%] h-[180px] bg-black flex flex-row xxl:h-[120px] lg:h-[100px]"> <span className="text-white opacity-50 m-auto lg:text-sm">Revolução e inovação serviços</span></div>
    </main>
  );
}


