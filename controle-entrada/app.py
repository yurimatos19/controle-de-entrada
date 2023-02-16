from flask import Flask, render_template, request
import base64

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registrar', methods=['POST'])
def registrar():
    nome = request.form['nome']
    empresa = request.form['empresa']
    imagem_base64 = request.form['imagem']
    imagem_bytes = base64.b64decode(imagem_base64.split(',')[1])
    with open('imagens/{}.png'.format(nome), 'wb') as f:
        f.write(imagem_bytes)
    with open('registros.txt', 'a') as f:
        f.write('{} - {}\n'.format(nome, empresa))
    return 'Registro salvo com sucesso!'

if __name__ == '__main__':
    app.run(debug=True)
