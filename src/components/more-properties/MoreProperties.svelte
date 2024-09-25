<script>
    const image = "https://rentalrealestate.com/wp-content/uploads/2022/07/buy-and-hold-real-estate-1024x576.png"
    const image1 = "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Fnv8k5s9szxja4b2pj0f4fnmfa7i215&option=N&permitphotoenlargement=false&w=1200"

</script>

<section style="background: var(--color-bg-3); width:100%;">
    <div class="more-properties">
        <div class="box"
             style="background-image: url({image});"
        >
            <span>Explore Properties</span>
            <a href="/">
                <button>EXPLORE</button>
            </a>
        </div>
        <div class="box"
             style="background-image: url({image1});"
        >
            <span>International Properties</span>
            <button>SOON</button>
        </div>
    </div>
    <div style="
            background-color: var(--color-bg-1);
            height: 300px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;"
    >
            <span
                    style="
                    font-size: 30px;
                    font-weight: 300;
                "
            >Can't Find Your Home?</span>
        <button
                style="
                min-width: 100px;
                background: transparent;
                border: 2px solid white;
                color: white;
                cursor: pointer;
                padding: 10px 20px;
                transition: background-color 0.3s, color 0.3s;
                "
        >
            SOON
        </button>
    </div>
</section>


<style>
    .more-properties {
        height: 500px;
        display: flex;
        flex-direction: column;
    }

    .more-properties .box {
        align-items: center;
        background-position: center;
        background-size: cover;
        color: white;
        display: flex;

        flex: 1;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

    .more-properties .box span {
        font-size: 24px;
        font-weight: 300;
    }

    .more-properties .box button {
        min-width: 100px;
        background: transparent;
        border: 2px solid white;
        color: white;
        cursor: pointer;
        padding: 10px 20px;
        transition: background-color 0.3s, color 0.3s;
    }

    .more-properties .box button:hover {
        background-color: white;
        color: black;
    }


    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {

    }

    @media (min-width: 768px) {
        .more-properties {
            height: 450px;
        }

        .more-properties .box span {
            font-size: 30px;
            font-weight: 300;
        }
    }

    @media (min-width: 1024px) {
        .more-properties {
            height: 450px;
            flex-direction: row;
        }

        .more-properties .box span {
            font-size: 30px;
            font-weight: 300;
        }
    }

</style>