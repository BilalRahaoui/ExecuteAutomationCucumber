package Steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class LoginSteps {
    WebDriver driver = null;
    public String globalusername = null;

    @Before()
    public void setup() {
        String webdriverPath = "src/main/resources/WebDrivers/chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", webdriverPath);

    }

    @After()
    public void teardown() {
        driver.manage().deleteAllCookies();
        driver.quit();
        driver = null;
    }

    @Given("Open browser")
    public void openBrowser() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @When("Enter the url \"([^\"]*)\"$")
    public void enterTheUrl(String url) {
        driver.get(url);
    }

    @And("Click on My Account link")
    public void clickOnMyAccountLink() {
        WebElement myAccountLink = driver.findElement(By.xpath("//a[contains(text(),'My Account')]"));
        myAccountLink.click();
    }

    @And("Send username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void sendUsernameAsAndPasswordAs(String username, String password) {
        globalusername = username;
        WebElement usernameTextBox = driver.findElement(By.id("username"));
        WebElement passwordTextBox = driver.findElement(By.id("password"));
        usernameTextBox.sendKeys(username);
        passwordTextBox.sendKeys(password);
    }

    @And("Click on LOGIN button")
    public void clickOnLOGINButton() {
        WebElement loginButton = driver.findElement(By.xpath("//input[@value='Login']"));
        loginButton.click();
    }

    /*@Then("User must be successfully redirected to home page")
    public void userMustBeSuccessfullyRedirectedToHomePage() {
        WebElement textToCheck = driver.findElement(By.xpath("//div[@id='body']//p[1]"));
        boolean expectedResult = textToCheck.getText().contains(globalusername);
        Assert.assertTrue("Test failed because text is not visible or not match", expectedResult);
    }*/

    @Then("verify login")
    public void verifyLogin() {
        if (elementIsPresent() != 0) {
            WebElement errorMessage = driver.findElement(By.xpath("//ul[@class='woocommerce-error']"));
            if (errorMessage.getText().contains("Invalid username")) {
                Assert.assertTrue("Invalid username", true);
            }
            else if (errorMessage.getText().contains("The password you entered for the username")) {
                Assert.assertTrue("Invalid password", true);
            }
        }
        else{
            Assert.fail("Test failed,error message in login page should not be visible");
        }
    }


    //Method to calculate number of given element
    public int elementIsPresent() {
        List<WebElement> listOfElements = driver.findElements(By.xpath("//ul[@class='woocommerce-error']"));
        int numberOfElementsFound = listOfElements.size();
        if (numberOfElementsFound == 0) {
            return numberOfElementsFound;
        } else {
            return numberOfElementsFound;
        }
    }
}
