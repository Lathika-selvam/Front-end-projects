package com.employee.automation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class AddEmployeeTest {

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

        assertEquals("Add Employee",
                driver.findElement(By.tagName("h1")).getText());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC002 Verify Name Field
    @Test
    public void verifyNameField() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement name = driver.findElement(By.name("name"));

        assertTrue(name.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC003 Verify Email Field
    @Test
    public void verifyEmailField() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement email = driver.findElement(By.name("email"));

        assertTrue(email.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC004 Verify Department Field
    @Test
    public void verifyDepartmentField() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement department = driver.findElement(By.name("department"));

        assertTrue(department.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC005 Verify Designation Field
    @Test
    public void verifyDesignationField() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement designation = driver.findElement(By.name("designation"));

        assertTrue(designation.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC006 Verify Salary Field
    @Test
    public void verifySalaryField() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement salary = driver.findElement(By.name("salary"));

        assertTrue(salary.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC007 Verify Phone Field
    @Test
    public void verifyPhoneField() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement phone = driver.findElement(By.name("phone"));

        assertTrue(phone.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC008 Verify Gender Dropdown
    @Test
    public void verifyGenderDropdown() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement gender = driver.findElement(By.name("gender"));

        assertTrue(gender.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC009 Verify Employee Type Dropdown
    @Test
    public void verifyEmployeeTypeDropdown() throws Exception {

        WebDriver driver = launchBrowser();

        WebElement employeeType = driver.findElement(By.name("employeeType"));

        assertTrue(employeeType.isDisplayed());

        Thread.sleep(5000);

        driver.quit();
    }

    // TC010 Add Valid Employee
    @Test
    public void addEmployee() throws Exception {

        WebDriver driver = launchBrowser();

        driver.findElement(By.name("name")).sendKeys("Lathika");

        driver.findElement(By.name("email")).sendKeys("lathika@gmail.com");

        driver.findElement(By.name("department")).sendKeys("IT");

        driver.findElement(By.name("designation")).sendKeys("Developer");

        driver.findElement(By.name("salary")).sendKeys("50000");

        driver.findElement(By.name("phone")).sendKeys("9876543210");

        Select gender = new Select(driver.findElement(By.name("gender")));
        gender.selectByVisibleText("Female");

        driver.findElement(By.name("dob")).sendKeys("10-10-2002");

        driver.findElement(By.name("joiningDate")).sendKeys("15-07-2026");

        Select type = new Select(driver.findElement(By.name("employeeType")));
        type.selectByVisibleText("Full Time");

        Thread.sleep(3000);

        driver.findElement(By.xpath("//button[@type='submit']")).click();

        Thread.sleep(6000);

        driver.quit();
    }

}