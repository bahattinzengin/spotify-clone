export const ele = {
    list: document.querySelector('#list'),
    playingInfo: document.querySelector(".playing "),
    searchForm: document.querySelector("#search-form "),
    title: document.querySelector(".songs  #title "),
};



//  ara yüz işlemleri

export const renderCards = (songs) => {
    // eski şarkıları sil
    ele.list.innerHTML = " ";

    // console.log(songs);
    songs.forEach((song) => {

        // console.log(song);

        // div oluşturma

        const div = document.createElement('div');


        // kart elemanlarına ileride js den erişmek için bazı veriler ekleyeceğiz

        // (?.)  conditional chaining  dir
        div.dataset.url = song.hub?.actions.pop().uri;  //pop () dizideki son elemana ulaşılır
        div.dataset.title = song.title;
        div.dataset.photo = song.images.coverart;

        // console.log(song);

        // class verme

        div.className = "card"
        div.innerHTML = `
                    <figure>
                        <img
                            src=" ${song.images?.coverart}" />
                        <div class="play">
                            <i id="play-btn" class="bi bi-play-fill"></i>
                        </div>
                    </figure>
                    <h4>${song.subtitle}</h4>
                    <p>${song.title}</p>


`
            ;
        ele.list.appendChild(div);
    });

};

// müziğin bilgilerini ekrana basar

export const renderPlayingInfo = (data) => {
    ele.playingInfo.innerHTML =
        `

<div class="info">
<img class ="animate"
src="${data.photo}">

<div>
    <p>Şuan oynatılıyor</p>
    <h3> ${data.title}</h3>
</div>

</div>

<audio controls autoplay>
<source src="${data.url}"/>
</audio>
`;

};
// ekrana loading ekleme
export const renderLoader =()=>{
    ele.list.innerHTML=
    `<div class="loader">
    <div class="red bar"></div>
    <div class="orange bar"></div>
    <div class="yellow bar"></div>
    <div class="green bar"></div>
    <div class="blue bar"></div>
    <div class="violet bar"></div>
  </div>

    `}
