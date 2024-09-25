<script>
    import {Carousel} from 'flowbite-svelte';

    let index = 0;
    let forward = false;

    export const images = [
        {
            alt: 'Cosmic timetraveler',
            src: 'https://r4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-98e65da890c0cc28802c611ed89204da.jpg',
            title: 'https://r4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-98e65da890c0cc28802c611ed89204da.jpg',
            price: '10,234,567',
            address: '1234 Sebastian Creek',
            details: '6 BEDS | 9 BATHS | 1234 SQ.FEAT'
        },
        {
            alt: 'Cristina Gottardi',
            src: 'https://r4.wallpaperflare.com/wallpaper/857/906/482/house-modern-luxury-architecture-wallpaper-1e7d2757a8f843ddf425f200030cec95.jpg',
            title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
            price: '1,234,567',
            address: '5651 Murray Tunnel',
            details: '4 BEDS | 6 BATHS | 1234 SQ.FEAT'
        },
        {
            alt: 'Johannes Plenio',
            src: 'https://r4.wallpaperflare.com/wallpaper/965/572/899/cape-town-mountains-house-swimming-pool-wallpaper-3fe1693926c5c789d852694d9c68d572.jpg',
            title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
            price: '9,999,999',
            address: '8404 Ruby Grove',
            details: '5 BEDS | 4 BATHS | 1234 SQ.FEAT'
        },
    ];

</script>

<div style="
    position: absolute;
    height: 100%;
    z-index: 2;
    width: 100%;
">
    <!--Make it clickable -->
</div>
<Carousel {images} {forward} duration={8000}
          let:Indicators let:Controls bind:index>
    <a slot="slide" href="{images[index]?.title}" target="_blank" let:Slide let:index>
        <div class="details-container">
            <div class="details">
                <h3>${images[index]?.price}</h3>
                <h4>{images[index]?.address}</h4>
                <span>{images[index]?.details}</span>
            </div>
        </div>
        <Slide image={images[index]}/>
    </a>
    <Controls class="z-index: 3"/>

    <Indicators/>
</Carousel>


<style>
    h3 {
        font-size: 42px;
        font-weight: 200;
    }

    h4 {
        font-size: 30px;
        font-weight: 200;
    }

    span {
        font-size: 16px;
        font-weight: 200;
    }

    .details-container {
        background: linear-gradient(to top, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
        bottom: 0;
        height: 200px;
        padding: 15px 15px 0 15px;
        position: absolute;
        width: 100%;
        z-index: 1
    }

    .details-container .details {
        align-items: flex-end;
        color: white;
        display: flex;
        flex-direction: column;
        font-weight: 200;
    }
</style>