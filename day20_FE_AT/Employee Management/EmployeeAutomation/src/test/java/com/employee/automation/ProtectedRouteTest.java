package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ProtectedRouteTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/dashboard");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 - Verify user is redirected to Login page without login
    @Test
    public void verifyRedirectToLogin() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.getCurrentUrl().contains("localhost:5173/"));

        driver.quit();
    }

    // TC002 - Verify Login page is displayed
    @Test
    public void verifyLoginPageDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.tagName("h3")).getText().equals("Login"));

        driver.quit();
    }

    // TC003 - Verify Email field exists
    @Test
    public void verifyEmailField() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.cssSelector("input[type='email']")).isDisplayed());

        driver.quit();
    }

    // TC004 - Verify Password field exists
    @Test
    public void verifyPasswordField() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.cssSelector("input[type='password']")).isDisplayed());

        driver.quit();
    }

    // TC005 - Verify Login button exists
    @Test
    public void verifyLoginButton() throws Exception {

        WebDriver driver = launchBrowser();

        Thread.sleep(3000);

        assertTrue(driver.findElement(By.xpath("//button[text()='Login']")).isDisplayed());

        driver.quit();
    }
}