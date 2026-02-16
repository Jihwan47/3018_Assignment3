export enum Status {
    active = "active",
    cancelled = "cancelled",
    completed = "completed"
}

export enum Category {
    conference = "conference",
    workshop = "workshop",
    meetup = "meetup",
    seminar = "seminar",
    general = "general"
}

export interface CreateEventRequest{
    name: string,
    date: Date,
    capacity: number,
    registrationCount?: number,
    status?: Status,
    category?: Category
}

export interface Event {
    id: string,
    name: string,
    date: Date,
    capacity: number,
    registrationCount?: number,
    status?: Status,
    category?: Category,
    createdAt: Date,
    updatedAt: Date
}


//example be 
//const response: ApiResponse<Event>
// message: message
// data: event