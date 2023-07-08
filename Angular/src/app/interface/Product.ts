import ObjectId from 'bson-objectid';

export interface IProduct {
    _id?: any,
    name: string,
    auther: string,
    published: string,
    description: string,
    image: string,
    price: number,
    quantity: number,
    date: string,
    categoryId?: ObjectId
}