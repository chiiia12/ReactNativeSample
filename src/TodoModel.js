import Utils from './Utils';

class TodoModel {
    constructor(title,completed){
        this.id = Utils.guid();
        this.title = title;
        this.completed = completed || false;
        this.createdAt = new Date();
        this.updateAt = new Date();
    }
}
module.exports = TodoModel;
