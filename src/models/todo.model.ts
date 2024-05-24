import { v4 as uuidv4 } from 'uuid';

export class Todo {
    constructor(
        public id: string,
        public title: string,
        public isComplete: boolean
    ) { 
        this.id = uuidv4(); // Automatically generate a new UUID
    }
}
