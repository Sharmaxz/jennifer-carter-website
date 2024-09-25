<script>
    import jennifer from "$lib/images/jennifer/1.jpg";
</script>

<section class="parallax" style="background-image: url({jennifer});">
    <div class="container">
        <div>
            <h2>Work with Jennifer Carter</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
                massa semper risus laoreet dictum quis ut metus. Ut eu porttitor nibh. Nunc ut risus id elit
                pellentesque semper. Curabitur ac felis felis. In at mi aliquam, hendrerit urna ac, vulputate elit.
                Phasellus sollicitudin sapien eget mattis condimentum. In hac habitasse platea dictumst. Quisque
                porttitor lacinia rhoncus. Donec sed augue facilisis, eleifend mauris auctor, malesuada velit. Quisque
                sed lectus vehicula ex auctor auctor vel vel felis.
            </p>
        </div>

        <a href="/">
            <button>
                LET'S CONNECT
            </button>
        </a>
    </div>
</section>

<style>
    .parallax {
        align-items: center;
        color: white;
        display: flex;
        justify-content: center;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .parallax .container {
        margin: 50px auto;
        max-width: 1348px;
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .parallax .container h2 {
        margin-bottom: 20px;
        font-size: 32px;
    }

    .parallax .container div {
        margin: 0;
        max-width: 600px;
        text-align: left;
    }

    .parallax .container p {
        font-size: 18px;
        text-align: justify;
    }

    .parallax div button {
        background: transparent;
        border: 2px solid white;
        color: white;
        cursor: pointer;
        padding: 10px 20px;
        margin-top: 20px;
        transition: background-color 0.3s, color 0.3s;
    }

    .parallax div button:hover {
        background-color: white;
        color: black;
    }


    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {

    }

    @media (min-width: 768px) {
        .parallax .container {
            display: block;
            margin: 100px auto;
        }

        .parallax .container h2 {
            margin-bottom: 25px;
            font-size: 34px;
        }

        .parallax .container p {
            font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        .parallax .container {
            display: block;
            margin: 100px auto;
        }

        .parallax .container h2 {
            margin-bottom: 25px;
            font-size: 34px;
        }

        .parallax .container p {
            font-size: 16px;
        }
    }
</style>