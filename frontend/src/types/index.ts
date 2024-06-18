export type Book = {
    title: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
}

export type BookInput = {
    input: DeleteInput
}

export type DeleteInput = {
    title: string
}