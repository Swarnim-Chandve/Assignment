
export default function SectionTabs() {
  return (

<div className="flex-[0.5] bg-white border-b border-gray-300 px-6 py-3 flex items-center gap-6">
      <h1 className="text-[#1C4ED9] text-2xl font-notosans font-light  whitespace-nowrap">
        Company Registration
      </h1>

      <img src="/separator_1.svg" className="w-[2px] h-8" alt="Separator" />

      <div className="flex items-center gap-4">
        <img src="/company.svg" className="w-[90px] h-8" alt="Company" />
        <img src="/locations.svg" className="w-[90px] h-8" alt="Locations" />
        <img src="/credentials.svg" className="w-[90px] h-8" alt="Credentials" />
      </div>
    </div>
  );
}
