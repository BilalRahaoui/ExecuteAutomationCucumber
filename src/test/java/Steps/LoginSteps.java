package Steps;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Map;

public class LoginSteps {
    private WebDriver driver = null;
    private String globalusername = null;
/*
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
    }*/

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



    /*@And("Send username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void sendUsernameAsAndPasswordAs(String username, String password) {
        globalusername = username;
        WebElement usernameTextBox = driver.findElement(By.id("username"));
        WebElement passwordTextBox = driver.findElement(By.id("password"));
        usernameTextBox.sendKeys(username);
        passwordTextBox.sendKeys(password);
    }

     */


    @And("Click on LOGIN button")
    public void clickOnLOGINButton() {
        WebElement loginButton = driver.findElement(By.xpath("//input[@value='Login']"));
        loginButton.click();
    }

    /*
        @Then("User must be successfully redirected to home page")
        public void userMustBeSuccessfullyRedirectedToHomePage() {
            WebElement textToCheck = driver.findElement(By.xpath("//div[@id='body']//p[1]"));
            boolean expectedResult = textToCheck.getText().contains(globalusername);
            Assert.assertTrue("Test failed because text is not visible or not match", expectedResult);
        }
        */

    //Login using Data table with header

    @And("Send username and password")
    public void sendUsernameAndPassword(DataTable table) {
        WebElement usernameTextBox = driver.findElement(By.id("username"));
        WebElement passwordTextBox = driver.findElement(By.id("password"));
        List<Map<String, String>> data = table.asMaps(String.class, String.class);
        usernameTextBox.sendKeys(data.get(0).get("username"));
        passwordTextBox.sendKeys(data.get(0).get("password"));

    }

    @Then("verify login")
    public void verifyLogin() {
        if (elementIsPresent() != 0) {
            WebElement errorMessage = driver.findElement(By.xpath("//ul[@class='woocommerce-error']"));
            if (errorMessage.getText().contains("Invalid username")) {
                Assert.assertTrue("Invalid username", true);
            } else if (errorMessage.getText().contains("The password you entered for the username")) {
                Assert.assertTrue("Invalid password", true);
            }
        } else {
            Assert.fail("Test failed,login should not pass with invalid data!");
        }
    }


    //Method to calculate number of given element
    private int elementIsPresent() {
        List<WebElement> listOfElements = driver.findElements(By.xpath("//ul[@class='woocommerce-error']"));
        return listOfElements.size();
    }


}