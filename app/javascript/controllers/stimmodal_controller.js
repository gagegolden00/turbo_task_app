import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {

  static targets =["modal"]
  connect() {
    console.log("Connected to modal controller")

  }

  /*

  this will be used in a different controller not for creating users or logging in
    its more for removing the form for creating tasks

  submitEnd(event){
    if(event.detail.success){
      this.removeModal()
    }
  }
  */

  removeModal(event) {
    console.log("removeModal function triggered ")
    event.preventDefault();
    this.element.closest("turbo-frame").remove();
  }
}
