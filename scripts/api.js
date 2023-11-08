import { url, options } from "./constants.js"
import { renderCards } from "./ui.js"

//api işlemleri

export class API {
    constructor() {
        this.song = []
    }

    //popüler müzikleri için istek atma

    async getPopular() {
        try {
            //apiye istek atar
            const resp = await fetch(url, options);
            const data = await resp.json();
            // class ta tuttuğumuz değişkeni günceller
            this.songs = data.tracks;
        } catch (err) {
            console.log('Popüler verileri alırken hata oluştu', err);
        }

    }

    // aranılan içeriğe erişme
    async searchMusic(quary) {
        const res = await fetch(
            ` https://shazam.p.rapidapi.com/search?term=${quary}&locale=en-US&offset=0&limit=5  `, options

        );
        const data = await res.json();
        // console.log('eski hali', data.tracks.hits);

        const newData = data.tracks.hits.map((song) => ({ ...song.track, }));

        renderCards(newData);
    }
}