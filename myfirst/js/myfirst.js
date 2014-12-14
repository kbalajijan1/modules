/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
  alert('works4');
  $(function () {
    $('#text-editor').click(function () {
      $("#text-editor").cleditor({
      });
    });

// Get the div element that will serve as the drop target.
    var dropZoneOne = document.querySelectorAll('.drop-target');

// Get the draggable elements.
    var dragElements = document.querySelectorAll('#drag-cnt');

// Track the element that is being dragged.
    var elementDragged = null;

    console.log(dropZoneOne);
/////////////////////////////

    for (var i = 0; i < dragElements.length; i++) {

      // Event Listener for when the drag interaction starts.
      dragElements[i].addEventListener('dragstart', function (e) {
        console.log('drag works');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', '<div>element dragged</div>');
        elementDragged = this;
      });

      // Event Listener for when the drag interaction finishes.
      dragElements[i].addEventListener('dragend', function (e) {
        elementDragged = null;
      });

    };

      $('.drop-target').on('dragover', function (e) {
        console.log('dragover works');
        if (e.preventDefault) {
          e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';

        return false;
      });    
//////////////////////////////////////
//    for (var i = 0; i < dropZoneOne.length; i++) {
//      dropZoneOne[i].addEventListener('dragover', function (e) {
//        console.log('dragover works');
//        if (e.preventDefault) {
//          e.preventDefault();
//        }
//        e.dataTransfer.dropEffect = 'move';
//
//        return false;
//      });
//// Event Listener for when the dragged element enters the drop zone.
//      dropZoneOne[i].addEventListener('dragenter', function (e) {
//        console.log('dragenter works');
//        this.className = "over";
//        $(this).html('Drop Here');
//      });
//
//// Event Listener for when the dragged element leaves the drop zone.
//      dropZoneOne[i].addEventListener('dragleave', function (e) {
//        console.log('dragleave works');
//        this.className = "";
//        $(this).html('');
//      });
//      dropZoneOne[i].addEventListener('drop', function (e) {
//        console.log('drop works');
//        if (e.preventDefault)
//          e.preventDefault();
//        if (e.stopPropagation)
//          e.stopPropagation();
//
//        this.className = "";
//        this.innerHTML = '<div class="drop-target no-cnt"></div><div>New Content</div><div class="drop-target no-cnt"></div>';
//        return false;
//      });
//    }
  });
})(jQuery);