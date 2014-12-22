/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editors.
 */

(function ($) {
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
//////////////////////////////////////
      $('.path-firstpage').on('dragover', '.drop-target', function (e) {
        console.log('dragover works');
        if (e.preventDefault) {
          e.preventDefault();
        }

        return false;
      });
// Event Listener for when the dragged element enters the drop zone.
      $('.path-firstpage').on('dragenter', '.drop-target', function (e) {
        console.log('dragenter works');
        $(this).html('Drop Here');
      });

// Event Listener for when the dragged element leaves the drop zone.
      $('.path-firstpage').on('dragleave', '.drop-target', function (e) {
        console.log('dragleave works');
        $(this).html('');
      });
      $('.path-firstpage').on('drop', '.drop-target', function (e) {  
        console.log('drop works');
        if (e.preventDefault)
          e.preventDefault();
        if (e.stopPropagation)
          e.stopPropagation();
        this.innerHTML = '<div class="drop-target no-cnt" style="height:10px"></div><div>New Content</div><div class="drop-target no-cnt" style="height:10px"></div>';
        $(this).removeClass('drop-target');
        return false;
      });
$('.path-firstpage').on('click', '.click-test', function (e) {
  alert('works');
});
$('.addclick').click(function(){
  $('.click-cnt').append('<div class="click-test">click</div>');
});
  });
})(jQuery);