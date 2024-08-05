import { Entity } from "../core/Entity";
import { Role } from "./role";

interface UserRoleProps {
  userId: string;
  roleId: string;
}

export class UserRole extends Entity<UserRoleProps> {
  public userId: string;
  public roleId: string;

  constructor(props: UserRoleProps) {
    super();
    this.userId = props.userId;
    this.roleId = props.roleId;
  }
}
