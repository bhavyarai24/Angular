import { Review } from './review';

export class Dish {
    id: string;
    image_link: string;
    type: string;
    price: number;
    description: string;
    name: string;
    reviews: string[];
    cuisine: string;
    createdAt: string;
    updatedAt: string;
    featured: boolean;
    published: boolean;
    count: Number;
}