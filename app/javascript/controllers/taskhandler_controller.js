import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="taskhandler"
export default class extends Controller {
  connect() {
  }

  submitEnd(e){
    if(e.detail.success){
      this.removeModal()
    }
  }
  removeModal(){
    this.element.remove()
  }
}
