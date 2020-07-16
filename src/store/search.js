export default class SearchStore{
    constructor() {
        this.start = 'http://ws.audioscrobbler.com/2.0/';
        this.apiKey = 'ae106d678c11a00457038f9cd9ad465d';
        this.format = '&format=json';
    }
    getSearch(){
        let search = querySelector
        return search
    }
    getUrl(text, type) {
        const url = this.start + text + this.apiKey + this.format;
        this.getResponse(url, type);
    }

    async getResponse(url, type) {
        const response = await fetch(url);
        const myJson = await response.json();
        // const view = new View(myJson);
        // view.renderMatch(type);
    }

    static song(){


    }

    static artist(){
        console.log(2)
    }
}


