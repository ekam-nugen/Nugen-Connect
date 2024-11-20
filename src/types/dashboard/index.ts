export type QuickTaskType = {
  icons: React.ReactNode;
  iconDescription: string;
  color: string;
};

export type AttendanceType = {
  icons: React.ReactNode;
  iconDescription: string;
};

export type ChecklistType = {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: string;
  status: string;
  color: string;
};
