<script>
    import Parallax from "../../../../components/parallax/Parallax.svelte";
    import WorkWithJennifer from "../../../../components/work-with-jennifer/WorkWithJennifer.svelte";
</script>

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

    .about p {
        text-align: justify;
    }


</style>

<Parallax height={500}
          image="https://casacor.abril.com.br/wp-content/uploads/sites/7/2021/01/roberto-migotto-casa-de-praia-1.jpg?quality=100&strip=info&w=2048"/>

<section class="about">
    <div style="
            margin-left: auto;
            margin-right: auto;
            max-width: 1348px;
            padding-left: 24px;
            padding-right: 24px;
            width: 100%;
            display: flex"
    >

    </div>
</section>

<WorkWithJennifer/>




