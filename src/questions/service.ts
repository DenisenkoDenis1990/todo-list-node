import {getTestById} from "./model";

export const getTest = async () => {
  return getTestById(1);
};
