<script>
    import {browser} from "$app/environment";
    import {PlayIcon, XIcon} from "svelte-feather-icons";

    // const image = "https://rentalrealestate.com/wp-content/uploads/2022/07/buy-and-hold-real-estate-1024x576.png"
    const video = "https://www.youtube.com/embed/J---aiyznGQ?si=aMuF9Cy5VFyEgbNM?enablejsapi=1&&rel=0"

    export let open = false;
    $: if (browser) document.body.classList.toggle('no-scroll', open);
</script>

<section class="video-spotlight">
    <div class="box">
        <h2>Video Spotlight</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>
    </div>
    <button class="video-thumbnail"
            on:click={() => open = true}
    >
        <PlayIcon size="32" class="text-white m-auto" />
    </button>
    <div class="box" style="background: var(--color-bg-2);" />

    <div class="modal" class:open={open}>
        <div style="position: absolute; width: 100%; z-index: 1001">
            <nav style="display: flex; align-items: center">
                <button class="close" on:click={() => open = false}>
                    <XIcon size="32" class="text-white"/>
                </button>
            </nav>
        </div>
        <div class="modal-content">
            <div class="video-container">
                <div>
                    <iframe title="YouTube video player"
                            width="560" height="315"
                            src={video}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                    />
                </div>
            </div>
        </div>
    </div>
</section>


<style>
    .video-spotlight {
        background: var(--color-bg-3);
        position: relative;
    }

    .video-spotlight .box {
        height: 200px;
        padding-left: 24px;
        padding-right: 24px;
        text-align: center;
        width: 100%;
    }

    .video-spotlight .box h2 {
        color: white;
        font-size: 32px;
        font-weight: 400;
        padding-top: 25px;
        padding-bottom: 15px;
    }

    .video-spotlight .box span {
        color: white;
        font-size: 18px;
        font-weight: 300;
    }

    .video-spotlight .video-thumbnail {
        background-size: contain !important;
        background: url("https://i.ytimg.com/vi/zcSiAuRTsvg/maxresdefault.jpg") no-repeat center;
        height: 135px;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -30%);
        width: 240px;
    }

    .modal {
        background-color: rgba(0, 0, 0, .92);
        display: none;
        height: 100%;
        left: 0;
        overflow-y: auto;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    .open {
        display: block;
        top: 0;
    }

    .modal-content {
        align-items: center;
        background-color: unset;
        display: flex;
        justify-content: center;
        min-height: 100vh;
        position: relative;
        width: 100%;
        top: 0;
    }

    .video-container {
        max-width: 177vh;
        width: 100%;
        display: block;
        unicode-bidi: isolate;
        box-sizing: border-box;
    }

    .video-container div {
        height: 0;
        padding-bottom: 56.25%;
        position: relative;
    }

    .video-container iframe {
        height: 100%;
        left: 0;
        margin: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    nav {
        padding: 24px 24px;
    }

    .close {
        align-items: center;
        background-color: transparent;
        border: none;
        box-shadow: none;
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
    }

    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {
        .video-spotlight .video-thumbnail {
            height: 270px;
            transform: translate(-50%, -50%);
            width: 480px;
        }

        .video-spotlight .box {
            height: 300px;
        }
    }

    @media (min-width: 768px) {
        .video-spotlight .video-thumbnail {
            height: 360px;
            transform: translate(-50%, -50%);
            width: 640px;
        }

        .video-spotlight .box {
            height: 400px;
        }
    }

    @media (min-width: 1024px) {
        .video-spotlight .video-thumbnail {
            height: 540px;
            transform: translate(-50%, -50%);
            width: 960px;
        }

        .video-spotlight .box {
            height: 400px;
        }
    }

</style>