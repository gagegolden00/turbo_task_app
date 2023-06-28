import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="messagehandler"
export default class extends Controller {
  connect() {
    this.hideMessages = this.hideMessages.bind(this);
    document.addEventListener("click", this.hideMessages);
  }

  disconnect() {
    document.removeEventListener("click", this.hideMessages);
  }

  hideMessages(event) {
    const target = event.target;

    if (target.tagName === "A" || target.tagName === "BUTTON") {
      const noticeMessage = this.element.querySelector(".notice");
      const alertMessage = this.element.querySelector(".alert");

      if (noticeMessage) {
        noticeMessage.style.display = "none";
      }

      if (alertMessage) {
        alertMessage.style.display = "none";
      }
    }
  }
}
