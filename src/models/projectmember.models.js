import mongoose, { Schema } from "mongoose";
import { AvailableUserRole, UserRolesEnums } from "../utils/constants.js";

const projectMemberSchema = new Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    project: {
      type: String,
      ref: "Project",
      required: true,
    },
    role: {
      type: String,
      enum: AvailableUserRole,
      default: UserRolesEnums.MEMBER,
    },
  },
  { timestamps: true },
);

export const ProjectMember = mongoose.model(
  "ProjectMember",
  projectMemberSchema,
);
