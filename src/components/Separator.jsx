export default function Separator() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        <div className="w-32 h-px bg-gradient-to-r from-gray-300 to-gray-300"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
      </div>
    </div>
  );
}
