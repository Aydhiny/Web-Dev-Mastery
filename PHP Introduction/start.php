<html>

<head>
    <title>My First PHP Page</title>
</head>

<body>
    <?php

    //ECHO komanda

    echo "Hello World!";

    //Variable

    $name = 'John';
    $age = 25;
    echo $name;

    //Konstante

     define("MSG", " Hi SoloLearners!", false);
        echo MSG;

        //Strings

         $string1 = "Hello world!"; //double quotes
         $string2 = 'Hello world!';  //single quotes

         //Funkcije i scope varijabli

         $name = 'David';
         function getName() {
            global $name;
                echo $name;
  }
        getName();
    ?>
</body>
</html>