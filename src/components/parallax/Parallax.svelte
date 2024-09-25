<script>
    export let image = ""
    export let height = 500
    export let backgroundAttachment = "fixed";
    export let content = "";
</script>

<style>
    .parallax {
        align-items: center;
        color: white;
        display: flex;
        justify-content: center;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .parallax .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 1348px;
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
    }

    .parallax .container div {
        margin: 0;
        max-width: 600px;
        text-align: left;
    }
</style>

<section class="parallax" style="background-image: url({image}); height: {height}px; background-attachment: {backgroundAttachment}">
    <div class="container">
        {content}
    </div>
</section>