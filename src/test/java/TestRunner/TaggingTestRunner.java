package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "src/test/java/Feature/Tagging.feature",
        glue = "Steps", // to map feature file and step definition
        dryRun = false, /* default is false,if true , cucumber will only checks that every Step mentioned in the Feature File
                           have corresponding code written in Step Definition file or not*/
        monochrome = true,
        plugin = {
                "pretty", // to generate report in console as written in feature file
                "html:test-output/TaggingTest/HTMLReport", // to generate html report
                "json:test-output/TaggingTest/JSONReport/cucumber.json", // to generate json file report
                "junit:test-output/TaggingTest/XMLReport/cucumber.xml" // to generate xml file report
        },
        strict = true, // default is false, if true, test will fail if step definition is undefined, else test will be ignored
        tags = {"@E2ETest,@RegressionTest"}

)

public class TaggingTestRunner {
}

