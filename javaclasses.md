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


1_tullibee\src\main\java\com\ib\client\Util.java cc 9
5_templateit\src\main\java\org\templateit\OpMatcher.java cc 10
7_sfmis\src\main\java\com\hf\sfm\crypt\Base64.java cc 8
10_water-simulator\src\main\java\simulator\util\Discrete.java cc 7
11_imsmart\src\main\java\com\imsmart\servlet\HTMLFilter.java cc 8
15_beanbin\src\main\java\net\sourceforge\beanbin\search\WildcardSearch.java cc 10