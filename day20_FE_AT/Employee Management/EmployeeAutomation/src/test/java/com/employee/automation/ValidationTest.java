package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class ValidationTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/add-employee");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 Verify Add Employee Page
    @Test
    public void verifyAddEmployeePage() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.getCurrentUrl().contains("add-employee"));

        Thread.sleep(5000);

        driver.quit();
    }

    // TC002 - Empty Form Validation
@Test
public void emptyFormValidation() throws Exception {

    WebDriver driver = launchBrowser();

    JavascriptExecutor js = (JavascriptExecutor) driver;

    WebElement submitBtn =
            driver.findElement(By.xpath("//button[@type='submit']"));

    // Scroll to button
    js.executeScript("arguments[0].scrollIntoView(true);", submitBtn);

    Thread.sleep(1000);

    // Click using JavaScript
    js.executeScript("arguments[0].click();", submitBtn);

    Thread.sleep(3000);

    WebElement name =
            driver.findElement(By.name("name"));

    assertTrue(name.getAttribute("validationMessage").length() > 0);

    Thread.sleep(3000);

    driver.quit();
}
   // TC003 Invalid Name Validation
@Test
public void invalidNameValidation() throws Exception {

    WebDriver driver = launchBrowser();

    Thread.sleep(2000);

    driver.findElement(By.name("name")).sendKeys("12345");

    WebElement submit =
            driver.findElement(By.xpath("//button[@type='submit']"));

    JavascriptExecutor js = (JavascriptExecutor) driver;

    js.executeScript("arguments[0].scrollIntoView(true);", submit);

    Thread.sleep(1000);

    js.executeScript("arguments[0].click();", submit);

    Thread.sleep(3000);

    driver.quit();
}

// TC004 Empty Email Validation
@Test
public void emptyEmailValidation() throws Exception {

    WebDriver driver = launchBrowser();

    Thread.sleep(2000);

    driver.findElement(By.name("name")).sendKeys("Lathika");

    WebElement submit =
            driver.findElement(By.xpath("//button[@type='submit']"));

    JavascriptExecutor js = (JavascriptExecutor) driver;

    js.executeScript("arguments[0].scrollIntoView(true);", submit);

    Thread.sleep(1000);

    js.executeScript("arguments[0].click();", submit);

    Thread.sleep(3000);

    driver.quit();
}

// TC005 Invalid Phone Validation
@Test
public void invalidPhoneValidation() throws Exception {

    WebDriver driver = launchBrowser();

    Thread.sleep(2000);

    driver.findElement(By.name("name")).sendKeys("Lathika");
    driver.findElement(By.name("email")).sendKeys("lathika@gmail.com");
    driver.findElement(By.name("department")).sendKeys("IT");
    driver.findElement(By.name("designation")).sendKeys("Developer");
    driver.findElement(By.name("salary")).sendKeys("50000");
    driver.findElement(By.name("phone")).sendKeys("123");

    WebElement submit =
            driver.findElement(By.xpath("//button[@type='submit']"));

    JavascriptExecutor js = (JavascriptExecutor) driver;

    js.executeScript("arguments[0].scrollIntoView(true);", submit);

    Thread.sleep(1000);

    js.executeScript("arguments[0].click();", submit);

    Thread.sleep(3000);

    driver.quit();
}

    // TC006 Invalid Salary
    @Test
    public void invalidSalaryValidation() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        driver.findElement(By.name("salary")).sendKeys("500");

        Thread.sleep(3000);

       WebElement submit = driver.findElement(By.xpath("//button[@type='submit']"));

JavascriptExecutor js = (JavascriptExecutor) driver;

js.executeScript("arguments[0].click();", submit);
    }

    // TC007 Name Field Display
    @Test
    public void verifyNameField() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement name = driver.findElement(By.name("name"));

        assertTrue(name.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC008 Email Field Display
    @Test
    public void verifyEmailField() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement email = driver.findElement(By.name("email"));

        assertTrue(email.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }
}
   