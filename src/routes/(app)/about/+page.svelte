<script>
    import MeetTheTeam from "./MeetTheTeam.svelte";
    import AboutJenniferParallax from "./AboutJenniferParallax.svelte";
    import WorkWithJennifer from "../../../components/work-with-jennifer/WorkWithJennifer.svelte";
    import Jennifer2 from "$lib/images/jennifer/1.jpg";
    import Person1 from "$lib/images/team/1.jpeg";
    import Person2 from "$lib/images/team/2.jpg";
    import Person3 from "$lib/images/team/3.jpeg";
</script>


<!--<AboutJenniferParallax/>-->

<section class="about">
    <div class="about-container">
        <div class="image" style="background: url({Jennifer2}); background-position: center; background-size: cover"/>
        <div>
            <h2>JENNIFER CARTER</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis dui ac diam ultrices, quis
                pharetra lorem volutpat. Maecenas arcu libero, ornare quis molestie in, vulputate non quam. Sed
                egestas
                luctus porttitor. Maecenas consectetur tellus quis ligula congue dapibus. Integer tincidunt ornare
                odio,
                vitae porttitor mi iaculis vitae. Quisque suscipit tellus in odio bibendum, vel hendrerit dui
                ultricies.
                Fusce nec vulputate ante. Integer eget placerat ex. Nunc a ipsum blandit, vulputate ligula sed,
                lobortis
                turpis. Integer lacinia dolor quis turpis cursus lacinia. Curabitur rutrum augue non egestas
                feugiat.
            </p>
            <br/>
            <p>
                Pellentesque venenatis in enim eu imperdiet. Duis imperdiet lacinia tellus et sodales. Nunc eu
                maximus
                lacus. Integer condimentum elit blandit lacus interdum, at iaculis metus tristique. Sed lobortis
                elementum libero, id cursus tortor gravida ac. Fusce rhoncus, enim nec dictum convallis, lorem enim
                finibus urna, in ultricies metus diam vitae odio. Aliquam enim risus, iaculis id varius eget,
                suscipit
                nec tellus. Proin ante enim, egestas at ligula nec, condimentum mattis ipsum. Nam diam enim, rutrum
                vitae nulla vitae, pretium malesuada nulla.
            </p>
            <br/>
        </div>
    </div>
</section>

<section class="working-with-jennifer">
    <div class="working-with-jennifer-container">
        <h3>WORKING WITH JENNIFER</h3>
        <div class="divider"/>
        <p>
            Cras eu iaculis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia
            curae; Morbi consectetur ligula aliquet, cursus tellus ut, ornare massa. Quisque in erat rhoncus,
            lacinia arcu eget, consequat purus. Nullam a massa vel sapien semper dapibus sit amet in erat. In
            quis
            ante nisl. Vestibulum viverra ultrices venenatis. Cras augue nisl, semper pellentesque nulla
            convallis,
        </p>
    </div>
</section>


<MeetTheTeam/>

<section class="team">
    <div class="container">
        <div class="person">
            <div>
                <img src={Person1}
                     alt="Samantha Reed - Director of Real Estate Operations"/>
            </div>
            <h4>Samantha Reed</h4>
            <h5>Director of Real Estate Operations</h5>
        </div>
        <div class="person">
            <div>
                <img src={Person2}
                     alt="Ethan Collins - Executive Assistant"/>
            </div>
            <h4>Ethan Collins</h4>
            <h5>Executive Assistant</h5>
        </div>
        <div class="person">
            <div>
                <img src={Person3}
                     alt="Olivia Brooks - Director of Agent Attraction and Success"/>
            </div>
            <h4>Olivia Brooks</h4>
            <h5> Director of Agent Attraction and Success</h5>
        </div>
    </div>
</section>

<WorkWithJennifer/>

<style>
    section {
        background: var(--color-bg-0);
        height: auto;
        padding: 100px;
        width: 100%;
    }

    section h3 {
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
    }

    .about {
        background: var(--color-bg-0);
        height: auto;
        padding: 50px 25px 20px 25px;
        width: 100%;
    }

    .about .about-container {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 1348px;
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
        gap: 35px;
    }

    .about .about-container .image {
        height: 350px;
        overflow: hidden;
        width: 100%;
    }

    .about h2 {
        border-bottom: var(--color-theme-1) 2px solid;
        display: inline-block;
        font-size: 52px;
        font-weight: 300;
        margin-bottom: 30px;
    }

    .about p {
        text-align: justify;
    }

    .working-with-jennifer {
        background-color: var(--color-bg-3);
        padding: 50px 25px;
    }

    .working-with-jennifer .working-with-jennifer-container {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 1348px;
        padding: unset !important;
        width: 100%;
    }

    .working-with-jennifer .working-with-jennifer-container h3 {
        align-self: baseline;
        border-bottom: var(--color-theme-1) 2px solid;
        color: white;
        font-size: 42px;
        max-width: 280px;
        margin-bottom: 30px;
        margin-top: 20px
    }

    .working-with-jennifer .working-with-jennifer-container .divider {
        background-color: white;
        width: 2px;
    }

    .working-with-jennifer .working-with-jennifer-container p {
        color: #797979;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
    }

    .team {
        margin: 0 auto;
        max-width: 1348px;
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .team .container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
    }

    .team .container .person {
        cursor: pointer;
        height: 350px;
        width: 300px;
    }

    .team .container .person img {
        display: block;
        height: 300px;
        margin: auto;
        width: 100%;
    }

    .team .container .person div {
        margin-bottom: 5px;
        overflow: hidden;
        width: 100%;
    }

    .team .container .person img:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }

    .team .container h4 {
        font-size: 24px;
        font-weight: 400;
    }

    .team .container h5 {
        font-size: 18px;
        font-weight: 300;
    }

    @media (min-width: 480px) {
        .about .about-container .image {
            height: 350px;
            overflow: hidden;
            min-width: 400px;
            min-height: 600px;
            width: 100%;
        }
    }

    @media (min-width: 600px) {
        .about .about-container .image {
            height: 350px;
            overflow: hidden;
            min-width: 520px;
            min-height: 700px;
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        .about .about-container .image {
            height: 350px;
            overflow: hidden;
            min-width: 620px;
            min-height: 800px;
            width: 100%;
        }
    }

    @media (min-width: 1024px) {
        section {
            background: var(--color-bg-0);
            height: auto;
            /*padding: 100px;*/
            width: 100%;
        }

        .about {
            background: var(--color-bg-0);
            height: auto;
            padding: 80px 25px 0 25px;
            width: 100%;
        }

        .about .about-container {
            display: flex;
            flex-direction: row-reverse;
            margin-left: auto;
            margin-right: auto;
            max-width: 1348px;
            padding-left: 24px;
            padding-right: 24px;
            width: 100%;
        }

        .about h2 {
            border-bottom: var(--color-theme-1) 2px solid;
            display: inline-block;
            font-size: 52px;
            font-weight: 300;
            margin-bottom: 30px;
        }

        .about p {
            text-align: justify;
        }

        .about .about-container .image {
            height: auto;
            overflow: hidden;
            width: 600px;
            min-width: 500px;
            min-height: 600px;
        }

        .working-with-jennifer {
            background-color: var(--color-bg-3);
            padding: 100px 25px;
        }

        .working-with-jennifer .container {
            margin-left: auto;
            margin-right: auto;
            max-width: 1348px;
            /*padding: 100px 24px;*/
            width: 100%;
            display: flex;
            flex-direction: row;
        }

        .working-with-jennifer .container h3 {
            align-self: center;
            border-bottom: none;
            color: white;
            font-size: 42px;
            padding-right: 20px;
            max-width: 300px;
        }

        .working-with-jennifer .container .divider {
            background-color: white;
            width: 2px;
        }

        .working-with-jennifer .container p {
            padding: 20px;
            text-align: justify;
            align-self: center;
        }

    }

</style>