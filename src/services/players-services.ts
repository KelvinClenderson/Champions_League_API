import {
  deletePlayerById,
  findAllPlayers,
  findAndModifyPlayer,
  findPlayerById,
  insertPlayer,
} from "../repositories/player-repository";
import {
  statusCodeBadRequest,
  statusCodeCreated,
  statusCodeNoContent,
  statusCodeOk,
} from "../utils/http-helper";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { response } from "express";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await statusCodeOk(data);
  } else {
    response = await statusCodeNoContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  // Buscar o id dentro do repositorio.
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = await statusCodeOk(data);
  } else {
    response = await statusCodeNoContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  // Verifica se player != de nulo
  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = await statusCodeCreated();
  } else {
    response = await statusCodeBadRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDelete = await deletePlayerById(id);

  if (isDelete) {
    response = await statusCodeOk({ message: "Deleted" });
  } else {
    response = await statusCodeBadRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await findAndModifyPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = statusCodeBadRequest();
  } else {
    response = await statusCodeOk(data);
  }

  return response;
};
