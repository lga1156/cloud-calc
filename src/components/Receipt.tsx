import { useCalculatorStore } from "../store/useCalculatorStore";
import { Button } from "@/components/ui/button";

export const Receipt = () => {
  const totalPrice = useCalculatorStore((state) => state.totalPrice());
  const { cpu, ram, diskSize, isBackupEnabled } = useCalculatorStore();

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sticky top-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Total:</h2>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-end">
          <span className="text-slate-400 font-medium text-lg">Processor</span>
          <div className="flex-1 border-b border-dashed border-slate-200 mx-2 mb-1"></div>
          <span className="font-bold text-slate-700 text-lg">{cpu} Core</span>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-slate-400 font-medium text-lg">RAM</span>
          <div className="flex-1 border-b border-dashed border-slate-200 mx-2 mb-1"></div>
          <span className="font-bold text-slate-700 text-lg">{ram} GB</span>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-slate-400 font-medium text-lg">Storage</span>
          <div className="flex-1 border-b border-dashed border-slate-200 mx-2 mb-1"></div>
          <span className="font-bold text-slate-700 text-lg">
            {diskSize} GB
          </span>
        </div>

        {isBackupEnabled && (
          <div className="flex justify-between items-end text-green-600">
            <span className="font-medium text-lg">Backup</span>
            <div className="flex-1 border-b border-dashed border-green-200 mx-2 mb-1"></div>
            <span className="font-bold text-lg">Included</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-slate-500 font-medium">In a Month</span>
        <span className="text-5xl font-black text-[#0078D6]">
          {totalPrice} ₽
        </span>
      </div>

      <Button
        className="w-full bg-[#0078D6] hover:bg-[#0060AB] text-white text-xl font-bold py-6 rounded-xl shadow-blue-200 shadow-xl transition-all active:scale-95"
        onClick={() => alert("Server Deployed!")}
      >
        Deploy Server
      </Button>

      <p className="text-center text-xs text-slate-400 mt-4">
        * Internet connection port speed — 10 Gbit/sec.
      </p>
    </div>
  );
};
