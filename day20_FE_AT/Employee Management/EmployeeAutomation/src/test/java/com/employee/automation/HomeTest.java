package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HomeTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/home");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 Verify Home Page
    @Test
    public void verifyHomePage() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.getCurrentUrl().contains("home"));

        driver.quit();
    }

    // TC002 Verify Hero Heading
    @Test
    public void verifyHeading() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.tagName("h1")).isDisplayed());

        driver.quit();
    }

    // TC003 Verify Badge
    @Test
    public void verifyBadge() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.className("badge")).isDisplayed());

        driver.quit();
    }

    // TC004 Verify View Employees Button
    @Test
    public void verifyViewEmployeesButton() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement button =
                driver.findElement(By.className("primary-btn"));

        assertTrue(button.isDisplayed());

        driver.quit();
    }

    // TC005 Verify Add Employee Button
    @Test
    public void verifyAddEmployeeButton() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        WebElement button =
                driver.findElement(By.className("secondary-btn"));

        assertTrue(button.isDisplayed());

        driver.quit();
    }

    // TC007 Verify Features Section
    @Test
    public void verifyFeaturesSection() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.className("features")).isDisplayed());

        driver.quit();
    }

    // TC008 Verify Feature Cards
    @Test
    public void verifyFeatureCards() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertEquals(3,
                driver.findElements(By.className("feature-card")).size());

        driver.quit();
    }

    // TC010 Verify Glass Cards
    @Test
    public void verifyGlassCards() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertEquals(3,
                driver.findElements(By.className("glass-card")).size());

        driver.quit();
    }
}