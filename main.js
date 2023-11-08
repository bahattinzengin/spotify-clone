import { API} from './scripts/api.js'
import { ele, 
         renderCards,
         renderLoader,
         renderPlayingInfo,
    
      } from './scripts/ui.js'

// clasın bir örneğini oluşturma

const api =new API ();

document.addEventListener('DOMContentLoaded', async()=>{
    
    renderLoader();
await api.getPopular ();
renderCards (api.songs);


});
// müzik listesindeki tıklanma olaylarını izler

ele.list.addEventListener('click' , (e) => {
    // console.log(e.target);

    if (e.target.id === 'play-btn'){
        // oynat butonuna en yakın .card classına ulaşmak
const parent =e.target.closest('.card');

// müziğin bilgilerini ekrana basma
renderPlayingInfo(parent.dataset);
    }
});


ele.searchForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
const query =e.target[0].value;
// form boşsa  fon durdur
if (!query) return;

renderLoader();

// başlığı güncelleme
ele.title.innerHTML = `${query} İçin Sonuçlar`

// apiden şarkıları alma

api.searchMusic(query);

})