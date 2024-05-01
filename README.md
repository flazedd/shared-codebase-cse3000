# shared-codebase-cse3000

This hosts all the java classes and test suites for our research

Current structure is that if you want to include some classes test suites 
from a project you make a folder for it in both /src/main/java and /src/test/java.
So if you want to add from '6_jnfe' you swap the name and number to 
get 'jnfe_6', since java packages cannot start with a number.

Then if there is a class called 'X.java' (from the evosuite corpus) in /src/main/java, 
then i've also added XTest.java (existing test suite from the corpus) 
and XTest_Improved.java (improved test suite from llm, will be empty for now) in 
/src/test/java since i need this for my research approach.

Build.gradle also contains the pitest plugin which can be run to get mutation score.

You will need Gradle 8.7 installed to run the repo.

Feel free to propose/make changes to this repo. 


