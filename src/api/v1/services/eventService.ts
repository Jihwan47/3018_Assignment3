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

    // get id from the data base
    const newEventId = await eventRepository.createDocument("events", newEvent);
    // get information of id
    const dbDocument = await eventRepository.getDocumentById("events", newEventId);
    // save the data as Event format
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
};

export const getAllEvents = async (): Promise<Event[]> => {

    const document = await eventRepository.getDocuments("events");


    // use map to allocate document data and transform into Event data form
    return document.docs.map(doc => ({
        ...(doc.data() as Event)
    }));
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
    
    const document = await eventRepository.getDocumentById("events", id);

    if(!document){
        throw new Error("Id is invalid");
    }
    
    const data = document.data() as Omit<Event, "id">;

    return {
        id: document.id,
        ...data
    }
};


