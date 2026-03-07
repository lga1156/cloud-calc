export type OsType = "ubuntu" | "debian" | "centos" | "windows";
export type DiskType = "ssd" | "nvme";

export interface ServerState {
  cpu: number;
  memory: number;
  diskType: DiskType;
  diskSize: number;
  os: OsType;
  isBackupEnabled: boolean;
}
