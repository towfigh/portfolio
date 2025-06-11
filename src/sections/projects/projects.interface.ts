interface Point {
  id: number;
  title: string;
  description: string;
}

export interface ProjectImage {
  id: number;
  title: string;
  img: string;
}

export interface Project {
  id: number;
  from: string;
  to: string;
  role: string;
  company: string;
  points: Point[];
  images: ProjectImage[];
}
