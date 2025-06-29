
import CompanyInput from "../components/CompanyInput";
import Header from "../components/Header";
import SectionTabs from "../components/SectionTabs";
import Footer from "../components/Footer";
import { inputs } from "./data.ts";
import { inputs2 } from "./data.ts";
import { inputs3 } from "./data.ts";

function App() {
  return (

    //screen1
    <div className="min-h-screen bg-gray-50">
      <Header />

      <img src="/separator.svg" alt="Separator" className="w-full h-auto mt-2" />

      <div className="px-4 sm:px-6 mt-10 sm:mt-28 h-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
        <SectionTabs />

        <div className="flex-[3] bg-white border-b border-gray-300 p-4 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {inputs.map((input, i) => (
              <CompanyInput key={i} {...input} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>





    //screen2
    //  <div className="min-h-screen bg-gray-50">
    //   <Header />

    //   <img src="/separator.svg" alt="Separator" className="w-full h-auto mt-2" />

    //   <div className="px-4 sm:px-6 mt-10 sm:mt-28 h-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
    //     <SectionTabs />

    //     <div className="flex-[3] bg-white border-b border-gray-300 p-4 overflow-y-auto">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //         {inputs2.map((input, i) => (
    //           <CompanyInput key={i} {...input} />
    //         ))}
    //       </div>
    //     </div>

    //     <Footer />
    //   </div>
    // </div>





    //screen3
    //  <div className="min-h-screen bg-gray-50">
    //   <Header />

    //   <img src="/separator.svg" alt="Separator" className="w-full h-auto mt-2" />

    //   <div className="px-4 sm:px-6 mt-10 sm:mt-28 h-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
    //     <SectionTabs />

    //     <div className="flex-[3] bg-white border-b border-gray-300 p-4 overflow-y-auto">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //         {inputs3.map((input, i) => (
    //           <CompanyInput key={i} {...input} />
    //         ))}
    //       </div>
    //     </div>

    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;




