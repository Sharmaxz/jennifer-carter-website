<script lang="ts">
    import { browser } from '$app/environment';
    import {XIcon, ChevronDownIcon, MenuIcon} from 'svelte-feather-icons'

    export let open = false;

    $: if (browser) document.body.classList.toggle('no-scroll', open);
</script>

<div class="menu" class:open={open}>
    <nav style="display: flex; align-items: center">
        <div class="nav-left">
            <h1>
                <a class="navbar-brand" href="/" on:click={() => open = false}>Jennifer Carter</a>
            </h1>
        </div>
        <button class="close"
             on:click={() => open = false}>
            <XIcon size="32" class="text-white" />
        </button>
    </nav>

    <div style="overflow-y: scroll; margin: 5px 0 30px 30px; height: 100%;">
        <ul>
            <li class="navigation-item">
                <a href="/" on:click={() => open = false}>Home</a>
            </li>
            <li class="navigation-item">
                <a href="/about" on:click={() => open = false}>About Jennifer</a>
            </li>
<!--            <li class="navigation-item sub-nav-container">-->
<!--                <a>Properties</a>-->
<!--                <ChevronDownIcon size="32" class="text-white"/>-->
<!--                <ul class="sub-nav">-->
<!--                    <li class="sub-nav-item">-->
<!--                        <a href="/recent-sales" class="sub-nav__link">Exclusive</a>-->
<!--                    </li>-->
<!--                    <li class="sub-nav-item">-->
<!--                        <a href="/recent-sales" class="sub-nav__link">Notable Recent Sales</a>-->
<!--                    </li>-->
<!--                    <li class="sub-nav-item">-->
<!--                        <a href="/recent-sales" class="sub-nav__link">International</a>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </li>-->
            <li class="navigation-item">
                <a href="" on:click={() => open = false}>Home Search</a>
            </li>
            <li class="navigation-item">
                <a href="/get-in-touch" on:click={() => open = false}>Get in Touch</a>
            </li>
        </ul>
    </div>
</div>

<style>
    a {
        color: #ffffff
    }

    .menu {
        background-color: var(--color-bg-3);
        border-left: 5px solid var(--color-theme-1);
        height: 100%;
        position: fixed;
        overflow: hidden;
        top: -100%;
        width: 100%;
        z-index: 101;
        animation: slideUp 0.4s ease-in-out;
    }

    .open {
        animation: slideDown 0.4s ease-in-out;
        display: block;
        top: 0;
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
        padding: 24px 24px;
    }

    .nav-left {
        flex-grow: 5;
    }

    .navigation-item {
        align-items: center;
        border-bottom: 1px solid #292929;
        display: flex;
        flex-wrap: wrap;
        list-style:none;
        margin-right: 30px;
        font-size: 25px;
        font-weight: 200;
        padding: 15px 0 15px 0;
        text-transform: uppercase;
        flex-basis: 30%;
    }

    .navigation-item a {
        flex-grow: 1;
    }

    .navbar-brand {
        color: #ffffff;
        font-family: 'Amsterdam Four', sans-serif;
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

    ul {
        padding: 0;
    }

    ul li {

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

    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {

    }

    @media (min-width: 768px) {

    }

    @media (min-width: 1024px) {

    }

</style>
