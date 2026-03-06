import { useCalculatorStore } from "../store/useCalculatorStore";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const CalculatorForm = () => {
  const {
    cpu,
    setCpu,
    ram,
    setRam,
    diskSize,
    setDiskSize,
    isBackupEnabled,
    toggleBackup,
  } = useCalculatorStore();

  return (
    <div className="space-y-8 py-4">
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label className="text-lg font-medium">Процессор (CPU)</Label>
          <span className="font-bold">{cpu} vCPU</span>
        </div>
        <Slider
          value={[cpu]}
          min={1}
          max={32}
          step={1}
          onValueChange={(val) => setCpu(val[0])}
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <Label className="text-lg font-medium">
            Оперативная память (RAM)
          </Label>
          <span className="font-bold">{ram} GB</span>
        </div>
        <Slider
          value={[ram]}
          min={1}
          max={128}
          step={1}
          onValueChange={(val) => setRam(val[0])}
          onValueCommit={(val) => {
            if (val[0] < 4) setRam(4);
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label className="text-lg font-medium">Объем диска</Label>
          <span className="font-bold">{diskSize} GB</span>
        </div>
        <Slider
          value={[diskSize]}
          min={10}
          max={1000}
          step={10}
          onValueChange={(val) => setDiskSize(val[0])}
        />
      </div>

      <label className="flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
        <div className="space-y-0.5">
          <span className="text-base font-medium">Резервное копирование</span>
          <div className="text-sm text-gray-500">
            Автоматические бэкапы (+20% к цене)
          </div>
        </div>

        <Switch checked={isBackupEnabled} onCheckedChange={toggleBackup} />
      </label>
    </div>
  );
};
