package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "src/test/java/Feature",
        glue = "Steps", // to map feature file and step definition
        dryRun = false, /* default is false,if true , cucumber will only checks that every Step mentioned in the Feature File
                           have corresponding code written in Step Definition file or not*/
        monochrome = true, // default is false,it's used to add monochrome to console 'Need this if you use Eclipse IDE'
        plugin = {
                "pretty", // to generate report in console as written in feature file
                "html:test-output/HTMLReport", // to genrate html report
                "json:test-output/JSONReport/cucumber.json", // to genrate json file report
                "junit:test-output/XMLReport/cucumber.xml" // to genrate xml file report
        },
        strict = true // default is false, if true, test will fail if step definition is undefined, else test will be ignored

)

public class TestRunner {
}
