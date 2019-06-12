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

public class LoginSteps {
    WebDriver driver = null;
    @Before()
    public void setup() {
        String webdriverPath = "src/main/resources/WebDrivers/chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", webdriverPath);

    }

    @Given("Open browser")
    public void openBrowser() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @After()
    public void teardown(){
        driver.manage().deleteAllCookies();
        driver.quit();
        driver = null;
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

    @And("Send registered username and password")
    public void sendRegisteredUsernameAndPassword() {
        String userName = "rahaoui.bilalma@gmail.com";
        String password = "Testing^^password@12456#";
        WebElement usernameTextBox = driver.findElement(By.id("username"));
        WebElement passwordTextBox = driver.findElement(By.id("password"));
        usernameTextBox.sendKeys(userName);
        passwordTextBox.sendKeys(password);
    }

    @And("Click on LOGIN button")
    public void clickOnLOGINButton() {
        WebElement loginButton = driver.findElement(By.xpath("//input[@value='Login']"));
        loginButton.click();
    }

    @Then("User must be successfully redirected to home page")
    public void userMustBeSuccessfullyRedirectedToHomePage() {
        WebElement textToCheck = driver.findElement(By.xpath("//div[@id='body']//p[2]"));
        boolean expectedResult = textToCheck.getText().contains("account dashboard");
        Assert.assertTrue("Test failed because text is not visible or not match", expectedResult);

    }
}
