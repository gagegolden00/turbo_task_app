import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="taskhandler"
export default class extends Controller {
  connect() {
  }

  submitEnd(event){
    if(event.detail.success){
      this.removeModal()
    }
  }

  removeModal(event) {
    console.log("removeModal function triggered ")
    event.preventDefault();
    this.element.closest("turbo-frame").remove();
  }
}
