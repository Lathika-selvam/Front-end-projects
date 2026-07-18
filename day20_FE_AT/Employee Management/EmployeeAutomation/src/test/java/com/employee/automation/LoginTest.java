package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    // Common Browser Launch Method
    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:5173");
        driver.manage().window().maximize();

        return driver;
    }

    // TC001 - Verify Page Title
    @Test
    public void verifyHomePageTitle() throws InterruptedException  {

        WebDriver driver = launchBrowser();

        assertEquals("employee-management", driver.getTitle());

        driver.quit();
    }

    // TC002 - Verify WorkSphere Heading
    @Test
    public void verifyWorkSphereHeading() throws InterruptedException {

        WebDriver driver = launchBrowser();

        WebElement heading = driver.findElement(By.tagName("h2"));

        assertEquals("WorkSphere", heading.getText());

        driver.quit();
    }

    // TC003 - Verify Login Button
    @Test
    public void verifyLoginButtonDisplayed() throws InterruptedException {

        WebDriver driver = launchBrowser();

        WebElement loginButton = driver.findElement(By.xpath("//button[contains(text(),'Login')]"));

        assertTrue(loginButton.isDisplayed());

        Thread.sleep(5000); 
    
        driver.quit();
    }

}