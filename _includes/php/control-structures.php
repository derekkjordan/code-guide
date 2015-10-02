<?php

    // if/elseif/else
    if ($expr1)
    {
        // if body
    }
    elseif ($expr2)
    {
        // elseif body
    }
    else
    {
        // else body
    }


    // switch, case
    switch ($expr) {
        case 0:
            echo 'First case, with a break';
            break;
        case 1:
            echo 'Second case, which falls through';
            // no break
        case 2:
        case 3:
        case 4:
            echo 'Third case, return instead of break';
            return;
        default:
            echo 'Default case';
            break;
    }


    // while, do while
    while ($expr)
    {
        // structure body
    }
 
    do
    {
        // structure body
    }
    while ($expr)


    // for
    for ($i = 0; $i < 10; $i++)
    {
        // for body
    }


    // foreach
    foreach ($iterable as $key => $value)
    {
        // foreach body
    }

    // try, catch
    try
    {
        // try body
    }
    catch (FirstExceptionType $e)
    {
        // catch body
    }
    catch (SecondExceptionType $e)
    {
        // catch body
    }
