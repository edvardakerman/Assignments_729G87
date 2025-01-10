const template = document.createElement("template");

template.innerHTML = `
    <style>
   .wrapper {
      display: flex;
      flex-flow: row;
      align-items: center;

}

    .toggle {
    width: 2vmin;
    height: 2vmin;
    border: 2px solid black;
    margin: 5px;
    cursor: pointer;


    }

    .toggle-active {
        background-color: lightgreen;
        cursor: pointer;

    }



    </style>
    <div class="wrapper">
        <p>label text</p>
        <div class="toggle" aria-pressed="false"></div>
        </div>`;

    class toggleButton extends HTMLElement {
        constructor() {
        super();
        this.value = 0;
        this.attachShadow({ mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("label");
        }

        connectedCallback() {
            this.shadowRoot.querySelectorAll(".toggle").forEach((elem) => {
                 elem.addEventListener("click", () => {
                  elem.classList.toggle("toggle-active");


                    if (elem.getAttribute("aria-pressed") == "true") {
                      elem.setAttribute("aria-pressed", "false");
                      this.value = 0;
                    } else {
                      elem.setAttribute("aria-pressed", "true");
                      this.value = 1;
                    }


                    const event = new CustomEvent("input", {
                      bubbles: true,
                      detail: { elem: () => this.value },
                    });
                    this.dispatchEvent(event);
                  });
                });
              }
            }

window.customElements.define("toggle-button", toggleButton);