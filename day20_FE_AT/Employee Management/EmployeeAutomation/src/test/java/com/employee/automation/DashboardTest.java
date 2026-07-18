package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class DashboardTest {

    // Browser Launch
    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/dashboard");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 - Verify Dashboard Page Title
    @Test
    public void verifyDashboardPageTitle() throws Exception {

        WebDriver driver = launchBrowser();

        assertEquals("employee-management", driver.getTitle());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC002 - Verify Dashboard Heading
    @Test
    public void verifyDashboardHeading() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement heading = driver.findElement(By.tagName("h1"));

        assertEquals("Dashboard", heading.getText());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC003 - Verify Welcome Message
    @Test
    public void verifyWelcomeMessage() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement message = driver.findElement(By.tagName("p"));

        assertTrue(message.getText().contains("Welcome back"));

        Thread.sleep(5000);

        driver.quit();
    }

    // TC004 - Verify Dashboard Cards
    @Test
    public void verifyDashboardCardsDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement cards = driver.findElement(By.className("dashboard-cards"));

        assertTrue(cards.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC005 - Verify Current URL
    @Test
    public void verifyDashboardURL() throws Exception {

        WebDriver driver = launchBrowser();

        assertTrue(driver.getCurrentUrl().contains("dashboard"));

        Thread.sleep(5000);

        driver.quit();
    }

}