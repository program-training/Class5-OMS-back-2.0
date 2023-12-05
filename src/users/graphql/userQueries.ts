import { createUser, getUsers, login } from "./userResolvers";

export const userQueries = {
  getUsers,
  login,
};

export const usersMutation = {
  createUser,
};
