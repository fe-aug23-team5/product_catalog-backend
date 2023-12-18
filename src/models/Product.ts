import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { PhoneDetails } from './PhoneDetails';
import { ProductType } from '../types/ProductType';
import { TabletDetails } from './TabletDetails';
import { AccessoryDetails } from './AccessoryDetails';

@Table({
  tableName: 'products',
})

export class Product extends Model<ProductType> {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    category!: string;

    @ForeignKey(() => PhoneDetails)
    @ForeignKey(() => TabletDetails)
    @ForeignKey(() => AccessoryDetails)
    @Column(DataType.STRING)
    itemId!: string;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.INTEGER)
    fullPrice!: number;

    @Column(DataType.INTEGER)
    price!: number;

    @Column(DataType.STRING)
    screen!: string;

    @Column(DataType.STRING)
    capacity!: string;

    @Column(DataType.STRING)
    color!: string;

    @Column(DataType.STRING)
    ram!: string;

    @Column(DataType.INTEGER)
    year!: number;

    @Column(DataType.STRING)
    image!: string;
}