/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
  alert('works3');
  $(function() {
    $('#text-editor').click(function () {
      $("#text-editor").cleditor({
      });
    });

// Get the div element that will serve as the drop target.
var dropZoneOne = document.querySelector('.drop-target');

// Get the draggable elements.
var dragElements = document.querySelectorAll('#drag-cnt');

// Track the element that is being dragged.
var elementDragged = null;

console.log(dropZoneOne);
/////////////////////////////

for (var i = 0; i < dragElements.length; i++) {

  // Event Listener for when the drag interaction starts.
  dragElements[i].addEventListener('dragstart', function(e) {
    console.log('drag works');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', '<div>element dragged</div>');
    elementDragged = this;
  });

  // Event Listener for when the drag interaction finishes.
  dragElements[i].addEventListener('dragend', function(e) {
    elementDragged = null;
  });

};
//////////////////////////////////////
dropZoneOne.addEventListener('dragover', function(e) {
  console.log('dragover works');
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
});
// Event Listener for when the dragged element enters the drop zone.
dropZoneOne.addEventListener('dragenter', function(e) {
  console.log('dragenter works');
  this.className = "over";
});

// Event Listener for when the dragged element leaves the drop zone.
dropZoneOne.addEventListener('dragleave', function(e) {
  console.log('dragleave works');
  this.className = "";
});
dropZoneOne.addEventListener('drop', function(e) {
  console.log('drop works');
  if (e.preventDefault) e.preventDefault(); 
  if (e.stopPropagation) e.stopPropagation();

  this.className = "";
  this.innerHTML = e.dataTransfer.getData('text');

  return false;
});
$('#').html('<div class="drop-target" style="width:30%; height:200px;border:1px solid red" id="text-editor">Hello world</div>');
  });    
})(jQuery);