import { CalculatorForm } from "./components/CalculatorForm";
import { Receipt } from "./components/Receipt";
import { Github } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#F3F7FA] py-10 px-4">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Cloud Configurator
        </h1>

        <a
          href="https://github.com/lga1156/cloud-calc"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm active:scale-95"
        >
          <Github className="w-5 h-5" />
          <span>View Source</span>
        </a>
      </header>
      <div className="max-w-7xl mx-auto">
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
