package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "src/test/java/Feature",
        glue = "Steps",
        dryRun = false,
        monochrome = true,
        plugin = {"pretty","html:test-output/HTMLReport","json:test-output/JSONReport/cucumber.json","junit:test-output/XMLReport/cucumber.xml"}

)

public class TestRunner {
}
