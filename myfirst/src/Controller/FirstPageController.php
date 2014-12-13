<?php

/**
 * @file
 * Contains \Drupal\example\Controller\ExampleController.
 */

namespace Drupal\myfirst\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Provides route responses for the Example module.
 */
class FirstPageController extends ControllerBase {

  /**
   * Returns a simple page.
   *
   * @return array
   *   A simple renderable array.
   */
  public function firstPage() {
    drupal_set_message('workds');
//    $element['#attached']['js'] =  array(
//      array(
//        'data' => drupal_get_path('module', 'myfirst') . '/cleditor/js/jquery.cleditor.min.js',        
//        ),
//      );
    _drupal_add_css(drupal_get_path('module', 'myfirst') . '/cleditor/css/jquery.cleditor.css');
    _drupal_add_js(drupal_get_path('module', 'myfirst') . '/cleditor/js/jquery.cleditor.min.js');
    _drupal_add_js(drupal_get_path('module', 'myfirst') . '/js/myfirst.js');    
    
    $form['textarea'] = array(
      '#markup' => '<textarea id="text-editor">Hello world</textarea>',
    );
//    $form['drop_cnt'] = array(
//      '#markup' => '<div id="drop-target" style="width:30%; height:200px;border:1px solid red" id="text-editor">Hello world</div>',
//    ); 
    $form['drop_cnt'] = array(
      '#markup' => '<div class="inner-html"></div>',
    );     
    $form['draggable_div'] = array(
      '#markup' => '<div draggable="true" id="drag-cnt">Text</div>'
    );    
    
    return $form;
  }

}

?>