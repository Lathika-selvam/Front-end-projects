package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SearchTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/employees");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 Verify Search Box
    @Test
    public void verifySearchBoxDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement search =
                driver.findElement(By.cssSelector("input[type='text']"));

        assertTrue(search.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC002 Search Valid Employee
    @Test
    public void searchValidEmployee() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement search =
                driver.findElement(By.cssSelector("input[type='text']"));

        search.sendKeys("John");

        Thread.sleep(5000);

        driver.quit();
    }

    // TC003 Search Invalid Employee
    @Test
    public void searchInvalidEmployee() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement search =
                driver.findElement(By.cssSelector("input[type='text']"));

        search.sendKeys("XYZ123");

        Thread.sleep(5000);

        driver.quit();
    }

    // TC004 Empty Search
    @Test
    public void emptySearch() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement search =
                driver.findElement(By.cssSelector("input[type='text']"));

        search.clear();

        Thread.sleep(5000);

        driver.quit();
    }

    // TC005 Clear Search
    @Test
    public void clearSearch() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement search =
                driver.findElement(By.cssSelector("input[type='text']"));

        search.sendKeys("Employee");

        Thread.sleep(2000);

        search.sendKeys(Keys.CONTROL + "a");

        search.sendKeys(Keys.DELETE);

        Thread.sleep(5000);

        driver.quit();
    }

}