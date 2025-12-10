export interface Service {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  date?: string;
}

export const getServices = (): Service[] => {
  const modules = import.meta.glob('../content/services/*.json', { eager: true });
  return Object.values(modules).map((mod: any) => mod.default || mod);
};

export const getProjects = (): Project[] => {
  const modules = import.meta.glob('../content/projects/*.json', { eager: true });
  return Object.values(modules).map((mod: any) => mod.default || mod);
};
