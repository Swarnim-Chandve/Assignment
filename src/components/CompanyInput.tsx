



const CompanyInput = ({ label, placeholder, type, dropdown, logo, required }: any) => {
  let iconSrc = "";
  if (type === "date") {
    iconSrc = "/Asset_Date_selection.svg";
  } else if (logo === "logo") {
    iconSrc = "/status.svg";
  } else if (dropdown) {
    iconSrc = "/dd.svg";
  }

  const showIcon = dropdown || type === "date" || logo === "logo";

  return (
    <div className="flex flex-col">
      <span className="text-xs text-[#1C4ED9] mb-1 font-notosans font-light ">
        {label} {required && <span className="text-pink-500">*</span>}
      </span>


      <div className="relative flex w-full">
        <input
          type={type === "date" ? "text" : type}
          placeholder={placeholder}
          className={`w-full border border-gray-300 rounded bg-gray-50 text-sm text-gray-700  px-3 py-2 ${showIcon ? "rounded-r-none" : ""
            }`}
        />

    

        {showIcon && iconSrc && (
          <div className="flex items-center justify-center px-3 border border-l-0 border-gray-300 bg-white rounded-r">
            <img src={iconSrc} alt="Icon" className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
};


export default CompanyInput;