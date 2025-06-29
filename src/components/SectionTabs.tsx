
export default function SectionTabs() {
  return (
    <div className="flex-[0.5] bg-white border-b border-gray-300 px-4 py-3 flex flex-wrap items-center gap-4 sm:gap-6">
      <h1 className="text-[#1C4ED9] text-xl sm:text-2xl font-notosans font-light whitespace-nowrap">
        Company Registration
      </h1>

      <img src="/separator_1.svg" className="w-[1px] h-6 sm:w-[2px] sm:h-8" alt="Separator" />

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <img src="/company.svg" className="w-[70px] sm:w-[90px] h-6 sm:h-8" alt="Company" />
        <img src="/locations.svg" className="w-[70px] sm:w-[90px] h-6 sm:h-8" alt="Locations" />
        <img src="/credentials.svg" className="w-[70px] sm:w-[90px] h-6 sm:h-8" alt="Credentials" />
      </div>
    </div>
  );
}








