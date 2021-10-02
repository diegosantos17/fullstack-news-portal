import { Category } from "./category.model";

export interface News {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    categories: Category[]
}
