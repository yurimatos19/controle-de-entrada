<!DOCTYPE html>
<html>
  <head>
    <title>Controle de entrada</title>
    <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/style.css') }}">
  </head>
  <body>
    <form method="POST" enctype="multipart/form-data">
      <h1>Controle de entrada</h1>
      <label for="nome">Nome:</label>
      <input type="text" name="nome" id="nome" required>
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" id="empresa" required>
      <canvas id="canvas" width="640" height="480"></canvas>
      <img id="imagem" src="#" alt="Imagem da câmera">
      <button type="submit">Registrar entrada</button>
      <input type="hidden" name="imagem" id="imagem-input">
    </form>
    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </body>
</html>
