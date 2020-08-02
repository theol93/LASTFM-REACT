export default class SearchStore{
    constructor() {
        this.start = 'http://ws.audioscrobbler.com/2.0/?method=';
        this.apiKey = '&api_key=ae106d678c11a00457038f9cd9ad465d&format=json';
    }

    async getUrl(text, type) {
        const url = this.start + type + text + this.apiKey;
        this.getResponse(url, type);
    }

    async getResponse(url) {
        const response = await fetch(url);
        const myJson = await response.json();
        console.log(myJson);
    }
}


