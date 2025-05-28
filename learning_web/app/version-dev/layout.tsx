import { Navigation } from '@/components/sidebar/navigation';

const VersionDevLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[190px] flex-col fixed inset-y-0 z-50">
        <div className="h-full w-full flex flex-col border-r-2">
          <Navigation />
        </div>
      </div>
      <main className="md:pl-[190px] h-full">
        {children}
      </main>
    </div>
  );
};

export default VersionDevLayout;