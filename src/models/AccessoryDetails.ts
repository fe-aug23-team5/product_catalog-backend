import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    AllowNull
  } from 'sequelize-typescript';
  
  import { DetailsType } from '../types/DetailsType';
  
  @Table({
    tableName: 'accessory_details',
  })
  export class AccessoryDetails extends Model<DetailsType> {
    @PrimaryKey
    @AllowNull(false)
    @Column(DataType.STRING)
    id!: string;
  
    @Column(DataType.STRING)
    namespaceId!: string;
  
    @Column(DataType.STRING)
    name!: string;
  
    @AllowNull(true)
    @Column(DataType.JSONB)
    capacityAvailable!: string[];
  
    @Column(DataType.STRING)
    capacity!: string;
  
    @Column(DataType.INTEGER)
    priceRegular!: number;
  
    @Column(DataType.INTEGER)
    priceDiscount!: number;
  
    @Column(DataType.JSONB)
    colorsAvailable!: string[];
  
    @Column(DataType.STRING)
    color!: string;
  
    @Column(DataType.JSONB)
    images!: string[];
  
    @Column(DataType.JSONB)
    description!: { title: string; text: string[] }[];
  
    @Column(DataType.STRING)
    screen!: string;
  
    @Column(DataType.STRING)
    resolution!: string;
  
    @Column(DataType.STRING)
    processor!: string;
  
    @Column(DataType.STRING)
    ram!: string;
  
    @Column(DataType.JSONB)
    cell!: string[];
  }
  