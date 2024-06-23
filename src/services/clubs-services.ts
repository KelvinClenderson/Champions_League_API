import { findAllClubs } from "../repositories/clubs-repository";
import { statusCodeOk } from "../utils/http-helper";

export const getClubService = async () => {
  const data = await findAllClubs();
  const response = statusCodeOk(data);

  return response;
};
