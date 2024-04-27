# fullcycle_1_docker

- Instalação docker nativo: https://medium.com/@habbema/guia-de-instala%C3%A7%C3%A3o-do-docker-no-wsl-2-com-ubuntu-22-04-9ceabe4d79e8
- Integração do WSL com github: https://www.youtube.com/watch?v=rQgp84UUuG0&ab_channel=NetDevOpsJourney

----------------------------------------

Para gerar build de uma imagem com Dockerfile local: 
[ docker build -t "NOME/DO/PROJETO" . ]
exemplo: docker build -t jonathabot/laravel

Para rodar um container de uma imagem 
[ docker run --rm -d --name "NOMECONTAINER" -p "PORTA:PORTA" --host="0.0.0.0" --port="PORTA"]
exemplo: docker run --rm -d --name laravel -p 8001:8001 jonathabot/laravel --host=0.0.0.0 --port=8001