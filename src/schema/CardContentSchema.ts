export interface CardContentSchema {
    content?: {
        avatars_key: string;
        group_id: number;

        sizes?: {
            orig?: {
                width: number;
                height: number;
            };
        };
    };
}
