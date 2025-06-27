
export default function Header() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mt-6">
        <div className="ml-3">
          <img src="/abstart_logo.svg" alt="Logo" className="w-32 h-auto" />
        </div>
        <div className="flex items-center gap-6 mr-3">
          <img src="/welcome.svg" alt="Welcome" className="w-22 h-8" />
          <img src="/logout.svg" alt="Logout" className="w-22 h-8" />
        </div>
      </div>
    </div>
  );
}
