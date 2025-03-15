export interface Feedback {
    id: number;
    name: string;
    email: string;
    phone: string;
    rating: number;
    comments: string;
  }
  
  export type Filter = "All" | "Positive" | "Negative";
  