### List of relative paths of Java classes
#### Path followed by cyclomatic complexity
Cyclomatic complexity is calculated like this:
Calculate cyclomatic complexity in Java
In modern parlance, especially for the Java developer, we can simplify the McCabe cyclomatic complexity metric calculation with the following rules:

1. Assign one point to account for the start of the method
2. Add one point for each conditional construct, such as an "if" condition
3. Add one point for each iterative structure
4. Add one point for each case or default block in a switch statement
5. Add one point for any additional boolean condition, such as the use of && or ||
6. With exceptions, you can add each throws, throw, catch or finally block as a single point when calculating the McCabe cyclomatic complexity metric.


1. 1_tullibee\src\main\java\com\ib\client\Util.java cc 9
2. 5_templateit\src\main\java\org\templateit\OpMatcher.java cc 10
3. 7_sfmis\src\main\java\com\hf\sfm\crypt\Base64.java cc 8
4.  
5. 11_imsmart\src\main\java\com\imsmart\servlet\HTMLFilter.java cc 8
6. 15_beanbin\src\main\java\net\sourceforge\beanbin\search\WildcardSearch.java cc 10
7. 
8. 
9. 24_saxpath\src\main\java\saxpath\Axis.java cc 14
10. 1_tullibee\src\main\java\com\ib\client\Contract.java
11. 33_javaviewcontrol\src\main\java\com\pmdesigns\jvc\tools\Base64Coder.java cc 14
12. 33_javaviewcontrol\src\main\java\com\pmdesigns\jvc\tools\HtmlEncoder.java cc 11

(Added by Adam)
-	35_corina\src\main\java\corina\util\NaturalSort.java
-	35_corina\src\main\java\corina\util\Sort.java
-	35_corina\src\main\java\corina\util\StringComparator.java
-	35_corina\src\main\java\corina\util\StringUtils.java
-	
-	36_schemaspy\src\main\java\net\sourceforge\schemaspy\util\LogFormatter.java
-	36_schemaspy\src\main\java\net\sourceforge\schemaspy\util\PasswordReader.java
-	36_schemaspy\src\main\java\net\sourceforge\schemaspy\util\Version.java
-	
-	
-	

not included for some reason:
10_water-simulator\src\main\java\simulator\util\Discrete.java cc 7
19_jmca\src\main\java\com\soops\CEN4010\JMCA\JParser\JavaCharStream.java cc 16
22_byuic\src\main\java\com\yahoo\platform\yui\compressor\CssCompressor.java cc 23
32_httpanalyzer\src\main\java\httpanalyzer\Password.java cc 17
36_schemaspy\src\main\java\net\sourceforge\schemaspy\util\Inflection.java
38_javabullboard\src\main\java\framework\util\FileUtils.java
38_javabullboard\src\main\java\framework\util\ObejctUtils.java
44_summa\src\main\java\org\apache\lucene\util\ChunkedLongArray.java


note about jar files:
7: only base64.java in there
15: only WilcardSearch.java
35: only 4 files
36: only 2 files
66 only commandline.java in there

how i generated the .jar files example:
cd 1_tullibee/
mkdir out
for /r ./src/main/java %f in (*.java) do javac -d ./out -cp "./lib/*" %f
jar cf 1_tullibee.jar -C out .
