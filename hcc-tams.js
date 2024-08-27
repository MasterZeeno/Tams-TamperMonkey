// ==UserScript==
// @name                 HCC TAMSv3
// @namespace            http://tampermonkey.net/
// @version              0.1
// @icon                 data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgICA8cGF0aCBmaWxsPSIjMDAzNjdjIiBkPSJNIDcuNDQxNDA2IDkuNTM5MDYyIEwgNi4xMDE1NjIgOS41MzkwNjIgQyA1LjA5Mzc1IDkuNTg5ODQ0IDQuNDk2MDk0IDkuNzYxNzE5IDQuNDI1NzgxIDExLjUwMzkwNiBMIDQuNDI1NzgxIDE1Ljk0MTQwNiBDIDAuMDUwNzgxMiAxNS45NDE0MDYgMC4wNTA3ODEyIDE1Ljk0MTQwNiAwLjA1MDc4MTIgMTMuOTYwOTM4IEwgMC4wNTA3ODEyIDIuMDYyNSBDIDAuMDUwNzgxMiAwLjA3ODEyNSAwLjA1MDc4MTIgMC4wNzgxMjUgNC40MjU3ODEgMC4wNzgxMjUgTCA0LjQyNTc4MSA0LjUxMTcxOSBDIDQuNDI1NzgxIDYuMTQ0NTMxIDUuMDkzNzUgNi40MjU3ODEgNi4xMDE1NjIgNi40ODQzNzUgTCA5Ljg5ODQzOCA2LjQ4NDM3NSBDIDEwLjkxNzk2OSA2LjQwNjI1IDExLjU3NDIxOSA2LjE0NDUzMSAxMS41NzQyMTkgNC41MTk1MzEgTCAxMS41NzQyMTkgMC4wNzgxMjUgQyAxNS45Njg3NSAwLjA3ODEyNSAxNS45NDkyMTkgMC4wNzgxMjUgMTUuOTQ5MjE5IDIuMDYyNSBMIDE1Ljk0OTIxOSAxMy45NjA5MzggQyAxNS45NDkyMTkgMTUuOTQxNDA2IDE1Ljk2ODc1IDE1Ljk0MTQwNiAxMS41NzQyMTkgMTUuOTQxNDA2IEwgMTEuNTc0MjE5IDExLjUwMzkwNiBDIDExLjU4NTkzOCA5Ljc2MTcxOSAxMC45MTc5NjkgOS41OTc2NTYgOS44OTg0MzggOS41MzkwNjIgWiBNIDcuNDQxNDA2IDkuNTM5MDYyICIgLz4KICAgIDxwYXRoIGZpbGw9IiNjZDAwMDAiIGQ9Ik0gOCAzLjMwODU5NCBDIDcuNDQxNDA2IDMuMzA4NTk0IDcuNDQxNDA2IDIuNDU3MDMxIDguMDIzNDM4IDIuNDU3MDMxIEwgMTAuNzc3MzQ0IDIuNDU3MDMxIEwgMTAuNzc3MzQ0IDEuMzA4NTk0IEMgMTAuNzc3MzQ0IDAuOTE0MDYyIDEwLjc3NzM0NCAwLjA1MDc4MTIgOS45ODQzNzUgMC4wNTA3ODEyIEwgNi4yMTg3NSAwLjA3ODEyNSBDIDUuMjIyNjU2IDAuMDc4MTI1IDUuMjIyNjU2IDAuODcxMDk0IDUuMjIyNjU2IDEuMjY5NTMxIEwgNS4yMjI2NTYgNC40NDE0MDYgQyA1LjIyMjY1NiA0LjgzNTkzOCA1LjIyMjY1NiA1LjY5OTIxOSA2LjIxODc1IDUuNjk5MjE5IEwgOS45ODQzNzUgNS43MTQ4NDQgQyAxMC43NzczNDQgNS43MTQ4NDQgMTAuNzc3MzQ0IDQuODUxNTYyIDEwLjc3NzM0NCA0LjQ1NzAzMSBMIDEwLjc3NzM0NCAzLjMwODU5NCBaIE0gOC4wMDc4MTIgMTMuNTQyOTY5IEMgNy40NDkyMTkgMTMuNTQyOTY5IDcuNDQ5MjE5IDEyLjY5MTQwNiA4LjAzNTE1NiAxMi42OTE0MDYgTCAxMC43ODUxNTYgMTIuNjkxNDA2IEwgMTAuNzg1MTU2IDExLjU0Mjk2OSBDIDEwLjc4NTE1NiAxMS4xNDg0MzggMTAuNzg1MTU2IDEwLjI4NTE1NiA5Ljk5MjE4OCAxMC4yODUxNTYgTCA2LjIyNjU2MiAxMC4zMTI1IEMgNS4yMzA0NjkgMTAuMzEyNSA1LjIzMDQ2OSAxMS4xMDU0NjkgNS4yMzA0NjkgMTEuNTAzOTA2IEwgNS4yMzA0NjkgMTQuNjc1NzgxIEMgNS4yMzA0NjkgMTUuMDc0MjE5IDUuMjMwNDY5IDE1LjkzNzUgNi4yMjY1NjIgMTUuOTM3NSBMIDkuOTkyMTg4IDE1Ljk0OTIxOSBDIDEwLjc4NTE1NiAxNS45NDkyMTkgMTAuNzg1MTU2IDE1LjA4NTkzOCAxMC43ODUxNTYgMTQuNjkxNDA2IEwgMTAuNzg1MTU2IDEzLjU0Mjk2OSBaIE0gOC4wMDc4MTIgMTMuNTQyOTY5ICIgLz4KPC9zdmc+
// @description          The new and improved Tams.
// @author               Master Zeeno
// @match                https://hcc-tams.com.ph/tams*
// @grant                none
// @run-at               document-start
// ==/UserScript==

(function() {
    'use strict';
    const bootstrap_CSS_link=`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`
    const bootstrap_JS_link=`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`

    const customConfigs = {
        "defaults": [
            `<div id="coverWindow" style="display:flex;position:fixed;min-height:100vh;min-width:100vw;bottom:0;right:0;z-index:9999">
                <div id="zeeContainer" class="container">
                    <div id="titleContainer" class="container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 24" shape-rendering="geometricPrecision" id="zeelogo">
                            <path class="blue" d="M11.16 14.305H9.152c-1.511.078-2.406.336-2.511 2.949v6.66c-6.567 0-6.567 0-6.567-2.973V3.094C.074.117.074.117 6.641.117v6.649c0 2.449 1 2.87 2.511 2.96h5.696c1.53-.117 2.511-.511 2.511-2.949V.117c6.594 0 6.567 0 6.567 2.977V20.94c0 2.973.027 2.973-6.567 2.973v-6.66c.016-2.613-.98-2.86-2.511-2.95zm0 0" />
                            <path class="red" d="M12 4.96c-.84 0-.84-1.272.04-1.272h4.128V1.964c0-.594 0-1.89-1.195-1.89L9.328.116c-1.492 0-1.492 1.192-1.492 1.785V6.66c0 .598 0 1.89 1.492 1.89l5.645.024c1.195 0 1.195-1.297 1.195-1.89V4.96zm.012 15.353c-.84 0-.84-1.274.039-1.274h4.129v-1.723c0-.593 0-1.89-1.196-1.89l-5.644.043c-1.492 0-1.492 1.191-1.492 1.785v4.762c0 .593 0 1.886 1.492 1.886l5.644.024c1.196 0 1.196-1.297 1.196-1.89v-1.724zm0 0" />
                            <path class="blue" d="M39.035 21.5c0 .36-.926.54-2.781.54-1.86 0-2.785-.18-2.785-.54V8.137h-3.371c-.325 0-.551-.41-.676-1.235a8.048 8.048 0 0 1-.086-1.195c0-.41.027-.809.086-1.2.125-.816.351-1.222.676-1.222h12.226c.32 0 .547.406.672 1.223.059.39.086.789.086 1.199 0 .406-.027.805-.086 1.195-.125.825-.351 1.235-.672 1.235h-3.289zm16.149.488c-1.625 0-2.508-.25-2.641-.75l-.93-3.437h-4.465l-.816 3.304c-.113.551-1.016.829-2.7.829-.898 0-1.566-.047-2.003-.145-.43-.102-.645-.18-.645-.234L45.961 3.52c0-.137 1.285-.208 3.855-.208 2.567 0 3.848.07 3.848.208l4.867 18.062c0 .125-.433.227-1.293.297-.863.07-1.547.11-2.054.11zm-7.332-7.57h2.945L49.53 8.902h-.168zm32.043 7.543c-1.665 0-2.497-.18-2.497-.531l-.601-10.684-3.43 10.809c-.074.215-.71.324-1.906.324-1.2 0-1.816-.098-1.856-.297l-3.543-10.945-.398 10.629c-.02.265-.375.445-1.062.543-.7.101-1.274.152-1.73.152-.462 0-.911-.027-1.34-.082-.9-.125-1.34-.348-1.321-.664l.644-17.317c0-.425 1.145-.64 3.43-.64.68 0 1.504.047 2.48.144.977.094 1.516.29 1.626.575l3.152 8.39 2.758-8.418c.168-.46 1.46-.691 3.875-.691.695 0 1.527.047 2.488.144.969.094 1.453.27 1.453.524l.817 17.476c0 .192-.368.332-1.102.422-.727.09-1.375.137-1.937.137zm6.128-6.527c.356.265.97.629 1.844 1.09.867.46 1.7.695 2.496.695.797 0 1.2-.297 1.2-.883 0-.266-.114-.5-.336-.703-.227-.203-.641-.442-1.243-.711a40.098 40.098 0 0 1-1.347-.621c-.301-.149-.7-.399-1.2-.746-.492-.348-.87-.707-1.128-1.082-.754-1.012-1.133-2.301-1.133-3.86 0-1.566.617-2.886 1.844-3.96 1.23-1.075 2.835-1.61 4.828-1.61 1.347 0 2.593.137 3.73.414 1.149.273 1.738.637 1.777 1.078V4.7c0 .617-.207 1.403-.617 2.356-.41.949-.703 1.476-.875 1.586-1.195-.59-2.27-.883-3.218-.883-.946 0-1.418.32-1.418.965 0 .386.347.734 1.039 1.035.148.07.367.168.644.297.285.117.61.261.969.43.367.175.762.39 1.187.648.418.254.871.59 1.36 1.015.992.891 1.492 2.063 1.492 3.52 0 1.902-.555 3.457-1.664 4.664-1.102 1.203-2.805 1.824-5.11 1.863-1.128 0-2.144-.09-3.05-.261-.914-.18-1.707-.528-2.383-1.043-.672-.512-1.008-1.133-1.008-1.864 0-.726.137-1.449.418-2.172.285-.718.586-1.19.902-1.421zm0 0" />
                            <path class="red" d="M100.93 10.105c0-.57.34-.851 1.023-.851l5.5-.027c.547 0 .961.074 1.246.222.285.153.535.453.75.91l2.328 4.121c.063.192.196.29.399.29.195 0 .344-.098.445-.29l2.395-4.707c.132-.289.316-.457.55-.503.07-.012.188-.016.352-.016l2.621-.027c.234 0 .395.101.477.304.05.098.078.203.078.324 0 .122-.043.25-.125.387-2.27 4.422-4.125 7.848-5.578 10.278-.278.41-.727.722-1.348.945a5.896 5.896 0 0 1-2.023.332c-1.63 0-2.715-.399-3.258-1.195-.54-.797-1.11-1.711-1.711-2.739A157.31 157.31 0 0 1 103 14.246a162.553 162.553 0 0 0-1.797-3.195c-.183-.364-.273-.68-.273-.946zm20.46 6.817 3.157.113c.93 0 1.652-.195 2.164-.594a1.11 1.11 0 0 0 .477-.945c0-1.008-.641-1.512-1.922-1.512-.47 0-1 .055-1.594.164-.602.114-.965.172-1.082.172-.719 0-1.074-.578-1.074-1.73 0-.492.09-.809.273-.953.184-.137.418-.223.703-.25a9.98 9.98 0 0 1 1.121-.067c.469-.004.88-.015 1.227-.035.98-.078 1.664-.258 2.05-.539.383-.289.57-.652.57-1.09 0-.441-.17-.785-.51-1.023-.345-.235-.782-.352-1.313-.352-1.043 0-2.11.442-3.192 1.32a.953.953 0 0 1-.59.192c-.226 0-.437-.133-.636-.398-.305-.364-.453-.887-.453-1.567 0-.676.113-1.148.34-1.422.222-.261.66-.55 1.312-.863.652-.305 1.625-.606 2.926-.898 1.297-.29 2.527-.434 3.683-.434 1.157 0 2.114.066 2.88.2.769.132 1.527.355 2.28.675a4.375 4.375 0 0 1 1.805 1.375c.461.594.696 1.3.696 2.117a3.67 3.67 0 0 1-.676 2.168c-.45.629-1.094 1.055-1.93 1.277 1.117.38 1.957.946 2.527 1.704a4.13 4.13 0 0 1 .848 2.527c0 1.8-.746 3.172-2.234 4.113-1.496.938-3.356 1.403-5.586 1.403-4.028 0-6.828-.243-8.399-.727-.746-.242-1.172-.645-1.273-1.215a5.84 5.84 0 0 1-.047-.875c0-.394.016-.687.047-.871.082-.773.558-1.16 1.426-1.16zm0 0" />
                       </svg>
                    </div>
                </div>
            </div>`,
            `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
            :root,
            [data-bs-theme=light] {
                --main-txt-color: rgb(205, 0, 0);
                --secondary-txt-color: rgb(0, 56, 108);
                --reverse-txt-color: var(--secondary-txt-color);
                --input-txt-color: rgb(0, 56, 108);
                --background-color: rgb(240, 240, 255);
                --background-color-variant1: rgb(216,216,230);
                --background-color-variant2: rgb(255,255,255);
                --background-color-variant3: rgb(180,180,191);
                --background-color-variant4: rgb(255,255,255);
                --button-txt-color: rgb(240, 240, 255);
            }
            @media (prefers-color-scheme: dark) {
                :root,
                [data-bs-theme=dark] {
                    --main-txt-color: rgb(255, 1, 1);
                    --secondary-txt-color: rgb(6, 135, 255);
                    --reverse-txt-color: rgb(240, 240, 255);
                    --background-color: rgb(24, 24, 39);
                    --background-color-variant1: rgb(22,22,35);
                    --background-color-variant2: rgb(26,26,42);
                    --background-color-variant3: rgb(18,18,29);
                    --background-color-variant4: rgb(30,30,49);
                }
            }
            body {
                font-family: "Noto Sans", sans-serif;
                font-size: 16px !important;
                font-weight: 400;
                font-style: normal;
                -webkit-text-size-adjust: 100%;
                line-height: 1;
                margin: 0;
                padding: 0;
                overflow: hidden;
                -webkit-box-sizing: border-box !important;
                box-sizing: border-box !important;
            }
            body, #coverWindow, .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--background-color);
            }
            .container {
                min-width: 300px;
            }
            .zee-hidden {
                display: none;
            }
            #titleContainer {
                flex-direction: row;
                padding-bottom: clamp(1rem, 2%, 1.5rem);
            }
            #zeelogo {
                height: clamp(20px, 6.667vw, 40px);
                stroke: var(--background-color);
                stroke-width: clamp(0.2px, 0.0667vw, 0.5px);
                display: block;
                isolation: isolate;
                filter: drop-shadow(4px 5px 4px rgb(0 0 0 / 0.35));
            }
            #zeelogo .red {
                fill: var(--main-txt-color);
            }
            #zeelogo .blue {
                fill: var(--secondary-txt-color);
            }
            .zee-red {
                color: var(--main-txt-color);
            }
            .zee-blue {
                color: var(--secondary-txt-color);
            }
            .zee-reverse {
                color: var(--reverse-txt-color);
            }
            .zee-blue-buttons {
                background-color: var(--secondary-txt-color);
            }
            .zee-red-buttons {
                background-color: var(--main-txt-color);
            }
            .zee-buttons {
                color: var(--button-txt-color);
                font-weight: 700;
                outline: none;
                opacity: 0.85;
                transition: 0.5s ease;
            }
            .zee-buttons:not(.zee-disabled):hover {
                opacity: 1;
            }
            .zee-buttons.zee-disabled {
                opacity: 0.3;
            }`
        ],
        "login": [
            `<div id="zeelogincontainer" class="container">
                <p id="zee-header" class="zee-red">Please log in to continue.</p>
                <form class="zee-login-form">
                    <input type="text" id="zee-idnumber" placeholder="ID Number" required>
                    <input type="password" id="zee-password" placeholder="Password" required>
                    <button id="zee-submit" type="button" class="zee-blue-buttons zee-buttons">Login</button>
                    <p id="error-message" class="zee-red zee-hidden">Invalid account details.</p>
                </form>
            </div>`,
            `#zeelogincontainer p {
                font-size: 0.8em;
                font-style: italic;
                text-align: center;
                isolation: isolate;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }
            #zee-header {
                padding-bottom: 0.69vmax;
            }
            .zee-login-form {
                width: 100%;
                font-size: 0.8em;
                // border: 0.015625em solid var(--secondary-txt-color);
                border-radius: 1.875em;
                padding: 1em 0 1.5em;
                max-width: 300px;
                background: linear-gradient(145deg, var(--background-color-variant1), var(--background-color-variant2));
                box-shadow:  50px 50px 100px var(--background-color-variant3),
                    -50px -50px 100px var(--background-color-variant4);
            }
            .zee-login-form > *:not(p) {
                display: block;
                padding: 0.6em 1em;
                margin: 1.5em auto;
                border: none;
                outline: 0.015625em solid var(--secondary-txt-color);
                border-radius: 1.875em;
                width: 69.69%;
            }
            .zee-login-form > input {
                background-color: rgba(var(--secondary-txt-color), 0.23);
                color: var(--input-txt-color);
            }`
        ]
    };

    function appendCustomConfig(customConfig) {
        const [customElements, customStyles] = customConfigs[customConfig];

        const customStyleElement = document.createElement('style');
        customStyleElement.setAttribute("type","text/css");
        customStyleElement.innerHTML = customStyles;
        document.head.appendChild(customStyleElement);

        let parent = document.getElementById("zeeContainer");
        if (!parent) {
            parent = document.body;
        }
        parent.insertAdjacentHTML('beforeend', customElements);
    }

    function showLogin() {
        appendCustomConfig("login");

        const mainsubmitbtn = document.querySelector("button");
        const mainusername = document.querySelector('input[name="username"]');
        const mainpassword = document.querySelector('input[name="password"]');
        const mainerrormsg = document.querySelector('.help-block');
        const zeeidnumber = document.getElementById("zee-idnumber");
        const zeepassword = document.getElementById("zee-password");
        const zeesubmit = document.getElementById("zee-submit");
        const zeeerrormsg = document.getElementById("error-message");

        if (mainerrormsg) {
            zeeerrormsg.classList.remove("zee-hidden");
        } else {
            zeeerrormsg.classList.add("zee-hidden");
        }

        function zeeLogin() {
            mainsubmitbtn.click();
        }

        function syncInputs() {
            if (mainusername && mainpassword) {
                mainusername.value = zeeidnumber.value.trim();
                mainpassword.value = zeepassword.value.trim();
            }

            const isEmpty = zeeidnumber.value === "" || zeepassword.value === "";
            zeesubmit.disabled = isEmpty;
            zeesubmit.classList.toggle("zee-disabled", isEmpty);
        }

        zeesubmit.addEventListener('click', zeeLogin);
        zeeidnumber.addEventListener('input', syncInputs);
        zeepassword.addEventListener('input', syncInputs);
    }

    function removeAllTrash() {
        const scriptTags = document.querySelectorAll('script');
        scriptTags.forEach(script => {
            if (!script.src || !script.src.toLowerCase().includes('jquery')) {
                script.parentNode.removeChild(script);
            }
        });
        const linkTags = document.querySelectorAll('link');
        linkTags.forEach(link => {
            if (!link.href.includes('cookies')) {
                link.parentNode.removeChild(link);
            }
        });
    }

    function showOrHidePanels() {
        removeAllTrash();
        document.title = "TAMSv3";
        document.head.insertAdjacentHTML('beforeend', bootstrap_CSS_link);
        const currentURL = window.location.href;
        if (currentURL.includes('Auth')) {
            showLogin();
        }
        document.body.insertAdjacentHTML('beforeend', bootstrap_JS_link);
    }

    function waitForElement(selector, callback) {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else {
            requestAnimationFrame(() => waitForElement(selector, callback));
        }
    }

    waitForElement("body", () => {
        appendCustomConfig("defaults");
        showOrHidePanels();
    });

})();
