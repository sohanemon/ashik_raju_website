export type Child = {
  children: React.ReactNode | string;
};
export type Details = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export type Skill = {
  name: string;
  level: 'Experienced' | 'Intermediate' | 'Basic';
};

export type SkillSet = {
  title: string;
  skills: Skill[];
};

export type ContactInfo = {
  icon: React.ReactNode;
  platform: string;
  handler: string;
  link: () => string;
};
