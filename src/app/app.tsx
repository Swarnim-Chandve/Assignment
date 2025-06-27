
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
    // <div>
  
    //   <Header />

    
    //   <img src="/separator.svg" alt="Separator" className="w-full h-auto mt-2" />

  
    //   <div className="mx-6 mt-28 h-[500px] border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
      
       
    //     <SectionTabs />

      
    //     <div className="flex-[3] bg-white border-b border-gray-300 p-4 overflow-y-auto">
    //       <div className="grid grid-cols-4 gap-4 ">
    //         {inputs.map((input, i) => (
    //           <CompanyInput key={i} {...input} />
    //         ))}
    //       </div>
    //     </div>

       
    //     <Footer />
    //   </div>
    // </div>



 














    //screen2
    //  <div>
    
    //   <Header />


    //   <img src="/separator.svg" alt="Separator" className="w-full h-auto mt-2" />

    
    //   <div className="mx-6 mt-28 h-[500px] border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">

    
    //     <SectionTabs />

    
    //     <div className="flex-[3] bg-[#efedf2] border-b border-gray-300 p-4 overflow-y-auto mt-4">
    //       <div className="grid grid-cols-4 gap-6">
    //         {inputs2.map((input, i) => (
    //           <CompanyInput key={i} {...input} />
    //         ))}
    //       </div>
    //     </div>

    //       <div className="bg-white border-b border-gray-300 px-4 py-4 ">
    //           <img src="locations.svg" alt="" className="w-20 h-8 ml-5"/>
    //     </div>

    //     <Footer />
    //   </div>
    // </div>





    //screen3 
     <div>
   
      <Header />

    
      <img src="/separator.svg" alt="Separator" className="w-full h-auto mt-2" />

       <div className=" mx-6 mt-28 h-[500px] border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col ">

    
        <SectionTabs />

   
      <div className="flex-[3] bg-[#efedf2] border-b border-gray-300 p-4 overflow-y-auto">

          <div className="grid grid-cols-4 gap-x-6 gap-y-6 px-6 pt-6 pb-2">
            {inputs3.map((input, i) => (
              <CompanyInput key={i} {...input} />
            ))}
          </div>


        </div>

        <div className="bg-white border-b border-gray-300 px-6 py-6 ">

        </div>

   
         <Footer />
       </div>
    </div>
  );
}

export default App;





