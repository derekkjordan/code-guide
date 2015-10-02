<?php

class ExampleClass extends SomeOtherClass
{
    public $name        = 'ExampleClass';
    protected $_type    = 'Example';
    private $__secret   = '12345';

    public function publicMethod($param1 = '', $param2 = 0)
    {
        // 
    }

    protected function _protectedMethod($param1 = array())
    {
        // 
    }

    private function __privateMethod($param1 = null)
    {
        // 
    }
}

class ExampleController extends AppController
{
    // controllers must have underscored methods per CakePHP convention
    public function url_action()
    {
        //
    }
}

?>