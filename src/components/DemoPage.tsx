import { ArrowDownIcon } from "lucide-react";
import  { useRef } from "react";
import { useLocation } from "react-router-dom";

const DemoPage = () => {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  const handleScrollClick = () => {
    previewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      {/* Header */}
      <header className="p-4 md:p-6 mt-12 md:mt-20 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          <span className="capitalize">{pathname.replace('/', '')}</span> Preview Page
        </h1>

        <button
          onClick={handleScrollClick}
          className="
            px-6 py-2 md:px-8 md:py-3 rounded-full 
            bg-gradient-to-r from-indigo-500 to-purple-600 
            text-white font-semibold 
            shadow-lg flex items-center justify-center gap-2
            hover:from-purple-600 hover:to-indigo-500
            focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700
            transition mx-auto
            "
        >
          Click to Go Down <ArrowDownIcon className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </header>

      <section className="flex items-center justify-center p-4">
        <p className="text-base md:text-xl text-center">
          Scroll down to preview the applied design 👇
        </p>
      </section>

      {/* Preview Section */}
      <section
        ref={previewRef}
      >
        
      </section>
    </div>
  );
};

export default DemoPage;