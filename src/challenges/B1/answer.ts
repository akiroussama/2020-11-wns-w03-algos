/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!
export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    return events.sort((a, b) => a.startDatetime > b.startDatetime ? 1 : (a.startDatetime === b.startDatetime ? (a.endDatetime > b.endDatetime ? 1 : -1) : -1));
}

// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}