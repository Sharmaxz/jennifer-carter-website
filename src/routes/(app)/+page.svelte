<script>
    import WorkWithJessica from "../../components/work-with-jennifer/WorkWithJennifer.svelte";
    import RecentProperties from "../../components/recent-properties/RecentProperties.svelte";
    import MoreProperties from "../../components/more-properties/MoreProperties.svelte";
    import VideoSpotlight from "../../components/video-spotlight/VideoSpotlight.svelte";
</script>

<div class="video-container">
    <div class="video-overlay"></div>
    <video class="video" autoplay muted loop>
        <source src="https://jessicataylorrealty.my.canva.site/videos/a68f28d2888fe2ddfc7a097449904c7f.mp4"
                type="video/mp4"/>
        Your browser doesn't have support for video.
    </video>
</div>

<div style="background: var(--color-bg-2);">
    <div style="height: 500px; margin-left: auto;
    margin-right: auto;
    max-width: 1348px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
}">
    </div>
</div>

<section style="width:100%;
            background: var(--color-bg-1);
            position: relative;">
    <RecentProperties/>
</section>

<VideoSpotlight/>

<MoreProperties/>

<WorkWithJennifer/>

<style>
    h2 {
        font-size: 32px;
        padding: 15px;
    }

    .video-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }

    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    .video-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

</style>