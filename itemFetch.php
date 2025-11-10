<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Item</title>
</head>
<body>
    <?php
        $imagePathsFile = file_get_contents("./imagePaths.json");
        $imagePathsFileObject = json_decode($imagePathsFile);

        for ($i=0; $i < count($imagePathsFileObject->paths); $i++) {
            // for ($j=0; $j < count($imagePathsFileObject->paths[$i]); $j++) {
                ?>
                <div class="card">
                    <img src=" <?php echo ($imagePathsFileObject->paths[$i][0][0]) ?> " alt="Product">
                    <div class="cardContent">
                        <span class="productName"><?php 
                            echo ($imagePathsFileObject->paths[$i][0][1]); 
                        ?><span> <?php 
                            echo ($imagePathsFileObject->paths[$i][0][3]);
                        ?> </span></span>
                        <span class="productInfoActions">
                            <span class="price"> <?php 
                                echo ($imagePathsFileObject->paths[$i][0][2]) 
                            ?> </span>
                            <button class="purchaseButton">Buy</button>
                        </span>
                    </div>
                </div>        
                <?php   
            // }
        }
    ?>
</body>
</html>