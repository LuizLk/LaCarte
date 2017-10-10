import {
  AbstractEntity,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
  VersionColumn
} from "typeorm";

@AbstractEntity()
export abstract class BaseEntity {
  @PrimaryColumn("int", {
    type: "int",
    generated: true
  })
  public id: number;
  @CreateDateColumn() public createdAt?: Date;
  @UpdateDateColumn() public updatedAt?: Date;
  @VersionColumn() public version?: number;
}
