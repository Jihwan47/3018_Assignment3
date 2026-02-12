import { Event, CreateEventRequest } from "../models/postModel";
import * as eventRepository from "../repositories/eventRepository"

export const createEvent = async (event: CreateEventRequest): Promise<Event> => {

    // create new event
    const newEvent: Partial<Event> = {
        name: event.name,
        date: new Date(),
        capacity: event.capacity,
        registrationCount: event.registrationCount,
        status: event.status,
        category: event.category,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const newEventId = await eventRepository.createDocument("events", newEvent);

    const dbDocument = await eventRepository.getDocumentById("events", newEventId);
    const savedData = dbDocument?.data() as Event;

    return {
        id: newEventId,
        name: savedData.name,
        date: savedData.date,
        capacity: savedData.capacity,
        registrationCount: savedData.registrationCount,
        status: savedData.status,
        category: savedData.category,
        createdAt: savedData.createdAt,
        updatedAt: savedData.updatedAt
    }
    
}


