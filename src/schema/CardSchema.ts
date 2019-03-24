import {CardContentSchema} from './CardContentSchema';
import {UserSchema} from './UserSchema';

export interface CardSchema {
    id: string;

    description?: string;
    content?: CardContentSchema[];
    owner?: UserSchema;
}
