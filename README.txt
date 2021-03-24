We are testing JS language simples.

pushing
git init
git add README.txt //or some else, if need to add all files, you can use command: git add .
git commit -m "commit message"
git branch -M alternativeEntry //if you in this branch, you don't need to execute this command
git remote add origin https://github.com/StackBro/JS_Snippets.git //if already exist, you don't need to do this step
AND pushing
git push -u origin main //we have main branch


If you already create you local branch, then you need to pull request, before you are pushing(if you are working not alone in this project)
git pull-> git add -> git commit -> git push


Removing folder in main branch
git rm -r myfolder
git commit -m "myfolder is deleted"