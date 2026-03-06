export type OsType =
  | "ubuntu"
  | "debian"
  | "centos"
  | "arch"
  | "rocky"
  | "fedora"
  | "windows";
export type DiskType = "ssd" | "hdd";

export interface ServerState {
  cpu: number;
  memory: number;
  diskType: DiskType;
  diskSize: number;
  os: OsType;
  isBackupEnabled: boolean;
}
