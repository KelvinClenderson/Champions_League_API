import { json } from "express";
import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const database = await fs.readFile("./src/data/clubs.json", "utf8");
  const clubs: ClubModel[] = JSON.parse(database);
  return clubs;
};
