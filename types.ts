
export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}
