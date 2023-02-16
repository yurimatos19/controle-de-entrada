const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const form = document.querySelector('form');
const imagemInput = document.getElementById('imagem');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(err => {
        console.error('Erro ao acessar a câmera: ', err);
    });

form.addEventListener('submit', event => {
    event.preventDefault();
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imagem = canvas.toDataURL();
    imagemInput.value = imagem;
    fetch('/registrar', {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                alert('Registro salvo com sucesso!');
            } else {
                alert('Erro ao salvar o registro.');
            }
        })

         .catch(err => {
            console.error('Erro ao salvar o registro: ', err);
        });
});

