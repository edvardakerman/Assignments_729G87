const template = document.createElement("template");
template.innerHTML = `
<style>
ul {
  list-style-type: none;
  padding: 0;

 }

 li {

  width: 65vmin;
  margin: 2px 0;
  height: 6vmin;
  overflow: hidden;
  }

  .active {
    height: 100%;
  }

 button {
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  font-family: Times New Roman;
  padding: 8px;
  width: 100%;
  background-color: rgb(110,124,145) ;
  color: white;
  height : 100%;
  font-size: 20px;
}
.accordion button::before {
  content: "▶︎ ";
  padding-right: 5px;
}
ul div p{
  width: 65vmin;
  margin: 5px auto;
  padding: 5px;
  hegiht: 100%;
}
.accordion button[aria-expanded="true"]::before {
  content: "▼︎ ";
  padding-right: 5px;
}

</style>

<div class="accordion">
  <ul>
  </ul>
</div>

`;

class accordion extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    //creeating and anppending list elements

    this.querySelectorAll("h2").forEach((h2) => {
      const li = document.createElement('li');
      const heading = document.createElement("button");
      heading.classList.add(".heading");
      heading.setAttribute("aria-expanded", "false");
      this.shadowRoot.querySelector("ul").appendChild(li);
      li.appendChild(heading);
      heading.innerHTML = h2.innerHTML;
    });
    let i = 0;
    this.querySelectorAll('div').forEach((div) => {

      const container = document.createElement('div');
      this.shadowRoot.querySelector('ul').children[i].appendChild(container);
      container.innerHTML = div.innerHTML;
      container.hidden = true;
      i++;
    })


  }
  connectedCallback() {
    this.shadowRoot.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        button.parentElement.classList.toggle("active");

        if (button.getAttribute("aria-expanded") == "false") {
          button.setAttribute("aria-expanded", "true");
          button.nextSibling.hidden = false;
        } else {
          button.setAttribute("aria-expanded", "false");
          button.nextSibling.hidden = true;
        }

      });
    });
  }
}

window.customElements.define("accordion-component", accordion);