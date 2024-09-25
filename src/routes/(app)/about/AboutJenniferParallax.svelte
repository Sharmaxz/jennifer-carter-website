<script>
    const image = 'https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/01/roberto-migotto-casa-de-praia-1.jpg?quality=100&strip=info&w=2048'
</script>

<section class="parallax" style="background-image: url({image});">
    <div class="container">
        <div>
            <h2 class="roboto-light">COOL TITLE</h2>
            <span>
                COOL SUBTITLE
            </span>
        </div>
    </div>
</section>

<style>
    section {
        padding: 25px;
    }

    .parallax {
        align-items: end;
        color: white;
        display: flex;
        height: 350px;
        justify-content: center;
        background-attachment: fixed;
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

    .parallax .container h2 {
        margin-bottom: 15px;
        font-size: 46px;
    }

    .parallax .container div {
        margin: 0;
        max-width: 600px;
        text-align: left;
    }

    .parallax .container span {
        font-family: Roboto, serif;
        text-align: justify;
        font-size: 20px;
        font-weight: 300;
    }

    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 1024px) {
        .parallax {
            align-items: end;
            color: white;
            display: flex;
            height: 500px;
            justify-content: center;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .parallax .container h2 {
            font-size: 56px;
            margin-bottom: 20px;
        }
    }
</style>