package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class EmployeesTest {

    // Browser Launch
    public WebDriver launchBrowser() {

        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:5173/employees");

        driver.manage().window().maximize();

        return driver;
    }

    // TC001 - Verify Employees Page Title
    @Test
    public void verifyEmployeesPageTitle() throws Exception {

        WebDriver driver = launchBrowser();

        assertEquals("employee-management", driver.getTitle());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC002 - Verify Employees Heading
    @Test
    public void verifyEmployeesHeading() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement heading = driver.findElement(By.tagName("h1"));

        assertEquals("Employees", heading.getText());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC003 - Verify Search Box Displayed
    @Test
    public void verifySearchBoxDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement searchBox = driver.findElement(By.className("search-box"));

        assertTrue(searchBox.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC004 - Verify Employee Table Displayed
    @Test
    public void verifyEmployeeTableDisplayed() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement table = driver.findElement(By.className("employee-table-container"));

        assertTrue(table.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC005 - Verify Employees URL
    @Test
    public void verifyEmployeesURL() throws Exception {

        WebDriver driver = launchBrowser();

        assertTrue(driver.getCurrentUrl().contains("employees"));

        Thread.sleep(5000);

        driver.quit();
    }

}
