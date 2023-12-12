import { Table, Column, Model, PrimaryKey , AllowNull, AutoIncrement, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id!: number;

  @AllowNull(false)
  @Unique(true)
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @AllowNull(false)
  @Column
  password!: string;



}

