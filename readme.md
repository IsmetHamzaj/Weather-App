#how to use git

nese jemi ne shtepi nese jemi duke perdorur nje pc te re fillimisht duhet me e configuru accountin,me ane te komandave:
    git config --global user.name "emri ne github"
    git config --gloal user.email "someone@example.com"


krijoini fillimisht nje repozitor ne github


E nisim projektin em and te  komandes git init



i selektojme t egjitha fajllat me ane te komandes git add -A
nese doni me dergu vetem nje fajll te caktuar ateher perdorni commanden git add something.js(file name)


nese deshironi me e kontrollu gjendjen e fajllavae qe jan editu ose modifiku (changed)
    git status
pasi qe jemi gati me modifikim e dergojm gjendjen(fotografin e projektit )dhe mesazhin se qfar eshte modifiku


git commin -m "Mesazhi jon"


e lidhim projektin ton lokalisht me repositoryn me ane te komandes 
git add remote origin "linku"

e dergojme projektin me ane te git push origin master