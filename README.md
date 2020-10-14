# Projeto Bombeiros

### Comandos Git

##### Comando Para Clonar
- git clone --single-brach --branch <nome-do-branch> https://github.com/hermino/bombeiro-sos.git
- git status (para visualizar em qual branch está), se estiver na master, prosseguir com os comandos.
- git checkout -b <nome-do-branch>
- git status (para visualizar em qual branch está)
  
##### Comandos Para o Desenvolvimento

Sempre inicie dando um **git pull origin <nome-do-branch>**, verifique as incompatibilidade da versão que está baixando, para a que está na sua máquina.
Feitas as alterações, prossiga com os comandos:
  
- git add * (adiciona todas as mudanças)
- git commit -m <comentário-commit>
- git push origin <nome-do-branch>
  
##### Comandos Auxiliares

- git status
- git remote -v (Mostra o repositório para qual está sendo feito o push)
- git remote add origin https://github.com/hermino/bombeiro-sos.git (Adiciona o repositório para o envio de modificações.
