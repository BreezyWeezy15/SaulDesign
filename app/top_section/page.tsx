export default function ShowTopSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-10 py-5 justify-between">
        <h4 className="text-gray-400 font-bold text-md">SaulDesign</h4>

        <div className="flex flex-row gap-5 text-gray-300 font-semibold text-md">
          <h4>Home</h4>
          <h4>About Me</h4>
          <h4>Contact</h4>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-600"></div>
    </div>
  );
}
