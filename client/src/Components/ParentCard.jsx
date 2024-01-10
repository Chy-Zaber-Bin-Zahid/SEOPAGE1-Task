import ChildCard from "./ChildCard";

function ParentCard() {
  return (
    <div className="bg-gray-200 px-2 py-4 flex flex-col">
      <div className="flex justify-between items-center font-semibold text-gray-600 mb-6 text-lg">
        <div className="flex justify-center items-center gap-1.5">
          {/* half circle */}
          <div className="w-3.5 h-4 rounded-l-full bg-red-700"></div>
          <h1>Incomplete</h1>
        </div>
        <h1 className="px-2.5 py-0.5 rounded bg-gray-300 m-0 inl">0</h1>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto h-full">
        <ChildCard />
        <ChildCard />

      </div>
    </div>
  );
}

export default ParentCard;
