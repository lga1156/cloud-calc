import { CalculatorForm } from "./components/CalculatorForm";
import { Receipt } from "./components/Receipt";

function App() {
  return (
    <div className="min-h-screen bg-[#F3F7FA] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">
          Cloud Configurator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CalculatorForm />
          </div>

          <div className="md:col-span-1">
            <Receipt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
