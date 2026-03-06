import { useCalculatorStore } from "../store/useCalculatorStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const Receipt = () => {
  const totalPrice = useCalculatorStore((state) => state.totalPrice());
  const { cpu, ram, diskSize, diskType, isBackupEnabled } =
    useCalculatorStore();

  return (
    <Card className="w-full sticky top-4">
      <CardHeader>
        <CardTitle>Итоговая стоимость</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>CPU: {cpu} ядер</span>
          </div>
          <div className="flex justify-between">
            <span>RAM: {ram} GB</span>
          </div>
          <div className="flex justify-between">
            <span>
              Disk: {diskSize} GB ({diskType.toUpperCase()})
            </span>
          </div>
          {isBackupEnabled && (
            <div className="text-green-600 font-medium">+ Бэкапы включены</div>
          )}
        </div>

        <div className="border-t pt-4">
          <div className="text-4xl font-black">
            {totalPrice} ₽{" "}
            <span className="text-lg text-gray-400 font-normal">/ мес.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
