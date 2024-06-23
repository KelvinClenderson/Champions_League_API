import { Request, Response, response } from "express";
import { HttpResponse } from "../models/http-response-model";
import {
  createPlayerService,
  deletePlayerService,
  getPlayerByIdService,
  getPlayerService,
  updatePlayerService,
} from "../services/players-services";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const body = req.body;
  const HttpResponse = await createPlayerService(body);

  if (HttpResponse) {
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const HttpResponse = await deletePlayerService(id);

  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const body: StatisticsModel = req.body;
  const HttpResponse = await updatePlayerService(id, body);

  res.status(HttpResponse.statusCode).json(HttpResponse.body);
};
