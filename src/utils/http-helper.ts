import { HttpResponse } from "../models/http-response-model";

export const statusCodeOk = async (data: any): Promise<HttpResponse> => {
  return { statusCode: 200, body: data };
};

export const statusCodeCreated = async (): Promise<HttpResponse> => {
  return { statusCode: 201, body: { message: "Created" } };
};

export const statusCodeNoContent = async (): Promise<HttpResponse> => {
  return { statusCode: 204, body: null };
};

export const statusCodeBadRequest = async (): Promise<HttpResponse> => {
  return { statusCode: 400, body: "Bad Request" };
};
