
export default function Header() {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-4">
        <div>
          <img src="/abstart_logo.svg" alt="Logo" className="w-28 sm:w-32 h-auto" />
        </div>
        <div className="flex gap-4 sm:gap-6">
          <img src="/welcome.svg" alt="Welcome" className="w-20 h-6 sm:h-8" />
          <img src="/logout.svg" alt="Logout" className="w-20 h-6 sm:h-8" />
        </div>
      </div>
    </div>
  );
}
