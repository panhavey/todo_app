export declare type Category = {
  id: string;
  name: string;
  color: string;
  createdAt: string;
};

export declare type Task = {
  id: string;
  title: string;
  description: string;
  category: string | Category;
  dueDate: string;
  isComplete: boolean;
};
