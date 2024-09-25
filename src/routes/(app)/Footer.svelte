<script>
    import {ChevronRightIcon} from 'svelte-feather-icons'
    import realtorLogo from '$lib/images/logos/realtor-logo.png';
    import Divider from "../../components/divider/Divider.svelte";

    let now = new Date().getFullYear();

</script>

<footer class="roboto-thin">
    <div class="container">
        <div class="premiere-group-logo">
            <div class="social-media  m-2">
                <ul class="m-0">
                    <li>
                        <a href="https://www.instagram.com/"
                           class="border"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                 viewBox="0 0 50 50">
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/"
                           class="flex items-center justify-center border rounded-full w-9 h-9 border-neutral-700 text-gold hover:text-white hover:border-neutral-600"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                 viewBox="0 0 24 24">
                                <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/"
                           class="flex items-center justify-center border rounded-full w-9 h-9 border-neutral-700 text-gold hover:text-white hover:border-neutral-600"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                 viewBox="0 0 30 30">
                                <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/"
                           class="flex items-center justify-center border rounded-full w-9 h-9 border-neutral-700 text-gold hover:text-white hover:border-neutral-600"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/"
                           class="flex items-center justify-center border rounded-full w-9 h-9 border-neutral-700 text-gold hover:text-white hover:border-neutral-600"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                 viewBox="0 0 16 16">
                                <path d="M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113281 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113281 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363281 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863281 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863281 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="contact">
            <!--            <div>-->
            <!--                <h5 class="contact-title">Jennifer Taylor</h5>-->
            <!--                <div>-->
            <!--                    <p>-->
            <!--                        <a href="tel:+19105449897">(910) 544-9897</a>-->
            <!--                        <br>-->
            <!--                        <a href="mailto:jennifer-realty.com">jennifer-realty.com</a>-->
            <!--                    </p>-->
            <!--                </div>-->
            <!--            </div>-->

            <!--            <div class="address">-->
            <!--                <h5 class="contact-title">Address</h5>-->
            <!--                <div>-->
            <!--                    <p>-->
            <!--                        <a href="tel:+19105449897">578 White Shl Wy. <br> Sneads Ferry, NC 28460 </a>-->
            <!--                    </p>-->
            <!--                </div>-->
            <!--            </div>-->

            <div class="newsletter">
                <h5 class="contact-title">Newsletter</h5>
                <div>
                    <p style="margin:0">
                        Stay up-to-date with exclusive news and market updates.
                    </p>
                    <div class="newsletter-input-container">
                        <input type="text" placeholder="Your email">
                        <div style="
                        border-bottom-color: var(--color-theme-1);
                        top:20%;
                        right:0;
                        position:absolute;
                               cursor: pointer;">
                            <ChevronRightIcon size="24"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="disclaimer">
            <br>
            <p>
                Jennifer Carter is a real estate salesperson affiliated with the Realtor.
                All content provided on this website is intended for informational purposes only. Information is
                gathered from sources deemed reliable but may be subject to errors, omissions, changes in price,
                condition, sale, or withdrawal without prior notice. No statement is made regarding the accuracy of any
                property description. All measurements and square footages are approximate. This website does not intend
                to solicit properties already listed with other brokers. Nothing contained herein should be construed as
                legal, accounting, or other professional advice beyond the scope of real estate brokerage.
                <br>
            </p>
        </div>

        <div class="logos">
            <img id="realtor-logo" src="{realtorLogo}" alt="Realtor Logo">
        </div>

        <Divider color="white"/>
        <div class="container-footer">
            <div class="container-footer-left">
                <a href="/privacy-policy">Privacy Policy</a>
                <Divider color="white" horizontal={false}/>
                <a href="/terms-and-conditions">Terms of Use</a>
            </div>

            <div class="footer-logo">
                <a href="/">Jennifer Carter</a>
            </div>

            <div class="text-center">
                © <span class="auto-year-update">{now}</span> Jennifer Carter. All rights reserved
            </div>
        </div>
    </div>
</footer>

<style>
    a:hover {
        color: white;
        transition: background-color 0.3s, color 0.3s;
    }

    li::marker {
        content: none;
    }

    footer {
        background-color: black;
        height: auto;
        width: 100%;
        padding-top: 65px;
        padding-bottom: 35px;
        color: white;
    }

    .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 1348px;
        padding-left: 24px;
        padding-right: 24px;
        width: 100%;
    }

    footer .logos {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }

    footer .logos #realtor-logo {
        height: 40px;
        margin-right: 15px;
        margin-bottom: 10px;
    }

    footer .container .premiere-group-logo {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 32px;
    }

    footer .container-footer {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 25px;
        font-size: 14px;
        justify-content: space-between;
    }

    footer .container .contact {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    footer .container .address div {
        cursor: pointer;
    }

    footer .container .address p:hover a {
        color: white;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    footer .container .newsletter-input-container {
        position: relative;
    }

    footer .container .newsletter input {
        background: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: var(--color-theme-1);
        border-left-color: transparent;
        border-left-width: 0;
        color: white;
        font-weight: 400;
        padding-left: 0;
        padding-right: 25px;
        width: 100%;
    }

    footer .container .newsletter input:focus-visible {
        caret-color: var(--color-theme-1);
        outline: none;
        box-shadow: none;
    }

    footer .container .newsletter input:focus-within {
        caret-color: var(--color-theme-1);
        outline: none;
        box-shadow: none;
    }

    footer .container .social-media ul {
        display: flex;
        gap: 10px;
    }

    footer .container .social-media a {
        align-items: center;
        border: var(--bs-border-width) var(--bs-border-style) var(--color-theme-1) !important;
        border-color: rgb(38, 38, 38, 1);
        border-radius: 9999px;
        border-width: 2px;
        display: flex;
        height: 2.25rem;
        justify-content: center;
        transition: border 0.3s, color 0.3s;
        width: 2.25rem;
    }

    footer .container .social-media li:hover a {
        border: var(--bs-border-width) var(--bs-border-style) white !important;
        transition: border 0.3s, color 0.3s;
    }

    footer .container .social-media a svg {
        display: inline-block;
        height: 1rem;
        fill: var(--color-theme-1);
        width: 1rem;
        transition: fill 0.3s, color 0.3s;
    }

    footer .container .social-media li:hover a svg {
        fill: white;
        transition: fill 0.3s, color 0.3s;
    }

    footer .container .contact-title {
        font-size: 30px;
    }

    footer .container .contact {
        font-size: 16px;
    }

    footer .container .disclaimer {
        font-size: 12px;
        margin-bottom: 35px;
        text-align: justify;
    }

    footer .container-footer .container-footer-left {
        align-items: center;
        display: flex;
        height: 40px;
    }

    footer .container-footer .footer-logo {
        font-family: "Amsterdam Four", sans-serif;
        font-size: 30px;
    }

    @media (min-width: 480px) {

    }

    @media (min-width: 600px) {
        footer .container .contact {
            justify-content: space-between;
        }

        footer .logos {
            justify-content: center;
            flex-direction: row;
            gap: 5px;
        }
    }

    @media (min-width: 768px) {
        footer .logos {
            justify-content: unset;
            flex-direction: row;
            gap: 5px;
        }

        footer .container .contact {
            justify-content: space-between;
        }


        footer .container .premiere-group-logo {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 32px;
        }

        footer .container-footer {
            flex-direction: row;
        }
    }

    @media (min-width: 1024px) {
        h1 {
            font-size: 2.4rem;
        }

        footer .container .contact {
            justify-content: space-between;
        }

        footer .logos {
            justify-content: unset;
            flex-direction: row;
            gap: 5px;
        }

        footer .container-footer {
            flex-direction: row;
        }
    }
</style>
