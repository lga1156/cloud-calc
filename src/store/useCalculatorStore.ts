import { create } from "zustand";
import { PRICING } from "../constants";

interface CalculatorState {
  cpu: number;
  ram: number;
  diskType: "ssd" | "nvme";
  diskSize: number;
  os: "ubuntu" | "debian" | "centos" | "arch" | "rocky" | "fedora" | "windows";
  isBackupEnabled: boolean;

  setCpu: (count: number) => void;
  setRam: (count: number) => void;
  setDiskType: (type: "ssd" | "nvme") => void;
  setDiskSize: (size: number) => void;
  setOs: (
    os:
      | "ubuntu"
      | "debian"
      | "centos"
      | "arch"
      | "rocky"
      | "fedora"
      | "windows",
  ) => void;
  toggleBackup: () => void;

  totalPrice: () => number;
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  cpu: 1,
  ram: 4,
  diskType: "ssd",
  diskSize: 50,
  os: "ubuntu",
  isBackupEnabled: false,

  setCpu: (cpu) =>
    set((state) => {
      const maxRamAllowed = cpu * 16;

      const newRam = state.ram > maxRamAllowed ? maxRamAllowed : state.ram;

      return { cpu, ram: newRam };
    }),
  setRam: (ram) =>
    set((state) => {
      const minCpuNeeded = Math.ceil(ram / 16);

      const newCpu = state.cpu < minCpuNeeded ? minCpuNeeded : state.cpu;

      return { ram, cpu: newCpu };
    }),
  setDiskType: (diskType) => set({ diskType }),
  setDiskSize: (diskSize) => set({ diskSize }),
  setOs: (os) => set({ os }),

  toggleBackup: () =>
    set((state) => ({ isBackupEnabled: !state.isBackupEnabled })),

  totalPrice: () => {
    const state = get();

    let price =
      state.cpu * PRICING.cpuPerCore +
      state.ram * PRICING.ramPerGb +
      state.diskSize * PRICING.disk[state.diskType] +
      PRICING.os[state.os];

    if (state.isBackupEnabled) {
      price = price * PRICING.backupMultiplier;
    }

    return price;
  },
}));
