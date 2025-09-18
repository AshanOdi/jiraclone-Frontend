export default function HomePage() {
  return (
    <div className="flex w-full h-full p-4 gap-4">
      <div className="bg-yellow-400 backdrop-blur-md w-1/2 rounded-lg shadow-2xl flex flex-col items-center justify-center p-4">
        <div className="bg-yellow-200 w-full h-1/3 rounded-md flex flex-col items-center justify-center">
          <p className="text-gray-800 font-semibold">Top Div</p>
        </div>

        {/* Second inner div (below) */}
        <div className="bg-yellow-300 w-full h-2/3 rounded-md flex items-center justify-center">
          <p className="text-gray-800 font-semibold">Bottom Div</p>
        </div>
      </div>

      <div className="bg-red-600 w-1/2 backdrop-blur-md rounded-lg shadow-2xl flex flex-col items-center justify-center p-4">
        <div className="bg-yellow-200 w-full h-1/3 rounded-md flex flex-col items-center justify-center">
          <p className="text-gray-800 font-semibold">Top Div</p>
        </div>

        {/* Second inner div (below) */}
        <div className="bg-yellow-300 w-full h-2/3 rounded-md flex items-center justify-center">
          <p className="text-gray-800 font-semibold">Bottom Div</p>
        </div>
      </div>
    </div>
  );
}
