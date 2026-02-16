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

    const countEvents = await eventRepository.getDocuments("events");
    const count = countEvents.size + 1;
    const formattedId = `evt_${String(count).padStart(6,"0")}`;


    // get information of id
    const dbDocument = await eventRepository.getDocumentById("events", newEventId);
    // save the data as Event format
    const savedData = dbDocument?.data() as Event;

    return {
        id: formattedId,
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

export const updateEvent = async (id: string, updateData: Omit<Event, "id" | "createdAt"> ): Promise<Event> => {
    
    const existingDocument = await getEventById(id);

    if(!existingDocument){
        throw new Error("Id is invalid");
    }

    // update the data of the id
    await eventRepository.updateDocument("events", id, {...updateData, updatedAt: new Date()});

    // object spread operator to merge updated code into existing one
    return {
        ...existingDocument,
        ...updateData,
        updatedAt: new Date()
    }
};

export const deleteEvent = async (id: string): Promise<void> => {

    const document = await getEventById(id);

    if(!document){
        throw new Error("Id is invalid");
    }

    await eventRepository.deleteDocument("events", id);

}