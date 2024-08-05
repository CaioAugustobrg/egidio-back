import { Entity } from "../core/Entity";

interface RoleProps {
    name: string;
    description?: string;
    userRoleId?: string;

  }
  
 export class Role  extends Entity<RoleProps> {
    public name: string;
    public description?: string;
    public userRoleId?: string;

  
    constructor(props: RoleProps) {
        super()
      this.name = props.name;
      this.description = props.description;
      this.userRoleId = props.userRoleId;
    }
  }