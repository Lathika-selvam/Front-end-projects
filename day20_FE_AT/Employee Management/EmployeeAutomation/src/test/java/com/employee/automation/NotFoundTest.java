package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NotFoundTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        // Invalid URL
        driver.get("http://localhost:5173/abc");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 Verify 404 Page
    @Test
    public void verify404Page() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertEquals("404 - Page Not Found",
                driver.findElement(By.tagName("h1")).getText());

        driver.quit();
    }

    // TC002 Verify Error Message
    @Test
    public void verifyErrorMessage() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertEquals(
                "The page you are looking for doesn't exist.",
                driver.findElement(By.tagName("p")).getText());

        driver.quit();
    }

    // TC003 Verify Heading Displayed
    @Test
    public void verifyHeadingDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.tagName("h1")).isDisplayed());

        driver.quit();
    }

    // TC004 Verify Paragraph Displayed
    @Test
    public void verifyParagraphDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.tagName("p")).isDisplayed());

        driver.quit();
    }

    // TC005 Verify Invalid URL
    @Test
    public void verifyInvalidURL() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.getCurrentUrl().contains("abc"));

        driver.quit();
    }

}