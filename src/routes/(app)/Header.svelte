<script lang="ts">
    import {MenuIcon} from 'svelte-feather-icons'

    import {onMount} from 'svelte';
    import Menu from "./Menu.svelte";

    let menu = false;
    let hide = true;
    let changeColor = false;
    let prevScrollpos = 0;

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;

        hide = prevScrollpos > currentScrollPos || currentScrollPos < 1;
        changeColor = prevScrollpos > 100;

        prevScrollpos = currentScrollPos <= 0 ? 0 : currentScrollPos;
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<Menu bind:open={menu} />
<header class:hide={!hide} class:navbar-color={changeColor}>
    <nav>
        <div class="nav-left">
            <h1>
                <a class="navbar-brand" href="/" class:change-text-color={changeColor}>Jennifer Carter</a>
            </h1>
        </div>
        <div class="nav-right">
            <ul class="navigation">
                <li class="navigation-item">
                    <a href="/about" class="navigation-link" class:change-text-color={changeColor}>About Jennifer</a>
                </li>
<!--                <li class="navigation-item sub-nav-container">-->
<!--                    <a href="#" class="navigation-link">Properties</a>-->
<!--                    <ul class="sub-nav">-->
<!--                        <li class="sub-nav-item">-->
<!--                            <a href="/exclusive-listings" class="sub-nav__link"></a>-->
<!--                        </li>-->
<!--                        <li class="sub-nav-item">-->
<!--                            <a href="/recent-sales" class="sub-nav__link">Notable Recent Sales</a>-->
<!--                        </li>-->
<!--                        <li class="sub-nav-item">-->
<!--                            <a href="/recent-sales" class="sub-nav__link">Notable Recent Sales</a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </li>-->
                <li class="navigation-item">
                    <a href="" class="navigation-link"
                       class:change-text-color={changeColor}>Home Search</a>
                </li>
                <li class="navigation-item">
                    <a href="/get-in-touch" class="navigation-link"
                       class:change-text-color={changeColor}>Get in Touch</a>
                </li>
            </ul>
        </div>
        <button class="nav-menu"
             on:click={() => {menu = true}}>
            <MenuIcon size="32" class="text-white"/>
        </button>
    </nav>
</header>

<style>
    a {
        color: #ffffff
    }

    a:hover {
        text-decoration: none;
    }

    header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        transition: all 0.5s ease-in-out;
    }

    .hide {
        animation: slideUp 0.5s ease-in-out;
        top: -120px;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }

    nav {
        align-items: center;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;

        margin-left: auto;
        margin-right: auto;
        max-width: 1348px;
        padding: 24px 24px;
        width: 100%;

        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .navbar-color {
        background-color: #000000;
        transition: 0.5s ease-in-out;
    }

    nav .nav-left {
        flex-grow: 5;
    }

    nav .nav-left .navbar-brand {
        color: #ffffff;
        font-family: 'Amsterdam Four', sans-serif;
    }

    .nav-right {
        display: none;
    }

    .nav-menu {
        cursor: pointer;
        background-color: transparent;
        border: none;
        box-shadow: none;
    }

    .navigation {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        list-style-type: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        flex: 1;
    }

    .navigation-item {
        display: list-item;
        visibility: visible;
        height: auto;
    }

    .navigation-item .navigation-link {
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 5px 10px;
        font-size: 15px;
        border-bottom: none;
        border-bottom: transparent 2px solid;
    }

    .navigation-item .navigation-link:hover {
        border-bottom: var(--color-theme-1) 2px solid;
        transition: all 0.3s ease
    }

    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 1024px) {
        .nav-menu {
            display: none;
        }

        .nav-right {
            display: block;
        }

        /*a {*/
        /*    color: #ffffff*/
        /*}*/

        /*a:hover {*/
        /*    text-decoration: none;*/
        /*}*/

        /*header {*/
        /*    position: fixed;*/
        /*    top: 0;*/
        /*    width: 100%;*/
        /*    z-index: 100;*/
        /*    transition: all 0.5s ease-in-out;*/
        /*}*/

        /*.hide {*/
        /*    animation: slideUp 0.5s ease-in-out;*/
        /*    top: -120px;*/
        /*}*/

        /*@keyframes slideDown {*/
        /*    from {*/
        /*        transform: translateY(-100%);*/
        /*    }*/
        /*    to {*/
        /*        transform: translateY(0);*/
        /*    }*/
        /*}*/

        /*@keyframes slideUp {*/
        /*    from {*/
        /*        transform: translateY(0);*/
        /*    }*/
        /*    to {*/
        /*        transform: translateY(-100%);*/
        /*    }*/
        /*}*/

        /*nav {*/
        /*    align-items: center;*/
        /*    display: flex;*/
        /*    display: -webkit-box;*/
        /*    display: -webkit-flex;*/
        /*    display: -ms-flexbox;*/

        /*    margin-left: auto;*/
        /*    margin-right: auto;*/
        /*    max-width: 1348px;*/
        /*    padding: 24px 24px;*/
        /*    width: 100%;*/

        /*    -webkit-align-items: center;*/
        /*    -webkit-box-align: center;*/
        /*    -ms-flex-align: center;*/
        /*    -webkit-box-pack: center;*/
        /*    -ms-flex-pack: center;*/
        /*    -webkit-justify-content: center;*/
        /*    justify-content: center;*/
        /*}*/

        /*.navbar-color {*/
        /*    background-color: #000000;*/
        /*    transition: 0.5s ease-in-out;*/
        /*}*/

        /*.navbar-brand {*/
        /*    color: #ffffff;*/
        /*    font-family: 'Amsterdam Four', sans-serif;*/
        /*}*/

        /*.nav-right {*/
        /*    display: -webkit-box;*/
        /*    display: -webkit-flex;*/
        /*    display: -ms-flexbox;*/
        /*    display: flex;*/
        /*    -webkit-align-items: center;*/
        /*    -webkit-box-align: center;*/
        /*    -ms-flex-align: center;*/
        /*    align-items: center;*/
        /*    -webkit-box-flex: 1;*/
        /*    -webkit-flex-grow: 1;*/
        /*    -ms-flex-positive: 1;*/
        /*    flex-grow: 1;*/
        /*    -webkit-flex-basis: 50%;*/
        /*    -ms-flex-preferred-size: 50%;*/
        /*    flex-basis: 50%;*/
        /*    -webkit-box-pack: end;*/
        /*    -ms-flex-pack: end;*/
        /*    -webkit-justify-content: flex-end;*/
        /*    justify-content: flex-end;*/
        /*}*/

        /*.navigation {*/
        /*    display: -webkit-box;*/
        /*    display: -webkit-flex;*/
        /*    display: -ms-flexbox;*/
        /*    display: flex;*/
        /*    -webkit-box-pack: end;*/
        /*    -ms-flex-pack: end;*/
        /*    -webkit-justify-content: flex-end;*/
        /*    justify-content: flex-end;*/
        /*    -webkit-align-items: center;*/
        /*    -webkit-box-align: center;*/
        /*    -ms-flex-align: center;*/
        /*    align-items: center;*/
        /*    list-style-type: none;*/
        /*    margin: 0;*/
        /*    padding: 0;*/
        /*    -webkit-box-flex-wrap: wrap;*/
        /*    -webkit-flex-wrap: wrap;*/
        /*    -ms-flex-wrap: wrap;*/
        /*    flex-wrap: wrap;*/
        /*    -webkit-flex: 1;*/
        /*    -ms-flex: 1;*/
        /*    flex: 1;*/
        /*}*/

        /*.navigation-item {*/
        /*    display: list-item;*/
        /*    visibility: visible;*/
        /*    height: auto;*/
        /*}*/

        /*.navigation-item .navigation-link {*/
        /*    text-transform: uppercase;*/
        /*    letter-spacing: 2px;*/
        /*    padding: 5px 10px;*/
        /*    font-size: 15px;*/
        /*    border-bottom: none;*/
        /*    border-bottom: transparent 2px solid;*/
        /*}*/

        /*.navigation-item .navigation-link:hover {*/
        /*    border-bottom: var(--color-theme-1) 2px solid;*/
        /*    transition: all 0.3s ease*/
        /*}*/

        /*.navigation-item .sub-nav-container {*/
        /*    position: relative;*/
        /*    padding-right: 21px;*/
        /*}*/

        /*.sub-nav {*/
        /*    position: absolute;*/
        /*    left: 0;*/
        /*    top: 100%;*/
        /*    padding: 0;*/
        /*    max-height: 0;*/
        /*    z-index: 5;*/
        /*    margin: 0;*/
        /*    list-style-type: none;*/
        /*    overflow: hidden;*/
        /*    visibility: hidden;*/
        /*    -webkit-transition: visibility 0s linear 0.3s, max-height 0.3s ease;*/
        /*    transition: visibility 0s linear 0.3s, max-height 0.3s ease;*/
        /*}*/
    }

</style>
