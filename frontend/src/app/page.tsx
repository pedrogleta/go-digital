import { MainSection } from '@/components/MainSection';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <div>
      <div className="h-16 flex ">Header</div>
      <div className="flex flex-row ml-3">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
}
