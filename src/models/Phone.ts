import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { PhoneDetails } from './PhoneDetails';
import { PhoneType } from '../types/PhoneType';

@Table({
  tableName: 'phones',
})

export class Phone extends Model<PhoneType> {
    @PrimaryKey
    @Column(DataType.STRING)
    id!: string;

    @Column(DataType.STRING)
    category!: string;

    @ForeignKey(() => PhoneDetails)
    @Column(DataType.STRING)
    phoneId!: string;

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