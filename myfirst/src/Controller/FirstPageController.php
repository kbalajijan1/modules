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
    //_drupal_add_js(drupal_get_path('module', 'myfirst') . '/js/myfirst.js');    
    
    $form['drop_cnt'] = array(
      '#markup' => '<script src="'. drupal_get_path('module', 'myfirst') . '/js/myfirst.js' .'"></script><div id="text-editor">',
    ); 
    $form['drop_cnt_inner'] = array(
      '#markup' => '<div style="width:300px; height:150px; border: 1px solid red"><div class="drop-target no-cnt" style="height:10px"></div>'
      . '<div>Drop content</div>'
      . '<div class="drop-target no-cnt" style="height:10px"></div></div>',
    );     
    $form['draggable_div'] = array(
      '#markup' => '<div draggable="true" id="drag-cnt">Text</div>'
    );    
    $form['click_test'] = array(
       '#markup' => '<div class="click-cnt">
      <div class="click-test">click</div>
      </div><div class="addclick">Add Click</div>',
    );
     return $form;
  }

}

?>