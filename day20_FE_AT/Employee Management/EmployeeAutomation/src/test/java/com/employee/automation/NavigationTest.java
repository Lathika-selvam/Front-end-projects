package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class NavigationTest {

    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 - Verify Home Navigation
    @Test
    public void verifyHomeNavigation() throws Exception {

        WebDriver driver = launchBrowser();

        driver.findElement(By.linkText("Home")).click();

        Thread.sleep(3000);

        assertEquals("WorkSphere",
                driver.findElement(By.tagName("h2")).getText());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC002 - Verify Dashboard Navigation
    @Test
    public void verifyDashboardNavigation() throws Exception {

        WebDriver driver = launchBrowser();

        driver.findElement(By.linkText("Dashboard")).click();

        Thread.sleep(3000);

        assertEquals("Dashboard",
                driver.findElement(By.tagName("h1")).getText());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC003 - Verify Employees Navigation
    @Test
    public void verifyEmployeesNavigation() throws Exception {

        WebDriver driver = launchBrowser();

        driver.findElement(By.linkText("Employees")).click();

        Thread.sleep(3000);

        assertEquals("Employees",
                driver.findElement(By.tagName("h1")).getText());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC004 - Verify Add Employee Navigation
    @Test
    public void verifyAddEmployeeNavigation() throws Exception {

        WebDriver driver = launchBrowser();

        driver.findElement(By.linkText("Add Employee")).click();

        Thread.sleep(3000);

        assertTrue(driver.getCurrentUrl().contains("add-employee"));

        Thread.sleep(5000);

        driver.quit();
    }

    // TC005 - Verify Navbar Display
    @Test
    public void verifyNavbarDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        assertTrue(driver.findElement(By.className("navbar")).isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

}
