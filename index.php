<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geolocalización</title>
    <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.min.js'></script>
    <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.css' type='text/css' />
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">


</head>
<body>

    <div id="map"></div>  
    <pre id='coordenadas'></pre>
    <div type="button" class="users" data-open="modalUsers"></div>

    <div class="modal" id="modalUsers" data-animation="slideModal">
        <div class="modalContent">
            <div class="modalTitle">
                <h2>Lista de Usuarios</h2>
            </div>
            <div class="content"> 
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Última conexión</th>
                    </tr>   
                    <tr class="information">
                        <th>1</th>
                        <th>Kevin Guzmán</th>
                        <th>rkguzman@microformas.com.mx</th>
                        <th>Última conexión</th>
                    </tr>  
                    
                </table>
            </div>
        </div>
    </div>
  
</body>
<script src="static/js/main.js"></script>
</html>


