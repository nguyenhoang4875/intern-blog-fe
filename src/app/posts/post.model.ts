export class Post{
    public title: string;
    public content: string;
    public dateCreate: Date;
    public imagePath: string;

    constructor(title: string, content: string, dateCreate: Date, imagePath: string)    {
        this.title = title;
        this.content= content;
        this.dateCreate = dateCreate;
        this.imagePath = imagePath;
    }
}
