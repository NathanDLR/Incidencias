export class Incidencia {

    // Attibutes & Variables
    private id: number;
    private name: String;
    private description: String;
    private date: Date;
    private solved: Boolean;

    // Constructor
    constructor(id:number, name: String, description: String, date: Date, solved: Boolean){

        this.id = id; // Autonumeric id
        this.name = name;
        this.description = description;
        this.date = date;
        this.solved = solved;
    }

    // Getters & Setters
    public getID(){
        return this.id
    }

    public getName(){
        return this.name 
    }

    public setName(name: String){
        this.name = name;
    }

    public getDesc(){
        return this.description;
    }

    public setDesc(description: String){
        this.description = description;
    }

    public getDate(){
        return this.date;
    }

    public setDate(date: Date){
        this.date = date;
    }

    public getSolved(){
        return this.solved;
    }

    public setSolved(solved: Boolean){
        this.solved = solved;
    }

}
