import { NextFunction, Request, Response } from "express";
import { successResponse } from "../models/responseModel";
import * as eventService from "../services/eventService"

export const getAllEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const event = await eventService.getAllEvents();
        const totalCount = event ? 1: 0;
        res.status(200).json(successResponse(event, "Succesfully retreived", totalCount));
    } catch (error: unknown) {
        next(error);
    }
};

export const getEventById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = String(req.params.id);
        const event = await eventService.getEventById(id);

        res.status(200).json(successResponse(event, "Event retrieved successfully"));
    } catch (error: unknown) {
        next(error);
    }
};

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(successResponse(event, "Event created succesfully"));
    } catch (error: unknown) {
        next(error);
    }
};

export const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = String(req.params.id);

        const event = await eventService.updateEvent(id, req.body);
        res.status(200).json(successResponse(event, "Event updated succesfully"));
    } catch (error: unknown) {
        next(error);
    }
};

export const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = String(req.params.id);

        const event = await eventService.deleteEvent(id);
        res.status(200).json(successResponse(event, "Event deleted succesfully"));
    } catch (error: unknown) {
        next(error);
    }
};
