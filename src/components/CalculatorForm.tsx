import { useCalculatorStore } from "../store/useCalculatorStore";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import debianIcon from "@/assets/icons/debian.svg";
import centosIcon from "@/assets/icons/centos.svg";
import windowsIcon from "@/assets/icons/windows.svg";

const OS_ICONS: Record<string, string> = {
  ubuntu: ubuntuIcon,
  debian: debianIcon,
  centos: centosIcon,
  windows: windowsIcon,
};

export const CalculatorForm = () => {
  const {
    cpu,
    setCpu,
    ram,
    setRam,
    diskType,
    setDiskType,
    diskSize,
    setDiskSize,
    os,
    setOs,
    isBackupEnabled,
    toggleBackup,
  } = useCalculatorStore();

  return (
    <div className="space-y-8 py-4">
      <div className="space-y-3 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center">
          <Label className="text-xl font-bold text-slate-700">Processor</Label>

          <div className="flex items-center space-x-2">
            <Input
              type="number"
              min={1}
              max={32}
              value={cpu}
              onChange={(e) => {
                const v = e.target.value;
                if (v === "") {
                  setCpu(1);
                  return;
                }
                setCpu(Math.min(32, Math.max(1, Number(v))));
              }}
              onBlur={() => setCpu(Math.min(32, Math.max(1, cpu)))}
              className="w-20 font-bold text-right text-lg text-blue-600 border-blue-100 focus:ring-blue-500"
            />
            <span className="text-gray-400 font-medium w-12">Cores</span>
          </div>
        </div>

        <div className="pt-2">
          <Slider
            value={[cpu]}
            min={1}
            max={32}
            step={1}
            onValueChange={(val) => setCpu(val[0])}
            className="cursor-pointer pb-4"
          />

          <div className="flex justify-between text-xs text-gray-400 px-1 mt-1 font-medium">
            <span>1</span>
            <span>8</span>
            <span>16</span>
            <span>24</span>
            <span>32</span>
          </div>
        </div>

        <div className="text-right text-xs text-blue-400">~ 120 ₽ за ядро</div>
      </div>

      <div className="space-y-3 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center">
          <Label className="text-xl font-bold text-slate-700">RAM</Label>

          <div className="flex items-center space-x-2">
            <Input
              type="number"
              min={1}
              max={128}
              value={ram}
              onChange={(e) => {
                const v = e.target.value;
                if (v === "") {
                  setRam(1);
                  return;
                }
                setRam(Math.min(128, Math.max(1, Number(v))));
              }}
              onBlur={() => setRam(Math.min(128, Math.max(1, ram)))}
              className="w-20 font-bold text-right text-lg text-blue-600 border-blue-100 focus:ring-blue-500"
            />
            <span className="text-gray-400 font-medium">GB</span>
          </div>
        </div>

        <div className="pt-2">
          <Slider
            value={[ram]}
            min={1}
            max={128}
            step={1}
            onValueChange={(val) => setRam(val[0])}
            className="cursor-pointer py-4"
          />

          <div className="flex justify-between text-xs text-gray-400 px-1 mt-1 font-medium">
            <span>1 GB</span>
            <span>32 GB</span>
            <span>64 GB</span>
            <span>96 GB</span>
            <span>128 GB</span>
          </div>
        </div>

        <div className="text-right text-xs text-blue-400">~ 60 ₽ за 1 GB</div>
      </div>

      <div className="space-y-3 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Label className="text-xl font-bold text-slate-700">Storage</Label>

            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${diskType === "ssd" ? "bg-white shadow text-blue-600" : "text-slate-400 hover:text-slate-600"}`}
                onClick={() => setDiskType("ssd")}
              >
                SSD
              </button>
              <button
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${diskType === "nvme" ? "bg-white shadow text-purple-600" : "text-slate-400 hover:text-slate-600"}`}
                onClick={() => setDiskType("nvme")}
              >
                NVMe
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Input
              type="number"
              min={10}
              max={1000}
              value={diskSize}
              onChange={(e) => {
                const v = e.target.value;
                if (v === "") {
                  setDiskSize(10);
                  return;
                }
                setDiskSize(Math.min(1000, Math.max(10, Number(v))));
              }}
              onBlur={() => setDiskSize(Math.min(1000, Math.max(10, diskSize)))}
              className={`w-24 font-bold text-right text-lg border-blue-100 focus:ring-blue-500 ${diskType === "nvme" ? "text-purple-600" : "text-blue-600"}`}
            />
            <span className="text-gray-400 font-medium w-8">GB</span>
          </div>
        </div>

        <div className="pt-2">
          <Slider
            value={[diskSize]}
            min={10}
            max={1000}
            step={10}
            onValueChange={(val) => setDiskSize(val[0])}
            className={`cursor-pointer py-4 ${diskType === "nvme" ? "[&>.bg-primary]:bg-purple-600" : ""}`}
          />

          <div className="flex justify-between text-xs text-gray-400 px-1 mt-1 font-medium">
            <span>10 GB</span>
            <span>250 GB</span>
            <span>500 GB</span>
            <span>750 GB</span>
            <span>1 TB</span>
          </div>
        </div>

        <div className="text-right text-xs text-blue-400">
          {diskType === "ssd" ? "~ 5 ₽ за GB" : "~ 12 ₽ за GB (Быстрый)"}
        </div>
      </div>

      <div className="space-y-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <Label className="text-lg font-medium">Операционная система</Label>

        <RadioGroup
          value={os}
          onValueChange={(val: typeof os) => setOs(val)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {Object.entries(OS_ICONS).map(([key, icon]) => (
            <div key={key}>
              <RadioGroupItem value={key} id={key} className="peer sr-only" />

              <Label
                htmlFor={key}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 cursor-pointer transition-all h-32"
              >
                <img src={icon} alt={key} className="w-10 h-10 mb-3 mt-2" />
                <span className="font-semibold capitalize">{key}</span>

                {key === "windows" ? (
                  <span className="text-xs text-blue-600 font-bold bg-blue-100 px-2 py-1 rounded-full">
                    +800 ₽
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">Бесплатно</span>
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <label
        className={`flex items-center justify-between border-2 p-4 rounded-lg cursor-pointer transition-all ${isBackupEnabled ? "border-blue-600 bg-blue-50" : "border-muted hover:bg-slate-50"}`}
      >
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
