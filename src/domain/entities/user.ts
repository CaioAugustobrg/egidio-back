import { Entity } from "../core/Entity";

export interface UserProps {
  name: string;
  email: string;
  userRoleId: string;
  systemRole?: "USER" | "BLOCKED" | "CREATED" | "PENDING" | "BANNED";
}

export class User extends Entity<UserProps> {
  public name: string;
  public email: string;
  public systemRole?: "USER" | "BLOCKED" | "CREATED" | "PENDING" | "BANNED";
  public userRoleId: string;

  constructor(props: UserProps) {
  super();
    this.name = props.name;
    this.email = props.email;
    this.userRoleId = props.userRoleId;
    this.systemRole = props.systemRole ?? "CREATED";
  }
}
